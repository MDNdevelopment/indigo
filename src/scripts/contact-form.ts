// Formulario de contacto. Sin endpoint (hosting aún sin definir) arma un correo con los datos; con endpoint lo envía por POST.
export {};

function bind() {
  document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach((form) => {
    if (form.dataset.bound) return;
    form.dataset.bound = '1';
    form.addEventListener('submit', (e) => {
      const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');
      if (honeypot?.value) return e.preventDefault();
      const to = form.dataset.mailto;
      if (!to) return; // POST normal al endpoint
      e.preventDefault();
      const lines = Array.from(form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('[data-label]'))
        .filter((el) => el.value.trim())
        .map((el) => `${el.dataset.label}: ${el.value.trim()}`);
      const subject = encodeURIComponent(form.dataset.subject ?? '');
      const body = encodeURIComponent(lines.join('\n'));
      form.querySelector<HTMLElement>('[data-form-note]')?.removeAttribute('hidden');
      location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    });
  });
}

document.addEventListener('astro:page-load', bind);
