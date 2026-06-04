# Agnesa A — Portfolio

A personal portfolio website built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui. Showcases work experience, projects, skills, and certificates.



## Tech Stack

- **Framework:** React 18 + Vite 5
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v3 + shadcn/ui
- **Icons:** lucide-react
- **Routing:** react-router-dom
- **Data:** @tanstack/react-query

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ (LTS recommended)
- npm (bundled with Node) or [Bun](https://bun.sh/) / pnpm

### Install & Run

```bash
# 1. Clone
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

# 2. Install dependencies
npm install
# or: bun install
# or: pnpm install

# 3. Start the dev server
npm run dev
```

Open http://localhost:8080 in your browser. Hot reload is enabled.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `dist/` |
| `npm run build:dev` | Development-mode build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest unit tests |

## Project Structure

```
.
├── public/                    # Static assets (certificates, resume, favicon)
├── src/
│   ├── assets/                # Imported images (profile, etc.)
│   ├── components/
│   │   ├── portfolio/         # Page sections (Hero, About, Experience, …)
│   │   └── ui/                # shadcn/ui primitives
│   ├── hooks/                 # Reusable React hooks
│   ├── integrations/supabase/ # Auto-generated Supabase client (do not edit)
│   ├── lib/                   # Utilities
│   ├── pages/                 # Route-level pages (Index, NotFound)
│   ├── test/                  # Vitest setup & examples
│   ├── App.tsx                # App shell & routes
│   ├── main.tsx               # React entry point
│   └── index.css              # Tailwind layers & design tokens
├── index.html
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

## Deployment

The app is a standard Vite build — deploy `dist/` to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

```bash
npm run build
```

## Author

**Agnesa A** — Aspiring Data Scientist & Computer Science Engineer
- Email: agnesa892004@gmail.com
- LinkedIn: https://linkedin.com/in/agnesa
- GitHub: https://github.com/AgnesaAntony

## License

This project is for personal portfolio use.
