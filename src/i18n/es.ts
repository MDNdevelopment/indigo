// Textos en español. Los datos de proyectos, servicios y sectores viven en src/data.
// Los hrefs son rutas sin idioma; se localizan con localePath().
export const es = {
  lang: 'es',
  ogLocale: 'es_VE',
  tagline: 'Proveedor global de soluciones',
  description:
    'Indigo Energy International es un proveedor global de soluciones de ingeniería, procura, construcción y puesta en marcha para energía, petróleo y gas, agua e infraestructura. Sede en Caracas y proyectos en Venezuela, Bolivia, Costa Rica, Curazao y Arabia Saudita.',

  common: {
    skip: 'Saltar al contenido',
    brandHome: 'Indigo Energy International, inicio',
    mainNav: 'Principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    expand: 'Mostrar subsecciones',
    langSwitch: 'EN',
    langSwitchLabel: 'View this page in English',
    phone: 'Teléfono',
    email: 'Correo',
    address: 'Dirección',
    seeMore: 'Ver más',
    all: 'Todos',
    contactUs: 'Escribirnos',
    viewProject: 'Ver proyecto',
    allProjects: 'Ver todos los proyectos',
    allServices: 'Ver todos los servicios',
    allSectors: 'Ver todos los sectores',
    relatedProjects: 'Proyectos en este sector',
    otherSectors: 'Otros sectores',
    inThisSector: 'En este sector',
    sectorSolutions: 'Soluciones en este sector',
    allSolutions: 'Ver todas las soluciones',
    seeSector: 'Ver el sector',
    otherQuality: 'Más sobre calidad, seguridad y ambiente',
    otherServices: 'Otros servicios',
    nextProject: 'Siguiente proyecto',
    backToProjects: 'Volver a proyectos',
    home: 'Inicio',
    legalRights: 'Todos los derechos reservados.',
    credit: 'Sitio web desarrollado por MDN Publicidad',
    ctaRoutes: {
      project: 'Tengo un proyecto',
      projectText: 'Cuéntanos el alcance y te decimos cómo podemos ayudarte.',
      call: 'Prefiero llamar o escribir',
    },
  },

  nav: {
    about: 'Nosotros',
    services: 'Servicios',
    solutions: 'Soluciones',
    sectors: 'Sectores',
    projects: 'Proyectos',
    quality: 'Calidad',
    allProjects: 'Todos los proyectos',
    contact: 'Contacto',
    cta: 'Solicitar propuesta',
  },

  footer: {
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    followTitle: 'Síguenos',
    quality: 'Calidad, seguridad y ambiente',
    careers: 'Trabaja con nosotros',
    rif: 'RIF',
  },

  // Los tres heros del home comparten este contenido mientras el cliente elige uno
  hero: {
    label: 'Lo que hacemos',
    slides: [
      {
        label: 'Soluciones',
        title: 'Soluciones globales para energía, industria e infraestructura',
        text: 'Ingeniería, procura, construcción y puesta en marcha a cargo de un mismo equipo, con proyectos en cinco países.',
        cta: 'Conocer Indigo',
        href: '/nosotros',
      },
      {
        label: 'Energía',
        title: 'Plantas de generación de hasta 450 MW',
        text: 'Centrales termoeléctricas con ingeniería, procura, construcción y puesta en marcha a cargo de un mismo equipo.',
        cta: 'Ver energía',
        href: '/sectores/energia',
      },
      {
        label: 'Petróleo y Gas',
        title: 'Patios de tanques de hasta 10.000 m³',
        text: 'Almacenamiento, bombeo y sistemas contra incendio para YPFB, RECOPE y Refinería Isla.',
        cta: 'Ver petróleo y gas',
        href: '/sectores/petroleo-gas',
      },
      {
        label: 'Infraestructura',
        title: 'Una doble vía de 56 km con 14 puentes',
        text: 'Vialidad, edificaciones industriales, complejos residenciales y obras hoteleras.',
        cta: 'Ver infraestructura',
        href: '/sectores/infraestructura',
      },
    ],
  },

  home: {
    band: {
      statement: 'Un mismo equipo para planificar, comprar, construir y poner en marcha.',
      facts: 'Plantas termoeléctricas, patios de tanques, carreteras y hoteles en cinco países: Venezuela, Bolivia, Costa Rica, Curazao y Arabia Saudita.',
    },
    services: {
      title: 'Servicios y soluciones',
      lead: 'Acompañamos el proyecto desde la idea hasta que la planta produce.',
      link: 'Ver todos los servicios',
    },
    sectors: {
      title: 'Sectores',
      link: 'Ver todos los sectores',
    },
    projects: {
      title: 'Obras destacadas',
      link: 'Ver todos los proyectos',
    },
    map: {
      title: 'Sede en Caracas, obras en América y Oriente Medio',
      lead: 'Ejecutamos proyectos en Venezuela, Bolivia, Costa Rica, Curazao y Arabia Saudita, y tenemos presencia en México y Oriente Medio.',
      home: 'Sede',
      aria: 'Mapa con la presencia de Indigo',
    },
    cta: {
      title: '¿Tienes un proyecto de energía, industria o infraestructura?',
      text: 'Cuéntanos el alcance y te decimos cómo podemos ayudarte.',
    },
  },

  steps: [
    {
      id: 'ingenieria',
      title: 'Ingeniería',
      text: 'Conceptual, básica y de detalle, con control sobre cada disciplina: civil, tuberías, electricidad, instrumentación, control y telecomunicaciones, mecánica y procesos.',
    },
    {
      id: 'procura',
      title: 'Procura',
      text: 'Compras nacionales e internacionales, licitaciones, inspección, logística, aduanas y nacionalización de equipos y materiales.',
    },
    {
      id: 'construccion',
      title: 'Construcción',
      text: 'Obras civiles y montajes electromecánicos con gerencia de contratistas, control de costos y de materiales, y planos As-Built.',
    },
    {
      id: 'puesta-en-marcha',
      title: 'Puesta en marcha',
      text: 'Pre-comisionamiento y comisionamiento documentados, supervisión y entrenamiento de los equipos de operación y mantenimiento.',
    },
  ],

  about: {
    meta: 'Quiénes somos, nuestra cultura y nuestro equipo.',
    title: 'Proveedor global de soluciones',
    intro: 'Empresa venezolana con sede en Caracas y proyectos en cinco países.',
    who: {
      statement:
        'Indigo Energy International reúne ingeniería, procura, construcción, puesta en marcha y servicios especializados para los sectores de energía, petróleo y gas, agua e infraestructura.',
      text: 'Nuestro equipo multidisciplinario está integrado por profesionales altamente cualificados. Tenemos sede en Caracas, Venezuela, y presencia en México, Bolivia, Costa Rica y Oriente Medio, parte de una estrategia de globalización que nos permite fortalecer la relación con socios y clientes.',
    },
    facts: {
      countries: 'países con proyectos',
      projects: 'proyectos en nuestro portafolio',
      clients: 'clientes en nuestros proyectos',
      disciplines: 'disciplinas de ingeniería en un mismo equipo',
    },
    culture: {
      title: 'Cultura corporativa',
      text: 'Impulsamos el liderazgo positivo, el compromiso, la responsabilidad y la pasión en nuestro equipo, siempre bajo estrictos estándares de calidad.',
      mission: {
        title: 'Misión',
        text: 'Proveer globalmente soluciones en el área de desarrollo industrial e infraestructura, con los más altos estándares de calidad, generando satisfacción a nuestros clientes, proveedores, colaboradores, accionistas y a la sociedad en general.',
      },
      vision: {
        title: 'Visión',
        text: 'Ser reconocida como empresa líder con estándares de clase mundial en la industria.',
      },
    },
    values: {
      title: 'Valores',
      items: [
        {
          title: 'Calidad',
          text: 'Es la excelencia en lo que se hace, estar abierto al cambio y al pensamiento global que contribuyan al mejoramiento continuo. Es una forma de ser y hacer, un reto diario que rige la toma de decisiones, la operación y la comercialización.',
        },
        {
          title: 'Integridad',
          text: 'El buen proceder humano y corporativo en todas las circunstancias. Es hacer lo correcto.',
        },
        {
          title: 'Comprometimiento',
          text: 'Es cumplir con lo planeado y hacer los mayores esfuerzos para superar las expectativas de cumplimiento de los compromisos, los objetivos de la empresa y las necesidades del cliente.',
        },
        {
          title: 'Trabajo en equipo',
          text: 'Es lograr soluciones compartidas, ser eficiente, estar abierto a nuevas ideas, reconocer que los problemas son complejos e involucran a diversas áreas y respetar las diferencias, en búsqueda de soluciones óptimas.',
        },
      ],
    },
    talent: {
      title: 'Talento humano',
      text: 'La principal fuente de valor de Indigo es su gente: ingenieros y proyectistas en procesos, mecánica, diseño civil, diseño eléctrico, telecomunicaciones, instrumentación y control, apoyados por equipos de procura, administración de contratos, calidad, SIAHO y finanzas.',
      growth: 'Fomentamos el crecimiento profesional con formación constante, cursos y capacitaciones para cada integrante del equipo.',
      cta: 'Si quieres sumarte, envía tu CV a',
      team: {
        title: 'Disciplinas de ingeniería en un mismo equipo',
        text: 'Seis disciplinas de ingeniería respaldadas por cinco áreas de apoyo, trabajando como un solo equipo.',
        engTitle: 'Ingeniería y proyectos',
        eng: ['Procesos', 'Mecánica', 'Diseño civil', 'Diseño eléctrico', 'Telecomunicaciones', 'Instrumentación y control'],
        supportTitle: 'Apoyo',
        support: ['Procura', 'Administración de contratos', 'Calidad', 'SIAHO', 'Finanzas'],
      },
    },
    sub: {
      title: 'Conoce más de Indigo',
      cultura: {
        title: 'Cultura corporativa',
        text: 'Misión, visión y los cuatro valores que guían cada decisión.',
        meta: 'Misión, visión y valores de Indigo Energy International.',
        intro: 'Misión, visión y los valores que guían cómo trabajamos.',
      },
      talento: {
        title: 'Talento humano',
        text: 'Cómo seleccionamos y desarrollamos a nuestro equipo, y cómo sumarte.',
        meta: 'Talento humano y desarrollo profesional en Indigo Energy International.',
        intro: 'Equipos experimentados y en formación constante.',
        developmentTitle: 'Desarrollo profesional',
        development: [
          'Entendemos de manera integral la importancia del desarrollo profesional de cada colaborador. Por eso fomentamos el crecimiento para impactar positivamente en la productividad y la efectividad de cada proyecto.',
          'Sumamos conocimientos y experiencias en todas las áreas, con formación constante a través de cursos y capacitaciones que impulsan la carrera de cada integrante del equipo.',
        ],
        hiring: 'Buscamos excelencia y calidad en cada proceso de reclutamiento y selección, para formar equipos con personal experimentado y altamente calificado en cada unidad técnica. Actuamos con comprometimiento, integridad, calidad, trabajo en equipo, dignidad y ética.',
      },
      clientes: {
        title: 'Clientes y aliados',
        text: 'Las empresas con las que hemos ejecutado proyectos.',
        meta: 'Clientes y aliados estratégicos de Indigo Energy International.',
        intro: 'Empresas públicas y privadas que han confiado en nuestros proyectos.',
      },
    },
    clients: {
      title: 'Clientes con los que hemos trabajado',
      projectOne: 'proyecto',
      projectMany: 'proyectos',
    },
    cta: {
      title: 'Hablemos de tu próximo proyecto',
    },
  },

  servicesPage: {
    meta: 'Ingeniería, procura, construcción, puesta en marcha y tecnología para proyectos de energía, petróleo y gas, agua e infraestructura.',
    title: 'Servicios y soluciones, de la ingeniería a la puesta en marcha',
    intro: 'Podemos ejecutar el proyecto completo o intervenir en la etapa que necesites.',
    includes: 'Qué incluye',
    others: 'Otros servicios',
    cta: {
      title: 'Definamos juntos la etapa que tu proyecto requiere',
      text: 'Te respondemos con una propuesta de alcance.',
    },
  },

  solutionsPage: {
    meta: 'Soluciones de ingeniería, procura y construcción de Indigo: {n} áreas en energía, petróleo y gas, agua, infraestructura e industria.',
    title: 'Soluciones para cada etapa de tu obra',
    intro: 'Estas son las {n} áreas donde aplicamos ingeniería, procura y construcción, agrupadas por sector.',
    jump: 'Ir a un sector',
    cta: {
      title: '¿Tu proyecto necesita alguna de estas soluciones?',
      text: 'Cuéntanos el alcance y te respondemos con una propuesta.',
    },
  },

  sectorsPage: {
    meta: 'Energía, petróleo y gas, agua, infraestructura e industria: los sectores donde Indigo desarrolla proyectos.',
    title: 'Los sectores donde construimos',
    intro: 'Cinco sectores con alcances que van de la ingeniería básica a la puesta en marcha.',
    cta: {
      title: '¿Tu proyecto está en uno de estos sectores?',
      text: 'Hablemos del alcance.',
    },
  },

  projectsPage: {
    meta: 'Proyectos de generación eléctrica, almacenamiento de combustibles, vialidad, infraestructura y más, en cinco países.',
    title: 'Proyectos que ya están en operación',
    intro: 'Una selección de obras en Venezuela, Bolivia, Costa Rica, Curazao y Arabia Saudita.',
    byCountry: 'Por país',
    filterLabel: 'Filtrar por sector',
    facts: {
      client: 'Cliente',
      location: 'Ubicación',
      year: 'Año',
      unit: 'Unidad de negocio',
      capacity: 'Capacidad',
      scope: 'Alcance',
      impact: 'Resultados',
    },
    cta: {
      title: '¿Necesitas un proyecto como este?',
      text: 'Cuéntanos qué quieres construir.',
    },
  },

  qualityPage: {
    meta: 'Política de calidad, política ambiental, seguridad industrial e higiene ocupacional y certificaciones de Indigo.',
    title: 'Calidad, seguridad y ambiente',
    intro: 'Políticas y certificaciones que se aplican en la empresa y en cada proyecto en ejecución.',
    listTitle: 'Nuestros compromisos',
    cta: {
      title: 'Conoce cómo trabajamos',
      text: 'Escríbenos y te contamos.',
    },
  },

  contactPage: {
    meta: 'Contacta a Indigo Energy International para información y negocios.',
    title: 'Hablemos de tu proyecto',
    intro: 'Cuéntanos qué necesitas. Te respondemos con una propuesta de alcance.',
    form: {
      name: 'Nombre',
      company: 'Empresa',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      message: '¿Qué necesitas?',
      send: 'Enviar mensaje',
      subject: 'Consulta desde el sitio web',
      mailFallback: 'Se abrirá tu aplicación de correo con el mensaje listo para enviar.',
      noscript: 'Escríbenos a',
    },
    info: {
      business: 'Información y negocios',
      careers: 'Trabaja con nosotros',
    },
  },

  cookieBanner: {
    label: 'Aviso de cookies',
    text: 'Usamos cookies de analítica para medir el uso del sitio y mejorarlo. Puedes aceptarlas o rechazarlas. Más información en la',
    cookies: 'política de cookies',
    privacy: 'política de privacidad',
    accept: 'Aceptar',
    reject: 'Rechazar',
  },

  legal: {
    updatedLabel: 'Última actualización',
    cookieSettings: 'Configurar cookies',
    privacyLink: 'Privacidad',
    cookiesLink: 'Cookies',
    privacy: {
      title: 'Política de privacidad',
      meta: 'Cómo Indigo Energy International recopila, usa y protege los datos personales que compartes en este sitio.',
      intro: 'Esta página explica qué datos personales recogemos en este sitio, para qué los usamos y qué derechos tienes sobre ellos.',
      sections: [
        { h: '1. Responsable del tratamiento', p: ['{legalName} ("{name}", "nosotros") es responsable de los datos personales que se recogen a través de este sitio web ({domain}). Contacto: {email} · {phone}. Domicilio: {city}, {country}. RIF {rif}.'] },
        { h: '2. Qué datos recopilamos', p: [
          'Los que nos das voluntariamente en el formulario de contacto: nombre, empresa, correo electrónico, teléfono y el mensaje que escribas. Los campos de empresa y teléfono son opcionales.',
          'El formulario no guarda los datos en este sitio: con lo que escribes arma un correo en tu aplicación de correo, y la información solo nos llega si lo envías.',
          'Si aceptas las cookies de analítica, recogemos además datos de navegación de forma agregada: páginas visitadas, origen del tráfico, tipo de dispositivo y país aproximado. No usamos esa información para identificarte.',
        ] },
        { h: '3. Para qué usamos tus datos', p: ['Para responder a tu consulta o solicitud de propuesta y, si avanzamos, para la relación comercial. Con la analítica, para entender qué contenido interesa y mejorar el sitio. No vendemos tus datos.'] },
        { h: '4. Base legal', p: ['Tu consentimiento, que nos das al enviarnos un mensaje y, en el caso de la analítica, al aceptar las cookies. Puedes retirarlo en cualquier momento.'] },
        { h: '5. Con quién los compartimos', p: ['Trabajamos con proveedores que tratan datos en nuestro nombre:'], list: [
          'Proveedor de alojamiento (hosting) del sitio web y del correo de la empresa.',
          '{analytics}',
        ] },
        { h: '6. Cuánto tiempo los conservamos', p: ['Los mensajes se conservan mientras exista una relación comercial o de interés y no pidas su eliminación. Los datos de analítica se conservan hasta 14 meses.'] },
        { h: '7. Tus derechos', p: ['Puedes pedirnos acceso, rectificación, eliminación u oposición al tratamiento de tus datos escribiendo a {email}. Atenderemos tu solicitud a la brevedad posible.'] },
        { h: '8. Cambios en esta política', p: ['Podemos actualizarla para reflejar cambios en el sitio o en la normativa. La fecha de la última revisión está al final de esta página.'] },
      ],
      analyticsOn: 'Google Analytics (Google LLC): analítica del sitio, solo si aceptas las cookies de analítica.',
      analyticsOff: 'Por ahora el sitio no usa herramientas de analítica de terceros.',
    },
    cookies: {
      title: 'Política de cookies',
      meta: 'Qué cookies usa Indigo Energy International, para qué sirven y cómo puedes gestionarlas o retirar tu consentimiento.',
      intro: 'Esta página explica qué son las cookies, cuáles usamos en este sitio y cómo puedes gestionarlas.',
      what: { h: '1. Qué son las cookies', p: 'Son pequeños archivos que un sitio guarda en tu navegador para recordar información sobre tu visita, como tus preferencias o el uso que haces del sitio.' },
      used: { h: '2. Cookies que usamos', p: 'Las cookies de analítica solo se activan si las aceptas en el aviso de cookies. La decisión que tomes se guarda en tu navegador.' },
      table: { name: 'Cookie', type: 'Tipo', duration: 'Duración', purpose: 'Finalidad' },
      rows: {
        ga: { type: 'Analítica', duration: 'Hasta 2 años', purpose: 'Miden el uso del sitio (páginas visitadas, origen del tráfico) de forma agregada. Solo se instalan si las aceptas.' },
        consent: { type: 'Necesaria', duration: 'Hasta que la borres', purpose: 'Guarda tu decisión sobre las cookies para no preguntarte en cada visita.' },
      },
      none: 'Por ahora el sitio solo guarda tu preferencia sobre cookies.',
      manage: { h: '3. Cómo gestionar tu consentimiento', p: 'Puedes aceptar o rechazar las cookies de analítica en el aviso de tu primera visita. Para cambiar tu decisión usa el botón "Configurar cookies" del pie de página. También puedes bloquear o borrar cookies desde tu navegador; algunas partes del sitio podrían dejar de funcionar.' },
      more: { h: '4. Más información', p: 'Para saber cómo tratamos tus datos personales, consulta la {privacy}. Ante cualquier duda, escríbenos a {email}.', privacy: 'política de privacidad' },
    },
  },

  notFound: {
    title: 'No encontramos esa página',
    text: 'Puede que el enlace haya cambiado con el nuevo sitio.',
    back: 'Volver al inicio',
  },
};
