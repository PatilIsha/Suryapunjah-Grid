/**
 * Single source of truth for every piece of company content on the site.
 * Edit here and every page updates.
 */

export const company = {
  name: 'SURYAPUNJAH GRID ENERGY LLP',
  shortName: 'Suryapunjah',
  tagline: 'Clean Energy • Brighter Future',
  since: 2021,
  launched: 2026,
  address: {
    line1: 'A-610 World Trade Tower',
    line2: 'Behind Skoda Showroom, Village Makarba',
    line3: 'Taluka Ahmedabad City — 380051, Gujarat',
    full: 'A-610 World Trade Tower, Behind Skoda Showroom, Village Makarba, Taluka Ahmedabad City - 380051',
  },
  phones: [
    { display: '+91 91758 55941', tel: '+919175855941' },
    { display: '+91 73879 55941', tel: '+917387955941' },
  ],
  whatsapp: 'https://wa.me/919175855941',
  email: 'suryapunjahgridenergy@gmail.com',
  hours: 'Monday – Saturday · 9:30 AM – 7:00 PM',
  mapEmbed:
    'https://www.google.com/maps?q=World%20Trade%20Tower%2C%20Makarba%2C%20Ahmedabad%2C%20Gujarat%20380051&output=embed',
}

/* credit shown in the footer bottom bar */
export const developer = {
  name: 'MiCodeX',
  url: 'https://mi-code-x.vercel.app/',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'Directors', to: '/directors' },
  { label: 'Contact', to: '/contact' },
]

export const heroImages = [
  { src: '/img/hero-1.jpg', tag: 'EPC', caption: 'Ground mounted plants' },
  { src: '/img/epc.jpg', tag: 'MMS', caption: 'Mounting structures' },
  { src: '/img/bos.jpg', tag: 'BOS', caption: 'Cabling & switchgear' },
]

export const heroStats = [
  { value: '4.8 MW', label: 'BOS commissioned' },
  { value: '3+', label: 'Projects delivered' },
  { value: '2021', label: 'In solar since' },
  { value: '0.1 MW+', label: 'BOS from' },
]

/* keyword strip that runs under the hero */
export const keywords = [
  'Ground Mounted EPC', 'Balance of System', 'Module Mounting Structures', 'DC & AC Cabling',
  'Combiner Boxes', 'Inverters & Transformers', 'Earthing & Lightning Protection',
  'Testing & Commissioning', 'Material Supply', '0.1 MW to Infinite',
]

export const stats = [
  { value: 4.8, decimals: 1, suffix: ' MW', label: 'BOS completed at Mahud' },
  { value: 3, suffix: '+', label: 'Projects delivered & running' },
  { value: 5, suffix: '+', label: 'Years working in solar' },
  { value: 2, suffix: '', label: 'Districts served in Maharashtra' },
]

export const services = [
  {
    id: 'epc',
    no: '01',
    icon: 'panel',
    title: 'Solar Ground Mounted Project EPC',
    short:
      'Complete turnkey execution of ground mounted solar plants — survey and layout, structural and electrical design, procurement, civil works, installation, testing and grid synchronisation.',
    image: '/img/epc.jpg',
    tags: ['Survey & Layout', 'MMS Structures', 'DC / AC Works', 'Commissioning'],
    points: [
      'Site survey, land profiling, shadow analysis and plant layout',
      'Structural and electrical design — array layout, string sizing, SLD',
      'Civil works, foundations and module mounting structure erection',
      'Module installation, DC/AC cabling, inverter and transformer works',
      'Earthing, lightning protection, testing and grid synchronisation',
    ],
    specs: [
      { k: 'Plant type', v: 'Ground mounted, fixed tilt' },
      { k: 'Scope', v: 'Design → Supply → Build → Commission' },
      { k: 'Capacity', v: '0.1 MW to utility scale' },
      { k: 'Handover', v: 'Tested, with as-built records' },
    ],
  },
  {
    id: 'bos',
    no: '02',
    icon: 'bolt',
    title: 'Balance of System — 0.1 MW to Infinite',
    short:
      'Everything around the modules: mounting structures, DC and AC cabling, combiner boxes, inverters, transformers, switchgear, earthing and lightning protection — supplied, installed and tested to rating.',
    image: '/img/bos.jpg',
    tags: ['Structures', 'Cabling', 'Switchgear', 'Earthing & LA'],
    points: [
      'Module mounting structures — galvanised, designed for site wind load',
      'DC string cabling, connectors and string combiner boxes',
      'Inverters, AC cabling, LT/HT panels and transformers',
      'Earthing grid, lightning arrestors, cable trays and trenching',
      'Pre-commissioning testing of the full electrical balance of plant',
    ],
    specs: [
      { k: 'Range', v: '0.1 MW → Infinite' },
      { k: 'Delivered', v: '4.8 MW BOS at Mahud' },
      { k: 'Mode', v: 'Supply & install, or supply only' },
      { k: 'Testing', v: 'Insulation, polarity, string & earth' },
    ],
  },
]

export const capabilities = [
  {
    icon: 'truck',
    title: 'Material Supply',
    text: 'Structures, cables, connectors, combiner boxes and electrical BOS supplied against a clear bill of materials and delivery schedule.',
  },
  {
    icon: 'draft',
    title: 'Design & Engineering',
    text: 'Array layouts, string sizing, single line diagrams, cable schedules and structural drawings prepared before execution starts.',
  },
  {
    icon: 'brick',
    title: 'Civil & Structure Works',
    text: 'Foundations, pile or pedestal work and module mounting structure erection aligned to the approved layout.',
  },
  {
    icon: 'plug',
    title: 'Electrical & Grid Works',
    text: 'Inverter and transformer installation, LT/HT panel work, cable termination and grid synchronisation support.',
  },
  {
    icon: 'check',
    title: 'Testing & Commissioning',
    text: 'Insulation resistance, polarity, string current and earth resistance testing — recorded and handed over.',
  },
  {
    icon: 'wrench',
    title: 'Repair & Rectification',
    text: 'Correcting under-performing sections — structure alignment, cabling faults, loose terminations and earthing gaps.',
  },
]

export const projects = [
  {
    title: 'MW Project — Mangalwedha',
    image: '/img/project-1.jpg',
    scope: 'Ground mounted project execution',
    location: 'Mangalwedha, Dist. Solapur',
    year: '2026',
    status: 'Completed',
    capacity: 'Ground Mounted',
    detail:
      'MW ground mounted project completed at Mangalwedha — structures, module installation and electrical works delivered and handed over.',
  },
  {
    title: '4.8 MW Balance of System — Mahud',
    image: '/img/project-2.jpg',
    scope: 'Complete BOS — structures, cabling, switchgear, earthing',
    location: 'Mahud, Dist. Solapur',
    year: '2026',
    status: 'Completed',
    capacity: '4.8 MW',
    detail:
      'Complete balance of system package for a 4.8 MW plant — mounting structures, DC and AC cabling, switchgear and earthing, tested and commissioned.',
  },
  {
    title: 'MW BOS & Supply — Jalgaon',
    image: '/img/project-3.jpg',
    scope: 'Balance of system works with ongoing supply',
    location: 'Dist. Jalgaon',
    year: '2026–27',
    status: 'In Progress',
    capacity: 'BOS + Supply',
    detail:
      'MW balance of system works with material supply running through the 2026–27 period.',
  },
]

export const timeline = [
  {
    year: '2021',
    title: 'Started working in solar',
    text: 'Began executing solar work — ground mounted structures, module installation and electrical balance of system.',
  },
  {
    year: '2026',
    title: 'Launched separately as an LLP',
    text: 'SURYAPUNJAH GRID ENERGY LLP was launched as an independent entity, headquartered at World Trade Tower, Makarba, Ahmedabad.',
  },
  {
    year: '2026',
    title: 'MW project completed — Mangalwedha',
    text: 'Ground mounted MW project completed at Mangalwedha, Dist. Solapur, Maharashtra.',
  },
  {
    year: '2026',
    title: '4.8 MW balance of system completed — Mahud',
    text: 'Full BOS package delivered for a 4.8 MW plant at Mahud, Dist. Solapur.',
  },
  {
    year: '2026–27',
    title: 'BOS & supply in progress — Jalgaon',
    text: 'MW balance of system works with ongoing material supply for Jalgaon District.',
  },
]

export const process = [
  { no: '01', title: 'Survey & assessment', text: 'Site visit, land profile, shadow analysis and evacuation study to fix the right plant configuration.' },
  { no: '02', title: 'Design & procurement', text: 'Layouts, SLDs, structural drawings and a firm bill of materials, then sourcing to specification.' },
  { no: '03', title: 'Execution at site', text: 'Civil, structure erection, module mounting, DC/AC cabling and equipment installation by our own crew.' },
  { no: '04', title: 'Testing & handover', text: 'Pre-commissioning tests, grid synchronisation and complete documentation on handover.' },
]

/* NOTE: the photographs are placeholders — replace with real photos of the founders. */
export const directors = [
  {
    name: 'Harshil Lakhiyar',
    role: 'Founder',
    bio: 'Leads project execution and client relationships at SURYAPUNJAH GRID ENERGY LLP. Involved in ground mounted solar work since 2021 — from structure erection and cabling through to commissioning — and drove the launch of the firm as an independent business in 2026.',
    note: 'Reviews every site survey personally before a schedule is committed to a client.',
    tel: '+919175855941',
  },
  {
    name: 'Anandiben Lakhiyar',
    role: 'Founder',
    bio: 'Leads engineering, procurement and site operations. Responsible for balance of system design, vendor selection and the quality checks that run alongside execution — including the 4.8 MW BOS package delivered at Mahud.',
    note: 'Keeps the bill of materials, the drawings and the site reality in agreement with each other.',
    tel: '+917387955941',
  },
]

export const faqs = [
  {
    q: 'What is the smallest project you take up?',
    a: 'Our balance of system scope starts at 0.1 MW and scales up without an upper limit. For EPC we prefer ground mounted plants where the full scope can be handed to one team.',
  },
  {
    q: 'Do you supply material only, without installation?',
    a: 'Yes. We supply structures, cables, combiner boxes and electrical BOS against a bill of materials — as we are currently doing for the Jalgaon district work through 2026–27.',
  },
  {
    q: 'Which areas do you work in?',
    a: 'Our office is in Ahmedabad, Gujarat, and our completed projects are in the Solapur and Jalgaon districts of Maharashtra. We take up work across both states and will travel for the right project.',
  },
  {
    q: 'How long does a ground mounted plant take?',
    a: 'It depends on capacity, land condition and material availability. After a site survey we give a schedule with dated milestones rather than a rough guess — and we report against it honestly.',
  },
  {
    q: 'What do we receive at handover?',
    a: 'As-built drawings, single line diagrams, equipment details and the full set of pre-commissioning test reports — everything needed to operate and maintain the plant.',
  },
]

export const whyUs = [
  { icon: 'panel', title: 'Ground mounted specialists', text: 'Ground mount is not a side business for us — structures, foundations, rows and cabling are our daily work.' },
  { icon: 'scale', title: 'Any size, 0.1 MW to infinite', text: 'The same engineering approach scales from a small captive plant to a multi-megawatt farm.' },
  { icon: 'team', title: 'Our own site crew', text: 'Execution is done by people we train and supervise, not passed down a chain of unknown sub-contractors.' },
  { icon: 'file', title: 'Documented handover', text: 'Test reports, as-built drawings and equipment records handed over so the plant can be maintained properly.' },
]
