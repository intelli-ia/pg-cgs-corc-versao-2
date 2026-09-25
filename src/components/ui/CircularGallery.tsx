"use client";

import {
  Camera,
  Mesh,
  Plane,
  Program,
  Renderer,
  Texture,
  Transform,
  type OGLRenderingContext,
} from "ogl";
import { useEffect, useRef } from "react";

// Galeria circular em WebGL (OGL): capas curvadas em arco, arrastáveis, com ondulação
// ao rolar. Adaptada do componente `circular-gallery-2` para este projeto:
// - a roda do mouse só age com o cursor sobre a galeria (a página continua rolando);
// - `touch-action: pan-y` deixa o scroll vertical passar no celular;
// - o render pausa quando a galeria está fora da tela.

export interface GalleryItem {
  image: string;
  text: string;
}

interface CircularGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  /** Curvatura do arco: maior = mais curvo. */
  bend?: number;
  /** Raio dos cantos das capas (0 a 0.5). */
  borderRadius?: number;
  scrollSpeed?: number;
  /** Suavidade da animação (menor = mais suave). */
  scrollEase?: number;
}

type Size = { width: number; height: number };
type ScrollState = { ease: number; current: number; target: number; last: number; position: number };

function debounce(func: () => void, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(func, wait);
  };
}

function lerp(p1: number, p2: number, t: number) {
  return p1 + (p2 - p1) * t;
}

function createTextTexture(gl: OGLRenderingContext, text: string, font: string, color: string) {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d")!;
  context.font = font;
  const metrics = context.measureText(text);
  const textWidth = Math.ceil(metrics.width);
  const textHeight = Math.ceil(parseInt(font.split(" ").find((p) => p.endsWith("px")) ?? "30", 10) * 1.3);
  canvas.width = textWidth + 20;
  canvas.height = textHeight + 20;
  context.font = font;
  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillText(text, canvas.width / 2, canvas.height / 2);
  const texture = new Texture(gl, { generateMipmaps: false });
  texture.image = canvas;
  return { texture, width: canvas.width, height: canvas.height };
}

class Title {
  constructor(gl: OGLRenderingContext, plane: Mesh, text: string, textColor: string, font: string) {
    const { texture, width, height } = createTextTexture(gl, text, font, textColor);
    const geometry = new Plane(gl);
    const program = new Program(gl, {
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main() {
          vec4 color = texture2D(tMap, vUv);
          if (color.a < 0.1) discard;
          gl_FragColor = color;
        }
      `,
      uniforms: { tMap: { value: texture } },
      transparent: true,
    });
    const mesh = new Mesh(gl, { geometry, program });
    const aspect = width / height;
    const textHeight = plane.scale.y * 0.15;
    const textWidth = textHeight * aspect;
    mesh.scale.set(textWidth, textHeight, 1);
    mesh.position.y = -plane.scale.y * 0.5 - textHeight * 0.5 - 0.05;
    mesh.setParent(plane);
  }
}

class Media {
  plane!: Mesh;
  program!: Program;
  extra = 0;
  widthTotal = 0;
  width = 0;
  x = 0;
  padding = 2;
  speed = 0;

  constructor(
    private gl: OGLRenderingContext,
    private geometry: Plane,
    private image: string,
    private index: number,
    private length: number,
    private scene: Transform,
    private screen: Size,
    private text: string,
    private viewport: Size,
    private bend: number,
    private textColor: string,
    private borderRadius: number,
    private font: string,
  ) {
    this.createShader();
    this.plane = new Mesh(this.gl, { geometry: this.geometry, program: this.program });
    this.plane.setParent(this.scene);
    // O título precisa nascer antes do primeiro onResize: ele se posiciona em coordenadas
    // locais da capa (ainda de escala 1), e a escala da capa o leva junto depois.
    new Title(this.gl, this.plane, this.text, this.textColor, this.font);
    this.onResize();
  }

  createShader() {
    const texture = new Texture(this.gl, { generateMipmaps: true });
    this.program = new Program(this.gl, {
      depthTest: false,
      depthWrite: false,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z = (sin(p.x * 4.0 + uTime) * 1.5 + cos(p.y * 2.0 + uTime) * 1.5) * (0.1 + uSpeed * 0.5);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform sampler2D tMap;
        uniform float uBorderRadius;
        varying vec2 vUv;

        float roundedBoxSDF(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, vec2(0.0))) + min(max(d.x, d.y), 0.0) - r;
        }

        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vec2(
            vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
          );
          vec4 color = texture2D(tMap, uv);

          float d = roundedBoxSDF(vUv - 0.5, vec2(0.5 - uBorderRadius), uBorderRadius);
          float edgeSmooth = 0.002;
          float alpha = 1.0 - smoothstep(-edgeSmooth, edgeSmooth, d);

          gl_FragColor = vec4(color.rgb, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uPlaneSizes: { value: [0, 0] },
        uImageSizes: { value: [0, 0] },
        uSpeed: { value: 0 },
        uTime: { value: 100 * Math.random() },
        uBorderRadius: { value: this.borderRadius },
      },
      transparent: true,
    });

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = this.image;
    img.onload = () => {
      texture.image = img;
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight];
    };
  }

  update(scroll: ScrollState, direction: "left" | "right") {
    this.plane.position.x = this.x - scroll.current - this.extra;

    const x = this.plane.position.x;
    const H = this.viewport.width / 2;

    if (this.bend === 0) {
      this.plane.position.y = 0;
      this.plane.rotation.z = 0;
    } else {
      const bendAbs = Math.abs(this.bend);
      const R = (H * H + bendAbs * bendAbs) / (2 * bendAbs);
      const effectiveX = Math.min(Math.abs(x), H);
      const arc = R - Math.sqrt(R * R - effectiveX * effectiveX);

      if (this.bend > 0) {
        this.plane.position.y = -arc;
        this.plane.rotation.z = -Math.sign(x) * Math.asin(effectiveX / R);
      } else {
        this.plane.position.y = arc;
        this.plane.rotation.z = Math.sign(x) * Math.asin(effectiveX / R);
      }
    }

    this.speed = scroll.current - scroll.last;
    this.program.uniforms.uTime.value += 0.04;
    this.program.uniforms.uSpeed.value = this.speed;

    const planeOffset = this.plane.scale.x / 2;
    const viewportOffset = this.viewport.width / 2;
    const isBefore = this.plane.position.x + planeOffset < -viewportOffset;
    const isAfter = this.plane.position.x - planeOffset > viewportOffset;

    if (direction === "right" && isBefore) this.extra -= this.widthTotal;
    if (direction === "left" && isAfter) this.extra += this.widthTotal;
  }

  onResize({ screen, viewport }: { screen?: Size; viewport?: Size } = {}) {
    if (screen) this.screen = screen;
    if (viewport) this.viewport = viewport;
    const scale = this.screen.height / 1500;
    this.plane.scale.y = (this.viewport.height * (900 * scale)) / this.screen.height;
    this.plane.scale.x = (this.viewport.width * (700 * scale)) / this.screen.width;
    this.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y];
    this.padding = 2;
    this.width = this.plane.scale.x + this.padding;
    this.widthTotal = this.width * this.length;
    this.x = this.width * this.index;
  }
}

class App {
  private renderer: Renderer;
  private gl: OGLRenderingContext;
  private camera: Camera;
  private scene = new Transform();
  private medias: Media[] = [];
  private scroll: ScrollState;
  private onCheckDebounce: () => void;
  private isDown = false;
  private start = 0;
  private screen: Size = { width: 0, height: 0 };
  private viewport: Size = { width: 0, height: 0 };
  private raf = 0;
  visible = true;

  constructor(
    private container: HTMLElement,
    items: GalleryItem[],
    bend: number,
    textColor: string,
    borderRadius: number,
    font: string,
    private scrollSpeed: number,
    scrollEase: number,
  ) {
    this.scroll = { ease: scrollEase, current: 0, target: 0, last: 0, position: 0 };
    this.onCheckDebounce = debounce(this.onCheck, 200);

    this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(window.devicePixelRatio || 1, 2) });
    this.gl = this.renderer.gl;
    this.gl.clearColor(0, 0, 0, 0);
    this.container.appendChild(this.gl.canvas);

    this.camera = new Camera(this.gl);
    this.camera.fov = 45;
    this.camera.position.z = 20;

    this.onResize();

    const geometry = new Plane(this.gl, { heightSegments: 50, widthSegments: 100 });
    // Duplica a lista para o loop ficar contínuo.
    const looped = [...items, ...items];
    this.medias = looped.map(
      (item, index) =>
        new Media(
          this.gl,
          geometry,
          item.image,
          index,
          looped.length,
          this.scene,
          this.screen,
          item.text,
          this.viewport,
          bend,
          textColor,
          borderRadius,
          font,
        ),
    );
    this.medias.forEach((media) => media.onResize({ screen: this.screen, viewport: this.viewport }));

    this.update();
    window.addEventListener("resize", this.onResize);
    this.container.addEventListener("wheel", this.onWheel, { passive: true });
    this.container.addEventListener("mousedown", this.onTouchDown);
    window.addEventListener("mousemove", this.onTouchMove);
    window.addEventListener("mouseup", this.onTouchUp);
    this.container.addEventListener("touchstart", this.onTouchDown, { passive: true });
    window.addEventListener("touchmove", this.onTouchMove, { passive: true });
    window.addEventListener("touchend", this.onTouchUp);
  }

  private onTouchDown = (e: MouseEvent | TouchEvent) => {
    this.isDown = true;
    this.scroll.position = this.scroll.current;
    this.start = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  private onTouchMove = (e: MouseEvent | TouchEvent) => {
    if (!this.isDown) return;
    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const distance = (this.start - x) * (this.scrollSpeed * 0.025);
    this.scroll.target = this.scroll.position + distance;
  };

  private onTouchUp = () => {
    if (!this.isDown) return;
    this.isDown = false;
    this.onCheck();
  };

  private onWheel = (e: WheelEvent) => {
    // Só o gesto horizontal (ou shift+roda) move a galeria; a rolagem vertical é da página.
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
    if (!delta) return;
    this.scroll.target += (delta > 0 ? this.scrollSpeed : -this.scrollSpeed) * 0.2;
    this.onCheckDebounce();
  };

  // Ao soltar, encaixa na capa mais próxima.
  private onCheck = () => {
    if (!this.medias[0]) return;
    const width = this.medias[0].width;
    const itemIndex = Math.round(Math.abs(this.scroll.target) / width);
    const item = width * itemIndex;
    this.scroll.target = this.scroll.target < 0 ? -item : item;
  };

  private onResize = () => {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight };
    if (!this.screen.width || !this.screen.height) return;
    this.renderer.setSize(this.screen.width, this.screen.height);
    this.camera.perspective({ aspect: this.screen.width / this.screen.height });
    const fov = (this.camera.fov * Math.PI) / 180;
    const height = 2 * Math.tan(fov / 2) * this.camera.position.z;
    const width = height * this.camera.aspect;
    this.viewport = { width, height };
    this.medias.forEach((media) => media.onResize({ screen: this.screen, viewport: this.viewport }));
  };

  private update = () => {
    this.raf = window.requestAnimationFrame(this.update);
    if (!this.visible) return;
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease);
    const direction = this.scroll.current > this.scroll.last ? "right" : "left";
    this.medias.forEach((media) => media.update(this.scroll, direction));
    this.renderer.render({ scene: this.scene, camera: this.camera });
    this.scroll.last = this.scroll.current;
  };

  destroy() {
    window.cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.onResize);
    this.container.removeEventListener("wheel", this.onWheel);
    this.container.removeEventListener("mousedown", this.onTouchDown);
    window.removeEventListener("mousemove", this.onTouchMove);
    window.removeEventListener("mouseup", this.onTouchUp);
    this.container.removeEventListener("touchstart", this.onTouchDown);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchUp);
    this.gl.canvas.parentNode?.removeChild(this.gl.canvas);
  }
}

export function CircularGallery({
  items,
  bend = 3,
  borderRadius = 0.05,
  scrollSpeed = 2,
  scrollEase = 0.05,
  className = "",
  ...props
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // A cor e a fonte dos títulos vêm do CSS do contêiner (classes abaixo).
    const style = getComputedStyle(container);
    const font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;

    // Em tela estreita o mesmo arco entorta demais as capas laterais: curva menos.
    const effectiveBend = container.clientWidth < 640 ? bend * 0.3 : bend;

    let app: App | null = null;
    try {
      app = new App(container, items, effectiveBend, style.color, borderRadius, font, scrollSpeed, scrollEase);
    } catch {
      // Sem WebGL: a galeria fica vazia e a lista em `sr-only` continua acessível.
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (app) app.visible = entry.isIntersecting;
    });
    observer.observe(container);

    return () => {
      observer.disconnect();
      app?.destroy();
    };
  }, [items, bend, borderRadius, scrollSpeed, scrollEase]);

  return (
    <div
      ref={containerRef}
      className={`h-full w-full cursor-grab touch-pan-y overflow-hidden active:cursor-grabbing ${className}`}
      {...props}
    />
  );
}
