# FINAL QUALITY ASSURANCE REPORT — PRE-DEPLOYMENT AUDIT

**Candidate Portfolio:** Harshitha S — Software Developer  
**Audit Timestamp:** October 19, 2026  
**Auditor:** Senior Frontend Architect & QA Engineer  
**Status:** Pre-Deployment Audit Completed  
**Deployment Action:** BLOCKED (Awaiting Explicit User Approval as per safety guidelines)

---

## 1. Executive Summary & Verdict

| Category | Status | Notes |
|---|---|---|
| **Base Paths & GitHub Pages Readiness** |  **PASSED** | Validated with simulated `/portfolio/` preview. All 13 certificates, resume, images, and brand SVG favicon return HTTP 200 with correct MIME types. |
| **Project & Data Content Integrity** |  **PASSED** | Vision4Text metrics verified and explicitly labeled as recorded project evaluation results (`80.17% Known-product Pixel F1`, `51.85% Unseen/LOCO Pixel F1`). Zero fake links or unverified claims for GlobalPulse and Harbor. |
| **WebGL Lifecycle & Performance** |  **PASSED** | ThreeUI `TypographyVortexCanvas` unmounts when scrolled offscreen via `IntersectionObserver`. Halftone WebGL stops rendering loop when offscreen. |
| **Responsive Viewports (360px – 1440px)** |  **PASSED** | Tested across 360px, 390px, 768px, and 1440px. 0 horizontal overflow across all viewports. |
| **Accessibility & Semantics** |  **PASSED** | Single `<h1>` ("HI, I'M HARSHITHA"), proper heading hierarchy (`<h2>`, `<h3>`), native dialog focus trapping and Escape key support, focus restoration, `:focus-visible` outlines. |
| **Security & Privacy** |  **PASSED** | Zero sensitive or identity documents published. Contact form transparently describes client-side `mailto:` behavior without false delivery guarantees. |
| **Build & Typecheck Health** |  **PASSED** | `npm run check` (0 errors), `npm run build` (0 errors, 4.78s production bundle). |

### Overall Recommendation: **GO FOR DEPLOYMENT**  
*(Pending user final sign-off)*

---

## 2. Task-by-Task Audit Findings

### Task 1 — GitHub Pages Asset Paths
- **`index.html`**: Updated favicon path to `<link rel="icon" type="image/svg+xml" href="%BASE_URL%favicon.svg" />`.
- **`vite.config.ts`**: Configured to dynamically resolve base:
  ```ts
  base: process.env.VITE_BASE || (process.env.GITHUB_PAGES === 'true' ? '/portfolio/' : '/')
  ```
- **`src/data/assets.ts`**: Enhanced to handle base-aware path resolution for local assets while preserving absolute external URLs safely.
- **Simulated `/portfolio/` Preview Test**:
  Executed local production preview under `http://localhost:4173/portfolio/`. Verified with HTTP requests:
  - `/portfolio/favicon.svg` → HTTP 200 (`image/svg+xml`, 510 B)
  - `/portfolio/resume.pdf` → HTTP 200 (`application/pdf`, 169.2 KB)
  - `/portfolio/images/portrait-casual.webp` → HTTP 200 (`image/webp`, 118.3 KB)
  - `/portfolio/certificates/java-developer.pdf` → HTTP 200 (`application/pdf`, 84.1 KB)
  - `/portfolio/certificates/deloitte-analytics.pdf` → HTTP 200 (`application/pdf`, 123.7 KB)
  - `/portfolio/certificates/sathtern.pdf` → HTTP 200 (`application/pdf`, 1.03 MB)

### Task 2 — Project Content Accuracy
- **Vision4Text (EVT-CLIP Anomaly Detection)**:
  - Repository: `https://github.com/VISION-26/vision4text-` (verified)
  - Live Demo: `https://www.vision4text.in/overview` (verified)
  - Metrics Labeling:
    - `80.17% Known-product Pixel F1`
    - `51.85% Unseen/LOCO Pixel F1`
    - Explicit footnote: `*Recorded repository evaluation results (BUILD_VALIDATION.json).`
    - Case study Section 08 explicitly disclaims: *"The metrics below represent recorded project evaluation results measured on controlled test splits from BUILD_VALIDATION.json and report_service.py. They are not asserted as independently reproduced production-wide guarantees."*
  - Supported categories verified: Bottle, Cable, Capsule, Metal Nut, Pill.
- **GlobalPulse (News Aggregator)**:
  - Source verified: `https://github.com/HarshithaSatthish/globalpulse`
  - Web Development Internship project at Pinnacle Labs.
  - No synthetic live URL claimed.
- **Harbor (Task Workspace)**:
  - Web Development Internship project at Pinnacle Labs.
  - Cleanly documented as an internship case study without fictitious repository or live links.

### Task 3 — Functional & Accessibility Testing
- **Navbar Branding**: `HS` monogram (`H` in `#F5F5F5` white, `S` in `#E5484D` red) navigating to `#home` with accessible label `Harshitha S — Home`.
- **ThreeUI Landing Animation**: Typography Vortex active on desktop/coarse-pointer disabled, unmounting automatically when scrolled out of viewport.
- **Halftone Reveal Portrait**: Interactive cursor-driven halftone reveal on desktop WebGL; fallback to high-quality business portrait if WebGL2 is unavailable or reduced-motion is active.
- **About Photo Animated Frame**: Floating card with illuminated red brackets, ambient glow, and subtle tilt.
- **Case Study Modal**: `<dialog>` element, focus trap, Escape key dismiss, and focus restoration to triggering button verified.
- **Certificates & Filtering**: 13 certificates across 6 category tabs; inline PDF preview modal with download button.
- **Contact Experience**: 1-click email copy button with instantaneous "Copied!" feedback; client-side mailto draft form generator.
- **Footer**: Smooth scroll-to-top button, attribution, and tech stack badge.

### Task 4 — Performance, Security & WebGL Lifecycle
- **Core Web Vitals & Runtime Measurements**:
  - **TTFB (Time to First Byte)**: 5.3 ms
  - **DOM Interactive**: 93.6 ms
  - **DOM Content Loaded**: 773.3 ms
  - **First Contentful Paint (FCP)**: 1,220 ms
  - **JS Heap Usage**: 16.6 MB
  - **DOM Nodes**: 1,601
- **WebGL Lifecycle Verification**:
  - `TypographyVortexCanvas`: `mountedAtTop: true`, `unmountedAtBottom: true`, `remountedAtTop: true` (verified by headless Chrome CDP).
  - `HalftoneReveal`: `IntersectionObserver` ceases `drawView` loop when element is offscreen.
- **Security & Data Privacy**:
  - All 13 certificates in `public/certificates/` were audited. Zero sensitive personal documents (e.g. government IDs, PAN cards, phone numbers, home addresses) are present.
  - Contact form messaging accurately states: *"Client-side mailto: Generating this draft opens your default email client. No form inputs are transmitted to or stored on any server."*

### Task 5 — Responsive Viewport Verification
| Viewport | Dimensions | Horizontal Overflow | Layout Status |
|---|---|---|---|
| **Desktop** | 1440 × 900 | **None** (`scrollWidth: 1431px`, `clientWidth: 1431px`) |  Optimal multi-column layout |
| **Tablet** | 768 × 1024 | **None** (`scrollWidth: 759px`, `clientWidth: 759px`) |  2-column grid scaling |
| **Mobile Standard** | 390 × 844 | **None** (`scrollWidth: 390px`, `clientWidth: 390px`) |  Stacked cards, vertical email box |
| **Mobile Small** | 360 × 800 | **None** (`scrollWidth: 360px`, `clientWidth: 360px`) |  Fluid cards, touch-ergonomic actions |

---

## 3. Changed Files in this Audit

1. `index.html`: Updated favicon link to `%BASE_URL%favicon.svg`.
2. `vite.config.ts`: Added dynamic `base` support for `VITE_BASE` and `GITHUB_PAGES`.
3. `src/data/assets.ts`: Added safe external URL check and base-aware prefixing.
4. `src/components/Hero.tsx`: Added `IntersectionObserver` on `#home` to unmount ThreeUI WebGL canvas when scrolled offscreen.
5. `src/components/Contact.tsx`: Refined status message and privacy notice to describe client-side mailto behavior transparently.
6. `src/styles/global.css`: Added responsive styles for `@media (max-width: 640px)` and `@media (max-width: 480px)` ensuring zero horizontal overflow on small mobile devices.
7. `public/favicon.svg`: Created crisp brand SVG favicon with `HS` monogram.

---

## 4. Verification Check Summary

- `npm run check`: **0 TypeScript errors**
- `npm run build`: **Success (4.78s)**
- Bundle sizes:
  - HTML: `1.69 kB` (gzip: `0.78 kB`)
  - CSS: `141.14 kB` (gzip: `38.42 kB`)
  - JS: `474.28 kB` (gzip: `149.83 kB`)

---

## 5. Deployment Blockers & Next Action

- **Deployment Blockers**: **NONE.** All technical, functional, responsive, and factual criteria are met.
- **Safety Gate**: Deployment is currently withheld awaiting user approval.
- **Ready for command**: Once approved, deployment to GitHub Pages or static host can proceed.
