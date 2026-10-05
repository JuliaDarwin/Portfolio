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
      "Spring Boot"
    ],
    liveUrl: "https://videosynthesis.vercel.app/",
    githubUrl: "https://github.com/JuliaDarwin/Video-Synthesis-Front",
    technicalDetails: {
      summary:
        "VideoSynthesis is a company that works in digital communication by editing and filming content related to marine conservation. They needed a website where they could upload and manage their previous work to display. Also be able to gain new clients from it. ",
      highlights: [
        "Implemented REST APIs and full CRUD functionality for managing application data, including large image content",
        "Developed a dynamic contact form and calendar-based reservation system with a 3rd party (Cal)",
        "Created a contact form that resends the information immediately to VideoSynthesis",
        "Created a dynamic budget calculator for the clients"
      ],
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
      "PostgreSQL"
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
        "Contact form for new students that collects the information with a 3rd party-Resend"
      ],
    },
  },
  {
    id: "library-inventory",
    title: "Book Inventory",
    description:
      "This application was originally built for my parents' book inventory. They have a large amount of books and they used to keep track of them in a very large and chaotic Excel file. The purpose of this app was to simplify the process of adding, modifying or deleting any book, as well as easily consult about any book using filters. ",
    image: "/projects/bibPares.png",
    technologies: [
      "Python",
      "Streamlit",
      "MongoDB Atlas",
    ],
    liveUrl: "https://library-inventory.streamlit.app/",
    githubUrl: "https://github.com/JuliaDarwin/Library-Inventory",
    technicalDetails: {
      summary:
        "Engineered this application to classify and keep track of books, as well as adding/modifying the inventory",
      highlights: [
        "Restricted access for specific users",
        "Implemented CRUD operations",
        "Interactive data dashboard to filter and visualize records in real-time"
      ],
    },
  }
];
