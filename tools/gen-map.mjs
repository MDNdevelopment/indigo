// Genera src/data/worldMap.ts: un mapa de puntos (un solo <path> con trazos de longitud cero) y las coordenadas
// proyectadas de cada país. Se ejecuta a mano cuando cambia el diseño: node tools/gen-map.mjs
import { createRequire } from 'node:module';
import { writeFileSync } from 'node:fs';
import { geoNaturalEarth1, geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
const require = createRequire(import.meta.url);
const world = require('world-atlas/land-110m.json');
const land = feature(world, world.objects.land);

const W = 1000;
const proj = geoNaturalEarth1().fitExtent([[0, 0], [W, 560]], { type: 'Sphere' });
const STEP = 8;
const LAT_MIN = -56, LAT_MAX = 80;
let minX = 1e9, maxX = -1e9, minY = 1e9, maxY = -1e9;
const dots = [];
for (let y = 0; y < 600; y += STEP) {
  for (let x = 0; x < W; x += STEP) {
    const px = x + ((Math.round(y / STEP) % 2) * STEP) / 2; // filas desfasadas
    const ll = proj.invert([px, y]);
    if (!ll || !isFinite(ll[0]) || ll[1] < LAT_MIN || ll[1] > LAT_MAX) continue;
    if (!geoContains(land, ll)) continue;
    dots.push([px, y]);
    minX = Math.min(minX, px); maxX = Math.max(maxX, px); minY = Math.min(minY, y); maxY = Math.max(maxY, y);
  }
}
const pad = 8;
const ox = minX - pad, oy = minY - pad;
const width = Math.round(maxX - minX + pad * 2), height = Math.round(maxY - minY + pad * 2);
const path = dots.map(([x, y]) => `M${Math.round(x - ox)} ${Math.round(y - oy)}h.1`).join('');

const places = { ve: [-66.9, 10.5], bo: [-65.2, -17.0], cr: [-84.1, 9.9], cw: [-69.0, 12.2], mx: [-99.1, 19.4], sa: [39.1, 22.4] };
const points = Object.fromEntries(
  Object.entries(places).map(([k, ll]) => { const [x, y] = proj(ll); return [k, [Math.round(x - ox), Math.round(y - oy)]]; }),
);
const out = `// Generado por tools/gen-map.mjs. No editar a mano.
export const worldMap = ${JSON.stringify({ width, height, points })} as const;
export const worldDots = '${path}';
`;
writeFileSync('src/data/worldMap.ts', out);
console.log({ dots: dots.length, width, height, bytes: out.length, points });
