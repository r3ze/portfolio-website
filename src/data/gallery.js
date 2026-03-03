// ============================================================
//  GALLERY DATA  —  Edit this file to add gallery images
//  Place images in: public/images/gallery/
//  category: used for filter tabs ("All" is always shown)
//  span: "normal" | "wide" | "tall" — controls grid layout
// ============================================================

export const gallery = [
  {
    id: 1,
    src: "/images/gallery/photo1.jpg",
    alt: "Hackathon event 2023",
    caption: "Hackathon 2023 — 1st Place",
    category: "Events",
    span: "wide",
  },
  {
    id: 2,
    src: "/images/gallery/photo2.jpg",
    alt: "Project presentation",
    caption: "Capstone Project Presentation",
    category: "Academic",
    span: "normal",
  },
  {
    id: 3,
    src: "/images/gallery/photo3.jpg",
    alt: "Team photo",
    caption: "Dev Team Outing 2023",
    category: "Events",
    span: "normal",
  },
  {
    id: 4,
    src: "/images/gallery/photo4.jpg",
    alt: "Coding workspace",
    caption: "My workspace setup",
    category: "Personal",
    span: "normal",
  },
  {
    id: 5,
    src: "/images/gallery/photo5.jpg",
    alt: "Tech conference",
    caption: "ReactConf 2023 — Conference",
    category: "Events",
    span: "wide",
  },
  {
    id: 6,
    src: "/images/gallery/photo6.jpg",
    alt: "Graduation photo",
    caption: "Graduation Day 2021",
    category: "Academic",
    span: "normal",
  },
];

// Gallery filter categories (auto-generated from above, but you can override)
export const galleryCategories = ["All", "Events", "Academic", "Personal"];
