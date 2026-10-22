// English copy. Natural English, not a literal translation. Pending review by a native speaker from the client.
import type { Dict } from './index';

export const en = {
  lang: 'en',
  ogLocale: 'en_US',
  tagline: 'Global solutions provider',
  description:
    'Indigo Energy International is a global provider of engineering, procurement, construction and commissioning solutions for energy, oil and gas, water and infrastructure. Headquartered in Caracas, with projects in Venezuela, Bolivia, Costa Rica, Curaçao and Saudi Arabia.',

  common: {
    skip: 'Skip to content',
    brandHome: 'Indigo Energy International, home',
    mainNav: 'Main',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    expand: 'Show subsections',
    langSwitch: 'ES',
    langSwitchLabel: 'Ver esta página en español',
    phone: 'Phone',
    email: 'Email',
    address: 'Address',
    seeMore: 'See more',
    all: 'All',
    contactUs: 'Contact us',
    viewProject: 'View project',
    allProjects: 'See all projects',
    allServices: 'See all services',
    allSectors: 'See all sectors',
    relatedProjects: 'Projects in this sector',
    otherSectors: 'Other sectors',
    inThisSector: 'In this sector',
    sectorSolutions: 'Solutions in this sector',
    allSolutions: 'See all solutions',
    seeSector: 'View the sector',
    otherQuality: 'More on quality, safety and environment',
    otherServices: 'Other services',
    nextProject: 'Next project',
    backToProjects: 'Back to projects',
    home: 'Home',
    legalRights: 'All rights reserved.',
    credit: 'Website developed by MDN Publicidad',
    ctaRoutes: {
      project: 'I have a project',
      projectText: 'Tell us the scope and we will tell you how we can help.',
      call: "I'd rather call or email",
    },
  },

  nav: {
    about: 'About',
    services: 'Services',
    solutions: 'Solutions',
    sectors: 'Sectors',
    projects: 'Projects',
    quality: 'Quality',
    allProjects: 'All projects',
    contact: 'Contact',
    cta: "Request a proposal",
  },

  footer: {
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    followTitle: 'Follow us',
    quality: 'Quality, safety and environment',
    careers: 'Careers',
    rif: 'Tax ID (RIF)',
  },

  hero: {
    label: 'What we do',
    slides: [
      {
        label: 'Solutions',
        title: 'Global solutions for energy, industry and infrastructure',
        text: 'Engineering, procurement, construction and commissioning delivered by one team, with projects in five countries.',
        cta: 'Meet Indigo',
        href: '/nosotros',
      },
      {
        label: 'Energy',
        title: 'Power plants of up to 450 MW',
        text: 'Thermoelectric plants where one team handles engineering, procurement, construction and commissioning.',
        cta: 'See energy',
        href: '/sectores/energia',
      },
      {
        label: 'Oil and Gas',
        title: 'Tank farms of up to 10,000 m³',
        text: 'Storage, pumping and fire protection systems for YPFB, RECOPE and Isla Refinery.',
        cta: 'See oil and gas',
        href: '/sectores/petroleo-gas',
      },
      {
        label: 'Infrastructure',
        title: 'A 56 km dual carriageway with 14 bridges',
        text: 'Roads, industrial buildings, residential complexes and hotel works.',
        cta: 'See infrastructure',
        href: '/sectores/infraestructura',
      },
    ],
  },

  home: {
    band: {
      statement: 'One team to plan, procure, build and commission.',
      facts: 'Thermoelectric plants, tank farms, roads and hotels in five countries: Venezuela, Bolivia, Costa Rica, Curaçao and Saudi Arabia.',
    },
    services: {
      title: 'Services and solutions',
      lead: 'We support the project from the first idea until the plant is producing.',
      link: 'See all services',
    },
    sectors: {
      title: 'Sectors',
      link: 'See all sectors',
    },
    projects: {
      title: 'Featured projects',
      link: 'See all projects',
    },
    map: {
      title: 'Headquartered in Caracas, working across the Americas and the Middle East',
      lead: 'We deliver projects in Venezuela, Bolivia, Costa Rica, Curaçao and Saudi Arabia, and we have a presence in Mexico and the Middle East.',
      home: 'Headquarters',
      aria: 'Map showing where Indigo operates',
    },
    cta: {
      title: 'Have an energy, industry or infrastructure project?',
      text: 'Tell us the scope and we will show you how we can help.',
    },
  },

  steps: [
    {
      id: 'ingenieria',
      title: 'Engineering',
      text: 'Conceptual, basic and detail design with control over every discipline: civil, piping, electrical, instrumentation, control and telecommunications, mechanical and process.',
    },
    {
      id: 'procura',
      title: 'Procurement',
      text: 'Local and international purchasing, tenders, inspection, logistics, customs and clearance of equipment and materials.',
    },
    {
      id: 'construccion',
      title: 'Construction',
      text: 'Civil works and electromechanical erection, with contractor management, cost and materials control, and As-Built drawings.',
    },
    {
      id: 'puesta-en-marcha',
      title: 'Commissioning',
      text: 'Documented pre-commissioning and commissioning, supervision, and training for operations and maintenance teams.',
    },
  ],

  about: {
    meta: 'Who we are, our culture and our team.',
    title: 'Global solutions provider',
    intro: 'A Venezuelan company headquartered in Caracas, with projects in five countries.',
    who: {
      statement:
        'Indigo Energy International brings together engineering, procurement, construction, commissioning and specialized services for the energy, oil and gas, water and infrastructure sectors.',
      text: 'Our multidisciplinary team is made up of highly qualified professionals. We are headquartered in Caracas, Venezuela, with a presence in Mexico, Bolivia, Costa Rica and the Middle East, part of a globalization strategy that strengthens our relationships with partners and clients.',
    },
    facts: {
      countries: 'countries with projects',
      projects: 'projects in our portfolio',
      clients: 'clients across our projects',
      disciplines: 'engineering disciplines in one team',
    },
    culture: {
      title: 'Corporate culture',
      text: 'We foster positive leadership, commitment, responsibility and passion across our team, always under strict quality standards.',
      mission: {
        title: 'Mission',
        text: 'To provide industrial development and infrastructure solutions worldwide, to the highest quality standards, creating satisfaction for our clients, suppliers, employees, shareholders and society at large.',
      },
      vision: {
        title: 'Vision',
        text: 'To be recognized as a leading company with world-class standards in the industry.',
      },
    },
    values: {
      title: 'Values',
      items: [
        {
          title: 'Quality',
          text: 'Excellence in everything we do, openness to change and global thinking that drive continuous improvement. It is a way of being and doing, a daily challenge that guides our decisions, operations and sales.',
        },
        {
          title: 'Integrity',
          text: 'Doing the right thing, personally and as a company, in every circumstance.',
        },
        {
          title: 'Commitment',
          text: 'Delivering what we planned and going the extra mile to exceed expectations on our commitments, the objectives of the company and the needs of the client.',
        },
        {
          title: 'Teamwork',
          text: 'Reaching shared solutions, being efficient, staying open to new ideas, recognizing that problems are complex and involve many areas, and respecting differences in the search for the best solution.',
        },
      ],
    },
    talent: {
      title: 'People',
      text: 'Indigo’s main source of value is its people: engineers and designers in process, mechanical, civil, electrical, telecommunications, instrumentation and control, supported by procurement, contract administration, quality, HSE and finance teams.',
      growth: 'We encourage professional growth through ongoing training, courses and certifications for every member of the team.',
      cta: 'If you would like to join us, send your CV to',
      team: {
        title: 'Engineering disciplines in one team',
        text: 'Six engineering disciplines backed by five support areas, working as a single team.',
        engTitle: 'Engineering and design',
        eng: ['Process', 'Mechanical', 'Civil design', 'Electrical design', 'Telecommunications', 'Instrumentation and control'],
        supportTitle: 'Support',
        support: ['Procurement', 'Contract administration', 'Quality', 'HSE', 'Finance'],
      },
    },
    sub: {
      title: 'Learn more about Indigo',
      cultura: {
        title: 'Corporate culture',
        text: 'Mission, vision and the four values that guide every decision.',
        meta: 'Mission, vision and values of Indigo Energy International.',
        intro: 'Mission, vision and the values that guide how we work.',
      },
      talento: {
        title: 'People',
        text: 'How we select and develop our team, and how to join.',
        meta: 'People and professional development at Indigo Energy International.',
        intro: 'Experienced teams, always learning.',
        developmentTitle: 'Professional development',
        development: [
          'We understand how important professional development is for every team member. That is why we encourage growth that positively impacts the productivity and effectiveness of each project.',
          'We build knowledge and experience in every area, with ongoing training through courses and certifications that advance the career of each member of the team.',
        ],
        hiring: 'We look for excellence and quality in every recruitment and selection process, to build teams of experienced, highly qualified people in each technical unit. We act with commitment, integrity, quality, teamwork, dignity and ethics.',
      },
      clientes: {
        title: 'Clients and partners',
        text: 'The companies we have delivered projects for.',
        meta: 'Clients and strategic partners of Indigo Energy International.',
        intro: 'Public and private companies that have trusted us with their projects.',
      },
    },
    clients: {
      title: 'Clients we have worked with',
      projectOne: 'project',
      projectMany: 'projects',
    },
    cta: {
      title: "Let's talk about your next project.",
    },
  },

  servicesPage: {
    meta: 'Engineering, procurement, construction, commissioning and technology for energy, oil and gas, water and infrastructure projects.',
    title: 'Services and solutions, from engineering to commissioning',
    intro: 'We can deliver the whole project or step in at the stage you need.',
    includes: 'What it includes',
    others: 'Other services',
    cta: {
      title: 'Define with us the stage your project requires',
      text: 'We will reply with a proposed scope.',
    },
  },

  solutionsPage: {
    meta: 'Indigo engineering, procurement and construction solutions: {n} areas across energy, oil and gas, water, infrastructure and industry.',
    title: 'Solutions for every stage of your project',
    intro: 'These are the {n} areas where we apply engineering, procurement and construction, grouped by sector.',
    jump: 'Jump to a sector',
    cta: {
      title: 'Does your project need any of these solutions?',
      text: 'Tell us the scope and we will reply with a proposal.',
    },
  },

  sectorsPage: {
    meta: 'Energy, oil and gas, water, infrastructure and industry: the sectors where Indigo develops projects.',
    title: 'The sectors where we build',
    intro: 'Five sectors, with scopes that run from basic engineering to commissioning.',
    cta: {
      title: 'Is your project in one of these sectors?',
      text: "Let's talk about the scope.",
    },
  },

  projectsPage: {
    meta: 'Power generation, fuel storage, roads, infrastructure and more, in five countries.',
    title: 'Projects already in operation',
    intro: 'A selection of works in Venezuela, Bolivia, Costa Rica, Curaçao and Saudi Arabia.',
    byCountry: 'By country',
    filterLabel: 'Filter by sector',
    facts: {
      client: 'Client',
      location: 'Location',
      year: 'Year',
      unit: 'Business unit',
      capacity: 'Capacity',
      scope: 'Scope',
      impact: 'Results',
    },
    cta: {
      title: 'Need a project like this one?',
      text: 'Tell us what you want to build.',
    },
  },

  qualityPage: {
    meta: 'Quality policy, environmental policy, occupational health and safety, and Indigo certifications.',
    title: 'Quality, safety and environment',
    intro: 'Policies and certifications applied across the company and on every project in execution.',
    listTitle: 'Our commitments',
    cta: {
      title: 'Learn how we work',
      text: 'Write to us and we will tell you more.',
    },
  },

  contactPage: {
    meta: 'Contact Indigo Energy International for information and business inquiries.',
    title: "Let's talk about your project.",
    intro: 'Tell us what you need. We will reply with a proposed scope.',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      message: 'What do you need?',
      send: 'Send message',
      subject: 'Inquiry from the website',
      mailFallback: 'Your email app will open with the message ready to send.',
      noscript: 'Write to us at',
    },
    info: {
      business: 'Information and business',
      careers: 'Careers',
    },
  },

  cookieBanner: {
    label: 'Cookie notice',
    text: 'We use analytics cookies to measure how the site is used and improve it. You can accept or reject them. Learn more in our',
    cookies: 'cookie policy',
    privacy: 'privacy policy',
    accept: 'Accept',
    reject: 'Reject',
  },

  legal: {
    updatedLabel: 'Last updated',
    cookieSettings: 'Cookie settings',
    privacyLink: 'Privacy',
    cookiesLink: 'Cookies',
    privacy: {
      title: 'Privacy policy',
      meta: 'How Indigo Energy International collects, uses and protects the personal data you share on this website.',
      intro: 'This page explains what personal data we collect on this website, what we use it for and what rights you have over it.',
      sections: [
        { h: '1. Data controller', p: ['{legalName} ("{name}", "we") is responsible for the personal data collected through this website ({domain}). Contact: {email} · {phone}. Address: {city}, {country}. Tax ID (RIF) {rif}.'] },
        { h: '2. What data we collect', p: [
          'What you give us voluntarily in the contact form: name, company, email address, phone number and your message. Company and phone are optional.',
          'The form does not store your data on this site: it builds an email in your own mail application, and the information only reaches us if you send it.',
          'If you accept analytics cookies, we also collect aggregated browsing data: pages visited, traffic source, device type and approximate country. We do not use it to identify you.',
        ] },
        { h: '3. What we use your data for', p: ['To answer your inquiry or proposal request and, if we move forward, for the business relationship. With analytics, to understand what content is of interest and improve the site. We do not sell your data.'] },
        { h: '4. Legal basis', p: ['Your consent, which you give when you send us a message and, for analytics, when you accept cookies. You can withdraw it at any time.'] },
        { h: '5. Who we share it with', p: ['We work with providers that process data on our behalf:'], list: [
          'Hosting provider for the website and the company email.',
          '{analytics}',
        ] },
        { h: '6. How long we keep it', p: ['Messages are kept while a business relationship or interest exists and you do not ask for deletion. Analytics data is kept for up to 14 months.'] },
        { h: '7. Your rights', p: ['You can ask us for access, rectification, deletion or objection to the processing of your data by writing to {email}. We will handle your request as soon as possible.'] },
        { h: '8. Changes to this policy', p: ['We may update it to reflect changes to the site or to regulations. The date of the last review is at the bottom of this page.'] },
      ],
      analyticsOn: 'Google Analytics (Google LLC): site analytics, only if you accept analytics cookies.',
      analyticsOff: 'The site does not currently use third-party analytics tools.',
    },
    cookies: {
      title: 'Cookie policy',
      meta: 'Which cookies Indigo Energy International uses, what they are for and how you can manage them or withdraw your consent.',
      intro: 'This page explains what cookies are, which ones we use on this website and how you can manage them.',
      what: { h: '1. What cookies are', p: 'Small files that a site stores in your browser to remember information about your visit, such as your preferences or how you use the site.' },
      used: { h: '2. Cookies we use', p: 'Analytics cookies are only activated if you accept them in the cookie notice. Your choice is stored in your browser.' },
      table: { name: 'Cookie', type: 'Type', duration: 'Duration', purpose: 'Purpose' },
      rows: {
        ga: { type: 'Analytics', duration: 'Up to 2 years', purpose: 'Measure how the site is used (pages visited, traffic source) in aggregate. Only installed if you accept them.' },
        consent: { type: 'Necessary', duration: 'Until you delete it', purpose: 'Stores your cookie choice so we do not ask on every visit.' },
      },
      none: 'For now the site only stores your cookie preference.',
      manage: { h: '3. How to manage your consent', p: 'You can accept or reject analytics cookies in the notice shown on your first visit. To change your choice, use the "Cookie settings" button in the footer. You can also block or delete cookies from your browser; some parts of the site may stop working.' },
      more: { h: '4. More information', p: 'To learn how we handle your personal data, see the {privacy}. If you have any questions, write to {email}.', privacy: 'privacy policy' },
    },
  },

  notFound: {
    title: "We couldn't find that page.",
    text: 'The link may have changed with the new website.',
    back: 'Back to home',
  },
} satisfies Dict;
