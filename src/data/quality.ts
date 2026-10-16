import { photos } from './photos';
import type { Lang } from '../config/site';

export type QualityId = 'politica-de-calidad' | 'politica-ambiental' | 'siaho' | 'certificaciones';

export interface InfoBlock {
  id?: string;
  title: string;
  paragraphs: string[];
  items?: string[];
}
export interface QualityText {
  title: string;
  lead: string;
  blocks: InfoBlock[];
}
export interface QualityPage {
  id: QualityId;
  image: ImageMetadata;
  pos?: string;
  es: QualityText;
  en: QualityText;
}

// Textos de las páginas de política, SIAHO e ISO del sitio actual (indigoenergyint.com), reescritos.
// PENDIENTE: pedir los certificados vigentes antes de mostrarlos (los del PDF vencieron en 2024 y 2025).
export const qualityPages: QualityPage[] = [
  {
    id: 'politica-de-calidad',
    image: photos.parque,
    es: {
      title: 'Política de la calidad',
      lead: 'Servicios de ingeniería, procura y gestión de la construcción que cumplen lo que el cliente necesita.',
      blocks: [
        {
          title: 'Nuestro compromiso',
          paragraphs: [
            'Estamos comprometidos en proveer servicios de ingeniería, procura y gestión de la construcción, cumpliendo estándares de calidad que satisfagan los requisitos de los clientes y demás partes interesadas.',
            'Asumimos esta responsabilidad a través de un talento humano competente, cumpliendo los procedimientos aprobados para la organización y las normativas legales, en concordancia con nuestra dirección estratégica.',
            'Fomentamos la mejora continua de la eficacia del sistema de gestión de la calidad y proporcionamos servicios que puedan brindar calidad de vida a la comunidad.',
          ],
        },
      ],
    },
    en: {
      title: 'Quality policy',
      lead: 'Engineering, procurement and construction management services that deliver what the client needs.',
      blocks: [
        {
          title: 'Our commitment',
          paragraphs: [
            'We are committed to providing engineering, procurement and construction management services that meet the quality standards required by clients and other stakeholders.',
            'We take on this responsibility through competent people, following the procedures approved by the organization and the applicable legal requirements, in line with our strategic direction.',
            'We promote continuous improvement of the effectiveness of our quality management system and deliver services that can improve quality of life in the community.',
          ],
        },
      ],
    },
  },
  {
    id: 'politica-ambiental',
    image: photos.lineas,
    es: {
      title: 'Política ambiental',
      lead: 'Soluciones de ingeniería, procura y construcción que protegen el entorno donde trabajamos.',
      blocks: [
        {
          title: 'Nuestro compromiso',
          paragraphs: [
            'Estamos comprometidos con proveer soluciones en materia de ingeniería, procura y gestión de la construcción, actuando de manera responsable a favor de la protección del medio ambiente y la prevención de la contaminación.',
            'Cumplimos con los procedimientos, requisitos legales y lo establecido por nuestros clientes en materia de ambiente, y fomentamos la mejora continua del desempeño ambiental para reducir los impactos sobre el entorno.',
            'Garantizamos su cumplimiento mediante medidas preventivas ejecutadas por personal competente, que identifica, evalúa y controla los riesgos, aspectos e impactos ambientales de nuestros productos y servicios.',
          ],
        },
      ],
    },
    en: {
      title: 'Environmental policy',
      lead: 'Engineering, procurement and construction solutions that protect the places where we work.',
      blocks: [
        {
          title: 'Our commitment',
          paragraphs: [
            'We are committed to providing engineering, procurement and construction management solutions while acting responsibly to protect the environment and prevent pollution.',
            'We follow procedures, legal requirements and client requirements on environmental matters, and we promote continuous improvement of environmental performance to reduce our impact.',
            'We ensure compliance through preventive measures carried out by competent staff, who identify, assess and control the risks, aspects and environmental impacts of our products and services.',
          ],
        },
      ],
    },
  },
  {
    id: 'siaho',
    image: photos.equipo,
    es: {
      title: 'Seguridad, ambiente e higiene ocupacional',
      lead: 'Un equipo especializado que aplica las políticas en la empresa y en cada proyecto en ejecución.',
      blocks: [
        {
          title: 'SIAHO en Indigo',
          paragraphs: [
            'Contamos con un equipo especializado en Seguridad Industrial, Ambiente e Higiene Ocupacional (SIAHO), responsable de aplicar y verificar de forma constante las políticas dentro de la empresa y en cada proyecto en ejecución.',
            'Nos ocupamos de la seguridad y la protección de nuestro personal, de las instalaciones y del ambiente en el que intervenimos, y trabajamos con apego a las normas internacionales que regulan estos procesos.',
          ],
        },
      ],
    },
    en: {
      title: 'Health, safety and environment',
      lead: 'A specialized team that applies our policies across the company and on every project in execution.',
      blocks: [
        {
          title: 'HSE at Indigo',
          paragraphs: [
            'We have a specialized team in Industrial Safety, Environment and Occupational Hygiene (HSE), responsible for constantly applying and verifying our policies within the company and on every project in execution.',
            'We look after the safety and protection of our people, our facilities and the environment where we work, in line with the international standards that regulate these processes.',
          ],
        },
      ],
    },
  },
  {
    id: 'certificaciones',
    image: photos.planos,
    es: {
      title: 'Certificaciones',
      lead: 'Gestión de la calidad y del ambiente certificada por FONDONORMA y reconocida por IQNet.',
      blocks: [
        {
          id: 'iso-9001',
          title: 'ISO 9001:2015, gestión de la calidad',
          paragraphs: [
            'Nuestro Sistema de Gestión de la Calidad (SGC) está certificado con la norma ISO 9001:2015. Aplicamos el ciclo de mejoramiento continuo para cumplir los requisitos legales y los de los clientes, y así lograr la satisfacción de todos los involucrados.',
          ],
          items: [
            'Definición de los objetivos',
            'Conocimiento de las necesidades y expectativas de las partes interesadas',
            'Implementación, planificación y control de los procesos',
            'Realización y análisis del desempeño',
            'Identificación de oportunidades de mejora',
          ],
        },
        {
          id: 'iso-14001',
          title: 'ISO 14001:2015, gestión ambiental',
          paragraphs: [
            'Nuestro Sistema de Gestión Ambiental (SGA) está certificado bajo la norma ISO 14001:2015. Nos permite identificar los aspectos e impactos que causamos en el medio donde intervenimos, cumplir la legislación nacional y generar compromiso ambiental en nuestros colaboradores.',
          ],
          items: [
            'Control eficiente de los recursos (agua, energía y materias primas) para reducir costos',
            'Procesos más eficaces y menos residuos generados',
            'Oportunidades de mercado y alianzas entre empresas de diferentes países',
            'Menor riesgo de accidentes ambientales',
          ],
        },
        {
          id: 'iqnet',
          title: 'IQNet',
          paragraphs: [
            'IQNet es una red internacional de certificación fundada en 1990, con 37 organismos asociados y más de 400 oficinas en el mundo. Sus certificados permiten acreditarse a nivel mundial con una determinada normativa.',
            'Nuestros sistemas ISO 9001 e ISO 14001 están certificados por FONDONORMA, el principal ente certificador de Venezuela y miembro activo de IQNet. Por eso usamos los certificados de FONDONORMA en Venezuela y, en cualquier otro país, los certificados equivalentes de IQNet.',
          ],
        },
      ],
    },
    en: {
      title: 'Certifications',
      lead: 'Quality and environmental management certified by FONDONORMA and recognized by IQNet.',
      blocks: [
        {
          id: 'iso-9001',
          title: 'ISO 9001:2015, quality management',
          paragraphs: [
            'Our Quality Management System (QMS) is certified to ISO 9001:2015. We apply the continuous improvement cycle to meet legal and client requirements and to satisfy everyone involved.',
          ],
          items: [
            'Setting objectives',
            'Understanding the needs and expectations of stakeholders',
            'Implementing, planning and controlling processes',
            'Measuring and analyzing performance',
            'Identifying opportunities for improvement',
          ],
        },
        {
          id: 'iso-14001',
          title: 'ISO 14001:2015, environmental management',
          paragraphs: [
            'Our Environmental Management System (EMS) is certified to ISO 14001:2015. It lets us identify the aspects and impacts we cause where we work, comply with national legislation and build environmental commitment among our people.',
          ],
          items: [
            'Efficient control of resources (water, energy and raw materials) to reduce costs',
            'More effective processes and less waste',
            'Market opportunities and alliances between companies in different countries',
            'Lower risk of environmental incidents',
          ],
        },
        {
          id: 'iqnet',
          title: 'IQNet',
          paragraphs: [
            'IQNet is an international certification network founded in 1990, with 37 member bodies and more than 400 offices worldwide. Its certificates let organizations be accredited globally to a given standard.',
            'Our ISO 9001 and ISO 14001 systems are certified by FONDONORMA, Venezuela’s main certification body and an active IQNet member. That is why we use FONDONORMA certificates in Venezuela and, in any other country, the equivalent IQNet certificates.',
          ],
        },
      ],
    },
  },
];

export const qualityText = (q: QualityPage, lang: Lang) => q[lang];
