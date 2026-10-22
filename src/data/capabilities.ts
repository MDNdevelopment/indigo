import type { SectorId } from './sectors';

// Matriz de oferta de servicios y capacidades técnicas enviada por el cliente (correo de J. Barone del 21 oct 2026,
// preparada por J. Campoli). Textos reescritos con el tono del sitio; los datos técnicos son los del correo.
export interface Capability {
  id: string;
  sector: SectorId;
  es: { title: string; text: string };
  en: { title: string; text: string };
}

export const capabilities: Capability[] = [
  // Energía
  {
    id: 'renovables',
    sector: 'energia',
    es: {
      title: 'Energías renovables y transición energética',
      text: 'Desarrollamos e integramos proyectos fotovoltaicos, eólicos e híbridos, desde la fase conceptual hasta la puesta en marcha. Nos respaldan nuestra trayectoria en subestaciones, almacenamiento de energía (BESS), conexión a la red, obras civiles y sistemas de respaldo.',
    },
    en: {
      title: 'Renewable energy and energy transition',
      text: 'We develop and integrate solar, wind and hybrid projects, from concept to commissioning. Our track record in substations, energy storage (BESS), grid connection, civil works and backup systems supports every stage.',
    },
  },
  {
    id: 'termoelectrica',
    sector: 'energia',
    es: {
      title: 'Generación termoeléctrica y plantas de respaldo',
      text: 'Ejecutamos centrales termoeléctricas de gran escala y sistemas de potencia de emergencia, con ingeniería de detalle y modalidad IPC/EPC. Hemos instalado turbogeneradores de alta capacidad (Siemens, Rolls-Royce, Cummins) en distintas condiciones geográficas, operativas y de altitud.',
    },
    en: {
      title: 'Thermal power generation and backup plants',
      text: 'We deliver large-scale thermal power plants and emergency power systems, with detailed engineering under IPC/EPC contracts. We have installed high-capacity turbogenerators (Siemens, Rolls-Royce, Cummins) across varied geographic, operating and altitude conditions.',
    },
  },
  {
    id: 'subestaciones',
    sector: 'energia',
    es: {
      title: 'Subestaciones y bahías de alta y media tensión',
      text: 'Diseñamos, procuramos y construimos subestaciones y bahías de 115 kV y 34,5 kV: desde la ingeniería civil y de potencia hasta el montaje de seccionadores, transformadores, pararrayos e interruptores.',
    },
    en: {
      title: 'High and medium voltage substations and bays',
      text: 'We design, procure and build 115 kV and 34.5 kV substations and bays: from civil and power engineering to the installation of disconnectors, transformers, surge arresters and circuit breakers.',
    },
  },
  {
    id: 'distribucion-electrica',
    sector: 'energia',
    es: {
      title: 'Líneas de distribución y tendido eléctrico',
      text: 'Ejecutamos ingeniería, topografía, suministro y montaje de líneas de distribución en media tensión (13,8 kV y 34,5 kV) para alimentar campos industriales, instalaciones petroleras y obras provisionales.',
    },
    en: {
      title: 'Distribution lines and power line construction',
      text: 'We carry out engineering, surveying, supply and installation of medium voltage distribution lines (13.8 kV and 34.5 kV) to power industrial sites, oil facilities and temporary works.',
    },
  },
  {
    id: 'puesta-a-tierra',
    sector: 'energia',
    es: {
      title: 'Puesta a tierra y mallas de protección',
      text: 'Diseñamos e instalamos mallas de puesta a tierra que disipan con seguridad las corrientes de falla y protegen equipos críticos en patios de tanques, subestaciones, naves industriales, hoteles y edificios corporativos.',
    },
    en: {
      title: 'Grounding and protection grids',
      text: 'We design and install grounding grids that safely dissipate fault currents and protect critical equipment in tank farms, substations, industrial buildings, hotels and corporate offices.',
    },
  },
  {
    id: 'proteccion-atmosferica',
    sector: 'energia',
    es: {
      title: 'Protección atmosférica y pararrayos',
      text: 'Instalamos sistemas contra descargas atmosféricas, con pararrayos y cortacorrientes de potencia, para resguardar líneas de transmisión de media tensión (13,8 kV y 34,5 kV) e infraestructura industrial pesada.',
    },
    en: {
      title: 'Lightning protection and surge arresters',
      text: 'We install lightning protection systems, with surge arresters and power cutouts, to safeguard medium voltage transmission lines (13.8 kV and 34.5 kV) and heavy industrial infrastructure.',
    },
  },

  // Petróleo y gas
  {
    id: 'tanques',
    sector: 'petroleo-gas',
    es: {
      title: 'Patios de tanques y almacenamiento atmosférico (API 650)',
      text: 'Hacemos la ingeniería, adecuación, reconversión y construcción llave en mano de tanques de almacenamiento masivo bajo norma API 650, para diésel, gasolina, Jet A-1 y agua contra incendios, incluidos techos domo geodésicos y cubiertas flotantes.',
    },
    en: {
      title: 'Tank farms and atmospheric storage (API 650)',
      text: 'We handle engineering, retrofit, conversion and turnkey construction of bulk storage tanks to API 650, for diesel, gasoline, Jet A-1 and fire water, including geodesic dome roofs and floating covers.',
    },
  },
  {
    id: 'llenaderos',
    sector: 'petroleo-gas',
    es: {
      title: 'Llenaderos de cisternas y cargaderos de camiones',
      text: 'Diseñamos y construimos islas de despacho, brazos de carga automáticos y sistemas de bombeo para recibir, transferir y llenar combustible, integrados con medición fiscal y control de ventas.',
    },
    en: {
      title: 'Tanker truck loading racks and filling stations',
      text: 'We design and build loading islands, automatic loading arms and pumping systems to receive, transfer and load fuel, integrated with fiscal metering and sales control.',
    },
  },
  {
    id: 'compresion-gas',
    sector: 'petroleo-gas',
    es: {
      title: 'Compresión, acondicionamiento y manejo de gas combustible',
      text: 'Integramos unidades de compresión de gas (equipos Ariel), desgasificadores, depuradores (gas scrubbers) y sistemas de regulación de gas de arranque o piloto.',
    },
    en: {
      title: 'Compression, conditioning and handling of fuel gas',
      text: 'We integrate gas compression units (Ariel equipment), degassers, gas scrubbers and regulation systems for start-up or pilot gas.',
    },
  },
  {
    id: 'venteo-mechurrios',
    sector: 'petroleo-gas',
    es: {
      title: 'Alivio, venteo y mechurrios (flares y KOD)',
      text: 'Diseñamos y especificamos sistemas de seguridad operativa para el manejo de gas: tambores depuradores (KOD), estacas de venteo y mechurrios de baja o media presión, incluidos los de tipo sónico multipunto.',
    },
    en: {
      title: 'Relief, venting and flares (KOD)',
      text: 'We design and specify operational safety systems for gas handling: knock-out drums (KOD), vent stacks and low or medium pressure flares, including multipoint sonic types.',
    },
  },
  {
    id: 'ductos',
    sector: 'petroleo-gas',
    es: {
      title: 'Oleoductos, gasoductos y tuberías de proceso (piping y pigging)',
      text: 'Desarrollamos proyectos de transporte de crudo, diluente y gas, con ingeniería de ductos, estaciones de lanzamiento y recepción de limpiadores (pig launchers y receivers) y múltiples (manifolds).',
    },
    en: {
      title: 'Oil and gas pipelines and process piping (piping and pigging)',
      text: 'We develop crude, diluent and gas transport projects, with pipeline engineering, pig launcher and receiver stations and manifolds.',
    },
  },
  {
    id: 'facilidades-superficie',
    sector: 'petroleo-gas',
    es: {
      title: 'Facilidades de superficie y macollas petroleras',
      text: 'Desarrollamos la infraestructura de superficie para producir hidrocarburos: estaciones de flujo, separación bifásica, medición multifásica e inyección de químicos.',
    },
    en: {
      title: 'Surface facilities and wellpads',
      text: 'We build the surface infrastructure for hydrocarbon production: flow stations, two-phase separation, multiphase metering and chemical injection.',
    },
  },
  {
    id: 'proteccion-catodica',
    sector: 'petroleo-gas',
    es: {
      title: 'Protección catódica',
      text: 'Hacemos la ingeniería y la instalación de sistemas de protección catódica que previenen la corrosión en tanques de almacenamiento masivo (API 650) y en tuberías industriales y enterradas.',
    },
    en: {
      title: 'Cathodic protection',
      text: 'We engineer and install cathodic protection systems that prevent corrosion in bulk storage tanks (API 650) and in industrial and buried pipelines.',
    },
  },

  // Agua
  {
    id: 'desalinizacion',
    sector: 'agua',
    es: {
      title: 'Plantas de tratamiento de agua y desalinización (ósmosis inversa)',
      text: 'Desarrollamos e integramos plantas potabilizadoras, desmineralizadoras y de desalinización por ósmosis inversa, de escala industrial y comercial. Cubrimos desde la captación en pozos salobres hasta el tratamiento avanzado que garantiza el suministro.',
    },
    en: {
      title: 'Water treatment and desalination plants (reverse osmosis)',
      text: 'We develop and integrate drinking water, demineralization and reverse osmosis desalination plants at industrial and commercial scale. We cover everything from brackish well intake to the advanced treatment that secures supply.',
    },
  },
  {
    id: 'filtracion',
    sector: 'agua',
    es: {
      title: 'Filtración, clarificación y separación',
      text: 'Diseñamos e instalamos skids y sistemas de filtración para gas combustible, agua potable, hidrocarburos y efluentes industriales, que remueven sólidos y pesados en procesos críticos.',
    },
    en: {
      title: 'Filtration, clarification and separation',
      text: 'We design and install filtration skids and systems for fuel gas, drinking water, hydrocarbons and industrial effluents, removing solids and heavy fractions in critical processes.',
    },
  },
  {
    id: 'efluentes',
    sector: 'agua',
    es: {
      title: 'Recolección y tratamiento de efluentes',
      text: 'Diseñamos y construimos redes de drenajes industriales, separadores API y plantas depuradoras de efluentes sanitarios y oleaginosos, conforme a las normas ambientales y de sostenibilidad.',
    },
    en: {
      title: 'Effluent collection and treatment',
      text: 'We design and build industrial drainage networks, API separators and treatment plants for sanitary and oily effluents, in line with environmental and sustainability standards.',
    },
  },

  // Infraestructura
  {
    id: 'diseno-arquitectonico',
    sector: 'infraestructura',
    es: {
      title: 'Diseño arquitectónico, interiorismo y distribución espacial',
      text: 'Hacemos el diseño y la reingeniería de la distribución espacial, la arquitectura de interiores y la imagen corporativa de edificios administrativos, salas de control, hoteles, restaurantes y oficinas.',
    },
    en: {
      title: 'Architectural design, interiors and space planning',
      text: 'We design and re-engineer space layouts, interior architecture and corporate image for administrative buildings, control rooms, hotels, restaurants and offices.',
    },
  },
  {
    id: 'fit-out',
    sector: 'infraestructura',
    es: {
      title: 'Diseño y fit-out de edificaciones industriales y comerciales',
      text: 'Acondicionamos edificaciones de forma integral: cerramientos, acabados de alta gama (mármol, granito, cristal), tabiquería, cielos rasos y diseño de fachadas y revestimientos exteriores.',
    },
    en: {
      title: 'Design and fit-out of industrial and commercial buildings',
      text: 'We fit out buildings end to end: enclosures, high-end finishes (marble, granite, glass), partitions, ceilings and façade and exterior cladding design.',
    },
  },
  {
    id: 'refuerzo-estructural',
    sector: 'infraestructura',
    es: {
      title: 'Refuerzo estructural y diagnóstico sísmico',
      text: 'Evaluamos la vulnerabilidad sísmica, modelamos estructuras y ejecutamos refuerzos de gran escala en concreto y acero: encamisado de columnas, confinamiento estructural y refuerzo de fundaciones.',
    },
    en: {
      title: 'Structural reinforcement and seismic assessment',
      text: 'We assess seismic vulnerability, model structures and carry out large-scale reinforcement in concrete and steel: column jacketing, structural confinement and foundation strengthening.',
    },
  },
  {
    id: 'obras-civiles',
    sector: 'infraestructura',
    es: {
      title: 'Obras civiles, fundaciones especiales y vialidad',
      text: 'Ejecutamos obras civiles integrales: movimientos de tierra masivos, fundaciones profundas (pilotes), pedestales pesados, muros de contención, diques, pavimento industrial y vías de acceso.',
    },
    en: {
      title: 'Civil works, special foundations and roadways',
      text: 'We deliver comprehensive civil works: massive earthmoving, deep foundations (piles), heavy pedestals, retaining walls, dikes, industrial paving and access roads.',
    },
  },

  // Industria
  {
    id: 'agroindustria',
    sector: 'industria',
    es: {
      title: 'Plantas de procesamiento de aceite de palma y agroindustria oleaginosa',
      text: 'Abordamos plantas integrales de aceite de palma: diseño e integración de líneas de extracción y refinación, preparación y dosificación de insumos, vapor industrial, refrigeración, tuberías de proceso, automatización y tratamiento de efluentes.',
    },
    en: {
      title: 'Palm oil processing plants and oilseed agribusiness',
      text: 'We take on complete palm oil plants: design and integration of extraction and refining lines, input preparation and dosing, industrial steam, refrigeration, process piping, automation and effluent treatment.',
    },
  },
  {
    id: 'naves-industriales',
    sector: 'industria',
    es: {
      title: 'Naves e infraestructura industrial de gran tonelaje',
      text: 'Diseñamos y construimos galpones industriales, plantas procesadoras y talleres de mantenimiento pesado, con cálculo de estructuras metálicas, losas de alta resistencia y adecuación para puentes grúa de gran capacidad.',
    },
    en: {
      title: 'Heavy-duty industrial buildings and infrastructure',
      text: 'We design and build industrial sheds, processing plants and heavy maintenance workshops, with steel structure calculation, high-strength slabs and provisions for large-capacity overhead cranes.',
    },
  },
  {
    id: 'servicios-auxiliares',
    sector: 'industria',
    es: {
      title: 'Servicios auxiliares industriales (HVAC, vapor y aire comprimido)',
      text: 'Desarrollamos e integramos aire comprimido industrial, plantas de vapor (calderas), redes de distribución de condensados y sistemas centrales de climatización y ventilación forzada (HVAC y chillers).',
    },
    en: {
      title: 'Industrial utilities (HVAC, steam and compressed air)',
      text: 'We develop and integrate industrial compressed air, steam generation plants (boilers), condensate distribution networks and central air conditioning and forced ventilation systems (HVAC and chillers).',
    },
  },
  {
    id: 'automatizacion',
    sector: 'industria',
    es: {
      title: 'Automatización, SCADA, ESD y sistemas de control (EI&C)',
      text: 'Integramos arquitecturas de control centralizado, sistemas SCADA, redes de parada de emergencia (ESD) y detección de fuego y gas (F&G), con PLC, HMI y protocolos de comunicación de última generación para plantas industriales.',
    },
    en: {
      title: 'Automation, SCADA, ESD and control systems (EI&C)',
      text: 'We integrate centralized control architectures, SCADA systems, emergency shutdown (ESD) networks and fire and gas (F&G) detection, with PLC, HMI and the latest communication protocols for industrial plants.',
    },
  },
  {
    id: 'contra-incendios',
    sector: 'industria',
    es: {
      title: 'Sistemas contra incendios (SCI y HSE)',
      text: 'Diseñamos e instalamos de forma integral redes de protección contra incendios: rociadores automáticos, redes de agua de enfriamiento, sistemas fijos de inyección de espuma, monitores e hidrantes.',
    },
    en: {
      title: 'Fire protection systems (FPS and HSE)',
      text: 'We design and install complete fire protection networks: automatic sprinklers, cooling water networks, fixed foam injection systems, monitors and hydrants.',
    },
  },
  {
    id: 'telecomunicaciones',
    sector: 'industria',
    es: {
      title: 'Telecomunicaciones, seguridad electrónica y data centers',
      text: 'Suministramos e instalamos cableado estructurado, redes de fibra óptica, videovigilancia (CCTV) y control de acceso, y construimos cuartos de servidores y data centers.',
    },
    en: {
      title: 'Telecommunications, electronic security and data centers',
      text: 'We supply and install structured cabling, fiber optic networks, video surveillance (CCTV) and access control, and build server rooms and data centers.',
    },
  },
];

export const capabilitiesBy = (sector: SectorId) => capabilities.filter((c) => c.sector === sector);
