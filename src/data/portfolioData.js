export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const metaItems = [
  { label: "Location", value: "Melbourne · Open to remote opportunities" },
  { label: "Focus", value: "Backend services, APIs, Automation" },
  { label: "Stack", value: "Java/Spring, Python, React.js, TypeScript" },
];

export const skills = {
  strengths: ["API Design", "Automation Testing", "Data-eventing Solutions"],
  recentFocus: ["Java & Spring Boot", "Playwright Automation", "AI powered dev"],
};

export const experience = [
  {
    roleType: "Software Engineer",
    company: "Macquarie Group · Melbourne",
    period: "02.2024 – now",
    title: "Backend API development + Automation",
    description:
      "Backend services and APIs in a large-scale financial environment — systems that demand clarity, scalability and reliability",
    highlights: [
      "Developed and maintained RESTful APIs with Java and Spring Boot.",
      "Developed end-to-end automation test suites in Playwright and Typescript",
      "Optimised SQL databases, deploying & maintaining production systems"
    ],
  },
  {
    roleType: "Software Engineer Intern",
    company: "Infosys · Melbourne",
    period: "01.2023 – 03.2023",
    title: "Data, ML & observability platform",
    description:
      "Internship focused on text analytics, supervised learning, and an observability product that unified incident data, public feeds, and API-driven sources.",
    highlights: [
      "Analysed incident and public text streams with Python NLP and MongoDB; built supervised ML models to categorise text at scale.",
      "Worked on a multidimensional observability platform—sentiment and signal analysis across ServiceNow, Twitter, and similar APIs.",
      "Contributed full-stack to the platform’s web application alongside the core engineering team.",
    ],
  },
  {
    roleType: "Software Support Engineer",
    company: "ATTAR · Melbourne",
    period: "05.2022 – 01.2023",
    title: "Infrastructure, security & internal systems",
    description:
      "Hands-on support across software delivery, infrastructure, and enterprise tooling in a compact engineering environment.",
    highlights: [
      "Helped implement and roll out internal software projects end-to-end.",
      "Maintained network security posture, hardware health, and system databases.",
      "Administered SharePoint, Azure, and NAS; managed server and database operations day to day.",
    ],
  },
];

export const education = {
  school: "University of Melbourne",
  degree: "Bachelor of Science",
  period: "2021 – 2024",
  highlights: [
    "Computing & Software Systems major",
    "Corporate Finance breadth track",
  ],
};

export const projects = [
  {
    tag: "Full-stack web",
    year: "React & MERN",
    title: "CRM Web App",
    description:
      "Web application build on MERN, with productivity & messaging features",
    highlights: [
      "Implemented CRUD flows and authentication using the MERN stack.",
      "Focused on UI responsiveness and clear data flows in React.",
    ],
    link: "https://github.com/legityif",
  },
  {
    tag: "Graphics & rendering",
    year: "C#",
    title: "Primitive Ray Tracer",
    description:
      "A basic ray tracer implemented in C#, rendering simple scenes from first principles.",
    highlights: [
      "Implemented ray-sphere intersections, lighting, and shading.",
      "Explored performance trade-offs in pure C# implementations.",
    ],
    link: "https://github.com/legityif",
  },
  {
    tag: "Game development",
    year: "Java",
    title: "Pacman Style Game",
    description:
      "Pacman-style game, explores pathfinding, state machines, and rendering loops.",
    highlights: [
      "Implemented character movement, ghosts, and collision logic.",
      "Experimented with simple AI behaviour for enemy movement.",
    ],
    link: "https://github.com/legityif",
  },
];
