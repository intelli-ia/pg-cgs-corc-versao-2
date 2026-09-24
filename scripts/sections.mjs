// Captura cada dobra separadamente: node scripts/sections.mjs [largura]
import { chromium } from "@playwright/test";
const width = Number(process.argv[2] ?? 1440);
const ids = ["topo", "manifesto", "mecanismo", "depoimentos", "oferta", "professor", "faq"];
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
await p.goto("http://localhost:3000/");
await p.evaluate(() => document.fonts.ready);
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 300) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 50)); } });
await p.waitForTimeout(900);
await p.addStyleTag({ content: ".fixed.bottom-0{display:none!important}" });
for (const id of ids) await p.locator("#" + id).screenshot({ path: `screenshots/s-${width}-${id}.png` });
await b.close();
