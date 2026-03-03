# Portfolio Content Guide

All your portfolio content is stored in **`src/data/`** — just edit these files and redeploy.

---

## Files to Edit

| File | What it controls |
|------|-----------------|
| `src/data/profile.js` | Your name, title, bio, email, social links, avatar path |
| `src/data/skills.js` | Skill categories, individual skills, and proficiency levels |
| `src/data/projects.js` | Projects with descriptions, tech tags, live & GitHub links |
| `src/data/experience.js` | Work history / internships |
| `src/data/education.js` | Schools, degrees, certifications |
| `src/data/gallery.js` | Gallery photos with captions and categories |

---

## Adding Your Photo (Avatar)

1. Place your photo at `public/images/avatar.jpg`
2. In `src/data/profile.js`, set: `avatar: "/images/avatar.jpg"`

## Adding Project Images

1. Place images in `public/images/projects/` (e.g., `ecommerce.jpg`)
2. In `src/data/projects.js`, set: `image: "/images/projects/ecommerce.jpg"`

## Adding Gallery Photos

1. Place images in `public/images/gallery/` (e.g., `photo1.jpg`)
2. In `src/data/gallery.js`, add an entry:
```js
{
  id: 7,
  src: "/images/gallery/photo1.jpg",
  alt: "Description",
  caption: "Event Name",
  category: "Events",  // must match a category in galleryCategories
  span: "normal",      // "normal" | "wide" (2 columns)
}
```

## Adding a New Project

In `src/data/projects.js`, add to the array:
```js
{
  id: 6,              // increment the id
  title: "My New App",
  description: "What the app does...",
  image: "/images/projects/newapp.jpg",
  tags: ["React", "Firebase"],
  liveUrl: "https://myapp.com",
  githubUrl: "https://github.com/me/myapp",
  featured: false,
  status: "completed",
}
```

## Adding a New Skill

In `src/data/skills.js`, add to an existing category:
```js
{ name: "Vue.js", level: 70 },
```
Or add a whole new category:
```js
{
  category: "Mobile",
  color: "#f59e0b",
  items: [
    { name: "React Native", level: 65 },
  ],
},
```

## Updating the Page Title / SEO

Edit `index.html` — update the `<title>` and `<meta>` tags with your real name.

Also update the favicon initials in `public/favicon.svg`.

---

## Development

```bash
npm run dev      # start dev server at http://localhost:5173
npm run build    # build for production
npm run preview  # preview production build locally
```

## Deployment

Built files go to `dist/` — deploy to **Vercel**, **Netlify**, or **GitHub Pages**:

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
Drag and drop the `dist/` folder to netlify.com/drop

### GitHub Pages
Push to GitHub and configure Pages to use the `dist/` folder (or use GitHub Actions).
