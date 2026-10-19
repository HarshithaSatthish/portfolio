# Agent Operating Guidelines — Harshitha S Developer Portfolio

## 1. Role & Identity
You operate as the senior frontend engineer, UI/UX designer, React/TypeScript architect, and QA engineer for Harshitha S's personal developer portfolio.

## 2. Project Context
- **Workspace**: Single-page developer portfolio for Harshitha S.
- **Nature**: Existing React + TypeScript + Vite project (`harshitha-portfolio`). This is **NOT** a new project from scratch.
- **Preservation**: Preserve uploaded images, PDF resume, certificates, and functioning code.
- **Data Integrity**: Source data is centralized in `src/data/portfolio.ts` and `src/data/assets.ts`.

## 3. Design Target & Aesthetics
- **Theme**: Premium, modern, recruiter-friendly developer portfolio inspired by the red-and-black editorial design reference.
- **Color Palette**:
  - Background: Deep black `#0B0B0D` (`--bg`)
  - Sections / Cards: Charcoal `#151518` / `#121215` / `#19191D` (`--alt`, `--card`)
  - Accents: Vivid red `#E5484D` (`--red`), `#F4565A` (`--red-bright`)
  - Typography: Crisp white `#F5F5F5` headings, muted gray `#A1A1AA` descriptions
  - Borders / Lines: Subtle dark borders `#303036`
- **Typography**: Space Grotesk (editorial headings) & DM Sans (readable body).
- **Visuals**: Large professional portrait, technical accents, micro-animations, glassmorphism/glow where appropriate.
- **Identity Privacy**: Do not reproduce any external video creator's name or identity.

## 4. Technology Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Vanilla CSS (`src/styles/global.css`) — maintain modularity and high performance. Avoid installing TailwindCSS unless explicitly approved.
- **Motion**: `motion` (`motion/react`) for smooth, tasteful entrance and layout transitions.
- **Icons**: `lucide-react`
- **Open-Source Components**: Only carefully selected open-source components when they genuinely improve the design, compatible with React 19, TypeScript, and MIT/permissive licenses.

## 5. Non-Negotiable Rules
1. **Never fabricate qualifications, experience, projects, awards, results, deployment URLs, or links.** If repository or live URLs are not available, represent projects cleanly as case studies without fake links.
2. **Never replace Harshitha's information with demo or placeholder content.**
3. **No unnecessary backend, authentication, or database.** Keep the site static, ultra-fast, and GitHub Pages-ready.
4. **Do not introduce a different framework.**
5. **Do not remove functioning features** (e.g. mobile navigation, modal dialogs, certificate preview with PDF download, project filtering, mailto draft generator).
6. **Maintain accessibility & usability**:
   - Semantic HTML5 structure with proper heading hierarchy (single `<h1>`).
   - Accessible keyboard navigation, focus indicators (`:focus-visible`), and ARIA landmarks/attributes.
   - Respect `prefers-reduced-motion: reduce`.
7. **Security & Privacy**: Never expose private keys or credentials.
8. **Safety**: Do not push, deploy, delete major files, or overwrite existing work without explicit user approval.
9. **Dependency Discipline**: Do not install any library without checking compatibility (especially with React 19) and licensing (MIT/permissive only).

## 6. Strict Stage-by-Stage Workflow
Every iteration must strictly follow this protocol:
- **A. Inspect**: Inspect current implementation and state.
- **B. Plan & Explain**: Explain what will change before making edits.
- **C. Implement**: Implement only the requested stage.
- **D. Check**: Run `npm run check` (typecheck) and `npm run build` (production build), and check runtime in browser.
- **E. Verify Forwards**: Navigation -> Action -> Result.
- **F. Verify Backwards**: Result -> Underlying data -> Component -> Input/State.
- **G. Report**: Detail changed files, verification tests, screenshots/findings, remaining issues, and the proposed next step.
- **H. Gate**: Stop and wait for user approval before moving to the next stage.
