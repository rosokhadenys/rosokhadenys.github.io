# Project Management Portfolio

A cinematic, responsive portfolio built with Next.js, React, TypeScript, Tailwind CSS v4, Motion, and Lucide. Professional content lives in `data/portfolio.ts`.

## Run and validate

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

Next.js reports the local preview URL (usually http://localhost:3000; uses the next available port if occupied). There is no lint configuration in this project.

The browser regression script `scripts/verify-browser.cjs` uses an existing Playwright installation and local Google Chrome. Set `PLAYWRIGHT_MODULE` to its module path and optionally `PREVIEW_URL` (default: http://localhost:3000). It checks the five requested viewport widths, disclosure controls, workflow playback, keyboard controls, reduced motion, anchors, and browser errors. Screenshots are saved in the project root as `browser-<width>.png`.

## Personalize

Replace bracketed placeholders with verified information only. Verified email, LinkedIn, and phone links are enabled. Populate `contact.cv` only when the final CV is ready; for a local CV, place the PDF in `public/` and use its root-relative URL. Missing CVs display a disabled download action with an explanation.

Identity, contacts, employment, skills, qualifications, language levels, and case studies use verified content. Availability and some workflow stage details remain unresolved in the data layer and are hidden from the public UI. The workflow is a labeled demonstration, not a live integration.

## Components

- `portfolio.tsx`: page composition, hero, capabilities, skills, education, contact.
- `floating-nav.tsx`: scroll-aware navigation and keyboard-accessible mobile menu.
- `career-timeline.tsx`: single-open experience disclosure and restrained scroll progress.
- `projects.tsx`: featured project composition and inline case studies.
- `ai-workflow.tsx`: nine selectable stages, SVG connections, manual play/pause/restart.
- `ui.tsx`: shared reveals, expansion transitions, tags, section headings, and CV links.

The workflow uses a measured SVG connection layer around a central ChatGPT stage on desktop and tablet, with Human Approval distinguished visually. Mobile uses the same sequence vertically. A traveling pulse follows each active connection during the user-controlled, approximately 9.5-second playback. Reduced motion disables decorative movement while preserving functionality. No external fonts, images, video, or extra runtime dependencies are needed.

## GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for static export, local preview, repository selection and authentication steps. `npm run build` exports to `out/`; `npm start` serves that static output. The deployment workflow supports both root user sites and repository base paths.
