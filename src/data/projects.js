// ============================================================
//  PROJECTS DATA  —  Edit this file to add/update projects
//  Images: place project images in public/images/projects/
//  tags: tech stack used (shown as colored badges)
//  featured: true = shown first and larger on the grid
// ============================================================

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with product listings, cart, checkout, and admin dashboard. Built with React, Node.js, and MongoDB. Features real-time inventory updates and payment integration.",
    image: "/images/projects/ecommerce.jpg",   // place image in public/images/projects/
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://your-live-demo.com",     // leave "" to hide button
    githubUrl: "https://github.com/you/project", // leave "" to hide button
    featured: true,
    status: "completed",                       // "completed" | "in-progress" | "archived"
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app with drag-and-drop boards, real-time collaboration, and team management. Inspired by Trello. Built with Next.js and Firebase.",
    image: "/images/projects/taskapp.jpg",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/you/project",
    featured: true,
    status: "completed",
  },
  {
    id: 3,
    title: "AI Chat Interface",
    description:
      "A conversational AI interface that integrates with OpenAI's GPT API. Features streaming responses, conversation history, and markdown rendering.",
    image: "/images/projects/aichat.jpg",
    tags: ["React", "OpenAI API", "Node.js", "WebSockets"],
    liveUrl: "",
    githubUrl: "https://github.com/you/project",
    featured: false,
    status: "completed",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A responsive weather dashboard with 7-day forecasts, interactive maps, and location search. Consumes multiple weather APIs.",
    image: "/images/projects/weather.jpg",
    tags: ["React", "Chart.js", "REST API", "CSS Modules"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/you/project",
    featured: false,
    status: "completed",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "This very portfolio website! Built with React, Tailwind CSS, and Framer Motion. Features dark glassmorphism design and smooth animations.",
    image: "",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "",
    githubUrl: "https://github.com/you/portfolio",
    featured: false,
    status: "in-progress",
  },
];
