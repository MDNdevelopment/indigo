import { photos } from './photos';
import videoEnergia from '../assets/photos/video-energia.jpg';
import videoPetroleoGas from '../assets/photos/video-petroleo-gas.jpg';

export type SectorId = 'energia' | 'petroleo-gas' | 'agua' | 'infraestructura';

export interface SectorGroup {
  title: string;
  items: string[];
}
export interface Sector {
  id: SectorId;
  image: ImageMetadata;
  pos?: string;
  /** Video corporativo del sector (public/videos). */
  video?: { src: string; poster: ImageMetadata };
  es: { title: string; short: string; lead: string; groups: SectorGroup[] };
  en: { title: string; short: string; lead: string; groups: SectorGroup[] };
}

// Alcances del PDF corporativo y del sitio actual.
export const sectors: Sector[] = [
  {
    id: 'energia',
    image: photos.camejo,
    video: { src: '/videos/energia.mp4', poster: videoEnergia },
    es: {
      title: 'Energía',
      short: 'Centrales termoeléctricas en ciclo simple y combinado, con manejo de combustible dual.',
      lead: 'Desarrollamos plantas de generación termoeléctrica y otros proyectos eléctricos de gran envergadura, con ingeniería básica y de detalle, procura, construcción y puesta en marcha.',
      groups: [
        {
          title: 'Generación de electricidad',
          items: [
            'Plantas termoeléctricas en ciclo simple y combinado',
            'Turbinas diseñadas para combustible dual (fuel gas y diésel)',
            'Ingeniería básica y de detalle',
          ],
        },
        {
          title: 'Power Island',
          items: [
            'Turbogenerador, equipos y sistemas auxiliares',
            'Transformadores de potencia',
            'Ductos de barra',
            'Subestación eléctrica principal y conexiones',
          ],
        },
        {
          title: 'Balance de planta (BOP)',
          items: [
            'Sistemas de agua desmineralizada',
            'Drenaje de aguas aceitosas',
            'Sistemas de combustible líquido',
            'Gas combustible: tratamiento y compresión',
            'Aire de servicio e instrumentos',
          ],
        },
        {
          title: 'Obras civiles',
          items: [
            'Movimiento de tierra',
            'Fundaciones especiales',
            'Vialidad',
            'Edificios administrativos e industriales',
            'Drenajes y trabajos perimetrales',
          ],
        },
        {
          title: 'Otros sistemas',
          items: [
            'SCADA',
            'Detección y alarma de incendio',
            'Extinción de incendio',
            'Telecomunicaciones',
            'Control de acceso y CCTV',
          ],
        },
      ],
    },
    en: {
      title: 'Energy',
      short: 'Simple and combined cycle thermoelectric plants, with dual fuel handling.',
      lead: 'We develop thermoelectric power plants and other large-scale electrical projects, with basic and detail engineering, procurement, construction and commissioning.',
      groups: [
        {
          title: 'Power generation',
          items: [
            'Simple and combined cycle thermoelectric plants',
            'Turbines designed for dual fuel (fuel gas and diesel)',
            'Basic and detail engineering',
          ],
        },
        {
          title: 'Power Island',
          items: [
            'Turbogenerator, equipment and auxiliary systems',
            'Power transformers',
            'Bus ducts',
            'Main electrical substation and connections',
          ],
        },
        {
          title: 'Balance of plant (BOP)',
          items: [
            'Demineralized water systems',
            'Oily water drainage',
            'Liquid fuel systems',
            'Fuel gas: treatment and compression',
            'Service and instrument air',
          ],
        },
        {
          title: 'Civil works',
          items: [
            'Earthworks',
            'Special foundations',
            'Roads',
            'Administrative and industrial buildings',
            'Drainage and perimeter works',
          ],
        },
        {
          title: 'Other systems',
          items: [
            'SCADA',
            'Fire detection and alarm',
            'Fire suppression',
            'Telecommunications',
            'Access control and CCTV',
          ],
        },
      ],
    },
  },
  {
    id: 'petroleo-gas',
    image: photos.tanqueYpfb,
    video: { src: '/videos/petroleo-gas.mp4', poster: videoPetroleoGas },
    es: {
      title: 'Petróleo y Gas',
      short: 'Del pozo a la refinería: producción, transporte, almacenamiento, distribución y procesamiento.',
      lead: 'Contamos con un equipo altamente calificado y con amplia experiencia en procesos de upstream, midstream y downstream.',
      groups: [
        {
          title: 'Producción',
          items: ['Pozos y macollas', 'Líneas de flujo', 'Inyección'],
        },
        {
          title: 'Transporte',
          items: ['Estaciones de bombas', 'Inyección de químicos', 'Oleoductos y poliductos'],
        },
        {
          title: 'Almacenamiento y distribución',
          items: ['Patios de tanques', 'Llenaderos'],
        },
        {
          title: 'Procesamiento y adecuación de productos',
          items: ['Tratamiento de combustible', 'Calentamiento', 'Compresión', 'Refinación'],
        },
      ],
    },
    en: {
      title: 'Oil and Gas',
      short: 'From the well to the refinery: production, transport, storage, distribution and processing.',
      lead: 'We have a highly qualified team with extensive experience in upstream, midstream and downstream processes.',
      groups: [
        {
          title: 'Production',
          items: ['Wells and well clusters', 'Flow lines', 'Injection'],
        },
        {
          title: 'Transport',
          items: ['Pump stations', 'Chemical injection', 'Oil and product pipelines'],
        },
        {
          title: 'Storage and distribution',
          items: ['Tank farms', 'Loading facilities'],
        },
        {
          title: 'Processing and product conditioning',
          items: ['Fuel treatment', 'Heating', 'Compression', 'Refining'],
        },
      ],
    },
  },
  {
    id: 'agua',
    image: photos.agua,
    es: {
      title: 'Agua',
      short: 'Captación, potabilización, desalinización, depuración y retorno al ambiente.',
      lead: 'Tratamos el agua para su correcta utilización, desde la captación hasta su retorno al medio ambiente, con plantas sostenibles, incluso en zonas con bajo nivel de saneamiento.',
      groups: [
        {
          title: 'Agua y efluentes',
          items: ['Sistemas de potabilización de agua', 'Sistemas de desmineralización de agua'],
        },
        {
          title: 'Tratamiento de efluentes',
          items: ['Agua de producción', 'Aguas aceitosas', 'Aguas residuales', 'Aguas servidas'],
        },
      ],
    },
    en: {
      title: 'Water',
      short: 'Intake, treatment, desalination, purification and return to the environment.',
      lead: 'We treat water so it can be used properly, from intake to its return to the environment, with sustainable plants, even in areas with low sanitation levels.',
      groups: [
        {
          title: 'Water and effluents',
          items: ['Drinking water treatment systems', 'Water demineralization systems'],
        },
        {
          title: 'Effluent treatment',
          items: ['Produced water', 'Oily water', 'Wastewater', 'Sewage'],
        },
      ],
    },
  },
  {
    id: 'infraestructura',
    image: photos.viaAerea,
    es: {
      title: 'Infraestructura',
      short: 'Edificaciones industriales, complejos residenciales, vialidad y obras hoteleras.',
      lead: 'Gerenciamos y ejecutamos proyectos de infraestructura industrial, residencial y vial, atendiendo los requerimientos de cada cliente.',
      groups: [
        {
          title: 'Edificaciones para servicios industriales',
          items: [
            'Edificios administrativos',
            'Salas de control',
            'Talleres y almacenes industriales especializados',
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
        {
          title: 'Vialidad y carreteras',
          items: [
            'Evaluación previa de los espacios',
            'Maquinaria con tecnología avanzada',
            'Mezclas asfálticas de alta calidad',
            'Cuidado del ambiente con nuestro sistema de gestión ambiental',
          ],
        },
        {
          title: 'Infraestructura hotelera',
          items: ['Proyectos IPC de infraestructura', 'Reforzamiento estructural'],
        },
      ],
    },
    en: {
      title: 'Infrastructure',
      short: 'Industrial buildings, residential complexes, roads and hotel works.',
      lead: 'We manage and deliver industrial, residential and road infrastructure projects, meeting the requirements of each client.',
      groups: [
        {
          title: 'Buildings for industrial services',
          items: [
            'Administrative buildings',
            'Control rooms',
            'Specialized industrial workshops and warehouses',
            'Buildings and enclosures for electrical and mechanical equipment',
            'Concrete and steel structures',
          ],
        },
        {
          title: 'Residential complexes',
          items: [
            'Single-family and multifamily housing',
            'Recreation: multipurpose buildings and sports courts',
            'Services: clinic, access control, electrical services, hydropneumatic systems and treatment plants',
          ],
        },
        {
          title: 'Roads and highways',
          items: [
            'Prior site assessment',
            'Machinery with advanced technology',
            'High-quality asphalt mixes',
            'Environmental care through our environmental management system',
          ],
        },
        {
          title: 'Hotel infrastructure',
          items: ['Infrastructure IPC projects', 'Structural reinforcement'],
        },
      ],
    },
  },
];
