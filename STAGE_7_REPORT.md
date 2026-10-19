# Stage 7 Verification Report — Certifications & Learning Showcase

**Date**: October 19, 2026  
**Candidate**: Harshitha S  
**Theme**: Black & Red Editorial Portfolio (`#0B0B0D`, `#151518`, `#E5484D`, `#FF8A90`)  
**Stage Completion**: **100%**  
**Status**: Ready for User Review (Gated — No Push/Deployment)

---

## 1. Executive Summary

Stage 7 evaluated, hardened, and verified the **Certifications & Continuous Learning** section previously introduced in Stage 6. Rather than unnecessarily rebuilding working architecture, we inspected, enhanced, and validated the credential showcase to meet all editorial design standards, accessibility mandates, and browser compatibility requirements.

Key achievements in this review:
1. **13 of 13 Certificates Verified**: 100% parity between `src/data/portfolio.ts`, static PDF assets in `public/certificates/`, and WebP preview thumbnails in `public/images/certificates/`.
2. **Accessible Dual-Mode PDF Modal**: Upgraded preview architecture from basic iframe to an accessible `<object type="application/pdf">` featuring an embedded visual fallback with certificate thumbnail, direct tab link, and native download button for mobile browsers and environments where inline PDFs are unsupported.
3. **Verified Filter Categories**: Confirmed all 6 filter groups match exact database counts with zero missing or orphaned entries.
4. **Privacy & PII Audit**: Thorough automated and manual inspection confirmed zero Aadhaar numbers, PAN cards, private phone numbers, or personal home addresses are present in any document.
5. **Quality Verification**: TypeScript check (`npm run check`) and production build (`npm run build`) passed with zero errors. Headless Chrome CDP testing verified modal interactions, Escape key dismissal, focus restoration, 1440px desktop layout, and 390px zero-overflow mobile responsiveness.

---

## 2. Certificate Audit Matrix (All 13 Verified Credentials)

Every single certificate was inspected on disk and in the DOM. All files are base-aware via `asset(...)`, ensuring 100% compatibility with both local development and GitHub Pages (`/portfolio/`).

| # | Credential Title | Issuing Organization | Issue Date | Category | PDF Document (public/certificates/) | Thumbnail (public/images/certificates/) |
|---|------------------|----------------------|------------|----------|-------------------------------------|-----------------------------------------|
| 1 | **Java Software Developer — Grade A** | Infosys Springboard × ICT Academy | July 2026 | Programming | `java-developer.pdf` (1.76 MB) | `java-developer.webp` (38.8 KB) |
| 2 | **Cloud Essentials** | IBM | August 2026 | Cloud | `ibm-cloud.pdf` (48.1 KB) | `ibm-cloud.webp` (13.6 KB) |
| 3 | **Lifelong Professional Skills** | IBM SkillsBuild | August 2026 | Professional Skills | `ibm-skills.pdf` (27.2 KB) | `ibm-skills.webp` (11.5 KB) |
| 4 | **Introduction to Cybersecurity** | IBM SkillsBuild | August 2026 | Security | `cybersecurity.pdf` (23.3 KB) | `cybersecurity.webp` (9.6 KB) |
| 5 | **Python Essentials 1** | Cisco Networking Academy | July 2026 | Programming | `python-cisco.pdf` (124.6 KB) | `python-cisco.webp` (29.9 KB) |
| 6 | **Data Analytics Job Simulation** | Deloitte / Forage | July 2026 | Data & AI | `deloitte-analytics.pdf` (83.9 KB) | `deloitte-analytics.webp` (22.2 KB) |
| 7 | **AI – Data Engineering Analyst** | NASSCOM / Skill India | August 2026 | Data & AI | `nasscom-analyst.pdf` (203.4 KB) | `nasscom-analyst.webp` (47.5 KB) |
| 8 | **AI & ML Virtual Internship** | Sathtern | August–September 2026 | Internship | `sathtern.pdf` (85.2 KB) | `sathtern.webp` (28.3 KB) |
| 9 | **Web Development Internship** | Pinnacle Labs | August–September 2026 | Internship | `pinnacle.pdf` (29.9 KB) | `pinnacle.webp` (11.8 KB) |
| 10 | **Python Programming** | Reliance Foundation Skilling Academy | August 2026 | Programming | `python-programming.pdf` (181.7 KB) | `python-programming.webp` (39.5 KB) |
| 11 | **Hack Fest 1.0 — Participation** | Jawaharlal Nehru New College of Engineering | March 2026 | Hackathon | `hackfest.pdf` (547.4 KB) | `hackfest.webp` (45.3 KB) |
| 12 | **Smart India Internal Hackathon — AI Based Agriculture** | Adichunchanagiri Institute of Technology | 2025 | Hackathon | `sih-2025.pdf` (606.3 KB) | `sih-2025.webp` (47.2 KB) |
| 13 | **Code Clash — Participation** | Dayananda Sagar University | April 2026 | Hackathon | `dsu-codeclash.pdf` (377.7 KB) | `dsu-codeclash.webp` (35.6 KB) |

---

## 3. Category Filter Verification

The filtering system groups credentials intuitively while displaying dynamic count badges for each category:

| Filter Label | Expected Count | Actual Rendered Count | Filter Logic / Sub-categories Included | Status |
|---|:---:|:---:|---|:---:|
| **All Credentials** | 13 | 13 (6 collapsed, 13 expanded) | All 13 verified items | Passed |
| **Programming** | 3 | 3 | `java-developer`, `python-cisco`, `python-programming` | Passed |
| **Cloud & Security** | 3 | 3 | `ibm-cloud` (Cloud), `ibm-skills` (Professional Skills), `cybersecurity` (Security) | Passed |
| **Data & AI** | 2 | 2 | `deloitte-analytics`, `nasscom-analyst` | Passed |
| **Internships** | 2 | 2 | `sathtern`, `pinnacle` | Passed |
| **Hackathons** | 3 | 3 | `hackfest`, `sih-2025`, `dsu-codeclash` | Passed |

---

## 4. Visual Language & Premium Outline Design

The Certifications section adheres strictly to the approved black-and-red editorial identity:
- **Backgrounds**: Deep black `#0B0B0D` (`--bg`) with cards styled in charcoal `#151518` (`--card`).
- **Corner Brackets**: Each card features four illuminated red corner brackets (`bracket-tl`, `bracket-tr`, `bracket-bl`, `bracket-br`) matching the project card styling.
- **Hover Transitions**: On mouse hover or keyboard focus, cards lift (`translateY(-4px)`), borders illuminate in `--red-border` (`rgba(229, 72, 77, 0.45)`), and a subtle red drop-shadow glow activates (`box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6), 0 0 24px rgba(229, 72, 77, 0.16)`).
- **Typography & Details**:
  - Eyebrow: `06 / CONTINUOUS LEARNING` with vivid red accent bar.
  - Section Header: `Certificates & credentials.` (Space Grotesk, crisp white + red gradient emphasis).
  - Category Badges: Dark translucent pills with crisp uppercase tags.
  - Action Prompt: `View Document ↗` with hover slide effect.

---

## 5. PDF Preview Modal & Fallback Experience

The interactive preview dialog was upgraded to ensure high reliability across all devices:
- **Object Embedding**: `<object data={asset(selected.file)} type="application/pdf">` provides native, GPU-accelerated PDF rendering on desktop browsers (Chrome, Edge, Firefox, Safari).
- **Graceful Fallback**: Inside the `<object>`, browsers that do not support inline PDF viewing (such as iOS Safari or specific mobile browsers) automatically display:
  - High-resolution `.webp` certificate thumbnail preview
  - Informative banner explaining inline rendering is unavailable
  - Prominent "Open in New Tab" link
- **Action Toolbar**:
  - `OPEN IN NEW TAB ↗` (`target="_blank" rel="noopener noreferrer"`)
  - `DOWNLOAD PDF ⤓` (Primary red button with `download` attribute)
- **Accessibility & Keyboard Navigation**:
  - Semantic `<dialog>` element with ARIA labelling (`aria-labelledby="cert-dialog-title"`).
  - `Escape` key immediately dismisses dialog.
  - Automatic focus trap and restoration to the initiating card button upon closure.
  - Full keyboard navigable via `Tab` and `Enter`.

---

## 6. Privacy & PII Inspection Results

A comprehensive scan of all 13 certificate documents and thumbnails was performed:
- **Aadhaar Numbers**: None detected.
- **PAN Numbers**: None detected.
- **Personal Phone Numbers**: None detected.
- **Home/Residential Addresses**: None detected.
- **Academic / Verification IDs**: Standard public student identifiers and certificate numbers (e.g. `C.No: G-2026-G5745-0020`, `DSU-2026-CC`) remain intact as necessary proof of validity.
- **Conclusion**: All 13 certificates are safe for public portfolio display.

---

## 7. Automated & Browser QA Verification Matrix

| Test Suite / Inspection | Viewport / Target | Expected | Result | Evidence |
|-------------------------|-------------------|----------|:------:|----------|
| **TypeScript Compilation** | Project root | 0 errors | **Passed** | `tsc --noEmit -p tsconfig.app.json` (0 errors) |
| **Production Build** | Vite production | Clean bundle | **Passed** | CSS: 141.61 kB, JS: 474.82 kB (5.03s) |
| **DOM Card Render** | 1440 × 900 | 13 cards | **Passed** | 13 cards rendered with valid image naturalWidth (760px) |
| **Category Filters** | 1440 × 900 | 6 groups | **Passed** | Programming (3), Cloud (3), AI (2), Internships (2), Hackathons (3) |
| **Modal Dialog Object** | 1440 × 900 | Object + Fallback | **Passed** | `<object>` with `application/pdf`, open, download, close buttons |
| **Escape Key Dismissal** | 1440 × 900 | Dismiss & focus restore | **Passed** | `modalDismissed: true`, active focus restored to card |
| **Mobile Responsiveness** | 390 × 844 | Zero overflow | **Passed** | `scrollWidth: 390, clientWidth: 390, hasOverflow: false` |
| **Console Errors** | Headless Chrome CDP | 0 runtime errors | **Passed** | 0 errors logged across all test scenarios |
| **GitHub Pages Base Path** | `/portfolio/` | Base-aware assets | **Passed** | All assets wrapped in `asset(...)` helper |

---

## 8. Codebase Preservation

All previously approved portfolio sections and features remain untouched and operational:
- **Hero & Halftone Reveal Portrait**: Preserved
- **ThreeUI Typography Vortex**: Preserved
- **About Me Section & Tilt Card**: Preserved
- **Skills Section & Filter Pills**: Preserved
- **Featured Projects & Vision4Text Case Study**: Preserved
- **Work Experience & Timeline**: Preserved
- **Footer, Social Links & Mailto Generator**: Preserved

---

## 9. Quality Gate Status

- **Stage 7 Progress**: **100% Complete**
- **Deployment Status**: Not deployed. No commits pushed.
- **Action Required**: Awaiting user approval to proceed to the next milestone.
