import type { Language } from "./translations";

export interface ProjectLocalization {
  title: string;
  description: string;
  technicalDetails: {
    summary: string;
    highlights: string[];
  };
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  technicalDetails: {
    summary: string;
    highlights: string[];
  };
  translations?: Partial<Record<Language, ProjectLocalization>>;
}

export const PROJECTS: Project[] = [
  {
    id: "cronos-calendar",
    title: "VideoSynthesis- a video editing company",
    description:
      "I build this full stack web application for a video production company, VideoSynthesis, to solve their need to dynamically manage and display their work in a website, as well as have the option for clients to contact o book a call with them.",
    image: "/projects/videosynthesis.png",
    technologies: [
      "JavaScript",
      "Angular",
      "TypeScript",
      "MongoDB Atlas",
      "Java",
      "JWT Security",
      "Spring Boot",
    ],
    liveUrl: "https://videosynthesis.vercel.app/",
    githubUrl: "https://github.com/JuliaDarwin/Video-Synthesis-Front",
    technicalDetails: {
      summary:
        "VideoSynthesis is a company that works in digital communication by editing and filming content related to marine conservation. They needed a website where they could upload and manage their previous work to display. Also be able to gain new clients from it.",
      highlights: [
        "Implemented REST APIs and full CRUD functionality for managing application data, including large image content",
        "Developed a dynamic contact form and calendar-based reservation system with a 3rd party (Cal)",
        "Created a contact form that resends the information immediately to VideoSynthesis",
        "Created a dynamic budget calculator for the clients",
      ],
    },
    translations: {
      es: {
        title: "VideoSynthesis - productora y edición de video",
        description:
          "Desarrollé esta aplicación web full stack para una productora audiovisual, VideoSynthesis, resolviendo su necesidad de gestionar y mostrar su trabajo dinámicamente en una web, además de permitir a los clientes contactar o reservar una llamada con ellos.",
        technicalDetails: {
          summary:
            "VideoSynthesis es una empresa especializada en comunicación digital mediante la grabación y edición de contenidos sobre conservación marina. Necesitaban una web donde subir y gestionar sus proyectos para exhibirlos, además de captar nuevos clientes a través de ella.",
          highlights: [
            "Implementación de APIs REST y funcionalidad CRUD completa para la gestión de datos de la app, incluyendo imágenes pesadas",
            "Desarrollo de un formulario dinámico de contacto y sistema de reservas con calendario integrado mediante terceros (Cal)",
            "Formulario de contacto con reenvío inmediato de información a VideoSynthesis",
            "Calculadora interactiva de presupuestos para los clientes",
          ],
        },
      },
      ca: {
        title: "VideoSynthesis - productora i edició de vídeo",
        description:
          "Vaig desenvolupar aquesta aplicació web full stack per a una productora audiovisual, VideoSynthesis, per resoldre la seva necessitat de gestionar i mostrar la seva feina dinàmicament en una web, a més de permetre als clients contactar o reservar una trucada amb ells.",
        technicalDetails: {
          summary:
            "VideoSynthesis és una empresa de comunicació digital especialitzada en gravació i edició de contingut sobre conservació marina. Necessitaven una web on penjar i gestionar els seus projectes per mostrar-los, a més d'atreure nous clients a través d'ella.",
          highlights: [
            "Implementació d'APIs REST i funcionalitat CRUD completa per a la gestió de dades, incloent contingut d'imatges de gran mida",
            "Desenvolupament d'un formulari de contacte dinàmic i sistema de reserves amb calendari integrat mitjançant tercers (Cal)",
            "Formulari de contacte amb reenviament immediat d'informació a VideoSynthesis",
            "Calculadora interactiva de pressupostos per als clients",
          ],
        },
      },
    },
  },
  {
    id: "language-tutoring",
    title: "Language Tutoring Website",
    description:
      "I have been teaching languages for a while, so I developed a website application for my own business, and for students to have their account and be able to buy and manage their lessons.",
    image: "/projects/sounds-light.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "PostgreSQL",
    ],
    liveUrl: "https://julia-languages.vercel.app/",
    githubUrl: "https://github.com/JuliaDarwin/Language-Tutor-Website",
    technicalDetails: {
      summary:
        "Website app for a private language tutor to manage lesson package, students, lesson schedulign and live communication with the students.",
      highlights: [
        "Bi-directional Live Chat between students and the tutor",
        "Management of the students info, tracking of past and future lessons as well as student's lesson credit with a PostgreSQL database.",
        "Lesson packages available for purchase with 3rd party (Stripe)",
        "Lesson managing: schedule, reschedule, cancel with a 3rd party (Cal)",
        "Contact form for new students that collects the information with a 3rd party-Resend",
      ],
    },
    translations: {
      es: {
        title: "Plataforma de Clases de Idiomas",
        description:
          "Habiendo enseñado idiomas durante varios años, desarrollé una aplicación web para mi propio negocio, permitiendo a los alumnos tener su cuenta personal y comprar y gestionar sus clases.",
        technicalDetails: {
          summary:
            "Aplicación web para profesora particular de idiomas: gestión de paquetes de clases, alumnos, reservas en calendario y comunicación en directo.",
          highlights: [
            "Chat en vivo bidireccional entre alumnos y profesora",
            "Gestión de información de alumnos, historial de clases y saldo de créditos mediante base de datos PostgreSQL",
            "Paquetes de clases disponibles para compra con pasarela segura (Stripe)",
            "Gestión de clases: agendar, reprogramar o cancelar mediante integración con Cal",
            "Formulario de contacto para nuevos alumnos con recogida de datos vía Resend",
          ],
        },
      },
      ca: {
        title: "Plataforma de Classes d'Idiomes",
        description:
          "Com que he ensenyat idiomes durant força temps, vaig desenvolupar una aplicació web per al meu propi negoci, permetent als alumnes tenir el seu compte personal i comprar i gestionar les seves classes.",
        technicalDetails: {
          summary:
            "Aplicació web per a professora particular d'idiomes: gestió de paquets de classes, alumnes, reserves en calendari i comunicació en directe.",
          highlights: [
            "Xat en viu bidireccional entre alumnes i professora",
            "Gestió d'informació d'alumnes, historial de classes i saldo de crèdits mitjançant base de dades PostgreSQL",
            "Paquets de classes disponibles per a compra amb passarel·la segura (Stripe)",
            "Gestió de classes: agendar, reprogramar o cancel·lar mitjançant integració amb Cal",
            "Formulari de contacte per a nous alumnes amb recollida de dades mitjançant Resend",
          ],
        },
      },
    },
  },
  {
    id: "library-inventory",
    title: "Book Inventory",
    description:
      "This application was originally built for my parents' book inventory. They have a large amount of books and they used to keep track of them in a very large and chaotic Excel file. The purpose of this app was to simplify the process of adding, modifying or deleting any book, as well as easily consult about any book using filters.",
    image: "/projects/bibPares.png",
    technologies: ["Python", "Streamlit", "MongoDB Atlas"],
    liveUrl: "https://library-inventory.streamlit.app/",
    githubUrl: "https://github.com/JuliaDarwin/Library-Inventory",
    technicalDetails: {
      summary:
        "Engineered this application to classify and keep track of books, as well as adding/modifying the inventory",
      highlights: [
        "Restricted access for specific users",
        "Implemented CRUD operations",
        "Interactive data dashboard to filter and visualize records in real-time",
      ],
    },
    translations: {
      es: {
        title: "Inventario de Libros",
        description:
          "Esta aplicación fue creada originalmente para el inventario de libros de mis padres. Tienen una gran cantidad de libros y solían gestionarlos en un archivo de Excel enorme y caótico. El propósito de la app fue simplificar la adición, edición y eliminación de libros, así como la consulta rápida mediante filtros.",
        technicalDetails: {
          summary:
            "Diseño y desarrollo de la aplicación para clasificar, registrar y gestionar el inventario de libros de manera ágil y visual.",
          highlights: [
            "Acceso restringido para usuarios autorizados",
            "Implementación completa de operaciones CRUD",
            "Panel interactivo de datos para filtrar y visualizar registros en tiempo real",
          ],
        },
      },
      ca: {
        title: "Inventari de Llibres",
        description:
          "Aquesta aplicació va ser creada originalment per a l'inventari de llibres dels meus pares. Tenien una gran quantitat de llibres i solien gestionar-los en un fitxer d'Excel enorme i caòtic. L'objectiu va ser simplificar l'addició, edició i eliminació de llibres, així com consultar i cercar fàcilment mitjançant filtres.",
        technicalDetails: {
          summary:
            "Disseny i desenvolupament de l'aplicació per catalogar, registrar i gestionar l'inventari de llibres de manera àgil.",
          highlights: [
            "Accés restringit per a usuaris autoritzats",
            "Implementació completa d'operacions CRUD",
            "Tauler interactiu de dades per filtrar i visualitzar registres en temps real",
          ],
        },
      },
    },
  },
];

export function getLocalizedProject(project: Project, lang: Language): Project {
  if (lang === "en" || !project.translations?.[lang]) {
    return project;
  }
  const t = project.translations[lang]!;
  return {
    ...project,
    title: t.title,
    description: t.description,
    technicalDetails: {
      summary: t.technicalDetails.summary,
      highlights: t.technicalDetails.highlights,
    },
  };
}
