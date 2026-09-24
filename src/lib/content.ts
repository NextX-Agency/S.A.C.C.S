// Public business information and site copy live here.
export const siteConfig = {
  name: "SACCS",
  fullName: "S.A. Cleaning Consultancy Suriname",
  tagline: "Wij doen wat wij zeggen",
  description: "Professionele schoonmaak voor bedrijven en particulieren in Suriname sinds 2012.",
  foundedYear: 2012,
  url: "https://saccs.sr",
  locale: "nl_NL",
  logo: {
    main: "/logo/noslogan.png",
    withSlogan: "/logo/full-logo.png",
    icon: "/logo/barelogo-removebg-preview.png",
  },
};

export const contactInfo = {
  director: { name: "Safiek Jahangier", title: "Directeur" },
  phone: {
    display: "+597 8517364",
    href: "tel:+5978517364",
    whatsapp: "https://wa.me/5978517364",
  },
  email: {
    display: "jahangier_s@hotmail.com",
    href: "mailto:jahangier_s@hotmail.com",
  },
  address: {
    street: "Paramaribo",
    city: "Suriname",
    full: "Paramaribo, Suriname",
  },
  businessHours: {
    weekdays: "08:00 - 18:00",
    saturday: "08:00 - 14:00",
    sunday: "Gesloten",
  },
};

export const services = [
  {
    id: "b2b",
    title: "Zakelijke Schoonmaak (B2B)",
    description: "Schoonmaak voor kantoren, hotels, restaurants en andere zakelijke ruimtes.",
    longDescription: "Van regelmatig onderhoud tot een eenmalige schoonmaak: we bespreken de ruimte, de werkzaamheden en een passende planning met u.",
    features: ["Kantoren", "Hotels en resorts", "Restaurants", "Winkels", "Periodiek onderhoud", "Eenmalige schoonmaak"],
  },
  {
    id: "b2c",
    title: "Particuliere Schoonmaak (B2C)",
    description: "Schoonmaak voor woningen, afgestemd op uw huishouden en planning.",
    longDescription: "Heeft u hulp nodig bij het reguliere onderhoud of een grote schoonmaak? Vertel ons wat er moet gebeuren; we bespreken samen de mogelijkheden.",
    features: ["Huishoudelijke schoonmaak", "Grote schoonmaak", "Verhuisschoonmaak", "Regelmatig onderhoud", "Raamreiniging", "Meubelreiniging"],
  },
  {
    id: "events",
    title: "Evenementenservice",
    description: "Schoonmaak rond evenementen, van voorbereiding tot opruimen na afloop.",
    longDescription: "Een evenement vraagt om een schone locatie. We stemmen vooraf af welke ruimtes aandacht nodig hebben en wanneer het werk plaatsvindt.",
    features: ["Reiniging vooraf", "Onderhoud tijdens het evenement", "Opruimen na afloop", "Sanitaire ruimtes", "Afvalverzameling"],
  },
  {
    id: "specialist",
    title: "Specialistische Diensten",
    description: "Gerichte reiniging voor werkzaamheden die extra aandacht vragen.",
    longDescription: "Voor onder meer glas, vloeren en dieptereiniging bekijken we eerst de locatie en de opdracht. Daarna bespreken we welke aanpak mogelijk is.",
    features: ["Dieptereiniging", "Glazenwassen", "Vloeronderhoud", "Meubelreiniging", "Gerichte reiniging op aanvraag"],
  },
];

export const aboutContent = {
  mission: {
    title: "Onze missie",
    content: "Wij verzorgen schoonmaak voor organisaties en particulieren met aandacht voor hun ruimte, wensen en afspraken.",
  },
  vision: {
    title: "Onze visie",
    content: "Wij willen met duidelijk contact en zorgvuldig werk langdurige relaties met onze klanten opbouwen.",
  },
  history: {
    title: "Ons verhaal",
    content: "S.A.C.C.S is sinds 2012 actief in schoonmaak in Suriname. We werken voor zakelijke en particuliere opdrachtgevers en bespreken per opdracht wat de ruimte nodig heeft.",
  },
  values: [
    { title: "Betrouwbaarheid", description: "We maken duidelijke afspraken over de opdracht." },
    { title: "Professionaliteit", description: "We benaderen iedere ruimte met aandacht voor de werkzaamheden." },
    { title: "Kwaliteit", description: "We letten op de details die voor uw ruimte belangrijk zijn." },
    { title: "Klantgerichtheid", description: "Uw wensen en planning zijn het vertrekpunt van ons gesprek." },
  ],
};
