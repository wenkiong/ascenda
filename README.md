
# Ascenda UI Mockups – Live Prototyping Hub

This repository is a central workspace for **Ascenda-related UI prototypes**, built using [Vite](https://vitejs.dev/), [Tailwind CSS](https://tailwindcss.com/), and [Motion](https://motion.dev/). It provides interactive mockups for design testing, animation exploration, and live stakeholder previews.

## 📌 Purpose

- Host UI prototypes for **Ascenda Rewards Portal** and other related projects
- Test design ideas, interactions, and basic flows
- Centralize all front-end exploration in a single live environment
- Share dynamic previews with stakeholders and developers

---

## 🧱 Structure

The homepage acts as an **index of projects**, while each project lives in its own subdirectory.

```
src/
├── projects/
│   ├── rewards/          # Mockups for Rewards Portal
│   ├── travel/           # (Example) Travel experience testing
│   └── ...               # Add more as needed
├── components/           # Shared reusable components
├── layouts/              # Shared page/layout wrappers
├── pages/
│   └── index.tsx         # Project index homepage
├── styles/               # Tailwind config / base styles
└── App.tsx
```

---

## 🛠 Tech Stack

- ⚡ [Vite](https://vitejs.dev/) – Lightning-fast dev environment
- ⚛️ [React](https://react.dev/) – UI library
- 🌀 [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- 🎞️ [Motion](https://motion.dev/) – React animation library
- 🧠 [TypeScript](https://www.typescriptlang.org/) – Type-safe components

---

## 🧪 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## 🌍 Deployment

This repo can be deployed using:
- **GitHub Pages** (default for static preview)
- Or any static host like Netlify or Vercel

Deployment will serve the index (`/`) as the project overview, with each project accessible via subpaths (e.g., `/rewards`, `/travel`, etc).

---

## 📎 Notes

- This is a **UI/UX prototyping space only** — no backend logic or production APIs.
- All designs are specific to **Ascenda** and intended for internal feedback and iteration.
- Maintained by [Wen Kiong](mailto:your-email@example.com)

---
