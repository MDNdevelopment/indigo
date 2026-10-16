# Formulario de contacto: plan de envío de correo

> Estado: pendiente de datos del cliente. No hay credenciales en este archivo; no ponerlas nunca en el repo.

## 1. Contexto

- El sitio es **Astro estático**: el navegador no puede enviar correo ni guardar credenciales SMTP.
- El hosting del cliente es **CWP (Control Web Panel)** en `181.225.44.60`, con PHP. CWP trae su propio servidor de correo (Postfix + Dovecot).
- Por eso el formulario hace `POST` a un **`contacto.php`** (PHPMailer) alojado en el mismo servidor, que envía por SMTP.

## 2. Pendientes con el cliente

- [ ] **¿Dónde vive el correo del dominio?** Comprobar con `dig MX indigoenergyint.com`.
  - MX apunta al propio servidor: se usa el SMTP de CWP.
  - MX apunta a Google Workspace o Microsoft 365: se usa su SMTP (contraseña de aplicación en Google; en Microsoft hay que activar SMTP AUTH).
- [ ] **Buzón dedicado** para el sistema, p. ej. `web@indigoenergyint.com` (no usar la clave personal de nadie).
- [ ] **Quién recibe las consultas** y a qué correos llegan (puede ser más de uno).
- [ ] **SPF, DKIM y DMARC** del dominio. En CWP se genera el DKIM; sin esto los mensajes caen en spam.
- [ ] Confirmar la versión de **PHP** y que `proc_open`/sockets no estén bloqueados.

## 3. Datos SMTP (completar cuando los den)

| Dato | Valor |
|---|---|
| Host | `mail.indigoenergyint.com` (por confirmar) |
| Puerto | 465 (SSL) o 587 (STARTTLS) |
| Usuario | por confirmar |
| Clave | **no escribir aquí** |
| Remitente (`From`) | `web@indigoenergyint.com` |
| Destinatario(s) | por confirmar |

## 4. Diseño

### Frontend (Astro)
- Formulario con campos: nombre, empresa, correo, teléfono, asunto/sector de interés, mensaje.
- Todo el texto visible por i18n (ES/EN), incluidos errores y confirmación.
- Envío con `fetch` a `/contacto.php`; **debe funcionar también sin JS** (`<form method="post" action="/contacto.php">` con redirección a una página de gracias).
- Accesibilidad: etiquetas, `aria-live` para el estado, foco en el mensaje de error.
- Campo honeypot oculto (no con `display:none` que rompa lectores; usar `tabindex=-1` + `aria-hidden`).

### Backend (`contacto.php`)
- PHPMailer (copiar la librería al servidor, sin Composer en producción si no está).
- Validar y sanear todo: longitud máxima, `FILTER_VALIDATE_EMAIL`, rechazar saltos de línea en cabeceras (inyección de cabeceras).
- `From` = buzón del dominio; **`Reply-To` = correo del visitante**.
- Anti-spam: honeypot + límite por IP (archivo o sesión) + tiempo mínimo de relleno.
- Responder JSON si la petición es `fetch` y redirección si es un `POST` normal.
- Registrar errores en un log fuera de `public_html`; nunca mostrar detalles SMTP al visitante.

### Configuración y secretos
- Credenciales en `config-mail.php` **fuera de `public_html`** (un nivel arriba), con permisos 600.
- El archivo de config **no está en el repo** ni lo toca el despliegue automático. Se crea una vez a mano en el servidor.
- El CI/CD solo sube `contacto.php` y la librería; ver `DESPLIEGUE.md`.

## 5. Pruebas antes de entregar

1. Envío real desde `des.indigoenergyint.com` al destinatario de prueba.
2. Revisar que no caiga en spam (cabeceras SPF/DKIM = pass; probar con mail-tester).
3. Caso sin JS, caso con honeypot lleno, caso con correo inválido, caso con mensaje largo.
4. Verificar `Reply-To` y que ES/EN lleguen con el asunto correcto.

## 6. Alternativa si no se puede usar PHP

Un servicio externo (Resend, Brevo o Web3Forms) llamado desde una función serverless. Requiere cuenta y dominio verificado; solo si el cliente no permite PHP.
