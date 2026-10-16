import { photos } from './photos';
import type { Lang } from '../config/site';
import type { SectorId } from './sectors';

export type CountryId = 've' | 'bo' | 'cr' | 'cw' | 'sa';

export interface ProjectText {
  title: string;
  place: string;
  summary: string;
  scope: string[];
  impact?: string[];
}
export interface Project {
  slug: string;
  country: CountryId;
  sector: Exclude<SectorId, 'agua'>;
  year?: string;
  client?: string;
  capacity?: string;
  image: ImageMetadata;
  /** foco de la foto al recortar (object-position) */
  pos?: string;
  /** aparece en el carril del home */
  featured?: boolean;
  es: ProjectText;
  en: ProjectText;
}

export const countryNames: Record<CountryId, Record<Lang, string>> = {
  ve: { es: 'Venezuela', en: 'Venezuela' },
  bo: { es: 'Bolivia', en: 'Bolivia' },
  cr: { es: 'Costa Rica', en: 'Costa Rica' },
  cw: { es: 'Curazao', en: 'Curaçao' },
  sa: { es: 'Arabia Saudita', en: 'Saudi Arabia' },
};

export const countrySlugs: Record<CountryId, string> = {
  ve: 'venezuela',
  bo: 'bolivia',
  cr: 'costa-rica',
  cw: 'curazao',
  sa: 'arabia-saudita',
};

// Datos tomados del PDF corporativo y de las fichas del sitio actual (ver CONTENIDO-ACTUAL.md).
// PENDIENTE confirmar con el cliente los años y clientes que faltan.
export const projects: Project[] = [
  {
    slug: 'planta-josefa-camejo',
    country: 've',
    sector: 'energia',
    year: '2006',
    client: 'CORPOELEC',
    capacity: '450 MW',
    image: photos.camejo,
    featured: true,
    es: {
      title: 'Planta termoeléctrica Josefa Camejo',
      place: 'Paraguaná, Edo. Falcón',
      summary: 'Planta de 450 MW con tres turbinas Siemens de 150 MW en ciclo simple y combustible dual, desarrollada en 32 hectáreas.',
      scope: [
        'Ingeniería, procura, construcción, suministro, transporte, instalación y puesta en marcha de tres turbogeneradoras de 150 MW (Siemens W501FD2).',
        'Balance de planta: almacenamiento y tratamiento de combustible líquido, compresión y tratamiento de gas con tres unidades Ariel JGZ/2, aire de servicio e instrumentos, agua potable y desmineralizada, tratamiento de efluentes, control y telecomunicaciones.',
        'Edificaciones de servicio, sala de control, edificios administrativos, almacén y taller de mantenimiento.',
        'Entrenamiento del personal de operación y mantenimiento de la planta.',
      ],
      impact: [
        'Ampliación de la red de transmisión para aprovechar la generación de la planta.',
        'Mejor calidad y confiabilidad del servicio eléctrico para el Complejo Refinador Paraguaná, la Zona Franca, las comunidades de Falcón y el Sistema Interconectado Nacional.',
        'Posibilidad de instalar a futuro un ciclo combinado para ampliar la capacidad.',
      ],
    },
    en: {
      title: 'Josefa Camejo thermoelectric plant',
      place: 'Paraguaná, Falcón State',
      summary: 'A 450 MW plant with three 150 MW Siemens turbines in simple cycle on dual fuel, built on 32 hectares.',
      scope: [
        'Engineering, procurement, construction, supply, transport, installation and commissioning of three 150 MW turbogenerators (Siemens W501FD2).',
        'Balance of plant: liquid fuel storage and treatment, gas compression and treatment with three Ariel JGZ/2 units, service and instrument air, potable and demineralized water, effluent treatment, control and telecommunications.',
        'Service buildings, control room, administrative buildings, warehouse and maintenance workshop.',
        'Training for the plant’s operation and maintenance staff.',
      ],
      impact: [
        'Expansion of the transmission grid to take advantage of the plant’s generation.',
        'Better quality and reliability of electricity supply for the Paraguaná Refining Complex, the Free Zone, communities in Falcón and the National Interconnected System.',
        'Option to add a combined cycle in the future to increase capacity.',
      ],
    },
  },
  {
    slug: 'planta-ezequiel-zamora',
    country: 've',
    sector: 'energia',
    capacity: '320 MW',
    image: photos.zamora,
    featured: true,
    es: {
      title: 'Planta termoeléctrica Ezequiel Zamora',
      place: 'Altagracia de Orituco, Edo. Guárico',
      summary: 'Planta de 320 MW en dos etapas, con turbinas Siemens de 150 y 170 MW en ciclo simple a gas, sobre 12 hectáreas.',
      scope: [
        'Ingeniería, procura, construcción, suministro, transporte, instalación y puesta en marcha de dos turbogeneradoras de 150 y 170 MW (Siemens W501FD2 y W501FD3).',
        'Balance de planta: compresión y tratamiento de gas con dos unidades Ariel JGZ/2, aire de servicio e instrumentos, agua potable, tratamiento de efluentes, sala de control y telecomunicaciones.',
        'Edificaciones de servicio, administrativas, almacén y taller de mantenimiento.',
        'Entrenamiento del personal de operación y mantenimiento.',
      ],
    },
    en: {
      title: 'Ezequiel Zamora thermoelectric plant',
      place: 'Altagracia de Orituco, Guárico State',
      summary: 'A 320 MW plant built in two stages, with 150 and 170 MW Siemens turbines in simple cycle on gas, over 12 hectares.',
      scope: [
        'Engineering, procurement, construction, supply, transport, installation and commissioning of two turbogenerators of 150 and 170 MW (Siemens W501FD2 and W501FD3).',
        'Balance of plant: gas compression and treatment with two Ariel JGZ/2 units, service and instrument air, potable water, effluent treatment, control room and telecommunications.',
        'Service and administrative buildings, warehouse and maintenance workshop.',
        'Training for operation and maintenance staff.',
      ],
    },
  },
  {
    slug: 'planta-alberto-lovera',
    country: 've',
    sector: 'energia',
    capacity: '300 MW',
    image: photos.lovera,
    featured: true,
    es: {
      title: 'Planta termoeléctrica Alberto Lovera',
      place: 'Puerto La Cruz, Edo. Anzoátegui',
      summary: 'Planta de 300 MW con dos turbinas Siemens de 150 MW en ciclo simple y combustible dual, sobre 6 hectáreas.',
      scope: [
        'Ingeniería, procura, construcción, suministro, transporte, instalación y puesta en marcha de dos turbogeneradoras de 150 MW (Siemens W501FD2 y W501FD3).',
        'Balance de planta: almacenamiento y tratamiento de combustible líquido, compresión y tratamiento de gas con dos unidades Ariel JGZ/2, aire de servicio e instrumentos, agua potable y desmineralizada, efluentes, control y telecomunicaciones.',
        'Edificaciones de servicio, sala de control, edificios administrativos, almacén y taller de mantenimiento.',
        'Entrenamiento del personal de operación y mantenimiento.',
      ],
    },
    en: {
      title: 'Alberto Lovera thermoelectric plant',
      place: 'Puerto La Cruz, Anzoátegui State',
      summary: 'A 300 MW plant with two 150 MW Siemens turbines in simple cycle on dual fuel, over 6 hectares.',
      scope: [
        'Engineering, procurement, construction, supply, transport, installation and commissioning of two 150 MW turbogenerators (Siemens W501FD2 and W501FD3).',
        'Balance of plant: liquid fuel storage and treatment, gas compression and treatment with two Ariel JGZ/2 units, service and instrument air, potable and demineralized water, effluents, control and telecommunications.',
        'Service buildings, control room, administrative buildings, warehouse and maintenance workshop.',
        'Training for operation and maintenance staff.',
      ],
    },
  },
  {
    slug: 'planta-san-diego-de-cabrutica',
    country: 've',
    sector: 'energia',
    capacity: '300 MW',
    image: photos.sanDiego,
    featured: true,
    es: {
      title: 'Planta termoeléctrica San Diego de Cabrutica',
      place: 'San Diego de Cabrutica, Edo. Anzoátegui',
      summary: 'Planta de 300 MW con dos turbinas Siemens de 150 MW en ciclo simple a gas, sobre 20 hectáreas y con campamento residencial.',
      scope: [
        'Ingeniería, procura, construcción, suministro, transporte, instalación y puesta en marcha de dos turbogeneradoras de 150 MW (Siemens W501FD2).',
        'Balance de planta: tratamiento de gas, aire de servicio e instrumentos, agua potable, tratamiento de efluentes, sala de control y telecomunicaciones.',
        'Edificaciones de servicio, administrativas, almacén y taller de mantenimiento, y un campamento residencial para el personal fijo de operación y mantenimiento.',
        'Entrenamiento del personal responsable de la operación y el mantenimiento.',
      ],
    },
    en: {
      title: 'San Diego de Cabrutica thermoelectric plant',
      place: 'San Diego de Cabrutica, Anzoátegui State',
      summary: 'A 300 MW plant with two 150 MW Siemens turbines in simple cycle on gas, over 20 hectares and with a residential camp.',
      scope: [
        'Engineering, procurement, construction, supply, transport, installation and commissioning of two 150 MW turbogenerators (Siemens W501FD2).',
        'Balance of plant: gas treatment, service and instrument air, potable water, effluent treatment, control room and telecommunications.',
        'Service and administrative buildings, warehouse and maintenance workshop, and a residential camp for permanent operation and maintenance staff.',
        'Training for the staff responsible for operation and maintenance.',
      ],
    },
  },
  {
    slug: 'planta-el-alto-bolivia',
    country: 'bo',
    sector: 'energia',
    client: 'Empresa Eléctrica Valle Hermoso S.A.',
    capacity: '32 MW',
    image: photos.elAlto,
    featured: true,
    es: {
      title: 'Planta termoeléctrica El Alto',
      place: 'El Alto, Bolivia',
      summary: 'Planta de 32 MW con una turbina Rolls-Royce Trent 60, construida a más de 4.000 metros sobre el nivel del mar.',
      scope: [
        'Ingeniería, procura, construcción, suministro, transporte, instalación y puesta en marcha de una turbogeneradora Rolls-Royce Trent 60 de 32 MW en ciclo simple a gas.',
        'Balance de planta: tratamiento de gas, aire de servicio e instrumentos y sala de control.',
        'Bahía de 115 kV con seccionadores, pararrayos, transformadores de medición e interruptor.',
        'Entrenamiento del personal responsable de la operación y el mantenimiento.',
      ],
    },
    en: {
      title: 'El Alto thermoelectric plant',
      place: 'El Alto, Bolivia',
      summary: 'A 32 MW plant with one Rolls-Royce Trent 60 turbine, built more than 4,000 meters above sea level.',
      scope: [
        'Engineering, procurement, construction, supply, transport, installation and commissioning of one 32 MW Rolls-Royce Trent 60 turbogenerator in simple cycle on gas.',
        'Balance of plant: gas treatment, service and instrument air, and control room.',
        '115 kV bay with disconnectors, surge arresters, measurement transformers and circuit breaker.',
        'Training for the staff responsible for operation and maintenance.',
      ],
    },
  },
  {
    slug: 'sistema-de-gas-sinovensa',
    country: 've',
    sector: 'petroleo-gas',
    image: photos.sinovensa,
    es: {
      title: 'Sistema de gas SINOVENSA',
      place: 'Morichal, Edo. Monagas',
      summary: 'Diagnóstico y mejoras del sistema de gas que alimenta la planta de generación eléctrica de la Estación de Flujo.',
      scope: [
        'Ingeniería para el mantenimiento, la adecuación, la limpieza y la puesta en marcha de la línea de gas principal de la Estación de Flujo.',
        'Diagnóstico de los problemas operativos y de diseño de la alimentación de gas a la planta de generación eléctrica.',
        'Soluciones, mejoras y recomendaciones para la correcta operatividad de la planta, sin afectar el modelo ni el incremento de producción de la Estación de Flujo.',
        'Instalación de tres recipientes verticales y dos botas de condensado.',
      ],
    },
    en: {
      title: 'SINOVENSA gas system',
      place: 'Morichal, Monagas State',
      summary: 'Diagnosis and improvements to the gas system that feeds the power plant at the flow station.',
      scope: [
        'Engineering for the maintenance, upgrade, cleaning and commissioning of the flow station’s main gas line.',
        'Diagnosis of the operational and design problems in the gas supply to the power plant.',
        'Solutions, improvements and recommendations for the plant to operate properly, without affecting the flow station’s model or production increase.',
        'Installation of three vertical vessels and two condensate boots.',
      ],
    },
  },
  {
    slug: 'doble-via-rio-seco-huarina',
    country: 'bo',
    sector: 'infraestructura',
    client: 'Administradora Boliviana de Carreteras (ABC)',
    capacity: '56 km',
    image: photos.viaAerea,
    featured: true,
    es: {
      title: 'Doble vía Río Seco–Huarina',
      place: 'El Alto, Bolivia',
      summary: 'Construcción de 56 km de la segunda Troncal de Bolivia, la que comunica con Perú, con 14 puentes, 16 pasarelas y 130 drenajes.',
      scope: [
        'Construcción de dos canales de circulación en cada sentido, con hombrillos.',
        '16 pasarelas peatonales, 14 puentes y 130 drenajes.',
        'Movimiento de tierras, pavimentación, estructuras de pasarelas y de puentes, drenajes y señalización vial.',
      ],
    },
    en: {
      title: 'Río Seco–Huarina dual carriageway',
      place: 'El Alto, Bolivia',
      summary: 'Construction of 56 km of Bolivia’s second trunk road, the one that connects with Peru, with 14 bridges, 16 footbridges and 130 drainage structures.',
      scope: [
        'Construction of two traffic lanes in each direction, with shoulders.',
        '16 pedestrian footbridges, 14 bridges and 130 drainage structures.',
        'Earthworks, paving, footbridge and bridge structures, drainage and road signage.',
      ],
    },
  },
  {
    slug: 'tanques-senkata',
    country: 'bo',
    sector: 'petroleo-gas',
    client: 'YPFB',
    image: photos.senkata,
    featured: true,
    es: {
      title: 'Expansión del patio de tanques Senkata',
      place: 'Senkata, El Alto, Bolivia',
      summary: 'Aumento de la capacidad de almacenaje con dos tanques de 10.000 m³ de diésel y dos de 8.000 m³ de gasolina especial.',
      scope: [
        'Ingeniería de detalle para el incremento de la capacidad de almacenaje.',
        'Construcción de dos tanques de 10.000 m³ para diésel oil y dos de 8.000 m³ para gasolina especial.',
        'Provisión y montaje de los sistemas de bombeo y tuberías para recepción y despacho de cada combustible.',
        'Sistema de drenaje industrial y pluvial asociado.',
      ],
    },
    en: {
      title: 'Senkata tank farm expansion',
      place: 'Senkata, El Alto, Bolivia',
      summary: 'Increased storage capacity with two 10,000 m³ diesel tanks and two 8,000 m³ special gasoline tanks.',
      scope: [
        'Detail engineering for the storage capacity increase.',
        'Construction of two 10,000 m³ diesel oil tanks and two 8,000 m³ special gasoline tanks.',
        'Supply and installation of the pumping systems and piping for receiving and dispatching each fuel.',
        'Associated industrial and storm drainage system.',
      ],
    },
  },
  {
    slug: 'tanques-santa-cruz',
    country: 'bo',
    sector: 'petroleo-gas',
    client: 'YPFB',
    image: photos.santaCruz,
    es: {
      title: 'Expansión del patio de tanques Santa Cruz',
      place: 'Santa Cruz, Bolivia',
      summary: 'Aumento de la capacidad de almacenaje con dos tanques de 10.000 m³, dos de 8.000 m³ y un tanque contra incendio.',
      scope: [
        'Ingeniería de detalle para el incremento de la capacidad de almacenaje.',
        'Construcción de dos tanques de 10.000 m³ para diésel oil, dos de 8.000 m³ para gasolina especial y un tanque para el sistema contra incendio.',
        'Provisión y montaje de los sistemas de bombeo y tuberías para recepción y despacho de cada combustible.',
        'Sistema de drenaje industrial y pluvial asociado.',
      ],
    },
    en: {
      title: 'Santa Cruz tank farm expansion',
      place: 'Santa Cruz, Bolivia',
      summary: 'Increased storage capacity with two 10,000 m³ tanks, two 8,000 m³ tanks and a fire protection tank.',
      scope: [
        'Detail engineering for the storage capacity increase.',
        'Construction of two 10,000 m³ diesel oil tanks, two 8,000 m³ special gasoline tanks and a fire protection system tank.',
        'Supply and installation of the pumping systems and piping for receiving and dispatching each fuel.',
        'Associated industrial and storm drainage system.',
      ],
    },
  },
  {
    slug: 'tanques-oruro',
    country: 'bo',
    sector: 'petroleo-gas',
    client: 'YPFB',
    image: photos.oruro,
    es: {
      title: 'Expansión del patio de tanques Oruro',
      place: 'Oruro, Bolivia',
      summary: 'Aumento de la capacidad de almacenaje con un tanque de 4.000 m³ de diésel, uno de 3.000 m³ de gasolina y un tanque contra incendio.',
      scope: [
        'Ingeniería de detalle para el incremento de la capacidad de almacenaje.',
        'Construcción de un tanque de 4.000 m³ para diésel oil, un tanque de 3.000 m³ para gasolina especial y un tanque para el sistema contra incendio.',
        'Provisión y montaje de los sistemas de bombeo y tuberías para recepción y despacho de cada combustible.',
        'Sistema de drenaje industrial y pluvial asociado.',
      ],
    },
    en: {
      title: 'Oruro tank farm expansion',
      place: 'Oruro, Bolivia',
      summary: 'Increased storage capacity with a 4,000 m³ diesel tank, a 3,000 m³ gasoline tank and a fire protection tank.',
      scope: [
        'Detail engineering for the storage capacity increase.',
        'Construction of one 4,000 m³ diesel oil tank, one 3,000 m³ special gasoline tank and a fire protection system tank.',
        'Supply and installation of the pumping systems and piping for receiving and dispatching each fuel.',
        'Associated industrial and storm drainage system.',
      ],
    },
  },
  {
    slug: 'tanques-la-garita',
    country: 'cr',
    sector: 'petroleo-gas',
    year: '2012',
    client: 'RECOPE',
    image: photos.tanquesCr,
    es: {
      title: 'Tanques de almacenamiento, Plantel La Garita',
      place: 'La Garita, Costa Rica',
      summary: 'Cuatro tanques de 8.000 m³ (50.000 barriles) con techo domo geodésico y cubierta flotante de aluminio, dos para gasolina y dos para diésel.',
      scope: [
        'Proyecto IPC para la construcción e instalación de cuatro tanques de almacenamiento de combustible.',
        'Reemplazo e instalación del sistema de tuberías, ampliación del múltiple existente y 12 válvulas motorizadas.',
        'Vialidad, caseta de guarda, canalizaciones eléctricas e instrumentación.',
        'Sistema contra incendio (enfriamiento, espuma y red), puesta a tierra, iluminación y protección catódica.',
        'Energización de equipos, pruebas, capacitación y puesta en marcha.',
      ],
    },
    en: {
      title: 'Storage tanks, La Garita Terminal',
      place: 'La Garita, Costa Rica',
      summary: 'Four 8,000 m³ (50,000 barrel) tanks with geodesic dome roofs and aluminum floating covers, two for gasoline and two for diesel.',
      scope: [
        'IPC project to build and install four fuel storage tanks.',
        'Replacement and installation of the piping system, expansion of the existing manifold and 12 motorized valves.',
        'Roads, guard house, electrical conduits and instrumentation.',
        'Fire protection system (cooling, foam and network), grounding, lighting and cathodic protection.',
        'Equipment energization, testing, training and commissioning.',
      ],
    },
  },
  {
    slug: 'tanques-el-alto-costa-rica',
    country: 'cr',
    sector: 'petroleo-gas',
    year: '2012',
    client: 'RECOPE',
    image: photos.tanquesCr,
    pos: '50% 70%',
    es: {
      title: 'Ampliación de la planta de distribución, Plantel El Alto',
      place: 'El Alto, Costa Rica',
      summary: 'Dos tanques API 650 de 40.000 barriles para gasolina regular, con techo domo geodésico y cubierta flotante de aluminio.',
      scope: [
        'Ingeniería, procura, construcción, prefabricación, montaje, pintura y pruebas de dos tanques API 650.',
        'Sistema de bombeo de recirculación, movimiento de tierra, fundaciones, diques de concreto y tuberías de proceso.',
        'Sistema contra incendio, iluminación e instrumentación.',
        'Energización de equipos, pruebas, capacitación y puesta en marcha.',
      ],
    },
    en: {
      title: 'Distribution plant expansion, El Alto Terminal',
      place: 'El Alto, Costa Rica',
      summary: 'Two API 650 tanks of 40,000 barrels each for regular gasoline, with geodesic dome roofs and aluminum floating covers.',
      scope: [
        'Engineering, procurement, construction, prefabrication, erection, painting and testing of two API 650 tanks.',
        'Recirculation pumping system, earthworks, foundations, concrete dikes and process piping.',
        'Fire protection system, lighting and instrumentation.',
        'Equipment energization, testing, training and commissioning.',
      ],
    },
  },
  {
    slug: 'tanques-jet-a1-barrancas',
    country: 'cr',
    sector: 'petroleo-gas',
    client: 'RECOPE',
    image: photos.tanquesCr,
    pos: '30% 40%',
    es: {
      title: 'Tanques de Jet A-1 y llenadero, Plantel Barrancas',
      place: 'Barrancas, Costa Rica',
      summary: 'Dos tanques de 25.000 barriles de combustible Jet A-1, un tanque de interfaces y un llenadero de camiones.',
      scope: [
        'Proyecto IPC para la construcción de dos tanques de almacenamiento de combustible Jet A-1 y un tanque de interfaces.',
        'Cargadero o llenadero de camiones y equipos auxiliares requeridos en el plantel.',
        'Acondicionamientos e intervenciones conforme a las normativas de adquisición de bienes y contratación de servicios de RECOPE.',
      ],
    },
    en: {
      title: 'Jet A-1 tanks and loading rack, Barrancas Terminal',
      place: 'Barrancas, Costa Rica',
      summary: 'Two 25,000 barrel Jet A-1 fuel tanks, an interface tank and a truck loading rack.',
      scope: [
        'IPC project to build two Jet A-1 fuel storage tanks and an interface tank.',
        'Truck loading rack and the auxiliary equipment required at the terminal.',
        'Upgrades and interventions in line with RECOPE’s procurement and contracting rules.',
      ],
    },
  },
  {
    slug: 'crudo-boscan-curazao',
    country: 'cw',
    sector: 'petroleo-gas',
    year: '2010–2012',
    client: 'Refinería Isla NV',
    image: photos.curazao,
    featured: true,
    es: {
      title: 'Manejo de crudo Boscán y almacenamiento',
      place: 'Terminal Bullenbay, Curazao',
      summary: 'Reconversión de tanques existentes para manejar crudo pesado del Campo Boscán en la refinería Isla.',
      scope: [
        'Ingeniería de detalle para la reconversión de los tanques a techo domo geodésico con cubierta interna flotante de aluminio.',
        'Incorporación de un sistema de calentamiento, bomba de recirculación y descarga de crudo a súper tanqueros.',
        'Desmantelamiento y disposición final de los techos flotantes de acero de 7 tanques.',
        'Excavación, relleno y compactación de 13.524 m³ en el lecho de los tanques y reemplazo de la fundación de concreto.',
        'Suministro, prefabricación, montaje, pintura y ensayos no destructivos de pisos y paredes, e instalación de domos geodésicos y cubiertas de aluminio.',
        'Suministro, instalación y pruebas de tuberías de proceso.',
      ],
    },
    en: {
      title: 'Boscán crude handling and storage',
      place: 'Bullenbay Terminal, Curaçao',
      summary: 'Conversion of existing tanks to handle heavy crude from the Boscán Field at the Isla refinery.',
      scope: [
        'Detail engineering for converting the tanks to geodesic dome roofs with internal aluminum floating covers.',
        'A heating system, recirculation pump and discharge for crude to supertankers.',
        'Dismantling and final disposal of the steel floating roofs of 7 tanks.',
        'Excavation, backfill and compaction of 13,524 m³ of material under the tanks and replacement of the concrete foundation.',
        'Supply, prefabrication, erection, painting and non-destructive testing of floors and walls, and installation of geodesic domes and aluminum covers.',
        'Supply, installation and testing of process piping.',
      ],
    },
  },
  {
    slug: 'planta-de-alimentos-arabia-saudita',
    country: 'sa',
    sector: 'infraestructura',
    year: '2016',
    client: 'Golden Tuna',
    image: photos.alimentos,
    es: {
      title: 'Planta de procesamiento de alimentos',
      place: 'Ciudad Económica Rey Abdullah (KAEC), Arabia Saudita',
      summary: 'Ingeniería de detalle y gestión de procura para una planta de alimentos de 125 toneladas diarias, sobre una parcela de 35.000 m².',
      scope: [
        'Consultoría de ejecución de ingeniería de detalle y gestión de procura.',
        'Capacidad aproximada de producción de 125 toneladas por día, en una parcela de 35.000 m² con 17.000 m² de construcción.',
        'Planos y documentos de las disciplinas de proceso, electricidad, equipos mecánicos, civil, instrumentación y control, telecomunicaciones y diseño mecánico de tuberías.',
      ],
    },
    en: {
      title: 'Food processing plant',
      place: 'King Abdullah Economic City (KAEC), Saudi Arabia',
      summary: 'Detail engineering and procurement management for a 125 tonne-per-day food plant, on a 35,000 m² site.',
      scope: [
        'Consulting services for detail engineering execution and procurement management.',
        'Approximate production capacity of 125 tonnes per day, on a 35,000 m² site with 17,000 m² of built area.',
        'Drawings and documents for process, electrical, mechanical equipment, civil, instrumentation and control, telecommunications and piping mechanical design.',
      ],
    },
  },
  {
    slug: 'hotel-spa-ikin',
    country: 've',
    sector: 'infraestructura',
    year: '2019',
    image: photos.hotel,
    es: {
      title: 'Hotel Spa Ikin',
      place: 'Margarita, Venezuela',
      summary: 'Adecuación de los sistemas eléctrico, de agua y de telecomunicaciones, y reforzamiento estructural de un hotel.',
      scope: [
        'Ingeniería de detalle para la adecuación del sistema eléctrico y del sistema de agua de servicio del hotel.',
        'Suministro parcial de equipos y materiales para las instalaciones eléctricas.',
        'Inspección de obras civiles y eléctricas para asegurar la correcta ejecución técnica.',
        'Adecuación del sistema de telecomunicaciones.',
      ],
      impact: [
        '32 % más de capacidad de alojamiento, con 24 nuevas habitaciones y una suite de 500 m².',
        'Independencia en la compra de agua potable y hielo.',
        'Mejor sistema de telecomunicaciones: voz, datos, TV, CCTV y telefonía.',
        'Respaldo del 100 % de la capacidad eléctrica, con autonomía de 6 días continuos.',
        'Facilidades para ampliar a futuro con spa, bar y una nueva piscina.',
      ],
    },
    en: {
      title: 'Ikin Hotel and Spa',
      place: 'Margarita, Venezuela',
      summary: 'Upgrade of the electrical, water and telecommunications systems, and structural reinforcement of a hotel.',
      scope: [
        'Detail engineering for upgrading the hotel’s electrical and service water systems.',
        'Partial supply of equipment and materials for the electrical installations.',
        'Inspection of civil and electrical works to ensure correct technical execution.',
        'Upgrade of the telecommunications system.',
      ],
      impact: [
        '32 % more accommodation capacity, with 24 new rooms and a 500 m² suite.',
        'Independence from buying drinking water and ice.',
        'Improved telecommunications: voice, data, TV, CCTV and telephony.',
        '100 % electrical backup with 6 days of continuous autonomy.',
        'Provisions for future expansion with a spa, bar and a new pool.',
      ],
    },
  },
];

export const projectText = (p: Project, lang: Lang) => p[lang];
