// ============================================================================
// SACCS Content Management Layer
// ============================================================================
// This file serves as a centralized content store for easy management.
// In the future, this can be replaced with a CMS like Sanity, Contentful, or Strapi.
// ============================================================================

export const siteConfig = {
  name: 'SACCS',
  fullName: 'S.A. Cleaning Consultancy Suriname',
  tagline: 'Wij doen wat wij zeggen',
  description: 'Uw partner in professionele schoonmaakdiensten voor bedrijven en particulieren in Suriname sinds 2012.',
  foundedYear: 2012,
  url: 'https://saccs.sr',
  locale: 'nl_NL',
  logo: {
    main: '/logo/noslogan.png',
    withSlogan: '/logo/logo.png',
    icon: '/logo/barelogo-removebg-preview.png',
  },
};

export const contactInfo = {
  director: {
    name: 'Safiek Jahangier',
    title: 'Directeur',
  },
  phone: {
    display: '+597 8517364',
    href: 'tel:+5978517364',
    whatsapp: 'https://wa.me/5978517364',
  },
  email: {
    display: 'jahangier_s@hotmail.com',
    href: 'mailto:jahangier_s@hotmail.com',
  },
  address: {
    street: 'Paramaribo',
    city: 'Suriname',
    full: 'Paramaribo, Suriname',
  },
  social: {
    facebook: '#',
    instagram: '#',
    linkedin: '#',
  },
  businessHours: {
    weekdays: '08:00 - 18:00',
    saturday: '08:00 - 14:00',
    sunday: 'Gesloten',
  },
};

export const navigation = {
  main: [
    { href: '/', label: 'Home' },
    { href: '/over-ons', label: 'Over Ons' },
    { href: '/diensten', label: 'Diensten' },
    { href: '/contact', label: 'Contact' },
  ],
  footer: {
    quickLinks: [
      { href: '/', label: 'Home' },
      { href: '/over-ons', label: 'Over Ons' },
      { href: '/diensten', label: 'Diensten' },
      { href: '/contact', label: 'Contact' },
    ],
    legal: [
      { href: '/privacy', label: 'Privacybeleid' },
      { href: '/voorwaarden', label: 'Algemene Voorwaarden' },
    ],
  },
};

export const stats = [
  { value: '13+', label: 'Jaar ervaring', suffix: '' },
  { value: '50+', label: 'Tevreden klanten', suffix: '' },
  { value: '100%', label: 'Tevredenheidsgarantie', suffix: '' },
  { value: '24/7', label: 'Beschikbaarheid', suffix: '' },
];

export const services = [
  {
    id: 'b2b',
    slug: 'zakelijke-schoonmaak',
    title: 'Zakelijke Schoonmaak (B2B)',
    shortTitle: 'B2B Schoonmaak',
    description: 'Professionele schoonmaakdiensten voor kantoren, hotels, restaurants en andere zakelijke ruimtes. Wij zorgen voor een representatieve werkomgeving.',
    longDescription: `
      Bij SACCS begrijpen we dat een schone werkomgeving essentieel is voor productiviteit en professionaliteit. 
      Onze B2B schoonmaakdiensten zijn op maat gemaakt voor elke bedrijfsomgeving, van kleine kantoren tot grote hotels.
      
      Wij werken met een team van ervaren professionals die getraind zijn in de nieuwste schoonmaaktechnieken 
      en uitgerust zijn met professionele apparatuur. Of het nu gaat om dagelijks onderhoud of periodieke 
      dieptereiniging, wij leveren consistent hoge kwaliteit.
    `,
    features: ['Kantoorgebouwen', 'Hotels & Resorts', 'Restaurants', 'Winkels', 'Medische faciliteiten', 'Industriële ruimtes'],
    benefits: [
      'Verbeterde werknemerstevredenheid',
      'Professionele uitstraling voor klanten',
      'Verhoogde hygiëne en gezondheid',
      'Flexibele planning buiten kantooruren',
    ],
    icon: 'building',
    image: '/beeld/beeld2.png',
  },
  {
    id: 'b2c',
    slug: 'particuliere-schoonmaak',
    title: 'Particuliere Schoonmaak (B2C)',
    shortTitle: 'B2C Schoonmaak',
    description: 'Betrouwbare schoonmaakdiensten voor particulieren. Van regelmatige huishouding tot grote schoonmaakbeurten.',
    longDescription: `
      Uw thuis verdient de beste zorg. Onze particuliere schoonmaakdiensten zijn ontworpen om u tijd te besparen 
      en een schone, gezonde leefomgeving te garanderen.
      
      Of u nu regelmatig hulp nodig heeft of een eenmalige grote schoonmaak, ons team staat voor u klaar. 
      We gebruiken veilige, milieuvriendelijke producten die effectief zijn maar zacht voor uw gezin en huisdieren.
    `,
    features: ['Huishoudelijke hulp', 'Grote schoonmaak', 'Verhuisschoonmaak', 'Regelmatig onderhoud', 'Raamreiniging', 'Tapijt- en stofferingreiniging'],
    benefits: [
      'Meer vrije tijd voor uzelf',
      'Professionele resultaten',
      'Betrouwbaar en gecontroleerd personeel',
      'Flexibele planning op uw gemak',
    ],
    icon: 'home',
    image: '/beeld/beeld3.png',
  },
  {
    id: 'events',
    slug: 'evenementen-service',
    title: 'Evenementenservice',
    shortTitle: 'Events',
    description: 'Schoonmaakdiensten tijdens en na evenementen. Wij zorgen ervoor dat uw locatie er perfect uitziet, voor, tijdens en na het evenement.',
    longDescription: `
      Een succesvol evenement verdient een vlekkeloze uitvoering, inclusief schoonmaak. 
      SACCS biedt complete schoonmaakoplossingen voor evenementen van elke omvang.
      
      Van bruiloften tot bedrijfsfeesten, van conferenties tot festivals - ons team zorgt ervoor 
      dat uw locatie er onberispelijk uitziet gedurende het hele evenement en daarna.
    `,
    features: ['Voorbereidende reiniging', 'Onderhoud tijdens events', 'Opruimen na afloop', 'Noodservice', 'Sanitairservice', 'Afvalbeheer'],
    benefits: [
      'Professionele uitstraling gedurende het event',
      'Snelle responstijd bij ongelukken',
      '24/7 beschikbaarheid',
      'Ervaring met grote evenementen',
    ],
    icon: 'users',
    image: '/beeld/beeld4.png',
  },
  {
    id: 'specialist',
    slug: 'specialistische-diensten',
    title: 'Specialistische Diensten',
    shortTitle: 'Specialist',
    description: 'Gespecialiseerde schoonmaakdiensten voor specifieke behoeften, zoals dieptereiniging, ramen wassen en meer.',
    longDescription: `
      Sommige schoonmaaktaken vereisen gespecialiseerde kennis en apparatuur. 
      SACCS biedt een breed scala aan specialistische diensten voor die uitdagende klussen.
      
      Onze specialisten zijn getraind in geavanceerde technieken en beschikken over professionele 
      apparatuur voor dieptereiniging, hoogwerkreiniging, en meer.
    `,
    features: ['Dieptereiniging', 'Glazenwassen', 'Vloeronderhoud', 'Stoomreiniging', 'Gevelreiniging', 'Desinfectie'],
    benefits: [
      'Gespecialiseerde apparatuur',
      'Getrainde professionals',
      'Veilige werkmethoden',
      'Garantie op resultaat',
    ],
    icon: 'tool',
    image: '/beeld/beeld1.jpg',
  },
];

export const clients = [
  { name: 'Marriott Hotel', logo: '/carousel/marriot.png', description: 'Internationale hotelketen' },
  { name: 'Torarica Hotel', logo: '/carousel/torarica.png', description: 'Premium resort Suriname' },
  { name: 'Hard Rock Cafe', logo: '/carousel/hardrock.png', description: 'Wereldberoemd restaurant' },
  { name: 'Radisson Hotel', logo: '/carousel/radison.png', description: 'Luxe accommodatie' },
  { name: 'AZP Suriname', logo: '/carousel/azp.png', description: 'Medische faciliteit' },
];

export const references = [
  {
    name: 'Marriott Hotel',
    logo: '/carousel/marriot.png',
    category: 'Hospitality',
    description: 'Dagelijks onderhoud en periodieke dieptereiniging van alle faciliteiten.',
  },
  {
    name: 'Torarica Hotel',
    logo: '/carousel/torarica.png',
    category: 'Hospitality',
    description: 'Complete schoonmaakservice voor kamers, lobby en conferentieruimtes.',
  },
  {
    name: 'Hard Rock Cafe',
    logo: '/carousel/hardrock.png',
    category: 'Horeca',
    description: 'Restaurant- en keukenreiniging volgens strenge hygiënenormen.',
  },
  {
    name: 'Radisson Hotel',
    logo: '/carousel/radison.png',
    category: 'Hospitality',
    description: 'Professionele schoonmaakdiensten voor alle hotelruimtes.',
  },
  {
    name: 'AZP Suriname',
    logo: '/carousel/azp.png',
    category: 'Gezondheidszorg',
    description: 'Medische schoonmaak met focus op hygiëne en desinfectie.',
  },
];

export const processSteps = [
  {
    number: '01',
    title: 'Inventarisatie',
    description: 'Wij beginnen met een grondige inventarisatie van uw wensen en behoeften. Dit omvat een bezoek aan de locatie om de specifieke situatie in kaart te brengen.',
  },
  {
    number: '02',
    title: 'Op Maat Gemaakt Plan',
    description: 'Op basis van de inventarisatie stellen wij een schoonmaakplan op dat precies aansluit bij uw wensen. Inclusief frequentie, tijden en specifieke aandachtspunten.',
  },
  {
    number: '03',
    title: 'Getraind Personeel',
    description: 'Ons personeel wordt zorgvuldig geselecteerd en getraind. Zij zijn betrouwbaar, professioneel en werken volgens onze hoge kwaliteitsnormen.',
  },
  {
    number: '04',
    title: 'Kwaliteitscontrole',
    description: 'Wij voeren regelmatige kwaliteitscontroles uit om de kwaliteit van onze diensten te waarborgen. Bij vragen of opmerkingen zijn wij altijd bereikbaar.',
  },
];

export const whyChooseUs = [
  'Gratis vrijblijvende offerte',
  'Maatwerk schoonmaakplannen',
  'Ervaren en betrouwbaar personeel',
  'Kwaliteitsgarantie op alle diensten',
  'Flexibele planning',
];

export const aboutContent = {
  mission: {
    title: 'Onze Missie',
    content: `Wij streven ernaar schone, hygiënische en uitnodigende omgevingen te creëren door middel van 
    professionele schoonmaakdiensten. Met onze expertise en toewijding helpen wij bedrijven en particulieren 
    om hun ruimtes optimaal te onderhouden.`,
  },
  vision: {
    title: 'Onze Visie',
    content: `SACCS wil de meest vertrouwde schoonmaakpartner van Suriname zijn, erkend voor onze 
    professionaliteit, integriteit en consistente kwaliteit. Wij streven naar langdurige relaties 
    met onze klanten, gebaseerd op vertrouwen en wederzijds respect.`,
  },
  history: {
    title: 'Onze Geschiedenis',
    content: `Sinds 2012 is SACCS actief als toonaangevende schoonmaakdienstverlener in Suriname. 
    Wat begon als een klein bedrijf is uitgegroeid tot een betrouwbare partner voor zowel 
    grote hotels als particuliere huishoudens. Onze groei is het resultaat van hard werken, 
    klantgerichtheid en een constante focus op kwaliteit.`,
    milestones: [
      { year: 2012, event: 'Oprichting SACCS' },
      { year: 2014, event: 'Eerste hotelcontract' },
      { year: 2016, event: 'Uitbreiding naar evenementenservice' },
      { year: 2018, event: 'Partnerschap met internationale hotelketens' },
      { year: 2020, event: 'Introductie specialistische diensten' },
      { year: 2024, event: 'Meer dan 50 tevreden klanten' },
    ],
  },
  values: [
    { title: 'Betrouwbaarheid', description: 'Wij doen wat wij zeggen en staan altijd klaar voor onze klanten.' },
    { title: 'Professionaliteit', description: 'Ons team werkt volgens de hoogste standaarden in de industrie.' },
    { title: 'Kwaliteit', description: 'Wij leveren consistent uitstekende resultaten bij elke opdracht.' },
    { title: 'Klantgerichtheid', description: 'De tevredenheid van onze klanten staat altijd centraal.' },
  ],
};

export const heroSlides = [
  { image: '/beeld/beeld1.jpg', alt: 'Professionele schoonmaak' },
  { image: '/beeld/beeld2.png', alt: 'Kantoor schoonmaak' },
  { image: '/beeld/beeld3.png', alt: 'Hotel schoonmaak' },
  { image: '/beeld/beeld4.png', alt: 'Evenementen schoonmaak' },
];

export const faq = [
  {
    question: 'Hoe vraag ik een offerte aan?',
    answer: 'U kunt een offerte aanvragen via ons contactformulier, telefonisch of via WhatsApp. Wij nemen binnen 24 uur contact met u op.',
  },
  {
    question: 'Wat zijn jullie werkgebieden?',
    answer: 'Wij zijn actief in heel Suriname, met een focus op Paramaribo en omgeving.',
  },
  {
    question: 'Zijn jullie verzekerd?',
    answer: 'Ja, SACCS is volledig verzekerd. Wij hebben een aansprakelijkheidsverzekering voor eventuele schade.',
  },
  {
    question: 'Welke producten gebruiken jullie?',
    answer: 'Wij gebruiken professionele, milieuvriendelijke schoonmaakproducten die effectief en veilig zijn.',
  },
  {
    question: 'Kan ik de schoonmaakfrequentie aanpassen?',
    answer: 'Absoluut! Wij bieden flexibele planningen die volledig aan uw wensen kunnen worden aangepast.',
  },
];
