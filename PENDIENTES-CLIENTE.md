# Pendientes del cliente (Indigo Energy International)

Lo que necesitamos que Juan Barone o Jennyfer Arias nos envíen o confirmen. Actualizado el 15 oct 2026. La entrega tentativa (1 de noviembre de 2026) cuenta desde que recibamos los accesos y esta información.

## 1. Accesos

- [ ] **Hosting, panel de control y SSL.** Aún sin definir dónde se publicará el sitio estático.
- [ ] **Accesos al WordPress actual** (indigoenergyint.com), para hacer el cambio sin cortes y mantener las redirecciones.
- [ ] **Dominio:** quién administra el DNS y puede apuntarlo al nuevo hosting.

## 2. Datos que hay que confirmar

- [ ] **Potencia instalada.** El sitio actual dice "más de 2000 MW" y el PDF "más de 1.300 MW". No publicamos ninguna cifra hasta saber cuál es.
- [ ] **Año de fundación.** El sitio actual dice "20 años" y "más de 20 años" en distintos textos.
- [ ] **Dirección oficial.** El PDF trae dos: El Rosal (Av. Tamanaco con calle Sorocaima, Edif. Centro Empresarial El Rosal, piso 7) y Chacao (Av. Francisco de Miranda, Edif. Centro Empresarial Galipán, Torre C, piso 7).
- [ ] **Correo de contacto.** El PDF escribe "indigoeneryint" (con typo); confirmar que es contacto@indigoenergyint.com. Confirmar también rrhh@indigoenergyint.com.
- [ ] **Quién responde el formulario de contacto** y a qué correos debe llegar.
- [ ] **Redes sociales:** que Instagram (@indigoenergyint) y LinkedIn (indigo-energy-international) sean las oficiales.
- [ ] **Presencia en México y Oriente Medio:** qué proyectos o sedes se pueden mencionar (hoy solo se citan como presencia, sin detalle).

## 3. Certificaciones

- [ ] **Certificados ISO 9001:2015 e ISO 14001:2015 vigentes.** Los del PDF vencieron en 2024 (9001) y 2025 (14001). Mientras tanto la página de certificaciones solo tiene texto, sin imágenes de certificados.
- [ ] **Confirmar la frase "certificado ISO 14001 desde 2019"** que trae el sitio actual.
- [ ] **Certificado de IQNet** vigente.

## 4. Proyectos: datos que faltan o se contradicen

Años y clientes que no tenemos (hoy esos datos no se muestran en la ficha):

| Proyecto | Falta |
|---|---|
| Planta Ezequiel Zamora | año, cliente |
| Planta Alberto Lovera | año, cliente |
| Planta San Diego de Cabrutica | año, cliente |
| Sistema de gas SINOVENSA | año, cliente |
| Planta El Alto (Bolivia) | año |
| Doble vía Río Seco–Huarina | año |
| Tanques Senkata, Santa Cruz y Oruro | año |
| Tanques Jet A-1 Barrancas | año |
| Hotel Spa IKIN | cliente |

Contradicciones entre el PDF y el sitio actual:

- [ ] **Josefa Camejo:** ¿Paraguaná o Punto Fijo (Edo. Falcón)? Ambos aparecen.
- [ ] **Tanques La Garita:** el sitio actual dice "4 tanques de 8.000 m³ (50.000 bbl)" y en otro párrafo "25 mbls". El PDF dice 2 de gasolina y 2 de diésel de 50.000 bbl. Confirmar capacidades.
- [ ] **Tanques Jet A-1 Barrancas:** está en el PDF pero no tiene ficha en el sitio actual; revisar los datos y pedir fotos.
- [ ] **¿Hay proyectos más recientes** que el sitio actual no muestra?

## 5. Imágenes y logos

- [ ] **Logo en vectorial (SVG).** Hoy usamos una vectorización propia del PNG; preferimos el original.
- [ ] **Fotos en alta resolución** de los proyectos, plantas y equipo. Las del PDF y las del sitio actual son de 300 a 600 px y se ven pixeladas en los headers de pantalla completa.
- [ ] **Fotos propias de los proyectos de Arabia Saudita, Hotel IKIN y Curazao** (las que tenemos son pequeñas).
- [ ] **Logos de clientes que se puedan mostrar** (CORPOELEC, YPFB, RECOPE, ABC, Refinería Isla, etc.) y autorización para publicarlos. Hoy se muestran como lista de nombres.
- [ ] **Logos de software de la sección Tecnología** (el sitio actual muestra 11) y autorización para usarlos, en versión limpia.

## 6. Contenido

- [ ] **Qué hacer con las FAQs.** La página actual es relleno de la plantilla de WordPress; la descartamos. Si el cliente tiene preguntas frecuentes reales, las incluimos.
- [ ] **Revisión del inglés** por alguien del cliente o un nativo (la traducción es nuestra).
- [ ] **Firmas y fechas de las políticas** de calidad y ambiental (el sitio actual las muestra firmadas); confirmar si se publican y si siguen vigentes.
- [ ] **Equipo directivo:** si quieren mostrar nombres y cargos, necesitamos la lista y fotos.
- [ ] **Informe breve de MDN** sobre lo encontrado en el sitio actual (interno, no es del cliente).

## 7. Decisiones del cliente

- [ ] **Aprobación del hero del home** (hay tres opciones apiladas para comparar).
- [ ] **Aprobar la nueva estructura de páginas** (ver `SITEMAP-ACTUAL.md`) y que las URLs viejas redirijan a las nuevas.

## Medición y legal (Analytics y Search Console)

- [ ] **Google Analytics 4:** crear la propiedad y el flujo web de `indigoenergyint.com`; copiar el ID `G-XXXXXXXXXX` a `site.analytics.gaId` en `src/config/site.ts`. Hasta entonces no se carga nada y el aviso de cookies no aparece.
- [ ] En GA4, marcar como evento clave `generate_lead` y, si aplica, `phone_click` / `email_click`. Probar en DebugView aceptando cookies.
- [ ] **Search Console:** añadir propiedad de *Dominio* y verificar con registro TXT en el DNS (lo recomendado). Si no se controla el DNS, usar prefijo de URL y pegar la etiqueta en `site.searchConsole.verification`. Enviar `sitemap-index.xml` y vincular con GA4.
- [ ] El cliente (o su abogado) debe **revisar las políticas** de privacidad y cookies; son textos base. Confirmar el proveedor de hosting y, si el formulario pasa a guardar datos en servidor (`contacto.php`), cambiar `site.legal.formDestination` a `'server'` y actualizar la política.
