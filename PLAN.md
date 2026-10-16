# Plan del sitio web de Indigo Energy International

> Marca, objetivo y reglas de contenido: `CLAUDE.md`. Este documento define **cómo** se construye, siguiendo la skill `pagina-mdn` (`~/.claude/skills/pagina-mdn`). Ante cualquier duda de método, manda la skill.

## 0. Estado del desarrollo (14 oct 2026)

**Hecho:** plantilla corporativa copiada y adaptada; marca (paleta medida del logo, logo trazado a SVG, tipografías Sora + Inter); i18n ES/EN con `[...lang]`; 49 páginas generadas (home, nosotros, servicios, sectores, proyectos y 16 fichas, grupo, calidad, contacto, 404); fotos reales del PDF; mapa de presencia de puntos; los tres heros apilados en el home para comparar. `astro check`, `check-sello` y `build` sin errores.

**Pendiente de decisión del usuario:** elegir un hero (editorial dividido, iris con miniaturas o titular gigante). Al elegir: borrar las otras dos variantes y los `compare-note`, y registrar el hero y las animaciones de firma en `~/.claude/skills/pagina-mdn/references/proyectos-hechos.md` y `heros.md`.

**Pendiente del cliente:** ver `CLAUDE.md`, sección 12 (fotos y logo en alta, potencia instalada, ISO vigentes, dirección, hosting, empresas del grupo, quién responde el formulario) y la revisión nativa del inglés.

**Cambios tras la primera revisión del usuario:** el sitio se parecía al de Agrolago. Se quitaron las fotos y cajas que crecen con el scroll, se rehízo el header de las páginas interiores (diagonal dividido), la sección de servicios del home (ciclo con foto en rombo) y la transición entre páginas (mosaico de rombos).

**Qué difiere del plan original:**
- Las páginas interiores cuelgan de `src/views/*.astro` y las rutas de `src/pages/[...lang]/`.
- Los datos de proyectos, servicios, sectores y empresas viven en `src/data/*.ts` con ES y EN dentro de cada entrada, no en Content Collections.
- El mapa de puntos se genera una vez con `node tools/gen-map.mjs` (d3-geo y world-atlas son solo de desarrollo) y queda como un módulo de datos de unos 20 KB.
- La sección de certificaciones ISO no está publicada: los certificados del PDF están vencidos.
- No hay WhatsApp ni mapa de Google: no hay número ni dirección confirmados.

## 1. Resumen

Sitio corporativo **estático y bilingüe (ES/EN)** para Indigo Energy International, construido con **Astro** para cargar mucho más rápido que el WordPress actual, con **GSAP** en todas las páginas y una animación de firma distinta en cada sección. Debe impresionar al verse sin ser un sitio de scrollytelling.

- **Entrega tentativa:** 1 de noviembre de 2026, contada desde la recepción de accesos e información.
- **Alcance v1:** sitio completo (home, páginas internas, proyectos en detalle, empresas del grupo, calidad, contacto).
- **Prioridad:** el home.
- **Posicionamiento:** grupo transnacional y proveedor global de soluciones, no solo IPC.
- **Destino:** proyecto de MDN, con el crédito "Sitio web desarrollado por MDN Publicidad" (`credit: true` en `site.ts`).
- **Auditoría visual con Playwright:** autorizada por el usuario.

## 2. Base técnica (plantilla `templates/corporativa` de la skill)

Se parte de la plantilla, no de cero: `cp -R ~/.claude/skills/pagina-mdn/templates/corporativa/. .` y `npm install`. Es un punto de partida, no un molde: se cambian orden, layouts y animaciones según Indigo.

| Área | Elección |
|---|---|
| Framework | Astro (versión de la plantilla), `output: 'static'`, Node ≥ 22.12 |
| Estilos | Tailwind v4 con tokens en el bloque `@theme` de `src/styles/global.css` |
| Animación | GSAP con ScrollTrigger y SplitText (gratis). `boot.ts` carga `motion.ts` de forma perezosa; con `prefers-reduced-motion` no se descarga nada. Motor declarativo con atributos `data-*` |
| Scroll | Nativo. **Sin Lenis ni ScrollSmoother** (la skill solo los admite si el cliente los pide) |
| Imágenes | `<Picture>` de `astro:assets` (AVIF/WebP) con `width/height` |
| Fuentes | Sora (títulos) e Inter (texto) con la API de fuentes de Astro (`fonts` en `astro.config.mjs`), preload de las del primer frame |
| Navegación | `ClientRouter` (View Transitions) con transición de página por cortina |
| SEO | `Seo.astro`, `JsonLd.astro`, `@astrojs/sitemap`, `robots.txt.ts`, `llms.txt.ts` |
| Contenido | Datos en `src/data/*.ts` (proyectos, servicios, sectores, empresas) y del negocio solo en `src/config/site.ts` |

**Cambiar de marca es tocar solo dos archivos:** `src/config/site.ts` y el `@theme` de `global.css`.

Tipografía: una display geométrica para titulares y una sans de lectura; máximo dos familias y pocos pesos. Se elige al ver el logo vectorial.

## 3. Mapa del sitio

| Página | Contenido |
|---|---|
| **Inicio** | Ver sección 5 |
| **Nosotros** | Quiénes somos, misión, visión, valores, talento humano, presencia global |
| **Servicios** | Ciclo de ejecución (ingeniería, procura, construcción, puesta en marcha) y alcance de cada uno |
| **Sectores** | Energía, Petróleo y Gas, Agua, Infraestructura, con alcances |
| **Proyectos** | Índice con filtro por país y sector, y página de detalle por proyecto |
| **Empresas del grupo** | TurboPre y las demás |
| **Calidad y certificaciones** | ISO 9001 e ISO 14001 (cuando se confirme su vigencia) |
| **Contacto** | Formulario, datos y mapa |
| **404** | Con la marca, solo en el idioma base y `noindex` |

Todas existen en español (raíz) e inglés (`/en`). El nav apunta a anclas con barra inicial (`/#contacto`).

## 4. Hero del home: tres opciones para comparar

Cortinas (Ecopack) y paneles de la cadena (Agrolago) están agotados. Por pedido del usuario, el home llevará **las tres variantes libres de `references/heros.md`, una debajo de otra**, para elegir viéndolas en la página. Es una fase temporal.

| Orden | Variante | Mecánica | Composición | Estado |
|---|---|---|---|---|
| 1 | **Editorial dividido** | La foto de la derecha cambia con una persiana vertical (la nueva sube tapando la anterior); el texto cambia por palabras | Mitad izquierda índigo con titular grande, mitad derecha foto alta, índice de nombres (los cuatro sectores) abajo a la izquierda | Por construir |
| 2 | **Iris + miniaturas** | La foto nueva se abre como círculo (`clip-path: circle()`) desde la miniatura tocada | Foto completa, titular centrado a la izquierda, 4 miniaturas con anillo de progreso abajo a la derecha | Ya está en la plantilla (`HeroIris.astro`) |
| 3 | **Titular gigante + foto que se abre** | Un solo titular enorme por palabras; la foto debajo se abre con `clip-path` y luego con scrub | Titular en 2 o 3 líneas y foto a ancho completo, sin carrusel | Por construir |

Reglas para los tres:
- Solo **un `h1`** en toda la página (el del primer hero); los demás titulares son `h2`.
- Contenido visible sin JS y pre-ocultado del texto con `html.has-motion` (sin parpadeo).
- Nunca más de 5 slides ni autoplay menor a 6 s, con pausa en hover y foco.
- Contraste AA del texto sobre la foto más clara.
- La foto del hero con `loading="eager" fetchpriority="high"`; no se oculta con `clip-path` para no retrasar el LCP (se usa un velo).
- Se usan fotos reales del PDF. Si faltan buenas, se pedirán originales; mientras tanto, placeholders avisados.

**Cuando el usuario elija:** se borran las otras dos variantes y se anota el hero y las animaciones de firma de Indigo en `~/.claude/skills/pagina-mdn/references/proyectos-hechos.md`, y la variante como usada en `heros.md`.

## 5. Home: secciones, recetas y animaciones de firma

No se repiten las recetas ya usadas en Agrolago (ruta dibujada, mosaico del grupo, tarjetas apiladas, fichas de producto, ruta del lote) ni en Ecopack (scroll horizontal pinneado). No hay dos secciones seguidas con la misma animación de firma.

| Sección | Receta | Animación de firma |
|---|---|---|
| Hero (3 opciones) | Sección 4 | Persiana, iris o foto que se abre |
| Qué hace Indigo | Frase corta con una foto a ancho completo (`data-wipe`); los datos confirmados (por ahora el 81 % técnico y la capacidad por proyecto; la potencia total está por confirmar) van **dentro de la frase**, no en franja de cifras | `data-wipe` + `data-count` |
| Servicios: el ciclo de ejecución | **Frame sticky con crossfade**: columna de texto con los cuatro pasos e imagen `sticky` que cambia por paso, con rail de progreso | Crossfade + `data-rail` |
| Sectores | **Lista editorial** con la imagen del sector siguiendo el cursor (`(hover:hover)`, `quickTo`); en móvil, tarjetas con foto | Revelado de imagen con el cursor |
| Proyectos destacados | Carril con `scroll-snap` nativo y tarjetas con foto del mismo alto | `data-shutter` |
| Presencia global | **Mapa SVG** con puntos que pulsan (Venezuela, México, Bolivia, Costa Rica, Curazao y Oriente Medio) y una lista a un lado | Los puntos saltan en secuencia (el único `back.out` de la página) |
| Empresas del grupo | Tarjetas con foto del mismo alto, TurboPre primero | `data-batch` |
| Certificaciones | Los certificados como imágenes en una fila corta | `data-fade` |
| CTA final | Foto propia con superposición de marca y titular distinto al de las demás páginas | `data-split` |

Reglas de maquetación que se respetan en todo el sitio (detalle en `references/estructura.md`):
- Un solo token de espacio `--section-y: clamp(3.5rem, 7vw, 6.5rem)`; ninguna franja vacía mayor a 240 px; sin `margin-top` escalonado con `nth-child`; sin `min-height: 100svh` fuera del hero.
- Alternar fondos claro / oscuro / color de marca; no más de dos secciones seguidas iguales.
- Ninguna sección es solo una frase con un hueco al lado.
- Columnas de solo texto se evitan: tarjetas con foto del mismo alto.
- Clases propias **sin chocar con Tailwind**: nada de `.h-2`, `.p-4`, `.w-full`; los titulares usan `.h-title` y `.h-hero`.

## 6. Páginas interiores

- Todas abren con un **hero de página con foto**: `min-height: clamp(440px, 64svh, 660px)`, degradado índigo más fuerte arriba y abajo para que el menú se lea, titular blanco con `data-split` abajo a la izquierda. Nunca un encabezado de texto oscuro sobre blanco.
- El `Nav` va en tema oscuro sobre la foto y pasa a claro al hacer scroll. Entrada con un velo del color de marca (no `clip-path` en la foto).
- Foto distinta en cada página y distinta de la del home.
- Cada página termina con un **CTA de contacto con su propia foto y un titular distinto**.
- **Proyectos:** filtro con `Flip` (país y sector) y una página de detalle por proyecto con los datos reales del PDF (ubicación, alcance, capacidad, cliente).
- **Nosotros:** los valores se muestran como filas tipográficas grandes con `data-lines`, sin numeración y sin tarjetas apiladas (esa receta es de Agrolago).
- **Servicios y Sectores:** una receta distinta por bloque; las fichas de producto de Agrolago no se reutilizan.

## 7. Prohibiciones de la skill (anti-sello)

Resumen; la lista completa está en `references/anti-sello.md`.

- Sin eyebrows ni subtítulos chicos en mayúsculas con tracking, badges, pills, chips, micro-labels, marquesinas, barras o bordes laterales de acento, "Scroll" cue, tarjetas de precios, iconos en círculos de color ni emojis como iconos.
- **Sin numeración decorativa (01, 02, 03).** El ciclo de ejecución es la única excepción posible, porque el orden **es el contenido**; si se numera, se marca el código con `sello-ok: numeracion` y el usuario lo aprueba.
- Sin gradientes morado-azul ni glassmorphism por defecto: paleta propia de Indigo y superficies planas.
- Nada de `fade-up` + `stagger` idéntico en todo.
- Copy concreto del negocio; sin "Soluciones innovadoras para tu empresa", sin guiones largos de muletilla ni frases de tres adjetivos.

## 8. Contrato de animación

Cada animación cumple todo esto (`audit-visual.mjs` lo verifica):
1. Arranca al entrar (`top 85–92%`) y termina en ≤ 1,2 s (≤ 1,8 s con stagger).
2. Termina con el elemento todavía en pantalla; nunca `end: 'bottom top'` (salvo parallax).
3. Todo scrub llega al 100 %; cerca del final de la página se usa `clamp()`.
4. Sin zonas muertas de scroll.
5. El hero no parpadea (`has-motion` con salvaguarda de 4 s).
6. Un padre transformado no lleva hijos con ScrollTrigger propio.
7. Grupos altos con `data-batch` por hijo.
8. Sin `perspective` ni rotaciones en grillas de texto.
9. Entradas con `once: true`; solo los scrub son bidireccionales.
10. Un único rebote (`back.out`/`elastic.out`) por página.
11. `main { overflow-x: clip }` para que las entradas laterales no ensanchen el viewport móvil.
12. Solo `transform`, `clip-path` y `opacity`; sin animar `width/height/top/left`.
13. Autoplay con pausa en hover y foco.

## 9. Idiomas (ES/EN), según `references/i18n.md`

- Español sin prefijo (`/`, `/nosotros`) e inglés con prefijo (`/en`, `/en/about`); los slugs son los mismos en los dos idiomas.
- Páginas en `src/pages/[...lang]/`, cada una de pocas líneas que llama a una vista `src/views/<Pagina>.astro` con `lang`. `getStaticPaths` devuelve `params: { lang: undefined }` para el español.
- `src/i18n/index.ts` con `langs`, `getT(lang)`, `localePath(lang, page)` y `langStaticPaths`. Textos en `src/i18n/es.ts` (define el tipo `Dict`) y `src/i18n/en.ts`.
- `Seo.astro` emite `hreflang` por idioma y `x-default`; el sitemap usa la opción `i18n`.
- El selector de idioma usa `data-astro-reload` en los enlaces.
- El inglés lo redacta Claude de forma natural, no literal; **se marca en el archivo y se pide revisión de un hablante nativo del cliente**. No se traduce a ciegas lo del sitio viejo.

## 10. Rendimiento (presupuesto)

- Lighthouse ≥ 95 en las cuatro categorías (móvil), LCP < 1,8 s en 4G, CLS < 0,05.
- JS del home ≤ ~80 KB gzip, con GSAP incluido y cargado de forma perezosa.
- Fotos del PDF de baja resolución: pedir originales antes de optimizarlas.
- Si el hero usa video: comprimido, con `poster`, sin carga en móvil ni con `prefers-reduced-data`.
- Sin scripts de terceros sin justificar.

## 11. SEO y entrega (`references/seo-entrega.md`)

- Metadatos, Open Graph y Twitter por página; un solo `h1` por página.
- JSON-LD: `Organization` con el `schemaType` que corresponda al sitio y `Project` en los detalles, más `BreadcrumbList`.
- `robots.txt` con los rastreadores de IA permitidos y `llms.txt` generado desde `site.ts` y los datos.
- `netlify.toml` de la plantilla (caché inmutable y cabeceras de seguridad); como el hosting no está definido, se adapta cuando se sepa.
- **Redirecciones 301** desde las URLs del WordPress actual, que se mapean al recibir los accesos.
- Favicon (SVG) y `og-default.jpg` de 1200×630 con la marca.

## 12. Formulario de contacto

La plantilla trae un formulario que abre WhatsApp (`wa-form.ts`). Para Indigo se cambia por un `ContactForm` con **adaptador intercambiable**, porque el hosting aún no está definido: Netlify Forms, un endpoint PHP en cPanel o un servicio externo, con honeypot y mensajes en ambos idiomas. No se inventa un número de WhatsApp: el botón flotante solo se activa si Indigo entrega uno. **Pendiente:** quién recibe y responde los mensajes.

## 13. Flujo de trabajo (pasos de la skill)

1. Copiar la plantilla y `npm install`.
2. Llenar `src/config/site.ts` con datos reales (los de `CLAUDE.md`) y el `@theme` con la paleta de Indigo.
3. Reescribir copy y secciones para el rubro, en ES y EN.
4. Construir los tres heros para comparar, y luego las secciones con las recetas de la sección 5.
5. Anotar el hero y las animaciones de firma elegidos en `proyectos-hechos.md`.
6. Verificar: `node ~/.claude/skills/pagina-mdn/scripts/check-sello.mjs src`, `npm run build` y `npx astro check`. Las excepciones justificadas se marcan con `sello-ok: <id>`.
7. **Auditoría visual:** `npx astro preview --port 4330`, `npm i --no-save playwright-core` y `node ~/.claude/skills/pagina-mdn/scripts/audit-visual.mjs http://localhost:4330 --routes <rutas> --viewports 1440x900,1024x768,768x1024,390x844 --out .audit --steps`. Corregir hasta cero hallazgos y revisar las capturas `--steps`.
8. Checklist de entrega de `seo-entrega.md` y `astro dev --background` para pasar la URL al usuario.

## 14. Cronograma hacia el 1 de noviembre

El plazo corre desde la recepción de accesos e información.

| Etapa | Entregable |
|---|---|
| Semana 1 | Plantilla, marca (`site.ts` + `@theme`), i18n y **home con los tres heros** |
| Semana 2 | Elección del hero y páginas interiores con sus heros de página |
| Semana 3 | Proyectos en detalle, versión en inglés, animaciones finas y auditoría |
| Últimos días | SEO, redirecciones, checklist de entrega y deploy |

Además, MDN entrega un **informe breve** de lo encontrado en el sitio actual y del avance posible al recibir los accesos.

## 15. Riesgos y pendientes

- Accesos y contenido que aún no llegan (el plazo depende de ello).
- Fotos de baja calidad y logo sin versión vectorial.
- Vigencia de las ISO, dirección oficial y hosting por confirmar.
- Qué mostrar de las otras empresas del grupo.
- Revisión nativa del inglés.
- La lista completa de pendientes está en `CLAUDE.md`, sección 12.

## 16. Verificación final

1. `npm run build` y `npx astro check` sin errores.
2. `check-sello.mjs` sin hallazgos injustificados.
3. `audit-visual.mjs` sin hallazgos y capturas `--steps` revisadas.
4. Todas las páginas en ES y EN; enlace a ancla probado desde una página interna.
5. Prueba con `prefers-reduced-motion` y con JS desactivado.
6. Revisión del usuario en móvil y escritorio.
7. Contraste AA sobre fotos y fondos índigo.
8. Ningún texto ni cifra fuera de lo confirmado en `CLAUDE.md`.
9. Fila de Indigo añadida a `proyectos-hechos.md`.
