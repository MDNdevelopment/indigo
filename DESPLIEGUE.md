# Despliegue automático: VPS de MDN → hosting del cliente (CWP)

> Estado: IP del VPS ya entregada al cliente para el firewall. Faltan los accesos FTP y la confirmación de qué protocolos permite el servidor. No pegar credenciales en este archivo.

## 1. Flujo

```
push a main (GitHub) ──webhook──▶ VPS de MDN ──▶ npm ci + astro build ──▶ dist/ ──FTPS/SFTP──▶ hosting CWP
```

El VPS construye el sitio y sube solo lo que cambió. Nadie sube archivos a mano.

## 2. Pendientes con el cliente

- [ ] **IP del VPS autorizada** en su firewall (puertos de FTP/SFTP además del 2083 y el WordPress).
- [ ] **Cuenta FTP dedicada** para el despliegue (crearla en CWP), con la raíz limitada a la carpeta destino. No usar el usuario principal `Indigo`.
- [ ] Confirmar qué admite el servidor: **FTPS (explícito, puerto 21)** o **SFTP (puerto 22)**. Preferir SFTP/SSH si está abierto; si no, FTPS. **Nunca FTP plano.**
- [ ] Ruta de cada entorno:
  - Pruebas: carpeta de `des.indigoenergyint.com`.
  - Producción: `public_html` (hoy tiene el WordPress).
- [ ] Servidor web (Apache o Nginx) para saber dónde van las redirecciones 301.
- [ ] Respaldo completo del WordPress actual **antes** del primer despliegue en producción.

Recordatorio del cliente: **no modificar configuración ni accesos sin su autorización.** El despliegue solo toca archivos del sitio dentro de su carpeta destino.

## 3. Entornos

| Rama | Destino | Cuándo |
|---|---|---|
| `main` | `des.indigoenergyint.com` | Cada push. Es la vista de revisión del cliente. |
| tag `v*` (o rama `prod`) | `indigoenergyint.com` | Solo con visto bueno del cliente. |

Decisión recomendada: **main despliega a `des.`**, y producción se despliega con un tag manual. Así el sitio actual no se pisa por accidente. Si el usuario prefiere que `main` vaya directo a producción, se cambia solo el destino del script, pero hacerlo únicamente después de la migración.

## 4. Preparar el VPS

1. Usuario sin privilegios (`deploy`) para el servicio.
2. Node LTS (el mismo que usa el proyecto) y `lftp` (`apt install lftp`) o `rsync` si hay SSH.
3. Repo clonado en `/srv/indigo` con **deploy key** de solo lectura en GitHub.
4. Receptor del webhook (`webhook` de adnanh, o un script mínimo) escuchando detrás de HTTPS en el VPS:
   - Verifica la firma `X-Hub-Signature-256` con un secreto.
   - Solo actúa si el `ref` es `refs/heads/main` (o el tag).
   - Ejecuta `deploy.sh` con un candado (`flock`) para que dos pushes seguidos no se pisen.
5. Variables en `/etc/indigo-deploy.env` (permisos 600, dueño `deploy`):

```
FTP_HOST=
FTP_USER=
FTP_PASS=
FTP_PROTO=ftp          # ftp (con TLS forzado) o sftp
REMOTE_DIR=/des.indigoenergyint.com
```

Alternativa al webhook: instalar un **runner autoalojado de GitHub Actions** en el VPS y usar un workflow que corra en él. Da logs y reintentos en la interfaz de GitHub; el costo es un servicio más en el VPS.

## 5. Script de despliegue (`deploy.sh`)

```bash
#!/usr/bin/env bash
set -euo pipefail
source /etc/indigo-deploy.env
cd /srv/indigo

exec 9>/tmp/indigo-deploy.lock
flock -n 9 || { echo "Despliegue en curso"; exit 0; }

git fetch --prune origin
git reset --hard origin/main
npm ci
npm run build                      # genera dist/

test -f dist/index.html            # no subir si el build salió vacío

lftp -u "$FTP_USER","$FTP_PASS" "$FTP_PROTO://$FTP_HOST" <<EOF
set ftp:ssl-force true
set ftp:ssl-protect-data true
set ssl:verify-certificate yes
set net:max-retries 3
mirror --reverse --only-newer --parallel=4 --verbose \
  --exclude-glob .htaccess \
  --exclude-glob config-mail.php \
  dist/ $REMOTE_DIR
bye
EOF
```

Notas:
- **Sin `--delete`** al principio. En producción hay WordPress en la raíz; borrar remoto sin cuidado es destructivo. Activar `--delete` solo en `des.`, con exclusiones claras, cuando el flujo esté probado.
- `.htaccess` (o la config de Nginx) se gestiona aparte: lleva las redirecciones 301 de `CONTENIDO-ACTUAL.md` y las cabeceras de caché. Si va versionado, subirlo deliberadamente, no por el mirror general.
- `config-mail.php` vive fuera de `public_html` y no pasa por el despliegue (ver `FORMULARIO-CONTACTO.md`).
- `contacto.php` y la librería PHPMailer sí van en el build (colocarlos en `public/` para que Astro los copie a `dist/`).
- Con `sftp` el bloque de `set ftp:*` no aplica; usar clave SSH en lugar de clave de texto.

## 6. Seguridad

- Secretos solo en `/etc/indigo-deploy.env` y en los secretos de GitHub; nunca en el repo ni en logs.
- Webhook con firma verificada y limitado por IP de GitHub si es posible.
- Cuenta FTP del despliegue con permisos mínimos y raíz enjaulada.
- Al terminar el proyecto, el cliente debe **rotar** las claves del WordPress y del CWP (se compartieron por correo/chat).
- Registrar cada despliegue (fecha, commit, resultado) en un log del VPS; avisar por correo o Slack si falla.

## 7. Verificación tras cada despliegue

1. `curl -I https://des.indigoenergyint.com` responde 200.
2. Revisar que `/es/` y `/en/` cargan y que los assets con hash se sirven.
3. Probar el formulario (ver `FORMULARIO-CONTACTO.md`).
4. Antes de entregar: `check-sello.mjs`, `npm run build`, `npx astro check` y `audit-visual.mjs` (flujo del proyecto).

## 8. Paso a producción (checklist)

- [ ] Visto bueno del cliente sobre `des.`.
- [ ] Respaldo completo del WordPress (archivos y base de datos).
- [ ] Redirecciones 301 cargadas y probadas.
- [ ] SSL vigente y redirección HTTP→HTTPS.
- [ ] `robots.txt`, `sitemap.xml` y canonicals apuntando a `indigoenergyint.com`.
- [ ] Mover el WordPress a una carpeta de respaldo (no borrarlo) y desplegar con el tag.
- [ ] Revisar Search Console y el formulario en producción.
