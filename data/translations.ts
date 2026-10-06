export type Language = "en" | "es" | "ca";

export interface Translations {
  nav: {
    projects: string;
    about: string;
    talk: string;
    language: string;
  };
  home: {
    statusBadge: string;
    greeting: string;
    name: string;
    role: string;
    bioLead: string;
    bioMid: string;
    bioEnd: string;
    viewProjects: string;
    contactMe: string;
    imageAlt: string;
    footerText: string;
    backToTop: string;
  };
  about: {
    badge: string;
    title: string;
    bio: string;
    readMore: string;
    showLess: string;
    storyP1: string;
    storyP2: string;
    educationTitle: string;
    eduMaster: string;
    eduCourse: string;
    eduDegree: string;
    strongSkills: string;
    basicKnowledge: string;
  };
  projects: {
    badge: string;
    title: string;
    technologiesUsed: string;
    links: string;
    liveDeployment: string;
    githubRepo: string;
    moreDetails: string;
    hideDetails: string;
    technicalDetails: string;
    previewSpace: string;
  };
  contact: {
    title: string;
    subtitle: string;
    orDirectly: string;
    topicLabel: string;
    topicPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendButton: string;
    sendingButton: string;
    successTitle: string;
    successMessagePart1: string;
    successMessagePart2: string;
    sendAnother: string;
    errorRequired: string;
    errorDirect: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  en: {
    nav: {
      projects: "PROJECTS",
      about: "ABOUT",
      talk: "Let's Talk",
      language: "Language",
    },
    home: {
      statusBadge: "Open for Junior Roles & Opportunities",
      greeting: "Hey, I'm",
      name: "Julia",
      role: "Full Stack Developer",
      bioLead: "I am a passionate",
      bioMid: ". In my free time you'll find me building new coding projects, bouldering, or enjoying a good Napolitan pizza!",
      bioEnd: "",
      viewProjects: "View My Projects",
      contactMe: "Contact Me",
      imageAlt: "Julia - Junior Web Developer",
      footerText: "Julia. Crafted with React & Next.js.",
      backToTop: "Back to Top ↑",
    },
    about: {
      badge: "About Me",
      title: "From Biology to Code",
      bio: "Coming from a background in Biology and Languages, I decided to follow my passion for coding and pivot my career towards it. I have been building personal projects as well as projects responding to other people/businesses needs. I love to be able to design myself a solution and build it from scratch!",
      readMore: "Read more about me",
      showLess: "Show less",
      storyP1:
        "I studied Biology in University of Barcelona and I worked as a biologist for a few years before pivoting to languages, another of my passions. I spent 6 years teaching Spanish and Catalan to foreigners and I was able to grow a stable personal business with it.",
      storyP2:
        "Eventually I decided to pivot again to another of my interests: coding. I started learning on my own with FreeCodeCamp and other free resources and found it to be very entertaining and useful. After successfully completing a Master's Degree in Full Stack Development, here I am looking forward to start growing professionally!",
      educationTitle: "Education",
      eduMaster:
        "Master's Degree in Full Stack Development, Escuela Grupo Atrium. Oct 2025 - Sept 2026",
      eduCourse:
        "University Course on Teaching Spanish as a Foreign Language, European University Miguel de Cervantes. 2020",
      eduDegree:
        "Bachelor's Degree in Biology, University of Barcelona. 2013 - 2018",
      strongSkills: "Strong Skills",
      basicKnowledge: "Basic Knowledge",
    },
    projects: {
      badge: "Portfolio",
      title: "Featured Projects",
      technologiesUsed: "Technologies used",
      links: "Links",
      liveDeployment: "Live Deployment",
      githubRepo: "GitHub Repo",
      moreDetails: "More technical details about the project",
      hideDetails: "Hide technical details",
      technicalDetails: "Technical Details",
      previewSpace: "Preview Space",
    },
    contact: {
      title: "Get in Touch",
      subtitle:
        "I am actively looking for developer opportunities, internships, or open-source collaboration. Send a message below or reach out directly!",
      orDirectly: "Or reach out directly",
      topicLabel: "Topic",
      topicPlaceholder: "e.g. Project Inquiry / Job Opportunity",
      emailLabel: "Your Email",
      emailPlaceholder: "you@example.com",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendButton: "Send Message",
      sendingButton: "Sending message...",
      successTitle: "Message Sent!",
      successMessagePart1: "Thank you for reaching out! I've received your message and will reply to",
      successMessagePart2: "as soon as possible.",
      sendAnother: "Send Another Message",
      errorRequired: "Please fill in all fields.",
      errorDirect: "You can also reach out directly to",
    },
  },
  es: {
    nav: {
      projects: "PROYECTOS",
      about: "SOBRE MÍ",
      talk: "Hablemos",
      language: "Idioma",
    },
    home: {
      statusBadge: "Disponible para roles júnior y nuevas oportunidades",
      greeting: "Hola, soy",
      name: "Julia",
      role: "Desarrolladora Full Stack",
      bioLead: "Soy una apasionada",
      bioMid: ". En mi tiempo libre me encontrarás creando nuevos proyectos de programación, haciendo escalada en bloque (bouldering) o disfrutando de una buena pizza napolitana.",
      bioEnd: "",
      viewProjects: "Ver mis proyectos",
      contactMe: "Contáctame",
      imageAlt: "Julia - Desarrolladora Web Júnior",
      footerText: "Julia. Creado con React y Next.js.",
      backToTop: "Volver arriba ↑",
    },
    about: {
      badge: "Sobre mí",
      title: "De la Biología al Código",
      bio: "Viniendo de una formación en Biología e Idiomas, decidí seguir mi pasión por la programación y dar un giro a mi carrera profesional. He estado desarrollando proyectos personales así como proyectos adaptados a las necesidades de otras personas y empresas. ¡Me encanta poder idear una solución por mí misma y construirla desde cero!",
      readMore: "Leer más sobre mí",
      showLess: "Mostrar menos",
      storyP1:
        "Estudié Biología en la Universidad de Barcelona y trabajé como bióloga durante unos años antes de dar el salto a los idiomas, otra de mis grandes pasiones. Pasé 6 años enseñando español y catalán a extranjeros y logré construir un negocio personal estable a partir de ello.",
      storyP2:
        "Con el tiempo decidí dar otro giro hacia otro de mis grandes intereses: la programación. Empecé a aprender de forma autodidacta con FreeCodeCamp y otros recursos gratuitos, y descubrí que era apasionante y sumamente útil. Tras completar con éxito un Máster en Desarrollo Full Stack, ¡aquí estoy con muchas ganas de empezar a crecer profesionalmente!",
      educationTitle: "Educación",
      eduMaster:
        "Máster en Desarrollo Full Stack, Escuela Grupo Atrium. Oct 2025 - Sept 2026",
      eduCourse:
        "Curso Universitario de Especialización en Enseñanza de Español como Lengua Extranjera, Universidad Europea Miguel de Cervantes. 2020",
      eduDegree:
        "Grado en Biología, Universidad de Barcelona. 2013 - 2018",
      strongSkills: "Habilidades Principales",
      basicKnowledge: "Conocimientos Básicos",
    },
    projects: {
      badge: "Portafolio",
      title: "Proyectos Destacados",
      technologiesUsed: "Tecnologías utilizadas",
      links: "Enlaces",
      liveDeployment: "Ver despliegue",
      githubRepo: "Repositorio GitHub",
      moreDetails: "Más detalles técnicos del proyecto",
      hideDetails: "Ocultar detalles técnicos",
      technicalDetails: "Detalles Técnicos",
      previewSpace: "Vista Previa",
    },
    contact: {
      title: "Ponte en Contacto",
      subtitle:
        "Estoy buscando activamente oportunidades laborales como desarrolladora, prácticas o colaboraciones en código abierto. ¡Escríbeme a través del formulario o contáctame directamente!",
      orDirectly: "O contáctame directamente",
      topicLabel: "Asunto",
      topicPlaceholder: "ej. Consulta de proyecto / Oportunidad laboral",
      emailLabel: "Tu correo electrónico",
      emailPlaceholder: "tu@ejemplo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      sendButton: "Enviar mensaje",
      sendingButton: "Enviando mensaje...",
      successTitle: "¡Mensaje Enviado!",
      successMessagePart1: "¡Gracias por contactar! He recibido tu mensaje y te responderé a",
      successMessagePart2: "lo antes posible.",
      sendAnother: "Enviar otro mensaje",
      errorRequired: "Por favor, completa todos los campos requeridos.",
      errorDirect: "También puedes escribir directamente a",
    },
  },
  ca: {
    nav: {
      projects: "PROJECTES",
      about: "SOBRE MI",
      talk: "Parlem",
      language: "Idioma",
    },
    home: {
      statusBadge: "Disponible per a rols júnior i noves oportunitats",
      greeting: "Hola, soc la",
      name: "Júlia",
      role: "Desenvolupadora Full Stack",
      bioLead: "Soc una apassionada",
      bioMid: ". En el meu temps lliure em trobaràs programant nous projectes, fent escalada en bloc (bouldering) o gaudint d'una bona pizza napolitana!",
      bioEnd: "",
      viewProjects: "Veure els meus projectes",
      contactMe: "Contacta'm",
      imageAlt: "Júlia - Desenvolupadora Web Júnior",
      footerText: "Júlia. Creat amb React i Next.js.",
      backToTop: "Tornar a dalt ↑",
    },
    about: {
      badge: "Sobre mi",
      title: "De la Biologia al Codi",
      bio: "Amb formació en Biologia i Idiomes, vaig decidir seguir la meva passió per la programació i reorientar la meva carrera cap a aquest sector. He estat desenvolupant tant projectes personals com projectes que responen a les necessitats d'altres persones i empreses. M'encanta poder dissenyar una solució per mi mateixa i construir-la des de zero!",
      readMore: "Llegir més sobre mi",
      showLess: "Mostrar menys",
      storyP1:
        "Vaig estudiar Biologia a la Universitat de Barcelona i vaig treballar com a biòloga durant uns anys abans de fer el salt als idiomes, una altra de les meves grans passions. Vaig passar 6 anys ensenyant català i castellà a estrangers i vaig aconseguir consolidar un negoci personal estable amb això.",
      storyP2:
        "Amb el temps vaig decidir fer un altre gir cap a un altre dels meus grans interessos: la programació. Vaig començar a aprendre pel meu compte amb FreeCodeCamp i altres recursos gratuïts, i vaig descobrir que era molt entretingut i útil. Després de completar amb èxit un Màster en Desenvolupament Full Stack, aquí estic amb moltes ganes de començar a créixer professionalment!",
      educationTitle: "Educació",
      eduMaster:
        "Màster en Desenvolupament Full Stack, Escuela Grupo Atrium. Oct 2025 - Set 2026",
      eduCourse:
        "Curs Universitari d'Especialització en Ensenyament d'Espanyol com a Llengua Estrangera, Universidad Europea Miguel de Cervantes. 2020",
      eduDegree:
        "Grau en Biologia, Universitat de Barcelona. 2013 - 2018",
      strongSkills: "Habilitats Principals",
      basicKnowledge: "Coneixements Bàsics",
    },
    projects: {
      badge: "Portafolis",
      title: "Projectes Destacats",
      technologiesUsed: "Tecnologies utilitzades",
      links: "Enllaços",
      liveDeployment: "Veure projecte en línia",
      githubRepo: "Repositori GitHub",
      moreDetails: "Més detalls tècnics del projecte",
      hideDetails: "Amagar detalls tècnics",
      technicalDetails: "Detalls Tècnics",
      previewSpace: "Vista Prèvia",
    },
    contact: {
      title: "Posa't en Contacte",
      subtitle:
        "Estic buscant activament oportunitats laborals com a desenvolupadora, pràctiques o col·laboracions de codi obert. Envia'm un missatge a través del formulari o posa't en contacte directament!",
      orDirectly: "O posa't en contacte directament",
      topicLabel: "Assumpte",
      topicPlaceholder: "ex. Consulta de projecte / Oportunitat laboral",
      emailLabel: "El teu correu electrònic",
      emailPlaceholder: "tu@exemple.com",
      messageLabel: "Missatge",
      messagePlaceholder: "Escriu el teu missatge aquí...",
      sendButton: "Enviar missatge",
      sendingButton: "Enviant missatge...",
      successTitle: "Missatge Enviat!",
      successMessagePart1: "Gràcies per posar-te en contacte! He rebut el teu missatge i et respondré a",
      successMessagePart2: "com més aviat millor.",
      sendAnother: "Enviar un altre missatge",
      errorRequired: "Si us plau, omple tots els camps requerits.",
      errorDirect: "També pots escriure directament a",
    },
  },
};
