# Open-source implementation map

This is the selection plan for the exact project structure included in this package. The shipped starter already implements all eight portfolio sections with original React and CSS; external visual components below are **options to copy/integrate**, not claims that the third-party code is already installed.

| Section / feature | File(s) in this project | Best source to examine | How to use it | License note |
|---|---|---|---|---|
| Project skeleton | `index.html`, `vite.config.ts`, `src/main.tsx` | https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts | React + TypeScript + Vite base | MIT |
| Accessible navbar and mobile menu | `src/components/Navbar.tsx` | https://github.com/shadcn-ui/ui | Navigation Menu, Sheet, button patterns | MIT; shadcn expects Tailwind |
| Editorial hero, text entrances | `src/components/Hero.tsx` | https://github.com/ibelick/motion-primitives | Text reveals, entrance effects, progressive disclosure | MIT; optional patterns |
| Optional animated headline | `src/components/Hero.tsx` | https://github.com/DavidHDev/react-bits | Choose **one** subtle text animation with TS + CSS version | MIT + Commons Clause; read restrictions |
| Project feature cards | `src/components/Projects.tsx` | https://github.com/magicuidesign/magicui | Magic Card hover-border idea, with reduced-motion fallback | MIT; many examples use Tailwind |
| Cards, buttons, tags | `src/components/Skills.tsx` & others | https://github.com/shadcn-ui/ui | Badges, Cards, Tabs | MIT |
| Open-source icons | All UI components | https://github.com/lucide-icons/lucide | `lucide-react` | ISC / MIT |
| Animated transitions | `src/components/Hero.tsx` | https://github.com/motiondivision/motion | `motion/react`; already used for the hero | MIT |
| Smooth scroll | `src/styles/global.css` | https://github.com/darkroomengineering/lenis | Optional; start with native CSS scrolling | MIT |
| Certificate preview | `src/components/Certifications.tsx` | Built-in `<iframe>` PDF support | PDF documents + generated WebP thumbnails | No extra library; uploads remain user-owned |
| Achievements timeline | `src/components/Leadership.tsx` | Own CSS list | Avoid heavyweight timeline deps for 3 achievements | N/A |
| Experience timeline | `src/components/Experience.tsx` | Own CSS timeline | Fast, maintainable and responsive | N/A |
| Contact form validation | `src/components/Contact.tsx` | https://github.com/react-hook-form/react-hook-form | Optional more complex form management | MIT |
| Advanced visual extras | Any background component | https://threeui.com/ | Optional Three.js-backed hero scene; verify code license | Per-component |
| More animated effects | Any section | https://ui.aceternity.com/components | Free samples vary; premium parts can be paid | Verify |

## What should actually be integrated?

**Phase A (already done):** Original 8-section React/TypeScript website, centralized user data, verified-media previews, responsive layout, mobile navigation, filterable projects, contact mailto draft, GitHub Pages workflow.

**Phase B (optional):** Integrate *one* React Bits or Motion Primitives headline treatment; add a Magic Card hover interaction in projects; validate mobile and reduced-motion behavior.

**Phase C (only after real repo/demo URLs exist):** Link each project to a README, source repository, deployed demo, architecture overview and testing evidence.

**Don't import everything at once.** Aceternity, ThreeUI, shadcn, and Magic UI often require different versions of styling/animation tooling. Use this as a shortlist, not one enormous dependency graph.

## Run locally

```bash
npm install
npm run dev
npm run build
```

## Full-stack job-readiness companion project (optional, not fabricated as complete)

One realistic 3–4 week idea is **IssueBridge**, a lightweight bug/issue tracker for small student teams. Build authentication, team/project roles, CRUD issues, filtering, comments/activity log, external GitHub issue links, validation and API integration, plus meaningful unit/integration tests and a public deployment. Suggested stack: React + TypeScript + Vite, Node + Express + TypeScript, PostgreSQL + Prisma, session/auth provider, Vitest, Playwright, Vercel (frontend) + a backend host with persistent database. Build a vertical slice and document trade-offs. Only add it to the live portfolio as a finished project once verified.
