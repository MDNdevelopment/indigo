# Sitemap del sitio actual (indigoenergyint.com) vs. sitio nuevo

Fuente: `https://indigoenergyint.com/sitemap.xml` (Yoast SEO), consultado el 15 oct 2026. Son 7 sub-sitemaps y unas 130 URLs, de las cuales **unas 95 son contenido real**; el resto son plantillas internas de Elementor (header/footer), categorías y duplicados.

El sitio actual es bilingüe con **páginas EN sueltas con prefijo `en-`** (no hay `/en/`). El nuevo usa ES en la raíz y EN en `/en`.
> **Estado (15 oct 2026): implementado.** El sitio nuevo ya tiene una página para cada tema del viejo y `public/_redirects` redirige con 301 las 130 URLs viejas (verificado contra el sitemap). Las tablas de abajo describen el análisis previo; el mapa final está en la sección "Estructura final" al cierre.


## Páginas del sitio nuevo (build actual)

`/`, `/nosotros`, `/sectores`, `/servicios`, `/calidad`, `/contacto`, `/proyectos` y 14 fichas `/proyectos/<slug>`; todo duplicado en `/en/...`.

## 1. Páginas (`page-sitemap.xml`)

| URL actual | Qué es | Destino en el nuevo | Estado |
|---|---|---|---|
| `/` | Home | `/` | Cubierto |
| `/en-home/` | Home EN | `/en` | Cubierto |
| `/quienes-somos/` | Quiénes somos | `/nosotros` | Cubierto |
| `/en-aboutus/` | EN | `/en/nosotros` | Cubierto |
| `/cultura-empresarial/` | Misión, visión, valores | `/nosotros` | Verificar que la sección exista |
| `/en-corporate-culture/` | EN | `/en/nosotros` | Ídem |
| `/clientes-aliados-y-estrategicos/` | Clientes | `/nosotros` | Verificar (faltan logos del cliente) |
| `/en-clients-strategic/` | EN | `/en/nosotros` | Ídem |
| `/negocios/`, `/area-de-negocios/` | Resumen de áreas | `/sectores` | Cubierto |
| `/en-business/` | EN | `/en/sectores` | Cubierto |
| `/energia/`, `/en-energy/` | Energía | `/sectores` | Sin página propia (ancla) |
| `/oil-gas/`, `/oil-gas-2/`, `/en-oil-gas/` | Petróleo y gas (hay 3 URLs) | `/sectores` | Sin página propia (ancla) |
| `/tratamiento-de-agua/`, `/en-water-treament/` | Agua | `/sectores` | Sin página propia (ancla) |
| `/infraestructura/` | Infraestructura | `/sectores` | Sin página propia (ancla) |
| `/construccion-civil/`, `/en-civil-construction/` | Construcción civil | `/sectores` (infraestructura) | Sin página propia |
| `/vias-terrestres/`, `/en-roadways/` | Vías | `/sectores` (infraestructura) | Sin página propia |
| `/infraestructura-hotelera/`, `/en-hotel-infraestructure/` | Hotelería | `/sectores` (infraestructura) | Sin página propia |
| `/ingenieria/`, `/en-engineering/` | Ingeniería | `/servicios` | Sin página propia |
| `/procura/`, `/en-procurement/` | Procura | `/servicios` | Sin página propia |
| `/construccion/`, `/en-construction/` | Construcción | `/servicios` | Sin página propia |
| `/comisionamiento/`, `/en-commissioning/` | Puesta en marcha | `/servicios` | Sin página propia |
| `/soluciones-tecnologicas/`, `/en-technology/` | Tecnología | `/servicios#tecnologia` | Cubierto como sección (sin página propia) |
| `/proyectos/`, `/portfolios/`, `/en-projects/` | Listado de proyectos | `/proyectos` | Cubierto |
| `/costa-rica/`, `/curazao/`, `/arabia-saudita/` | Páginas por país | `/proyectos` (filtro por país) | Sin página propia |
| `/politicas/`, `/en-quality-policy/` | Política de calidad | `/calidad` | Cubierto |
| `/politica-ambiental/`, `/en-enviromental-policy/` | Política ambiental | `/calidad` | Cubierto |
| `/siaho/`, `/en-siaho/` | SIAHO | `/calidad` | Cubierto como sección |
| `/norma-iso-9001-gestion-de-calidad/`, `/en-iso-9001-sgc/` | ISO 9001 | `/calidad` | Cubierto (certificados vencidos: pedir vigentes) |
| `/iso14001/`, `/en-iso-14001-sga/` | ISO 14001 | `/calidad` | Idem |
| `/iqnet/`, `/en-iqnet/`, `/en-certifications/` | IQNet y certificaciones | `/calidad` | Cubierto |
| `/talento-humano/`, `/en-human-talent/` | Talento humano | `/nosotros#talento` | Cubierto como sección |
| `/desarrollo-profesional/`, `/professional-development/` | Desarrollo profesional | `/nosotros#talento` | Cubierto como sección |
| `/contacto/`, `/en-contact/` | Contacto | `/contacto` | Cubierto |
| `/faqs/` | Preguntas frecuentes | Sin destino | **Decidir** (descartar o añadir) |
| `/pagina-no-encontrada/` | 404 | `/404` | Cubierto |
| `/en-sinovensa/` | Página suelta de SINOVENSA | `/en/proyectos/sistema-de-gas-sinovensa` | 301 |

## 2. Proyectos (`portfolio-sitemap.xml`): 14 proyectos reales

Los 14 existen en el nuevo. Las URLs EN `/portfolio/en-*` y las `/en-<slug>/` de `page-sitemap` son duplicados en inglés del mismo proyecto.

| Proyecto | URL actual (ES) | Slug nuevo |
|---|---|---|
| Doble vía Río Seco–Huarina | `/portfolio/proyecto-de-vialidad-y-construccion-doble-via-rio-seco-huarina/` | `doble-via-rio-seco-huarina` |
| Planta El Alto (Bolivia) | `/portfolio/warehouse-industry/` (slug engañoso) | `planta-el-alto-bolivia` |
| Tanques La Garita (Costa Rica) | `/portfolio/metal-industry/` (slug engañoso) | `tanques-la-garita` |
| Tanques Plantel El Alto (Costa Rica) | `/portfolio/ipc-tanques-de-almacenamiento-de-combustibles-y-llenadero-el-alto/` | `tanques-el-alto-costa-rica` |
| Tanques Santa Cruz | `/portfolio/expansion-patio-tanques-de-combustible-planta-santa-cruz-bolivia/` y `...-2/` | `tanques-santa-cruz` |
| Tanques Senkata | solo EN en el sitemap (`en-fuel-tank-patio-expansion-senkata-plant-bolivia`) | `tanques-senkata` |
| Tanques Oruro | `/portfolio/expansion-patio-tanques-de-combustible-oruro/` | `tanques-oruro` |
| Tanques Jet A-1 Barrancas | sin URL propia clara | `tanques-jet-a1-barrancas` |
| Sistema de gas SINOVENSA | `/portfolio/sinovensa-venezuela-1/` | `sistema-de-gas-sinovensa` |
| PGT San Diego de Cabrutica | `/portfolio/pgt-san-diego-de-cabrutica-anzoategui/` | `planta-san-diego-de-cabrutica` |
| PGT Ezequiel Zamora | `/portfolio/pgt-ezequiel-zamora-centro/` | `planta-ezequiel-zamora` |
| PGT Josefa Camejo | `/portfolio/pgt-josefa-camejo-venezuela-2/` | `planta-josefa-camejo` |
| PGT Alberto Lovera | `/portfolio/plantilla-proyectos/` (slug engañoso) | `planta-alberto-lovera` |
| Planta de alimentos, Arabia Saudita | `/portfolio/ipc-para-planta-de-procesamiento-de-alimentos/` | `planta-de-alimentos-arabia-saudita` |
| Hotel Spa IKIN | `/portfolio/hotel-spa-ikin-margarita/` | `hotel-spa-ikin` |
| Crudo Boscán, Curazao | `/portfolio/ingenieria-para-manejo-de-crudo-en-campo-boscan-y-facilidades-de-almacenamiento/` | `crudo-boscan-curazao` |

Los slugs `metal-industry`, `warehouse-industry` y `plantilla-proyectos` son restos de plantilla que ahora apuntan a proyectos reales (confirmado por el `<title>` de cada uno). Necesitan 301 explícito.

## 3. Servicios (`service-sitemap.xml`)

| URL actual | Destino nuevo |
|---|---|
| `/service/`, `/service/ingenieria-civil/`, `/service/en-engineering/` | `/servicios` |
| `/service/procura/`, `/service/en-procurement/` | `/servicios` |
| `/service/construccion/`, `/service/en-construction/` | `/servicios` |
| `/service/comisionamiento/`, `/service/en-commissioning/` | `/servicios` |

## 4. Ruido que no necesita página

- `/header/*` y `/footer/*` (6 URLs): plantillas internas de Elementor.
- `/portfolio-category/*` y `/service-category/*` (10 URLs): taxonomías vacías de WordPress.
- `/portfolio/`, `/service/`: archivos de listado, van a `/proyectos` y `/servicios`.

## 5. Hallazgos

1. **No hay redirecciones 301 hechas todavía.** No existe `public/_redirects` y `netlify.toml` no tiene reglas de redirect. Con ~95 URLs viejas indexadas, hay que crearlas antes del lanzamiento (Netlify `_redirects`). Eso es lo más importante pendiente.
2. **El nuevo sitio es más plano que el mapa de `CONTENIDO-ACTUAL.md`** (que preveía `/sectores/energia`, `/servicios/ingenieria`, `/nosotros/talento`...). Hoy solo hay páginas únicas. Decidir si se crean sub-páginas o se redirige a anclas (`/sectores#energia`). Las páginas de energía, petróleo y gas, agua e infraestructura, y las de ingeniería, procura, construcción y puesta en marcha, hoy tienen URL propia con posicionamiento SEO.
3. **Sin equivalente:** FAQs y las páginas por país (Costa Rica, Curazao, Arabia Saudita). Talento, Tecnología y SIAHO existen como secciones dentro de otras páginas, no como URL propia. Misión/visión/valores y clientes no los verifiqué en el código.
4. **Proyectos:** los 14 están cubiertos.
5. El sitio nuevo no tiene página de grupo ni menciona otras empresas: el sitio actual tampoco lo hace.
6. Lista de URLs viejas en inglés con prefijo `en-` (unas 35): cada una necesita 301 a su equivalente `/en/...`.

## 6. Siguiente paso sugerido

Decidir con el cliente (a) si se crean sub-páginas de sectores y servicios para conservar SEO, y (b) qué hacer con FAQs y las páginas por país. Después genero `public/_redirects` con todas las URLs viejas.

## Estructura final del sitio nuevo

| Sección | Páginas |
|---|---|
| Inicio | `/` |
| Nosotros | `/nosotros`, `/nosotros/cultura`, `/nosotros/talento` (incluye desarrollo profesional), `/nosotros/clientes` |
| Servicios | `/servicios`, `/servicios/ingenieria`, `/procura`, `/construccion`, `/puesta-en-marcha`, `/tecnologia` |
| Sectores | `/sectores`, `/sectores/energia`, `/petroleo-gas`, `/agua`, `/infraestructura` (incluye vialidad, construcción civil y hotelería) |
| Proyectos | `/proyectos`, 14 fichas `/proyectos/<slug>`, `/proyectos/pais/<pais>` (venezuela, bolivia, costa-rica, curazao, arabia-saudita) |
| Calidad | `/calidad`, `/calidad/politica-de-calidad`, `/politica-ambiental`, `/siaho`, `/certificaciones` (ISO 9001, ISO 14001, IQNet) |
| Contacto | `/contacto` |

Todas existen también en inglés bajo `/en`. Decisiones:

- **FAQs se descarta.** La página vieja es relleno de la plantilla de WordPress (reseñas del tema, nada de Indigo); redirige al inicio.
- **Construcción civil, vías terrestres e infraestructura hotelera** se funden en `/sectores/infraestructura`, que ya los cubre como grupos de alcance.
- **Certificaciones:** el texto sale del sitio actual. Pendiente pedir los certificados vigentes antes de mostrarlos como imagen.
