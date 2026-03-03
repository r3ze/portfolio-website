// ============================================================
//  SKILLS DATA  —  Edit this file to update your skills
//  Icons: use any name from https://lucide.dev/icons/
//  Or use a custom SVG path string in the `icon` field
//  For category color, use any Tailwind color or hex
// ============================================================

export const skills = [
  {
    category: "Frontend",
    color: "#00d4ff",
    items: [
      { name: "React", level: 90 },        // level: 0-100 (shown as progress bar)
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML & CSS", level: 95 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "Backend",
    color: "#7c3aed",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Python", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "GraphQL", level: 60 },
    ],
  },
  {
    category: "Database",
    color: "#ec4899",
    items: [
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "Firebase", level: 75 },
      { name: "Supabase", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    color: "#10b981",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 60 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 65 },
    ],
  },
];

// Tech stack badges shown in the Hero / About section
export const techBadges = [
  "React", "TypeScript", "Node.js", "Python",
  "Tailwind CSS", "MongoDB", "PostgreSQL", "Docker",
];
