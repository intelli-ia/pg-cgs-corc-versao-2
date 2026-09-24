// Uso: node scripts/screenshot.mjs [rota] [saída-dir]
import { chromium } from "@playwright/test";

const route = process.argv[2] ?? "/";
const outDir = process.argv[3] ?? "screenshots";
const base = process.env.BASE_URL ?? "http://localhost:3000";
const name = route === "/" ? "home" : route.replace(/\//g, "_").replace(/^_/, "");

const browser = await chromium.launch();
for (const [label, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: label === "mobile" ? 2 : 1 });
  await page.goto(base + route + "?utm_source=teste&utm_medium=qa", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  // força as animações de entrada ao rolar a página inteira
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 60)); }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(900);
  const font = await page.evaluate(() => ({
    h1: getComputedStyle(document.querySelector("h1") ?? document.body).fontFamily,
    loaded: [...document.fonts].filter(f => f.status === "loaded").map(f => `${f.family} ${f.weight} ${f.style}`),
    ctaHref: document.querySelector('a[href*="hub.la"]')?.href,
  }));
  console.log(label, JSON.stringify(font));
  await page.screenshot({ path: `${outDir}/${name}-${label}.png`, fullPage: true });
  await page.close();
}
await browser.close();
