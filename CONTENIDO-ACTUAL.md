# Análisis del sitio actual (indigoenergyint.com) y cómo se reutiliza

Revisado el 14 oct 2026 (WordPress + Elementor). Se descargaron el home y 24 páginas internas, más 7 fichas de proyecto. Este documento dice **qué contenido existe**, **qué está desactualizado o en conflicto** y **cómo pasa al sitio nuevo con el enfoque de la reunión**: soluciones y servicios, no solo IPC, y sin mencionar un grupo de empresas (decisión del usuario, 15 oct 2026).

## 1. Diagnóstico

- **Enfoque actual:** "empresa venezolana con 20 años en el mercado, especializada en IPC". Todo gira en torno a IPC. **No menciona TurboPre ni ninguna empresa del grupo.** Es justo lo que el cliente quiere cambiar.
- **Home pesado:** unos 210 KB de HTML solo en el inicio, sin contar scripts, estilos ni imágenes (hecho con Elementor).
- **SEO flojo:** el home no tiene `meta description`; el título es "Inicio - Indigo Energy International".
- **Inglés incompleto:** solo existe `/en-home/`. Las demás páginas están únicamente en español.
- **Páginas sueltas con poco texto:** varias son un párrafo y una foto (Infraestructura Hotelera, Talento Humano, SIAHO, Desarrollo Profesional, Contacto).
- **Dos páginas casi vacías:** "Clientes y Aliados Estratégicos" (solo dos logos) y "Contacto" (un correo y un teléfono, sin formulario).
- **Páginas de relleno de plantilla:** existen `/portfolio/metal-industry/` (que en realidad es La Garita), `warehouse-industry` y `plantilla-proyectos`, con URLs que no describen el proyecto. Hay también `/14283-2/`, que devuelve 404.
- **Numeración decorativa** (01 a 04) en los servicios: la skill de MDN la prohíbe, aunque aquí el orden sí es el proceso.
- **Fotos en baja resolución** (miniaturas de 300 a 600 px en proyectos y negocios).

## 2. Mapa de URLs actuales y destino en el sitio nuevo

El nuevo sitio es bilingüe (ES en la raíz y EN en `/en`). Todas las URLs viejas se redirigen con 301.

| URL actual | Contenido | Destino nuevo |
|---|---|---|
| `/` | Home con quiénes somos, áreas, servicios, proyectos | `/` (rehecho con el nuevo enfoque) |
| `/en-home/` | Home en inglés | `/en` |
| `/quienes-somos/` | Quiénes somos | `/nosotros` |
| `/cultura-empresarial/` | Misión, visión, valores | `/nosotros` (sección de cultura) |
| `/politicas/` | Política de la Calidad | `/calidad` |
| `/politica-ambiental/` | Política ambiental | `/calidad` |
| `/clientes-aliados-y-estrategicos/` | Logos de clientes | `/nosotros` (clientes y aliados) |
| `/negocios/` | Resumen de áreas | `/sectores` |
| `/energia/` | Energía | `/sectores/energia` |
| `/oil-gas-2/` | Oil & Gas | `/sectores/petroleo-y-gas` |
| `/infraestructura/` | Infraestructura (edificios, residencial, vialidad) | `/sectores/infraestructura` |
| `/construccion-civil/` | Construcción civil | `/sectores/infraestructura` |
| `/vias-terrestres/` | Vías terrestres | `/sectores/infraestructura` |
| `/infraestructura-hotelera/` | Hotelería | `/sectores/infraestructura` |
| `/tratamiento-de-agua/` | Tratamiento de agua | `/sectores/agua` |
| `/service/ingenieria-civil/` | Ingeniería | `/servicios/ingenieria` |
| `/service/procura/` | Procura | `/servicios/procura` |
| `/service/construccion/` | Construcción | `/servicios/construccion` |
| `/service/comisionamiento/` | Comisionamiento | `/servicios/puesta-en-marcha` |
| `/soluciones-tecnologicas/` | Tecnología | `/servicios/tecnologia` (nueva sección) |
| `/proyectos/` | 14 proyectos | `/proyectos` |
| `/portfolio/<slug>/` | Ficha de cada proyecto | `/proyectos/<slug>` |
| `/talento-humano/` | Talento humano | `/nosotros/talento` |
| `/siaho/` | Seguridad, ambiente e higiene | `/calidad` (SIAHO) |
| `/desarrollo-profesional/` | Desarrollo profesional | `/nosotros/talento` |
| `/contacto/` | Correo y teléfono | `/contacto` |

Los slugs definitivos se fijan en el desarrollo; lo importante es que cada URL vieja tenga su 301.

## 3. Contenido que se aprovecha

### 3.1 Servicios (el material más completo del sitio actual)
Tiene el alcance detallado de los cuatro servicios, mucho más rico que el PDF. Se conserva **íntegro** y se redacta con tono más directo.

- **Ingeniería:** visualización, ingeniería conceptual, básica y de detalle, estudios ambientales y de factibilidad, planes maestros, definición de alcance, levantamiento en campo, FEED, estimado y control de costos, estudios de operatividad y planificación. Disciplinas: civil, tuberías, electricidad, ICT (instrumentación, control y telecomunicaciones), mecánica y control de procesos.
- **Procura:** gestión nacional e internacional, licitaciones, compra de equipos y materiales, inspección, logística y transporte, aduanas y nacionalización.
- **Construcción:** obras civiles y montajes electromecánicos, planos As-Built, gerencia de contratistas, control de costos y materiales, manuales de operación y mantenimiento, seguridad, relaciones laborales, inspección y entrenamiento.
- **Comisionamiento:** pre-comisionamiento y comisionamiento, soporte a ingeniería, entrenamiento de ingeniería y operaciones, suministro de personal y supervisión.
- **Tecnología** (página propia hoy): "Tecnología de punta = calidad en los proyectos". Herramientas digitales para maquetación, extracción y preparación de planos y diseño de todas las etapas. La página muestra 11 logos de software.

### 3.2 Sectores (hoy "Negocios")
- **Energía:** plantas termoeléctricas en ciclo simple y combinado, manejo dual de combustible, ingeniería básica y de detalle.
- **Oil & Gas:** upstream, midstream y downstream: producción (pozos, macollas, líneas de flujo, inyección), transporte, almacenamiento y distribución, y procesamiento.
- **Infraestructura:** edificios administrativos, salas de control, talleres y almacenes, estructuras de concreto y metálicas, complejos residenciales, vialidad y carreteras (evaluación previa, maquinaria avanzada, mezclas asfálticas de calidad, cuidado ambiental con SGA) e infraestructura hotelera (reforzamiento estructural).
- **Tratamiento de agua:** captación, potabilización, desalinización, depuración y retorno al ambiente; plantas sostenibles "incluso en zonas con bajo nivel de saneamiento". El sitio actual lo trata como un sector aparte, igual que el PDF.

### 3.3 Proyectos: 14 en el sitio, con datos que el PDF no trae
Las fichas del sitio añaden **fecha, cliente, unidad de negocio, logros e impacto**. Se usan ambas fuentes y se citan solo los datos de una u otra.

| Proyecto | País | Dato nuevo respecto al PDF |
|---|---|---|
| PGT Josefa Camejo | Venezuela | 2006, cliente **CORPOELEC**, Paraguaná (Falcón), 450 MW; más de 200 usuarios beneficiados; posibilidad de ciclo combinado futuro |
| PGT Ezequiel Zamora | Venezuela | ficha en el sitio |
| PGT Alberto Lovera | Venezuela | ficha en el sitio |
| PGT San Diego de Cabrutica | Venezuela | ficha en el sitio |
| SINOVENSA | Venezuela | ficha en el sitio |
| Hotel Spa IKIN (Margarita) | Venezuela | **no está en el PDF.** 2019, aumento del 32 % de capacidad (24 habitaciones y una suite de 500 m²), respaldo eléctrico del 100 % con autonomía de 6 días |
| Planta El Alto | Bolivia | ficha en el sitio |
| Doble vía Río Seco–Huarina | Bolivia | cliente **ABC** (Administradora Boliviana de Carreteras), 56 km |
| Tanques Senkata, Santa Cruz y Oruro | Bolivia | cliente YPFB |
| Tanques La Garita y El Alto | Costa Rica | 2012, cliente RECOPE, API 650 con techo domo geodésico y cubierta flotante de aluminio |
| Crudo Boscán, Terminal Bullenbay | Curazao | 2010 a 2012, cliente **Refinería Isla NV**; 7 tanques, 13.524 m³ de excavación, domos geodésicos |
| Planta de procesamiento de alimentos | **Arabia Saudita** | **no está en el PDF.** 2016, cliente **Golden Tuna**, KAEC, 125 ton/día, parcela de 35.000 m² y 17.000 m² construidos |

Esto confirma la presencia en **Oriente Medio** (Arabia Saudita), que el PDF solo menciona como región.

### 3.4 Nosotros
- **Cultura, misión, visión y valores** con la definición completa de cada valor (Calidad, Integridad, Comprometimiento, Trabajo en Equipo). El texto del sitio es más largo que el del PDF y es el que se usa.
- **Política de la Calidad** y **Política Ambiental**, con firmas.
- **Talento humano:** reclutamiento enfocado en excelencia; valores de comprometimiento, integridad, calidad, trabajo en equipo, dignidad y ética. CV a **rrhh@indigoenergyint.com**.
- **Desarrollo profesional:** formación constante, cursos y capacitaciones.
- **SIAHO** (Seguridad Industrial, Ambiente e Higiene Ocupacional): equipo especializado, aplica las políticas en la empresa y en cada proyecto, trabaja con normas internacionales.
- **Clientes y aliados:** hoy solo hay logos de la refinadora costarricense (RECOPE) y otro más.

### 3.5 Contacto y redes
- Teléfono **+58 212 819.42.00** y correo **contacto@indigoenergyint.com** (coinciden con el PDF; el correo del PDF tenía un typo).
- **rrhh@indigoenergyint.com** (solo para CVs).
- Instagram **@indigoenergyint** y LinkedIn **indigo-energy-international**.
- Imagen del RIF y una imagen de banderas en el pie (presencia por países).
- El pie dice "© 2025 Indigo Energy International C.A." con "20 años en el mercado".

## 4. Conflictos y datos por confirmar con el cliente

| Tema | Sitio actual | PDF | Qué hacer |
|---|---|---|---|
| **Potencia instalada** | "proyectos instalados **superiores a 2000 MW**" | "capacidad de **más de 1.300 MW**" | No publicar ninguna cifra hasta confirmar. Los cuatro proyectos de Venezuela suman 1.370 MW y los de Bolivia aportan 32 MW |
| **Antigüedad** | "20 años" y "más de 20 años" (el texto se contradice) | no la dice | Confirmar el año de fundación |
| **Tratamiento de agua** | página aparte, pero no listada en "Áreas de negocio" del home | sector propio | Mantenerlo como sector propio |
| **Ubicación de El Alto** | el sitio lista "Planta El Alto" en Bolivia y "Plantel El Alto" en Costa Rica | igual | Dos proyectos distintos con el mismo nombre; distinguirlos con el país |
| **Ubicación de Josefa Camejo** | Paraguaná, Edo. Falcón | Punto Fijo, Edo. Falcón | Ambos son válidos; confirmar cuál usar |
| **Tanques La Garita** | 4 tanques de 8.000 m³ (50.000 bbl) y, en otro párrafo, "25 mbls" | 2 de 50.000 bbl de gasolina y 2 de diésel | El sitio se contradice dentro de la misma ficha; usar 50.000 bbl por tanque tras confirmar |
| **Fichas** | tres URLs con nombre de plantilla (`metal-industry`, `warehouse-industry`, `plantilla-proyectos`) | — | Descartar `warehouse-industry` y `plantilla-proyectos`; redirigir `metal-industry` a La Garita |
| **Certificaciones ISO** | "tenemos certificaciones internacionales" (sin mostrarlas) | certificados vencidos | Pedir los vigentes |

## 5. Cómo cambia el enfoque

La reunión pidió ampliar la forma en que Indigo presenta sus servicios, "evitando que el sitio quede centrado únicamente en la categoría IPC", con un lenguaje más moderno y fluido.

| Hoy | En el sitio nuevo |
|---|---|
| "Empresa venezolana con 20 años, especializada en IPC" | Indigo como **proveedor global de soluciones**, con IPC como una de sus capacidades |
| Cuatro servicios bajo el título "Ingeniería, Procura y Construcción" | **Servicios y soluciones**: el ciclo completo (ingeniería, procura, construcción, puesta en marcha) más tecnología, SIAHO, calidad y capacitación |
| Tres áreas de negocio, con agua escondida | **Cuatro sectores** con alcances: Energía, Petróleo y Gas, Agua, Infraestructura |
| "Líderes en IPC en la región" | Presencia **internacional** concreta: Venezuela, Bolivia, Costa Rica, Curazao, Arabia Saudita, México y Oriente Medio, respaldada por proyectos reales |
| Sin empresas del grupo | Se mantiene así: no se menciona grupo ni otras empresas |
| Fichas de proyecto pobres | Proyectos con cliente, fecha, alcance, capacidad y, donde exista, impacto |
| Contacto con un correo y un teléfono | Formulario, datos y mapa; correo de RR. HH. aparte |
| Mensaje de "ingeniería" | Mensaje de **soluciones, servicios y resultados** con cifras verificables |

## 6. Imágenes y logos reutilizables

Las fotos del sitio actual (Generación de electricidad, Petróleo y Gas, Infraestructura, Vías terrestres, portadas de proyectos) son de **baja resolución** (300 a 600 px). Sirven como referencia, no como fotos finales del hero. Hay que pedir originales.

- Logo en blanco (`Logo-Indigo-blanco-1024x246.png`), logo de color y versión móvil, en PNG. Falta el **SVG vectorial**.
- 11 logos de software en Tecnología y 2 logos en Clientes; hay que pedir autorización y versiones limpias antes de mostrarlos.

## 7. Qué se descarta o se reescribe

- Los números 01 a 04 de los servicios y los "Read More" repetidos.
- La mezcla de español e inglés en los menús del sitio actual ("Read More", "Ver +").
- Los textos que repiten "IPC" como definición de la empresa.
- Las URLs `/portfolio/<nombre-de-plantilla>/` y la página 404 `/14283-2/`.
