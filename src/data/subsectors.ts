import { photos } from './photos';
import type { SectorGroup } from './sectors';

export type SubsectorId = 'construccion-civil' | 'vias-terrestres' | 'infraestructura-hotelera';

interface SubsectorText {
  title: string;
  short: string;
  lead: string;
  groups: SectorGroup[];
}
export interface Subsector {
  id: SubsectorId;
  parent: 'infraestructura';
  image: ImageMetadata;
  pos?: string;
  /** Slugs de proyectos reales que ilustran este alcance. */
  projects: string[];
  es: SubsectorText;
  en: SubsectorText;
}

// Textos de las páginas /construccion-civil, /vias-terrestres e /infraestructura-hotelera del sitio actual.
export const subsectors: Subsector[] = [
  {
    id: 'construccion-civil',
    parent: 'infraestructura',
    image: photos.edificio,
    projects: [],
    es: {
      title: 'Construcción civil',
      short: 'Gerencia y ejecución de obras industriales, residenciales y de servicios.',
      lead: 'Nos encargamos de la gerencia y ejecución de proyectos de infraestructura residencial, industrial y construcción civil en general, atendiendo los requerimientos de cada cliente y socio.',
      groups: [
        {
          title: 'Edificaciones para servicios industriales',
          items: [
            'Talleres y almacenes industriales especializados',
            'Edificios administrativos y salas de control',
            'Edificios y cerramientos para equipos eléctricos y mecánicos',
            'Estructuras de concreto y metálicas',
          ],
        },
        {
          title: 'Complejos residenciales',
          items: [
            'Viviendas unifamiliares y multifamiliares',
            'Recreación: edificios de usos múltiples y canchas deportivas',
            'Servicios: medicatura, control de acceso, servicios eléctricos, hidroneumático y plantas de tratamiento',
          ],
        },
      ],
    },
    en: {
      title: 'Civil construction',
      short: 'Management and delivery of industrial, residential and service works.',
      lead: 'We manage and deliver residential and industrial infrastructure projects and civil construction in general, meeting the requirements of each client and partner.',
      groups: [
        {
          title: 'Buildings for industrial services',
          items: [
            'Specialized industrial workshops and warehouses',
            'Administrative buildings and control rooms',
            'Buildings and enclosures for electrical and mechanical equipment',
            'Concrete and steel structures',
          ],
        },
        {
          title: 'Residential complexes',
          items: [
            'Single-family and multifamily housing',
            'Recreation: multipurpose buildings and sports courts',
            'Services: medical clinic, access control, electrical services, hydropneumatic systems and treatment plants',
          ],
        },
      ],
    },
  },
  {
    id: 'vias-terrestres',
    parent: 'infraestructura',
    image: photos.viaAsfalto,
    projects: ['doble-via-rio-seco-huarina'],
    es: {
      title: 'Vías terrestres',
      short: 'Vialidad y carreteras que conectan localidades.',
      lead: 'Desarrollamos proyectos de construcción de vialidad y carreteras que han permitido conectar diversas localidades.',
      groups: [
        {
          title: 'Cómo ejecutamos cada vía',
          items: [
            'Evaluación previa de los espacios',
            'Maquinaria con tecnología avanzada',
            'Mezclas asfálticas de alta calidad',
            'Cuidado del ambiente con nuestro sistema de gestión ambiental',
          ],
        },
      ],
    },
    en: {
      title: 'Roadways',
      short: 'Roads and highways that connect communities.',
      lead: 'We deliver road and highway construction projects that have connected communities.',
      groups: [
        {
          title: 'How we deliver each road',
          items: [
            'Prior assessment of the site',
            'Advanced-technology machinery',
            'High-quality asphalt mixes',
            'Environmental care through our environmental management system',
          ],
        },
      ],
    },
  },
  {
    id: 'infraestructura-hotelera',
    parent: 'infraestructura',
    image: photos.hotel,
    projects: ['hotel-spa-ikin'],
    es: {
      title: 'Infraestructura hotelera',
      short: 'IPC de infraestructura y reforzamiento estructural para hotelería.',
      lead: 'Contamos con amplia experiencia en el desarrollo IPC de proyectos de infraestructura y reforzamiento estructural para la industria hotelera de la región.',
      groups: [
        {
          title: 'Alcance',
          items: ['Proyectos IPC de infraestructura', 'Reforzamiento estructural'],
        },
      ],
    },
    en: {
      title: 'Hotel infrastructure',
      short: 'IPC infrastructure and structural reinforcement for hospitality.',
      lead: 'We have broad experience delivering IPC infrastructure and structural reinforcement projects for the hospitality industry in the region.',
      groups: [
        {
          title: 'Scope',
          items: ['IPC infrastructure projects', 'Structural reinforcement'],
        },
      ],
    },
  },
];
