// Rebuild optimized portrait assets and social preview from the supplied transparent portrait.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/assets';
mkdirSync(OUT, { recursive: true });
const portrait = sharp('pic.png').ensureAlpha();
const metadata = await portrait.metadata();
for (const width of [1100, 720, 420]) {
  await sharp('pic.png').resize({ width }).webp({ quality: 90, alphaQuality: 95 }).toFile(`${OUT}/portrait-${width}.webp`);
}
const cutout = await sharp('pic.png').resize({ height: 600 }).png().toBuffer();
const title = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><radialGradient id="g" cx="78%" cy="45%" r="48%"><stop offset="0" stop-color="#24758e" stop-opacity=".42"/><stop offset="1" stop-color="#070911" stop-opacity="0"/></radialGradient></defs>
  <rect width="1200" height="630" fill="#070911"/><rect width="1200" height="630" fill="url(#g)"/>
  <text x="65" y="290" font-family="Arial,sans-serif" font-weight="800" font-size="112" fill="#f5f5f5" letter-spacing="4">VARUN</text>
  <text x="72" y="355" font-family="Arial,sans-serif" font-weight="700" font-size="28" fill="#53dcd8" letter-spacing="12">THE PORTFOLIO</text>
  <text x="72" y="420" font-family="Arial,sans-serif" font-size="20" fill="#b0bbcc" letter-spacing="3">CSE • AI &amp; ML • WEB DEVELOPMENT</text>
</svg>`);
await sharp({ create: { width: 1200, height: 630, channels: 4, background: '#070911' } })
  .composite([{ input: title }, { input: cutout, gravity: 'southeast' }])
  .jpeg({ quality: 88 }).toFile(`${OUT}/og-image.jpg`);
console.log(`Built portrait assets from ${metadata.width}×${metadata.height} PNG.`);
