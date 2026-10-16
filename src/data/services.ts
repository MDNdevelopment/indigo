import { photos } from './photos';
import type { Lang } from '../config/site';

export interface Service {
  id: string;
  image: ImageMetadata;
  /** foco de la foto al recortar (object-position) */
  pos?: string;
  es: { title: string; lead: string; text: string; items?: string[] };
  en: { title: string; lead: string; text: string; items?: string[] };
}

// Alcances tomados del sitio actual (indigoenergyint.com/service/*), reescritos con tono más directo.
export const services: Service[] = [
  {
    id: 'ingenieria',
    image: photos.elAlto,
    es: {
      title: 'Ingeniería',
      lead: 'Control absoluto sobre cada disciplina del proyecto.',
      text: 'Desarrollamos proyectos de ingeniería con herramientas y recursos tecnológicos avanzados para cumplir los requerimientos industriales de cada sector. Cubrimos el desarrollo civil, el diseño de tuberías y electricidad, ICT (instrumentación, control y telecomunicaciones), la ingeniería mecánica y el control de procesos industriales.',
      items: [
        'Visualización',
        'Ingeniería conceptual',
        'Ingeniería básica',
        'Ingeniería de detalle',
        'Estudios ambientales',
        'Estudios de factibilidad',
        'Planes maestros',
        'Definición de alcance',
        'Levantamiento en campo',
        'FEED',
        'Estimado y control de costos',
        'Estudios de operatividad',
        'Planificación',
      ],
    },
    en: {
      title: 'Engineering',
      lead: 'Full control over every discipline of the project.',
      text: 'We deliver engineering projects using advanced tools and technology to meet the industrial requirements of each sector. We cover civil development, piping and electrical design, ICT (instrumentation, control and telecommunications), mechanical engineering and industrial process control.',
      items: [
        'Visualization',
        'Conceptual engineering',
        'Basic engineering',
        'Detail engineering',
        'Environmental studies',
        'Feasibility studies',
        'Master plans',
        'Scope definition',
        'Field surveys',
        'FEED',
        'Cost estimating and control',
        'Operability studies',
        'Planning',
      ],
    },
  },
  {
    id: 'procura',
    image: photos.santaCruz,
    es: {
      title: 'Procura',
      lead: 'Los equipos y materiales correctos, en el momento correcto.',
      text: 'Gestionamos cada proceso de procura con eficiencia, cumpliendo los lineamientos para adquirir los recursos y materias primas que necesitan los proyectos y servicios, alineados con los objetivos y los tiempos de ejecución.',
      items: [
        'Gestión nacional e internacional',
        'Procesos de licitación',
        'Compra de equipos y materiales',
        'Inspección',
        'Logística y transporte',
        'Aduanas y nacionalización',
      ],
    },
    en: {
      title: 'Procurement',
      lead: 'The right equipment and materials, at the right time.',
      text: 'We manage every procurement process efficiently, following the guidelines to acquire the resources and raw materials that projects and services require, aligned with project objectives and schedules.',
      items: [
        'Local and international sourcing',
        'Tender processes',
        'Equipment and materials purchasing',
        'Inspection',
        'Logistics and transport',
        'Customs and clearance',
      ],
    },
  },
  {
    id: 'construccion',
    image: photos.viaAsfalto,
    es: {
      title: 'Construcción',
      lead: 'Del diseño a la obra terminada, con un solo responsable.',
      text: 'Nuestro grupo de ingenieros civiles materializa los conceptos y diseños de cada proyecto. Ejecutamos cada obra evaluando calidad, costos, tiempo, herramientas tecnológicas y los aspectos contables y financieros.',
      items: [
        'Obras civiles y montajes electromecánicos',
        'Servicio de construcción',
        'Planos As-Built',
        'Gerencia de contratistas',
        'Control de costos y materiales',
        'Manuales de operación y mantenimiento',
        'Seguridad',
        'Relaciones laborales',
        'Inspección',
        'Entrenamiento',
      ],
    },
    en: {
      title: 'Construction',
      lead: 'From design to finished works, with a single point of responsibility.',
      text: 'Our team of civil engineers turns the concepts and designs of each project into reality. We execute every project evaluating quality, cost, time, technology tools and the accounting and financial aspects.',
      items: [
        'Civil works and electromechanical erection',
        'Construction services',
        'As-Built drawings',
        'Contractor management',
        'Cost and materials control',
        'Operation and maintenance manuals',
        'Safety',
        'Labor relations',
        'Inspection',
        'Training',
      ],
    },
  },
  {
    id: 'puesta-en-marcha',
    image: photos.lovera,
    es: {
      title: 'Puesta en marcha',
      lead: 'Un arranque efectivo y sin contratiempos.',
      text: 'Ejecutamos de forma estructurada, eficaz y documentada las acciones necesarias para arrancar cualquier construcción y acelerar su entrada en funcionamiento con eficiencia y seguridad.',
      items: [
        'Pre-comisionamiento y comisionamiento',
        'Soporte a ingeniería',
        'Entrenamiento de ingeniería y operaciones',
        'Suministro de personal',
        'Supervisión',
      ],
    },
    en: {
      title: 'Commissioning',
      lead: 'A smooth, effective start-up.',
      text: 'We carry out, in a structured, effective and documented way, the actions required to start up any facility and speed up its entry into operation with efficiency and safety.',
      items: [
        'Pre-commissioning and commissioning',
        'Engineering support',
        'Engineering and operations training',
        'Staff supply',
        'Supervision',
      ],
    },
  },
  {
    id: 'tecnologia',
    image: photos.sanDiego,
    es: {
      title: 'Tecnología',
      lead: 'Herramientas digitales en cada etapa.',
      text: 'Desarrollamos cada operación con herramientas tecnológicas avanzadas, lo que mejora el desempeño de nuestro equipo y los resultados de los proyectos. Nos permiten una visión global y una gestión integral de la maquetación, la extracción y preparación de planos, y el ajuste y diseño de todas las etapas.',
    },
    en: {
      title: 'Technology',
      lead: 'Digital tools at every stage.',
      text: 'We run every operation with advanced technology tools, which improves our team’s performance and project results. They give us a global view and integrated management of modeling, drawing extraction and preparation, and the adjustment and design of every stage.',
    },
  },
];

export const serviceText = (s: Service, lang: Lang) => s[lang];
