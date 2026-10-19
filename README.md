# Harshitha S — Developer Portfolio

A premium, responsive, black-and-red editorial React + TypeScript single-page portfolio for **Harshitha S**, AI/ML & Full-Stack Engineer.

Built with React 19, TypeScript, Vite, Vanilla CSS design system, Motion, ThreeUI Typography Vortex, and Lucide Icons.

- **Target Repository**: [HarshithaSatthish/portfolio](https://github.com/HarshithaSatthish/portfolio)
- **Live Website**: [https://harshithasatthish.github.io/portfolio/](https://harshithasatthish.github.io/portfolio/)

---

## Features & Verification

- **Theme & Aesthetic**: Editorial red-and-black palette (`#0B0B0D`, `#151518`, `#E5484D`, `#FF8A90`) with illuminated corner brackets and soft glows.
- **Hero & Halftone Reveal**: Halftone reveal portrait animation and ThreeUI Typography Vortex background.
- **Interactive About Me**: 3D mouse tilt card with illuminated corners and verified bio.
- **Skills Matrix**: Categorized tech stack pills (Languages, AI & ML, Cloud & Databases, Frameworks & Tools) with real-time domain filtering.
- **Verified Projects & Case Studies**:
  - **Vision4Text**: Multi-Modal Braille Document Transcription & Semantic Search System with verified GitHub repository ([VISION-26/vision4text-](https://github.com/VISION-26/vision4text-)), live demo ([vision4text.in/overview](https://www.vision4text.in/overview)), and accurate benchmark metrics (80.17% Known-product Pixel F1, 51.85% Unseen/LOCO Pixel F1, 23.32 FPS throughput).
  - Detailed interactive case-study modal dialogs with keyboard trap and Escape dismissal.
- **13 Verified Credentials Showcase**:
  - 13 uploaded certificate PDFs in `public/certificates/` with WebP preview thumbnails in `public/images/certificates/`.
  - Filterable by domain: *Programming (3)*, *Cloud & Security (3)*, *Data & AI (2)*, *Internships (2)*, *Hackathons (3)*.
  - Accessible `<object type="application/pdf">` modal viewer with inline rendering and automatic fallback (.webp thumbnail + direct link) for mobile browsers.
  - Direct "Open in New Tab" and "Download PDF" actions.
- **Work Experience & Timeline**: Sathtern (AI & ML Virtual Intern) and Pinnacle Labs (Web Development Intern).
- **Contact & Mailto Draft Generator**: Accessible contact form validating inputs and composing native `mailto:` draft with zero pretend backends.
- **Accessibility & Responsiveness**: Semantic HTML5 hierarchy (single `<h1>`), `:focus-visible` outlines, ARIA dialog landmarks, full keyboard navigation, `prefers-reduced-motion` compliance, and zero overflow on 390px mobile viewports.

---

## Local Development

Requirements: Node.js 20.19+ or 22.12+.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run TypeScript typecheck
npm run check

# Build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## GitHub Pages Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

To deploy:
1. Ensure GitHub Pages is set to **GitHub Actions** under **Settings → Pages → Build and deployment → Source**.
2. Push commits to `main`.
3. The workflow automatically executes:
   - `npm install --no-audit --no-fund`
   - `npm run build` with `GITHUB_PAGES=true` (configuring Vite `base: '/portfolio/'`)
   - Deploys the `dist/` directory to GitHub Pages.

---

## Structure

```
harshitha-portfolio/
├── .github/workflows/deploy.yml   # Automated GitHub Pages CI/CD
├── public/
│   ├── certificates/              # 13 verified PDF credentials
│   ├── images/
│   │   ├── certificates/          # 13 WebP preview thumbnails
│   │   ├── hero/                  # Professional portrait assets
│   │   └── projects/              # Verified project screenshots
│   └── resume.pdf                 # Harshitha S official resume
├── src/
│   ├── components/                # Modular React components
│   ├── data/                      # Centralized portfolio data & asset helpers
│   ├── styles/global.css          # Design tokens & responsive styles
│   ├── App.tsx                    # Main root component
│   └── main.tsx                   # Entry point
├── index.html                     # Base HTML with SEO metadata & fonts
├── package.json                   # Dependencies & build scripts
├── tsconfig.app.json              # TypeScript configuration
└── vite.config.ts                 # Base-aware Vite configuration
```

---

## Privacy & Attribution

- Profile images, resume, and certificate documents belong to Harshitha S.
- No personal contact details (such as private phone numbers, home addresses, Aadhaar, or PAN) are exposed.
