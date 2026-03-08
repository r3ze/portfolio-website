// ============================================================
//  PROJECTS DATA  —  Edit this file to add/update projects
//  Images: place project images in public/images/projects/
//  tags: tech stack used (shown as colored badges)
//  featured: true = shown first and larger on the grid
//  images: array of paths shown in the detail page gallery
//  longDescription: full markdown-style text for the detail page
// ============================================================

export const projects = [
  {
    id: 1,
    title: "Complaint Management App",
    description:
      "A full-featured online store with product listings, cart, checkout, and admin dashboard. Built with React, Node.js, and MongoDB. Features real-time inventory updates and payment integration.",
    longDescription:
      "This complaint management application provides a comprehensive platform for handling customer complaints end-to-end. Users can submit complaints with attachments, track their status in real time, and receive notifications at each stage. Admins get a dashboard with analytics, priority queuing, and assignment tools. The system integrates with Stripe for any fee-based services and uses MongoDB change streams for live updates without polling.",
    image: "/images/projects/fleco_app_login_2.jpg",
    images: [
      "/images/projects/fleco_app_login_2.jpg",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/you/project",
    featured: true,
    status: "completed",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app with drag-and-drop boards, real-time collaboration, and team management. Inspired by Trello. Built with Next.js and Firebase.",
    longDescription:
      "A Trello-inspired project management tool built for teams. Cards can be dragged between columns, assigned to members, and given due dates with reminders. Firebase Firestore powers real-time sync so all collaborators see changes instantly. The authentication layer supports Google Sign-In and role-based permissions (admin, editor, viewer). Optimistic UI updates keep interactions feeling instant even on slower connections.",
    image: "/images/projects/taskapp.jpg",
    images: [
      "/images/projects/taskapp.jpg",
    ],
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
    longDescription:
      "A polished chat interface that communicates with OpenAI's GPT-4 API via a lightweight Node.js proxy. Responses stream token-by-token for a natural feel. Conversation threads are stored in localStorage so history persists across reloads. The UI renders markdown (code blocks, lists, bold) using a custom renderer built on top of marked.js. A system-prompt editor lets power users customize the AI's persona.",
    image: "/images/projects/aichat.jpg",
    images: [
      "/images/projects/aichat.jpg",
    ],
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
    longDescription:
      "A responsive dashboard that aggregates data from OpenWeatherMap and WeatherAPI to give users the most accurate 7-day outlook. A Mapbox-powered interactive map lets users click any point on the globe to get weather data. Chart.js visualises hourly temperature, precipitation probability, and wind speed. The app auto-detects the user's location via the Geolocation API and caches results for 15 minutes to stay within free-tier API limits.",
    image: "/images/projects/weather.jpg",
    images: [
      "/images/projects/weather.jpg",
    ],
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
    longDescription:
      "A handcrafted single-page portfolio with a cyberpunk / dark glassmorphism aesthetic. Every section — Hero, Skills, Projects, Experience, Education, Gallery, Contact — is driven by structured data files so content updates never require touching component code. Framer Motion scroll-reveal animations trigger once as each section enters the viewport. The site is fully responsive, scores 95+ on Lighthouse, and deploys to Vercel via GitHub Actions.",
    image: "",
    images: [],
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "",
    githubUrl: "https://github.com/you/portfolio",
    featured: false,
    status: "in-progress",
  },
];
