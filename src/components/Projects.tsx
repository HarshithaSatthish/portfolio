import { useState, useId } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CheckCircle2,
  ChevronRight,
  Cpu,
  ExternalLink,
  FileDown,
  FileText,
  Github,
  Layers,
  ScanLine,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from './SectionHeading';
import Modal from './Modal';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';

const filters = [
  'All Projects',
  'AI & Machine Learning',
  'Full Stack & Web',
] as const;

type FilterType = (typeof filters)[number];

/* -------------------------------------------------------------------------- */
/* Outline-Framed Visual Concept Artworks (Zero Fake Screenshots)             */
/* -------------------------------------------------------------------------- */

function ProjectArtVision4Text() {
  return (
    <div className="project-outline-art art-vision4text" aria-hidden="true">
      {/* Corner Brackets */}
      <span className="art-corner corner-tl" />
      <span className="art-corner corner-tr" />
      <span className="art-corner corner-bl" />
      <span className="art-corner corner-br" />

      <div className="outline-art-header">
        <div className="art-header-left">
          <ScanLine size={13} className="art-icon-accent" />
          <span className="art-mono-tag">MODAL CPU // DECOUPLED INFERENCE</span>
        </div>
        <div className="art-header-right">
          <span className="art-status-badge status-active">
            <span className="art-pulse-dot" /> FAIL-CLOSED OOD GATE: ACTIVE
          </span>
        </div>
      </div>

      <div className="vision-inspection-canvas">
        <div className="canvas-grid-lines" />
        <div className="canvas-crosshair crosshair-tl" />
        <div className="canvas-crosshair crosshair-tr" />
        <div className="canvas-crosshair crosshair-bl" />
        <div className="canvas-crosshair crosshair-br" />

        <div className="inspection-target-frame">
          <span className="target-bracket tb-tl" />
          <span className="target-bracket tb-tr" />
          <span className="target-bracket tb-bl" />
          <span className="target-bracket tb-br" />

          <div className="inspection-specimen">
            <span className="specimen-category">BOTTLE // SURFACE_DEFECT</span>
            <div className="specimen-label-row">
              <span className="label-stem">PATCH_ANOMALY</span>
              <span className="label-defect-flag">SCORE: 0.842 ≥ 0.267</span>
            </div>
          </div>
          <div className="inspection-heatmap-glow" />
          <div className="inspection-bounding-indicator">
            <span className="bb-coords">BOUNDING BOX: [x: 124, y: 88, w: 64, h: 42]</span>
          </div>
        </div>

        {/* Multi-Stage Pipeline Progress Strip */}
        <div className="pipeline-stages-strip">
          <span className="pipeline-chip active">01 OOD GATE</span>
          <ChevronRight size={10} className="pipe-arrow" />
          <span className="pipeline-chip active">02 SPECIALIST</span>
          <ChevronRight size={10} className="pipe-arrow" />
          <span className="pipeline-chip active">03 EVT WEIBULL</span>
          <ChevronRight size={10} className="pipe-arrow" />
          <span className="pipeline-chip active">04 OPENCLIP</span>
          <ChevronRight size={10} className="pipe-arrow" />
          <span className="pipeline-chip active highlight">05 EVIDENCE</span>
        </div>
      </div>

      <div className="outline-art-footer">
        <span className="footer-metric">WEIBULL THRESHOLD: τ = 0.267</span>
        <span className="footer-metric">HMAC-SHA256 SIGNED</span>
        <span className="footer-disclaimer">TECHNICAL ARCHITECTURE PREVIEW</span>
      </div>
    </div>
  );
}

function ProjectArtGlobal() {
  return (
    <div className="project-outline-art art-globalpulse" aria-hidden="true">
      <span className="art-corner corner-tl" />
      <span className="art-corner corner-tr" />
      <span className="art-corner corner-bl" />
      <span className="art-corner corner-br" />

      <div className="outline-art-header">
        <div className="art-header-left">
          <Activity size={13} className="art-icon-accent" />
          <span className="art-mono-tag">REST_NEWS_INGEST // DEBOUNCED</span>
        </div>
        <div className="art-header-right">
          <span className="art-status-badge status-stream">
            <span className="art-pulse-dot" /> STREAM SYNCED
          </span>
        </div>
      </div>

      <div className="feed-preview-viewport">
        <div className="feed-search-indicator">
          <span className="query-label">QUERY:</span>
          <span className="query-text">AI &amp; CLOUD COMPUTING</span>
          <span className="query-status">CACHE HIT (4ms)</span>
        </div>
        <div className="feed-item-wire">
          <div className="feed-wire-tag">TECHCRUNCH // 12m ago</div>
          <div className="feed-wire-line line-wide" />
          <div className="feed-wire-line line-narrow" />
        </div>
        <div className="feed-item-wire">
          <div className="feed-wire-tag">REUTERS // 28m ago</div>
          <div className="feed-wire-line line-wide" />
        </div>
      </div>

      <div className="outline-art-footer">
        <span className="footer-metric">NODE.JS + EXPRESS</span>
        <span className="footer-metric">MONGODB CACHE</span>
        <span className="footer-disclaimer">TECHNICAL ARCHITECTURE PREVIEW</span>
      </div>
    </div>
  );
}

function ProjectArtHarbor() {
  return (
    <div className="project-outline-art art-harbor" aria-hidden="true">
      <span className="art-corner corner-tl" />
      <span className="art-corner corner-tr" />
      <span className="art-corner corner-bl" />
      <span className="art-corner corner-br" />

      <div className="outline-art-header">
        <div className="art-header-left">
          <Layers size={13} className="art-icon-accent" />
          <span className="art-mono-tag">WORKSPACE // TASK_ENGINE</span>
        </div>
        <div className="art-header-right">
          <span className="art-status-badge status-stream">
            <span className="art-pulse-dot" /> DUAL VIEW: KANBAN
          </span>
        </div>
      </div>

      <div className="kanban-preview-viewport">
        <div className="kanban-col-wire">
          <div className="col-header-wire">
            <span>IN PROGRESS</span>
            <span className="col-count-wire">2</span>
          </div>
          <div className="kanban-card-wire card-active">
            <div className="card-tag-wire">P1 // HIGH</div>
            <div className="card-wire-line" />
            <div className="card-wire-subline" />
          </div>
        </div>
        <div className="kanban-col-wire">
          <div className="col-header-wire">
            <span>COMPLETED</span>
            <span className="col-count-wire">5</span>
          </div>
          <div className="kanban-card-wire card-done">
            <div className="card-tag-wire tag-done">DONE</div>
            <div className="card-wire-line" />
          </div>
        </div>
      </div>

      <div className="outline-art-footer">
        <span className="footer-metric">FULL-STACK CRUD</span>
        <span className="footer-metric">OPTIMISTIC UI</span>
        <span className="footer-disclaimer">TECHNICAL ARCHITECTURE PREVIEW</span>
      </div>
    </div>
  );
}

function renderProjectArt(number: string) {
  switch (number) {
    case '01':
      return <ProjectArtVision4Text />;
    case '02':
      return <ProjectArtGlobal />;
    case '03':
      return <ProjectArtHarbor />;
    default:
      return null;
  }
}

/* -------------------------------------------------------------------------- */
/* Main Projects Component                                                    */
/* -------------------------------------------------------------------------- */

export default function Projects() {
  const [filter, setFilter] = useState<FilterType>('All Projects');
  const [selected, setSelected] = useState<Project | null>(null);
  const filterGroupId = useId();

  const getCount = (cat: FilterType) => {
    if (cat === 'All Projects') return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const visibleProjects = projects.filter(
    (p) => filter === 'All Projects' || p.category === filter
  );

  const featuredProject = visibleProjects.find((p) => p.featured);
  const regularProjects = visibleProjects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="heading-between">
          <SectionHeading
            eyebrow="05 / SELECTED WORK"
            title="Things I've Built."
            description="Verified software engineering work spanning industrial quality AI, computer vision pipelines, and full-stack web applications."
          />
          <div
            className="project-count"
            aria-label={`Showing ${visibleProjects.length} of ${projects.length} verified projects`}
          >
            <span>VERIFIED WORK</span>
            <strong>
              0{visibleProjects.length}{' '}
              <span className="count-total">/ 0{projects.length}</span>
            </strong>
          </div>
        </div>

        {/* Filter Navigation */}
        <div
          className="filter-row"
          role="group"
          id={filterGroupId}
          aria-label="Filter projects by technology domain"
        >
          {filters.map((f) => {
            const count = getCount(f);
            const isSelected = filter === f;
            return (
              <button
                key={f}
                type="button"
                className={`filter-button ${isSelected ? 'selected' : ''}`}
                onClick={() => setFilter(f)}
                aria-pressed={isSelected}
                aria-label={`Show ${f} projects (${count} available)`}
              >
                <span>{f}</span>
                <span className="filter-badge" aria-hidden="true">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="popLayout">
          {visibleProjects.length === 0 ? (
            <motion.div
              key="empty"
              className="projects-empty"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <p>No verified projects found in this category.</p>
            </motion.div>
          ) : (
            <div className="projects-showcase">
              {/* Featured Project Card (Vision4Text) */}
              {featuredProject && (
                <motion.article
                  key={featuredProject.title}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45 }}
                  className="project-card-outline project-card-featured"
                  aria-labelledby={`project-title-${featuredProject.number}`}
                >
                  {/* Glowing Outline Corner Brackets */}
                  <span className="card-corner-bracket bracket-tl" />
                  <span className="card-corner-bracket bracket-tr" />
                  <span className="card-corner-bracket bracket-bl" />
                  <span className="card-corner-bracket bracket-br" />

                  <div className="card-top-bar">
                    <span className="featured-badge">
                      <Sparkles size={13} aria-hidden="true" /> FEATURED PROJECT
                    </span>
                    <div className="card-top-meta">
                      <span className="card-category-tag">{featuredProject.category}</span>
                      <span className="meta-sep" aria-hidden="true">·</span>
                      <span className="project-index">
                        {featuredProject.number} / 0{projects.length}
                      </span>
                    </div>
                  </div>

                  <div className="featured-body-grid">
                    <div className="featured-visual-pane">
                      {renderProjectArt(featuredProject.number)}
                    </div>

                    <div className="featured-info-pane">
                      <div className="project-sub-tag">
                        {featuredProject.tag}
                      </div>

                      <h3
                        id={`project-title-${featuredProject.number}`}
                        className="project-title-large"
                      >
                        {featuredProject.title}
                      </h3>

                      <p className="project-description-text">
                        {featuredProject.description}
                      </p>

                      {/* Featured Metric Badges */}
                      {featuredProject.metrics && (
                        <div className="metric-badges-row" aria-label="Recorded evaluation metrics">
                          {featuredProject.metrics.map((m) => (
                            <div key={m.label} className="metric-badge-box">
                              <span className="metric-val">{m.value}</span>
                              <span className="metric-lbl">{m.label}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <p className="metric-footnote">
                        *Recorded repository evaluation results (BUILD_VALIDATION.json).
                      </p>

                      {/* Supported Categories Pills */}
                      {featuredProject.supportedCategories && (
                        <div className="supported-categories-row">
                          <span className="categories-label">SUPPORTED CATEGORIES:</span>
                          <div className="categories-pills">
                            {featuredProject.supportedCategories.map((c) => (
                              <span key={c.name} className="cat-pill">
                                {c.name}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Verified Technology Badges */}
                      <div className="project-tech-badges-row" aria-label="Verified technologies">
                        {['React 18', 'FastAPI', 'PyTorch', 'EfficientAD', 'PatchCore', 'OpenCLIP', 'Modal', 'Vercel'].map(
                          (tech) => (
                            <span key={tech} className="tech-badge">
                              {tech}
                            </span>
                          )
                        )}
                      </div>

                      {/* Three Bottom Action Buttons */}
                      <div className="project-actions-row">
                        <button
                          type="button"
                          className="button button-primary case-study-trigger"
                          onClick={() => setSelected(featuredProject)}
                          aria-label={`View detailed case study for ${featuredProject.title}`}
                        >
                          View Details <ArrowUpRight size={16} aria-hidden="true" />
                        </button>

                        {featuredProject.liveUrl && (
                          <a
                            href={featuredProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-secondary external-action"
                            aria-label={`Open live demo for ${featuredProject.title} in new tab`}
                          >
                            Live Demo <ExternalLink size={15} aria-hidden="true" />
                          </a>
                        )}

                        {featuredProject.repository && (
                          <a
                            href={featuredProject.repository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button button-ghost external-action"
                            aria-label={`View GitHub repository for ${featuredProject.title} in new tab`}
                          >
                            <Github size={15} aria-hidden="true" /> GitHub
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              )}

              {/* Secondary Project Cards (GlobalPulse & Harbor) */}
              {regularProjects.length > 0 && (
                <div className="projects-grid-secondary">
                  {regularProjects.map((project) => (
                    <motion.article
                      key={project.title}
                      layout
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.4 }}
                      className="project-card-outline project-card-secondary"
                      aria-labelledby={`project-title-${project.number}`}
                    >
                      <span className="card-corner-bracket bracket-tl" />
                      <span className="card-corner-bracket bracket-tr" />
                      <span className="card-corner-bracket bracket-bl" />
                      <span className="card-corner-bracket bracket-br" />

                      <div className="secondary-visual-pane">
                        {renderProjectArt(project.number)}
                      </div>

                      <div className="secondary-info-pane">
                        <div className="card-top-meta">
                          <span className="card-category-tag">{project.category}</span>
                          <span className="meta-sep" aria-hidden="true">·</span>
                          <span className="project-index">
                            {project.number} / 0{projects.length}
                          </span>
                        </div>

                        <h3 id={`project-title-${project.number}`} className="secondary-title">
                          {project.title}
                        </h3>

                        <p className="project-description-text">{project.description}</p>

                        {project.metrics && (
                          <div className="metric-badges-row metric-badges-secondary">
                            {project.metrics.map((m) => (
                              <div key={m.label} className="metric-badge-box">
                                <span className="metric-val">{m.value}</span>
                                <span className="metric-lbl">{m.label}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="project-tech-badges-row" aria-label="Verified technologies">
                          {project.stack.slice(0, 5).map((item) => (
                            <span key={item.name} className="tech-badge">
                              {item.name}
                            </span>
                          ))}
                        </div>

                        <div className="project-actions-row">
                          <button
                            type="button"
                            className="button button-primary case-study-trigger"
                            onClick={() => setSelected(project)}
                            aria-label={`View detailed case study for ${project.title}`}
                          >
                            View Details <ArrowUpRight size={15} aria-hidden="true" />
                          </button>

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button button-secondary external-action"
                              aria-label={`Open live demo for ${project.title} in new tab`}
                            >
                              Live Demo <ExternalLink size={14} aria-hidden="true" />
                            </a>
                          )}

                          {project.repository && (
                            <a
                              href={project.repository}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="button button-ghost external-action"
                              aria-label={`View GitHub repository for ${project.title} in new tab`}
                            >
                              <Github size={14} aria-hidden="true" /> GitHub
                            </a>
                          )}

                          {!project.repository && !project.liveUrl && (
                            <span className="project-status-note">
                              INTERNSHIP DELIVERABLE
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              )}
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Case Study Modal Dialog */}
      {selected && (
        <Modal
          className="case-study-modal"
          titleId="case-study-dialog-title"
          descId="case-study-dialog-desc"
          onClose={() => setSelected(null)}
        >
          <div className="case-study-content">
            <div className="modal-header-bar">
              <div className="modal-eyebrow">
                <span className="modal-eyebrow-accent">CASE STUDY // {selected.number}</span>
                <span className="meta-sep" aria-hidden="true">·</span>
                <span>{selected.category}</span>
              </div>
              <button
                type="button"
                className="dialog-close"
                onClick={() => setSelected(null)}
                aria-label="Close case study dialog"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="modal-title-area">
              <h2 id="case-study-dialog-title" className="modal-main-title">
                {selected.title}
              </h2>
              <p id="case-study-dialog-desc" className="modal-lead-desc">
                {selected.overview}
              </p>
            </div>

            <div className="case-study-sections">
              {/* 1. Real-World Problem */}
              <section className="cs-section" aria-labelledby="cs-problem-heading">
                <h3 id="cs-problem-heading" className="cs-section-title">
                  <ShieldAlert size={18} className="cs-icon" aria-hidden="true" />
                  01. Real-World Problem
                </h3>
                <p className="cs-text">{selected.problem}</p>
              </section>

              {/* 2. Complete System Architecture */}
              <section className="cs-section" aria-labelledby="cs-arch-heading">
                <h3 id="cs-arch-heading" className="cs-section-title">
                  <Layers size={18} className="cs-icon" aria-hidden="true" />
                  02. Complete System Architecture
                </h3>
                <div className="cs-arch-grid">
                  <div className="arch-card">
                    <span className="arch-role">CLIENT TIER &amp; EDGE</span>
                    <p>{selected.architecture.client}</p>
                  </div>
                  <div className="arch-card">
                    <span className="arch-role">ORCHESTRATION &amp; INFERENCE TIER</span>
                    <p>{selected.architecture.server}</p>
                  </div>
                </div>
                <div className="data-flow-box">
                  <span className="data-flow-title">VERIFIED DATA &amp; DECISION PIPELINE:</span>
                  <ol className="data-flow-steps">
                    {selected.architecture.dataFlow.map((step, idx) => (
                      <li key={step} className="flow-step-item">
                        <span className="step-num">{idx + 1}</span>
                        <span>{step}</span>
                        {idx < selected.architecture.dataFlow.length - 1 && (
                          <ChevronRight size={14} className="flow-arrow" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </section>

              {/* 3. ML Models & Multi-Stage Anomaly Detection Workflow (if Vision4Text) */}
              {selected.workflow && (
                <section className="cs-section" aria-labelledby="cs-workflow-heading">
                  <h3 id="cs-workflow-heading" className="cs-section-title">
                    <BrainCircuit size={18} className="cs-icon" aria-hidden="true" />
                    03. Multi-Stage Anomaly Detection Workflow
                  </h3>
                  <div className="workflow-steps-grid">
                    {selected.workflow.map((w) => (
                      <div key={w.stage} className="workflow-step-card">
                        <span className="w-stage">STAGE {w.stage}</span>
                        <h4 className="w-name">{w.name}</h4>
                        <p className="w-detail">{w.detail}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* 4. Supported Production Categories (if Vision4Text) */}
              {selected.supportedCategories && (
                <section className="cs-section" aria-labelledby="cs-supported-cats-heading">
                  <h3 id="cs-supported-cats-heading" className="cs-section-title">
                    <CheckCircle2 size={18} className="cs-icon" aria-hidden="true" />
                    04. Five Supported Production Categories &amp; Defect Modes
                  </h3>
                  <div className="categories-table-container">
                    <table className="cs-data-table">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Key Evaluated Defect Modes</th>
                          <th>Decision Gate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selected.supportedCategories.map((cat) => (
                          <tr key={cat.name}>
                            <td className="cat-cell-name">
                              <strong>{cat.name}</strong>
                            </td>
                            <td>{cat.defectModes}</td>
                            <td>
                              <span className="badge-pass">τ = 0.267</span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* 5. Input Safety & Wrong-Category Rejection Gate */}
              <section className="cs-section" aria-labelledby="cs-safety-heading">
                <h3 id="cs-safety-heading" className="cs-section-title">
                  <ShieldCheck size={18} className="cs-icon" aria-hidden="true" />
                  05. Input Safety &amp; Wrong-Category Rejection Gate
                </h3>
                <div className="safety-callout-box">
                  <p>
                    Industrial inspection lines strictly require <strong>fail-closed</strong> execution. To prevent false confidence scores on distorted or out-of-distribution uploads, the system implements an upfront safety barrier:
                  </p>
                  <ul className="safety-points-list">
                    <li>
                      <strong>Image Quality Precheck:</strong> Discards blank, severely underexposed, or heavily blurred frames before model dispatch.
                    </li>
                    <li>
                      <strong>OpenCLIP Centroid Validation:</strong> Compares visual embeddings against reference nominal centroid vectors (<code>category_validation_centroids.npz</code>) and rejects wrong-category uploads.
                    </li>
                    <li>
                      <strong>Fail-Closed Guarantee:</strong> When an input fails the safety gate, no derived anomaly maps or speculative scores are produced.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 6. Key Implemented Features */}
              <section className="cs-section" aria-labelledby="cs-features-heading">
                <h3 id="cs-features-heading" className="cs-section-title">
                  <Activity size={18} className="cs-icon" aria-hidden="true" />
                  06. Key Implemented Features
                </h3>
                <div className="features-grid">
                  {selected.features.map((feat) => (
                    <div key={feat.title} className="feature-item">
                      <span className="feature-title">{feat.title}</span>
                      <p className="feature-detail">{feat.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7. Engineering Challenges & Solutions */}
              <section className="cs-section" aria-labelledby="cs-challenges-heading">
                <h3 id="cs-challenges-heading" className="cs-section-title">
                  <FileText size={18} className="cs-icon" aria-hidden="true" />
                  07. Engineering Challenges &amp; Solutions
                </h3>
                <div className="challenges-stack">
                  {selected.challenges.map((c, i) => (
                    <div key={i} className="challenge-item">
                      <div className="challenge-block">
                        <span className="ch-tag challenge-tag">CHALLENGE</span>
                        <p>{c.challenge}</p>
                      </div>
                      <div className="solution-block">
                        <span className="ch-tag solution-tag">SOLUTION</span>
                        <p>{c.solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 8. Actual Evaluation Results & Methodology (Five-Category Table) */}
              {selected.evaluationTable && (
                <section className="cs-section" aria-labelledby="cs-eval-table-heading">
                  <h3 id="cs-eval-table-heading" className="cs-section-title">
                    <Sparkles size={18} className="cs-icon" aria-hidden="true" />
                    08. Recorded Project Evaluation Results
                  </h3>
                  <div className="eval-notice-box">
                    <span className="notice-badge">VERIFIED METRIC LOG</span>
                    <p>
                      The metrics below represent <strong>recorded project evaluation results</strong> measured on controlled test splits from <code>BUILD_VALIDATION.json</code> and <code>report_service.py</code>. They are not asserted as independently reproduced production-wide guarantees.
                    </p>
                  </div>
                  <div className="categories-table-container">
                    <table className="cs-data-table evaluation-table">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Known-product Pixel F1</th>
                          <th>Unseen / LOCO Pixel F1</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selected.evaluationTable.map((row) => (
                          <tr
                            key={row.category}
                            className={row.category === 'Average' ? 'row-average' : ''}
                          >
                            <td>
                              <strong>{row.category}</strong>
                            </td>
                            <td className="metric-cell-accent">{row.knownF1}</td>
                            <td className="metric-cell-loco">{row.unseenF1}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {/* 9. Technology Stack Breakdown */}
              <section className="cs-section" aria-labelledby="cs-stack-heading">
                <h3 id="cs-stack-heading" className="cs-section-title">
                  <Cpu size={18} className="cs-icon" aria-hidden="true" />
                  09. Technology Stack Breakdown
                </h3>
                <div className="stack-role-grid">
                  {selected.stack.map((item) => (
                    <div key={item.name} className="stack-role-item">
                      <span className="stack-tech-name">{item.name}</span>
                      <span className="stack-tech-role">{item.role}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* 10. Known Limitations */}
              {selected.limitations && (
                <section className="cs-section" aria-labelledby="cs-limitations-heading">
                  <h3 id="cs-limitations-heading" className="cs-section-title">
                    <FileDown size={18} className="cs-icon" aria-hidden="true" />
                    10. Known Limitations &amp; Scope Constraints
                  </h3>
                  <ul className="cs-results-list">
                    {selected.limitations.map((lim, idx) => (
                      <li key={idx}>
                        <span className="result-bullet" aria-hidden="true">✳</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* 11. Repository & Deployment Access */}
              <section className="cs-section cs-status-section" aria-labelledby="cs-status-heading">
                <h3 id="cs-status-heading" className="cs-section-title">
                  <ExternalLink size={18} className="cs-icon" aria-hidden="true" />
                  11. Repository &amp; Deployment Access
                </h3>
                <div className="status-callout">
                  <p>{selected.statusNotes}</p>
                  <div className="modal-external-actions">
                    {selected.liveUrl && (
                      <a
                        href={selected.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-primary"
                      >
                        Visit Live Platform <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    )}
                    {selected.repository && (
                      <a
                        href={selected.repository}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button button-secondary"
                      >
                        <Github size={15} aria-hidden="true" /> View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </section>
            </div>

            <div className="modal-footer-actions">
              <button
                type="button"
                className="button button-ghost"
                onClick={() => setSelected(null)}
              >
                Close Case Study <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
