// Única fuente de verdad de los datos del negocio. Los textos por idioma viven en src/i18n.
// Datos tomados del PDF corporativo y del sitio actual (ver CONTENIDO-ACTUAL.md). Lo marcado como pendiente falta confirmarlo con el cliente.
export const site = {
  name: 'Indigo Energy International',
  shortName: 'Indigo',
  legalName: 'Indigo Energy International, C.A.',
  rif: 'J-29500043-0',
  url: 'https://indigoenergyint.com',
  // Rubro de schema.org
  schemaType: 'Corporation',
  phone: '+58 212 819 4200',
  email: 'contacto@indigoenergyint.com',
  hrEmail: 'rrhh@indigoenergyint.com',
  // PENDIENTE: el PDF trae dos direcciones (El Rosal en la contraportada y Chacao en los certificados ISO). Confirmar cuál es la oficial.
  address: {
    street: 'Av. Tamanaco con calle Sorocaima, Edif. Centro Empresarial El Rosal, Piso 7, Urb. El Rosal',
    city: 'Caracas',
    region: 'Distrito Capital',
    postalCode: '1060',
    country: 'VE',
  },
  social: {
    instagram: 'https://www.instagram.com/indigoenergyint/',
    linkedin: 'https://www.linkedin.com/company/indigo-energy-international/',
  } as Record<string, string | null>,
  // PENDIENTE: depende del hosting (Netlify Forms, PHP en cPanel o un servicio externo). Sin endpoint, el formulario abre el correo.
  formEndpoint: null as string | null,
  // Google Analytics 4: pegar el ID (G-XXXXXXXXXX) cuando el cliente cree la propiedad. Sin ID no se carga nada.
  // consent 'banner' = aviso de cookies activo; Analytics no guarda cookies hasta que la persona acepta.
  analytics: { gaId: '', consent: 'banner' as 'granted' | 'banner' },
  // Search Console: solo si se verifica con etiqueta HTML (valor de content="..."). Con verificación por DNS dejar null.
  searchConsole: { verification: null as string | null },
  // Políticas de privacidad y cookies. Son textos base: el cliente debe revisarlos.
  legal: {
    updated: { es: '16 de octubre de 2026', en: 'October 16, 2026' },
    // PENDIENTE: confirmar con el cliente el proveedor de hosting y si el formulario guardará datos en servidor.
    // Hoy el formulario abre el correo del visitante (mailto), sin guardar nada.
    formDestination: 'mailto' as 'mailto' | 'server',
  },
  // Crédito de MDN en el footer. Poner en false para proyectos personales.
  credit: true,
} as const;

export type Lang = 'es' | 'en';
