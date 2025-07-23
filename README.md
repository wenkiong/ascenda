# Ascenda UI Mockups

This repository hosts live UI mockups for Ascenda's Rewards portal and other related products. Built using [Vite](https://vitejs.dev/), [React](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), and [Framer Motion](https://www.framer.com/motion/), the goal is to rapidly prototype and test accessibility-first, responsive user interfaces.

## 🔧 Tech Stack

- **Vite** – Fast development build tool
- **React** – Component-based UI
- **Tailwind CSS** – Utility-first styling
- **Framer Motion** – Declarative animation library
- **GitHub Actions** – CI/CD for automated deployment

## 📁 Project Structure

The homepage (`/`) acts as an index of prototype subpages.

```
src/
├── routes/              # Project routes (e.g. rc-homepage, tenant-onboarding)
│   ├── rc-homepage/
│   ├── rc-travel/
│   └── ...
├── components/          # Reusable UI components
├── styles/              # Global styles and tokens
│   ├── colors.css       # Color, typography, spacing tokens
│   └── ...
├── App.tsx              # App entry with <Routes>
└── main.tsx             # Renders root <App>
```

## 🚀 Deployment

- Production build is triggered automatically via **GitHub Actions** on `git push`
- Output is deployed to **GitHub Pages**: [`https://ascenda.design`](https://ascenda.design)
- Custom domain is handled via `CNAME` file and DNS configured on **Porkbun**

## 🌐 Custom Domain

This project uses a custom domain: `ascenda.design`. Make sure the `vite.config.ts` file has:

```ts
export default defineConfig({
  base: '/',
})
```

A `CNAME` file containing the domain is located in `/public`.

## 🛠 Accessibility-First Design

The mockups are built to test for:
- `prefers-reduced-motion`
- `prefers-contrast`
- semantic HTML
- keyboard navigation
- screen reader compatibility

Framer Motion respects `prefers-reduced-motion` automatically out of the box.

## 📬 Contact

For questions or feedback, reach out to: [wenkiong.neo@ascenda.com](mailto:wenkiong.neo@ascenda.com)