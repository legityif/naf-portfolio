export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const metaItems = [
  { label: "Location", value: "Sydney · Open to remote" },
  { label: "Focus", value: "Backend services, cloud platforms" },
  { label: "Stack", value: "Java, Spring Boot, Python, React, AWS, GCP" },
];

export const skills = {
  strengths: ["API design", "Backend development", "Cloud infrastructure"],
  recentFocus: ["Java & Spring Boot", "AWS & GCP", "Microservices"],
};

export const experience = [
  {
    roleType: "Software Engineer",
    company: "Macquarie Group · Sydney",
    title: "Backend & API development",
    description:
      "Worked on backend services and APIs in a large-scale financial environment, contributing to systems that require robustness, clear contracts, and careful performance considerations.",
    highlights: [
      "Developed and maintained RESTful APIs using Java and Spring Boot.",
      "Worked with SQL-backed data models and optimized queries.",
      "Deployed and operated services on AWS and GCP.",
    ],
  },
  {
    roleType: "Software Engineer Intern",
    company: "Infosys · Remote",
    title: "Microservice & API development",
    description:
      "Built and iterated on microservice-style APIs in a consulting context, collaborating with engineers and stakeholders to deliver client projects.",
    highlights: [
      "Implemented backend services using Python and Flask.",
      "Designed and documented API contracts for internal consumers.",
      "Contributed to microservice integration and testing.",
    ],
  },
];

export const projects = [
  {
    tag: "Game development",
    year: "Pacman",
    title: "Pacman clone",
    description:
      "A playable Pacman-style game, built as a way to explore pathfinding, state machines, and rendering loops.",
    highlights: [
      "Implemented character movement, ghosts, and collision logic.",
      "Experimented with simple AI behaviour for enemy movement.",
    ],
    link: "https://github.com/legityif",
  },
  {
    tag: "Graphics & rendering",
    year: "C#",
    title: "Ray tracer",
    description:
      "A basic ray tracer implemented in C#, rendering simple scenes from first principles.",
    highlights: [
      "Implemented ray-sphere intersections, lighting, and shading.",
      "Explored performance trade-offs in pure C# implementations.",
    ],
    link: "https://github.com/legityif",
  },
  {
    tag: "Full-stack web",
    year: "React & MERN",
    title: "CRM app",
    description:
      "A CRM-style web application built with React and a MERN backend, used to manage contacts and simple sales workflows.",
    highlights: [
      "Implemented CRUD flows and authentication using the MERN stack.",
      "Focused on UI responsiveness and clear data flows in React.",
    ],
    link: "https://github.com/legityif",
  },
];
