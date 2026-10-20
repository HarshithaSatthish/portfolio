import { useState, useId } from 'react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Crosshair,
  ExternalLink,
  FileDown,
  FileText,
  Github,
  Info,
  Kanban,
  Layers,
  List,
  Lock,
  ScanLine,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeading from './SectionHeading';
import Modal from './Modal';
import { asset } from '../data/assets';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';

const filters = [
  'All Projects',
  'AI & Machine Learning',
  'Full Stack & Web',
] as const;

type FilterType = (typeof filters)[number];

/* -------------------------------------------------------------------------- */
/* 01. EVT-CLIP / Vision4Text Inspection Workspace                           */
/* -------------------------------------------------------------------------- */

const EVT_PIPELINE_STAGES = [
  {
    step: '01',
    name: 'OOD Gate',
    short: 'Safety',
    detail: 'Fail-closed OpenCLIP centroid distance gate. Immediately rejects corrupt, blurred, or category-mismatched inputs before GPU/CPU model dispatch.',
  },
  {
    step: '02',
    name: 'Specialist',
    short: 'Features',
    detail: 'Dual feature extraction in parallel: EfficientAD student-teacher patch distillation + PatchCore coreset memory bank k-NN distance maps.',
  },
  {
    step: '03',
    name: 'EVT Weibull',
    short: 'Tail Fit',
    detail: 'Statistical Extreme Value Theory: 3-parameter Weibull tail calibration models nominal anomaly score decay, establishing the rigorous decision threshold at τ = 0.267.',
  },
  {
    step: '04',
    name: 'OpenCLIP',
    short: 'Vision-Lang',
    detail: 'Zero-shot prompt cross-attention ("pristine flawless" vs "defective cracks") isolates true physical fractures from industrial surface glare and specular reflections.',
  },
  {
    step: '05',
    name: 'Evidence',
    short: 'Audit Log',
    detail: 'Defect thresholding (>16 px), connected-component geometry, bounding box extraction, and immutable HMAC-SHA256 signature certification for ISO 9001 compliance.',
  },
] as const;

function ProjectArtVision4Text() {
  const [activeStageIndex, setActiveStageIndex] = useState(2); // EVT Weibull selected by default
  const activeStage = EVT_PIPELINE_STAGES[activeStageIndex];

  return (
    <div className="project-outline-art art-vision4text" role="region" aria-label="EVT-CLIP Technical Architecture and Inspection Workspace">
      {/* Corner Brackets */}
      <span className="art-corner corner-tl" aria-hidden="true" />
      <span className="art-corner corner-tr" aria-hidden="true" />
      <span className="art-corner corner-bl" aria-hidden="true" />
      <span className="art-corner corner-br" aria-hidden="true" />

      {/* Workspace Header */}
      <div className="outline-art-header">
        <div className="art-header-left">
          <ScanLine size={13} className="art-icon-accent" aria-hidden="true" />
          <span className="art-mono-tag">EVT-CLIP // DECOUPLED INFERENCE HUD</span>
        </div>
        <div className="art-header-right">
          <span className="art-status-badge status-active">
            <span className="art-pulse-dot" aria-hidden="true" /> OOD GATE: FAIL-CLOSED PASS
          </span>
        </div>
      </div>

      {/* Two-Column Inspection Workspace */}
      <div className="evt-inspection-workspace">
        {/* Left Column: Specimen Inspection Viewport */}
        <div className="evt-specimen-pane">
          <div className="specimen-hud-bar">
            <span className="specimen-hud-tag">
              <Crosshair size={11} className="hud-icon" aria-hidden="true" /> DEMO SPECIMEN: BOTTLE (PROD-01)
            </span>
            <span className="specimen-fov-tag">DEMO DATA // 1080P SENSOR</span>
          </div>

          <div className="specimen-canvas-wrap">
            {/* Dark Technical Machine Vision Viewport */}
            <svg
              viewBox="0 0 280 180"
              className="specimen-vector-canvas"
              aria-label="Specimen inspection scan showing detected surface crack on bottle glass"
            >
              <defs>
                <pattern id="hud-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                </pattern>
                <radialGradient id="defect-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#E5484D" stopOpacity="0.75" />
                  <stop offset="60%" stopColor="#E5484D" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#E5484D" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="bottle-glass" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1C1C24" />
                  <stop offset="25%" stopColor="#282834" />
                  <stop offset="70%" stopColor="#1E1E26" />
                  <stop offset="100%" stopColor="#14141A" />
                </linearGradient>
              </defs>

              {/* Grid Background */}
              <rect width="280" height="180" fill="url(#hud-grid)" />

              {/* Axis Ruler Ticks */}
              <g stroke="rgba(255,255,255,0.12)" strokeWidth="1">
                <line x1="20" y1="12" x2="260" y2="12" />
                <line x1="20" y1="8" x2="20" y2="12" />
                <line x1="80" y1="9" x2="80" y2="12" />
                <line x1="140" y1="8" x2="140" y2="12" />
                <line x1="200" y1="9" x2="200" y2="12" />
                <line x1="260" y1="8" x2="260" y2="12" />

                <line x1="12" y1="20" x2="12" y2="160" />
                <line x1="8" y1="20" x2="12" y2="20" />
                <line x1="9" y1="70" x2="12" y2="70" />
                <line x1="8" y1="120" x2="12" y2="120" />
                <line x1="9" y1="160" x2="12" y2="160" />
              </g>

              <text x="24" y="9" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">0mm</text>
              <text x="135" y="9" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">128mm</text>
              <text x="245" y="9" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace">256mm</text>

              {/* Industrial Specimen Silhouette (Glass Bottle) */}
              <path
                d="M 125 22 L 155 22 L 155 38 C 155 46 168 56 178 68 L 184 148 C 184 154 178 158 172 158 L 108 158 C 102 158 96 154 96 148 L 102 68 C 112 56 125 46 125 38 Z"
                fill="url(#bottle-glass)"
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.2"
              />
              {/* Glass Reflection Highlight */}
              <path
                d="M 112 70 L 108 144"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              {/* Defect Heatmap Glow */}
              <circle cx="152" cy="108" r="28" fill="url(#defect-glow)" pointerEvents="none" />

              {/* Exact Defect Bounding Box [x: 124, y: 88, w: 64, h: 42] scaled */}
              <rect
                x="124"
                y="88"
                width="48"
                height="38"
                fill="rgba(229, 72, 77, 0.14)"
                stroke="#E5484D"
                strokeWidth="1.5"
                strokeDasharray="2 1"
              />

              {/* Corner Reticles on Bounding Box */}
              <path d="M 121 93 L 121 85 L 129 85" fill="none" stroke="#FF8A90" strokeWidth="1.5" />
              <path d="M 167 85 L 175 85 L 175 93" fill="none" stroke="#FF8A90" strokeWidth="1.5" />
              <path d="M 121 121 L 121 129 L 129 129" fill="none" stroke="#FF8A90" strokeWidth="1.5" />
              <path d="M 167 129 L 175 129 L 175 121" fill="none" stroke="#FF8A90" strokeWidth="1.5" />

              {/* Defect Crack Geometry Inside Box */}
              <path
                d="M 136 94 L 144 103 L 141 110 L 158 121"
                fill="none"
                stroke="#FF5252"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M 144 103 L 152 106"
                fill="none"
                stroke="#FF5252"
                strokeWidth="1.2"
                strokeLinecap="round"
              />

              {/* HUD Target Crosshair Center */}
              <circle cx="148" cy="107" r="3" fill="none" stroke="#FF8A90" strokeWidth="1" />
              <line x1="148" y1="100" x2="148" y2="114" stroke="#FF8A90" strokeWidth="0.8" />
              <line x1="141" y1="107" x2="155" y2="107" stroke="#FF8A90" strokeWidth="0.8" />

              {/* Defect Label Callout */}
              <g transform="translate(14, 118)">
                <rect width="94" height="24" rx="2" fill="#121216" stroke="rgba(229, 72, 77, 0.5)" strokeWidth="1" />
                <text x="6" y="10" fill="#FF8A90" fontSize="7" fontWeight="bold" fontFamily="monospace">CRITICAL DEFECT</text>
                <text x="6" y="19" fill="#A1A1AA" fontSize="6.5" fontFamily="monospace">SURFACE FRACTURE</text>
              </g>
              <line x1="108" y1="126" x2="124" y2="115" stroke="rgba(229, 72, 77, 0.6)" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
          </div>

          <div className="specimen-hud-footer">
            <span className="specimen-coord-pill">DEMO COORDS: [124, 88, 64, 42]</span>
            <span className="specimen-coord-pill">RES: 256×256 TENSOR</span>
          </div>
        </div>

        {/* Right Column: Quantitative Diagnostics Panel */}
        <div className="evt-diagnostics-pane">
          <div className="diagnostics-status-header">
            <div className="status-indicator-wrap">
              <span className="diag-pulse-red" aria-hidden="true" />
              <span className="diag-status-title">ANOMALOUS (REJECT)</span>
            </div>
            <span className="diag-pill-alert">DEFECT DETECTED</span>
          </div>

          {/* Calibrated EVT Score Gauge vs Weibull Threshold */}
          <div className="score-calibration-block">
            <div className="score-header-row">
              <span className="score-metric-label">CALIBRATED ANOMALY SCORE (DEMO SAMPLE)</span>
              <span className="score-tau-badge">WEIBULL τ = 0.267</span>
            </div>

            <div className="score-comparison-row">
              <div className="score-number-display">
                <span className="score-large-val">0.842</span>
                <span className="score-over-tag">+215% OVER THRESHOLD</span>
              </div>
              <span className="score-verdict-chip">REJECT LINE ITEM</span>
            </div>

            {/* Visual Gauge Bar */}
            <div className="gauge-track-wrap" aria-label="Anomaly score 0.842 vs threshold 0.267">
              <div className="gauge-track-bg">
                {/* Nominal Zone: 0 to 0.267 */}
                <div className="gauge-zone-nominal" style={{ width: '26.7%' }} title="Nominal Pass Zone (≤ 0.267)" />
                {/* Anomaly Fill: 0.267 to 0.842 */}
                <div
                  className="gauge-fill-anomaly"
                  style={{ left: '26.7%', width: `${Math.min(100 - 26.7, (0.842 - 0.267) * 100)}%` }}
                  title="Anomaly Exceedance Zone"
                />
                {/* Threshold Marker Pin */}
                <div className="gauge-threshold-pin" style={{ left: '26.7%' }}>
                  <span className="gauge-pin-line" />
                  <span className="gauge-pin-label">τ: 0.267</span>
                </div>
                {/* Current Score Indicator */}
                <div className="gauge-score-pin" style={{ left: '84.2%' }}>
                  <span className="gauge-score-dot" />
                </div>
              </div>
              <div className="gauge-labels-row">
                <span>0.000 (Nominal)</span>
                <span className="tau-center-label">Threshold τ</span>
                <span>1.000 (Max Outlier)</span>
              </div>
            </div>
          </div>

          {/* 2x2 Quantitative Metrics Matrix */}
          <div className="diagnostics-metric-matrix">
            <div className="diag-matrix-cell">
              <span className="matrix-lbl">DEMO BOUNDING COORDS</span>
              <strong className="matrix-val">[124, 88, 64, 42]</strong>
            </div>
            <div className="diag-matrix-cell">
              <span className="matrix-lbl">DEMO DEFECT AREA</span>
              <strong className="matrix-val">2,688 px² (1.82%)</strong>
            </div>
            <div className="diag-matrix-cell">
              <span className="matrix-lbl">STATISTICAL FIT</span>
              <strong className="matrix-val">3-Param Weibull EVT</strong>
            </div>
            <div className="diag-matrix-cell">
              <span className="matrix-lbl">AUDIT INTEGRITY</span>
              <strong className="matrix-val matrix-highlight">
                <ShieldCheck size={11} className="inline-icon" aria-hidden="true" /> HMAC-SHA256
              </strong>
            </div>
          </div>
        </div>
      </div>

      {/* Connected Interactive Multi-Stage Pipeline */}
      <div className="evt-pipeline-section">
        <div className="pipeline-bar-header">
          <span className="pipeline-title">INSPECTION WORKFLOW STAGES (SELECT TO INSPECT):</span>
          <span className="pipeline-active-badge">STAGE {activeStage.step}: {activeStage.name}</span>
        </div>

        <div className="evt-pipeline-strip" role="tablist" aria-label="EVT-CLIP Pipeline Stages">
          {EVT_PIPELINE_STAGES.map((stg, idx) => {
            const isSelected = activeStageIndex === idx;
            return (
              <div key={stg.step} className="pipeline-step-node">
                <button
                  type="button"
                  role="tab"
                  id={`pipeline-tab-${stg.step}`}
                  aria-selected={isSelected}
                  aria-controls={`pipeline-panel-${stg.step}`}
                  className={`pipeline-stage-btn ${isSelected ? 'stage-selected' : ''}`}
                  onClick={() => setActiveStageIndex(idx)}
                >
                  <span className="stage-step-num">{stg.step}</span>
                  <span className="stage-step-name">{stg.name}</span>
                </button>
                {idx < EVT_PIPELINE_STAGES.length - 1 && (
                  <ChevronRight size={12} className="pipeline-connector-arrow" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>

        {/* Active Stage Detail Chip */}
        <div
          id={`pipeline-panel-${activeStage.step}`}
          role="tabpanel"
          aria-labelledby={`pipeline-tab-${activeStage.step}`}
          className="active-stage-explainer"
        >
          <Info size={13} className="explainer-icon" aria-hidden="true" />
          <p className="explainer-text">
            <strong>Stage {activeStage.step} — {activeStage.name}:</strong> {activeStage.detail}
          </p>
        </div>
      </div>

      {/* Art Footer */}
      <div className="outline-art-footer">
        <span className="footer-metric">80.17% KNOWN F1 · 51.85% UNSEEN LOCO F1 (BENCHMARKS)</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-metric">MODAL SERVERLESS CPU (DECOUPLED)</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 02. Nathasha Hybrid AI Assistant Workspace                                */
/* -------------------------------------------------------------------------- */

type NathashaMode = 'private' | 'cloud' | 'auto';

interface ModeDetails {
  id: NathashaMode;
  label: string;
  sub: string;
  icon: typeof Lock;
  provider: string;
  statusBadge: string;
  userQuery: string;
  assistantResponse: string;
}

const NATHASHA_MODES: ModeDetails[] = [
  {
    id: 'private',
    label: 'Private',
    sub: 'Ollama (Local)',
    icon: Lock,
    provider: 'Local Ollama Engine (Qwen2.5 1.5B)',
    statusBadge: 'PRIVATE SANDBOX: ZERO CLOUD EGRESS',
    userQuery: 'How does Nathasha enforce zero-cloud privacy?',
    assistantResponse:
      'In Private mode, queries execute strictly via local Ollama. Cloud egress is blocked at the provider router, and inference is guarded by asyncio.Semaphore(1) to protect 16GB host memory.',
  },
  {
    id: 'cloud',
    label: 'Cloud',
    sub: 'OpenRouter Free',
    icon: Cloud,
    provider: 'OpenRouter Free Tier (:free adapter)',
    statusBadge: 'OPENROUTER CLOUD: ZERO-COST TIER',
    userQuery: 'Which models are available in the zero-cost tier?',
    assistantResponse:
      'Connected to OpenRouter free catalog (19 verified :free models). Server-side filters strictly validate prompt=$0.00 & completion=$0.00 to guarantee zero API charges.',
  },
  {
    id: 'auto',
    label: 'Auto',
    sub: 'Smart Router',
    icon: Zap,
    provider: 'Hybrid Decision Router',
    statusBadge: 'AUTO ROUTER: CONSENT-CHECKED',
    userQuery: 'How is routing decided between local and cloud?',
    assistantResponse:
      'Evaluates host connectivity, model readiness, and affirmative user cloud consent. Falls back seamlessly to local Ollama before emitting tokens if cloud streams fail.',
  },
];

function ProjectArtNathasha() {
  const [activeModeId, setActiveModeId] = useState<NathashaMode>('private');
  const activeMode = NATHASHA_MODES.find((m) => m.id === activeModeId) || NATHASHA_MODES[0];

  return (
    <div
      className="project-outline-art art-nathasha"
      role="region"
      aria-label="Nathasha Privacy-First Hybrid AI Assistant Workspace"
    >
      <span className="art-corner corner-tl" aria-hidden="true" />
      <span className="art-corner corner-tr" aria-hidden="true" />
      <span className="art-corner corner-bl" aria-hidden="true" />
      <span className="art-corner corner-br" aria-hidden="true" />

      {/* Header */}
      <div className="outline-art-header">
        <div className="art-header-left">
          <BrainCircuit size={13} className="art-icon-accent" aria-hidden="true" />
          <span className="art-mono-tag">NATHASHA // HYBRID ASSISTANT HUD</span>
        </div>
        <div className="art-header-right">
          <span className="art-status-badge status-nathasha">
            <span className="art-pulse-dot dot-violet" aria-hidden="true" /> {activeMode.statusBadge}
          </span>
        </div>
      </div>

      {/* Workspace Preview */}
      <div className="nathasha-workspace-preview">
        {/* Top Provider Mode Switcher */}
        <div className="nathasha-mode-strip" role="tablist" aria-label="AI Provider Mode Selector">
          <span className="mode-strip-label">PROVIDER MODE:</span>
          <div className="mode-pills-row">
            {NATHASHA_MODES.map((mode) => {
              const isSelected = activeModeId === mode.id;
              const Icon = mode.icon;
              return (
                <button
                  key={mode.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`nathasha-mode-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setActiveModeId(mode.id)}
                >
                  <Icon size={11} aria-hidden="true" />
                  <span className="mode-btn-name">{mode.label}</span>
                  <span className="mode-btn-sub">{mode.sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Stage: Mascot Identity & Conversation Preview */}
        <div className="nathasha-stage-grid">
          {/* Mascot Pane */}
          <div className="nathasha-mascot-pane">
            <div className="mascot-glow-wrap">
              {/* Subtle Crystalized Ball Geometric Wireframe Backdrop */}
              <svg
                viewBox="0 0 160 160"
                className="crystal-ball-backdrop"
                aria-hidden="true"
              >
                <circle cx="80" cy="80" r="66" fill="none" stroke="rgba(168, 85, 247, 0.16)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="80" cy="80" r="50" fill="none" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="0.8" />
                <polygon
                  points="80,18 132,48 132,112 80,142 28,112 28,48"
                  fill="none"
                  stroke="rgba(168, 85, 247, 0.22)"
                  strokeWidth="1"
                />
                <polygon
                  points="80,32 118,55 118,105 80,128 42,105 42,55"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="0.8"
                />
                <line x1="80" y1="18" x2="80" y2="142" stroke="rgba(168, 85, 247, 0.14)" strokeWidth="0.8" />
                <line x1="28" y1="80" x2="132" y2="80" stroke="rgba(168, 85, 247, 0.14)" strokeWidth="0.8" />
              </svg>

              {/* Genuine Mascot WebP Artwork */}
              <img
                src={asset('images/projects/nathasha-mascot-256.webp')}
                alt="Nathasha AI Assistant Mascot"
                className="nathasha-mascot-img"
                loading="lazy"
                width={112}
                height={112}
              />
            </div>

            <div className="mascot-meta-box">
              <span className="mascot-label">HARDWARE-AWARE</span>
              <span className="mascot-sub">QWEN2.5 1.5B · SEM(1)</span>
            </div>
          </div>

          {/* Conversation Stream Pane */}
          <div className="nathasha-chat-pane">
            <div className="chat-pane-header">
              <span className="chat-pane-tag">
                <Terminal size={10} className="tag-icon" aria-hidden="true" /> SSE STREAM // PROMPT CONTEXT
              </span>
              <span className="chat-privacy-tag">
                {activeModeId === 'private' ? 'ZERO CLOUD EGRESS' : 'ZERO-COST ROUTE'}
              </span>
            </div>

            <div className="chat-dialog-stream">
              {/* User Bubble */}
              <div className="chat-bubble chat-bubble-user">
                <div className="bubble-sender-row">
                  <span className="sender-tag">USER</span>
                  <span className="bubble-time">QUERY</span>
                </div>
                <p className="bubble-text">{activeMode.userQuery}</p>
              </div>

              {/* Assistant Bubble */}
              <div className="chat-bubble chat-bubble-assistant">
                <div className="bubble-sender-row">
                  <div className="assistant-sender">
                    <img
                      src={asset('images/projects/nathasha-mascot-avatar.webp')}
                      alt=""
                      className="assistant-avatar"
                      aria-hidden="true"
                    />
                    <span className="sender-tag-assistant">NATHASHA</span>
                  </div>
                  <span className="bubble-stream-badge">STREAMING</span>
                </div>
                <p className="bubble-text">
                  {activeMode.assistantResponse}
                  <span className="stream-cursor" aria-hidden="true">▍</span>
                </p>
              </div>
            </div>

            <div className="chat-illustrative-notice">
              <span>ILLUSTRATIVE UI PREVIEW // LOCAL-FIRST CONVERSATION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="outline-art-footer">
        <span className="footer-metric">OLLAMA LOCAL (QWEN2.5 1.5B)</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-metric">OPENROUTER FREE ADAPTER</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-disclaimer">37/37 BACKEND TESTS REPORTED</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 03. GlobalPulse News Intelligence Workspace                               */
/* -------------------------------------------------------------------------- */

const NEWS_CATEGORIES = ['All', 'Tech & Cloud', 'AI & ML', 'World News'] as const;
type NewsCategory = typeof NEWS_CATEGORIES[number];

interface NewsArticle {
  id: string;
  category: NewsCategory;
  source: string;
  time: string;
  title: string;
  summary: string;
  tag: string;
  featured?: boolean;
}

const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'art-1',
    category: 'Tech & Cloud',
    source: 'TECHCRUNCH',
    time: '14m ago',
    title: 'Node.js & Express REST Aggregation: Normalizing Multi-Source News Endpoints',
    summary: 'Consolidates heterogeneous third-party schemas into unified JSON payloads with MongoDB caching and automatic deduplication.',
    tag: 'Distributed Ingestion',
    featured: true,
  },
  {
    id: 'art-2',
    category: 'Tech & Cloud',
    source: 'VENTUREBEAT',
    time: '32m ago',
    title: 'Client-Side 300ms Debounce Suppresses Redundant Search Queries',
    summary: 'Prevents wasteful server roundtrips during rapid user keystrokes.',
    tag: 'Performance',
  },
  {
    id: 'art-3',
    category: 'AI & ML',
    source: 'REUTERS TECH',
    time: '1h ago',
    title: 'Unified Headline Deduplication Pipeline Across Real-Time REST Feeds',
    summary: 'Sanitizes duplicate international reports across REST wire APIs.',
    tag: 'Deduplication',
  },
  {
    id: 'art-4',
    category: 'World News',
    source: 'GLOBAL PULSE',
    time: '2h ago',
    title: 'Schema Normalization Across Heterogeneous Multi-Source News Providers',
    summary: 'Standardized payload adapter layer handles disparate feed formats safely.',
    tag: 'Schema Adapter',
  },
];

function ProjectArtGlobal() {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('All');
  const [activeArticleId, setActiveArticleId] = useState('art-1');

  const filteredArticles = NEWS_ARTICLES.filter(
    (a) => selectedCategory === 'All' || a.category === selectedCategory
  );
  const featuredArticle = filteredArticles.find((a) => a.featured) || filteredArticles[0] || NEWS_ARTICLES[0];
  const secondaryArticles = filteredArticles.filter((a) => a.id !== featuredArticle.id).slice(0, 2);

  return (
    <div className="project-outline-art art-globalpulse" role="region" aria-label="GlobalPulse News Intelligence Workspace">
      <span className="art-corner corner-tl" aria-hidden="true" />
      <span className="art-corner corner-tr" aria-hidden="true" />
      <span className="art-corner corner-bl" aria-hidden="true" />
      <span className="art-corner corner-br" aria-hidden="true" />

      {/* Header */}
      <div className="outline-art-header">
        <div className="art-header-left">
          <Activity size={13} className="art-icon-accent" aria-hidden="true" />
          <span className="art-mono-tag">GLOBALPULSE // NEWS INTELLIGENCE</span>
        </div>
        <div className="art-header-right">
          <span className="art-status-badge status-stream">
            <span className="art-pulse-dot" aria-hidden="true" /> CLIENT DEBOUNCE (300ms): ACTIVE
          </span>
        </div>
      </div>

      {/* Workspace Content */}
      <div className="news-workspace-preview">
        {/* Search Bar & Category Filter Strip */}
        <div className="news-toolbar">
          <div className="news-search-bar" aria-label="Debounced Search Bar Mock">
            <Search size={12} className="news-search-icon" aria-hidden="true" />
            <span className="news-query-text">Cloud &amp; AI Ingestion</span>
            <span className="news-debounce-pill">DEBOUNCED (300ms)</span>
          </div>

          <div className="news-category-pills" role="tablist" aria-label="News Categories">
            {NEWS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat}
                className={`news-cat-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Lead Featured Article */}
        <div
          className={`news-lead-card ${activeArticleId === featuredArticle.id ? 'card-selected' : ''}`}
          onClick={() => setActiveArticleId(featuredArticle.id)}
          tabIndex={0}
          role="button"
          aria-label={`Featured story: ${featuredArticle.title}`}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setActiveArticleId(featuredArticle.id);
          }}
        >
          <div className="news-card-top">
            <span className="news-source-tag">{featuredArticle.source}</span>
            <span className="news-time-tag">{featuredArticle.time}</span>
            <span className="news-topic-badge">{featuredArticle.tag}</span>
          </div>
          <h4 className="news-lead-title">{featuredArticle.title}</h4>
          <p className="news-lead-summary">{featuredArticle.summary}</p>
        </div>

        {/* Secondary Compact Articles */}
        <div className="news-secondary-list">
          {secondaryArticles.map((art) => (
            <div
              key={art.id}
              className={`news-compact-card ${activeArticleId === art.id ? 'card-selected' : ''}`}
              onClick={() => setActiveArticleId(art.id)}
              tabIndex={0}
              role="button"
              aria-label={`Story: ${art.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setActiveArticleId(art.id);
              }}
            >
              <div className="news-card-top">
                <span className="news-source-tag">{art.source}</span>
                <span className="news-time-tag">{art.time}</span>
              </div>
              <h5 className="news-compact-title">{art.title}</h5>
              <p className="news-compact-summary">{art.summary}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="outline-art-footer">
        <span className="footer-metric">MULTI-SOURCE REST INGESTION</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-metric">MONGODB CACHING LAYER</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-disclaimer">CLIENT DEBOUNCE RATE-LIMITING</span>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* 04. Harbor Modern Productivity Workspace                                  */
/* -------------------------------------------------------------------------- */

type HarborViewMode = 'kanban' | 'list';

interface HarborTask {
  id: string;
  title: string;
  priority: 'P1 High' | 'P2 Medium' | 'Done';
  status: 'To Do' | 'In Progress' | 'Completed';
  category: string;
  dueDate: string;
}

const HARBOR_TASKS: HarborTask[] = [
  {
    id: 'tsk-1',
    title: 'MongoDB schema validation & atomic updates',
    priority: 'P1 High',
    status: 'In Progress',
    category: 'Database',
    dueDate: 'Today',
  },
  {
    id: 'tsk-2',
    title: 'Implement optimistic UI rollback on REST error',
    priority: 'P1 High',
    status: 'In Progress',
    category: 'State Sync',
    dueDate: 'Oct 23',
  },
  {
    id: 'tsk-3',
    title: 'Touch-friendly responsive mobile cards',
    priority: 'P2 Medium',
    status: 'To Do',
    category: 'Frontend',
    dueDate: 'Oct 24',
  },
  {
    id: 'tsk-4',
    title: 'Node.js & Express RESTful API routing',
    priority: 'Done',
    status: 'Completed',
    category: 'Backend',
    dueDate: 'Completed',
  },
];

function ProjectArtHarbor() {
  const [viewMode, setViewMode] = useState<HarborViewMode>('kanban');
  const [activeTaskId, setActiveTaskId] = useState('tsk-1');

  const todoTasks = HARBOR_TASKS.filter((t) => t.status === 'To Do');
  const inProgressTasks = HARBOR_TASKS.filter((t) => t.status === 'In Progress');
  const completedTasks = HARBOR_TASKS.filter((t) => t.status === 'Completed');

  return (
    <div className="project-outline-art art-harbor" role="region" aria-label="Harbor Modern Productivity Workspace">
      <span className="art-corner corner-tl" aria-hidden="true" />
      <span className="art-corner corner-tr" aria-hidden="true" />
      <span className="art-corner corner-bl" aria-hidden="true" />
      <span className="art-corner corner-br" aria-hidden="true" />

      {/* Header */}
      <div className="outline-art-header">
        <div className="art-header-left">
          <Layers size={13} className="art-icon-accent" aria-hidden="true" />
          <span className="art-mono-tag">HARBOR // TASK_ENGINE</span>
        </div>
        {/* Interactive View Switcher */}
        <div className="harbor-view-toggle-wrap" role="group" aria-label="Workspace View Mode">
          <button
            type="button"
            className={`harbor-view-btn ${viewMode === 'kanban' ? 'active' : ''}`}
            onClick={() => setViewMode('kanban')}
            aria-pressed={viewMode === 'kanban'}
            aria-label="Switch to Kanban Board View"
          >
            <Kanban size={11} aria-hidden="true" /> Kanban
          </button>
          <button
            type="button"
            className={`harbor-view-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            aria-pressed={viewMode === 'list'}
            aria-label="Switch to Structured List View"
          >
            <List size={11} aria-hidden="true" /> List
          </button>
        </div>
      </div>

      {/* Workspace Preview Body */}
      <div className="harbor-workspace-preview">
        {viewMode === 'kanban' ? (
          /* 3-Column Kanban Board */
          <div className="harbor-kanban-board" role="region" aria-label="Kanban Columns">
            {/* Column 1: TO DO */}
            <div className="harbor-col">
              <div className="harbor-col-header">
                <span className="col-title">TO DO</span>
                <span className="col-badge">{todoTasks.length}</span>
              </div>
              <div className="harbor-col-cards">
                {todoTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`harbor-card ${activeTaskId === task.id ? 'card-focused' : ''}`}
                    onClick={() => setActiveTaskId(task.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Task: ${task.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveTaskId(task.id);
                    }}
                  >
                    <div className="harbor-card-top">
                      <span className="priority-pill priority-med">{task.priority}</span>
                      <span className="harbor-card-date">{task.dueDate}</span>
                    </div>
                    <p className="harbor-card-title">{task.title}</p>
                    <span className="harbor-cat-tag">{task.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: IN PROGRESS */}
            <div className="harbor-col">
              <div className="harbor-col-header">
                <span className="col-title col-active-title">IN PROGRESS</span>
                <span className="col-badge col-active-badge">{inProgressTasks.length}</span>
              </div>
              <div className="harbor-col-cards">
                {inProgressTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`harbor-card ${activeTaskId === task.id ? 'card-focused' : ''}`}
                    onClick={() => setActiveTaskId(task.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Task: ${task.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveTaskId(task.id);
                    }}
                  >
                    <div className="harbor-card-top">
                      <span className="priority-pill priority-high">{task.priority}</span>
                      <span className="harbor-card-date">{task.dueDate}</span>
                    </div>
                    <p className="harbor-card-title">{task.title}</p>
                    <span className="harbor-cat-tag">{task.category}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 3: COMPLETED */}
            <div className="harbor-col">
              <div className="harbor-col-header">
                <span className="col-title">COMPLETED</span>
                <span className="col-badge">{completedTasks.length}</span>
              </div>
              <div className="harbor-col-cards">
                {completedTasks.map((task) => (
                  <div
                    key={task.id}
                    className={`harbor-card card-completed ${activeTaskId === task.id ? 'card-focused' : ''}`}
                    onClick={() => setActiveTaskId(task.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Task: ${task.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveTaskId(task.id);
                    }}
                  >
                    <div className="harbor-card-top">
                      <span className="priority-pill priority-done">
                        <Check size={9} aria-hidden="true" /> {task.priority}
                      </span>
                      <span className="harbor-card-date">{task.dueDate}</span>
                    </div>
                    <p className="harbor-card-title text-strikethrough">{task.title}</p>
                    <span className="harbor-cat-tag">{task.category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Structured List View */
          <div className="harbor-list-view" role="table" aria-label="Task List">
            <div className="harbor-list-header" role="row">
              <span className="list-col-priority">PRIORITY</span>
              <span className="list-col-title">TASK DESCRIPTION</span>
              <span className="list-col-cat">CATEGORY</span>
              <span className="list-col-status">STATUS</span>
              <span className="list-col-date">DUE DATE</span>
            </div>
            <div className="harbor-list-body">
              {HARBOR_TASKS.map((task) => {
                const isHigh = task.priority === 'P1 High';
                const isDone = task.priority === 'Done';
                return (
                  <div
                    key={task.id}
                    className={`harbor-list-row ${activeTaskId === task.id ? 'row-focused' : ''}`}
                    onClick={() => setActiveTaskId(task.id)}
                    tabIndex={0}
                    role="row"
                    aria-label={`Task: ${task.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') setActiveTaskId(task.id);
                    }}
                  >
                    <span className="list-col-priority">
                      <span
                        className={`priority-pill ${
                          isHigh ? 'priority-high' : isDone ? 'priority-done' : 'priority-med'
                        }`}
                      >
                        {isDone ? <Check size={8} aria-hidden="true" /> : null}
                        {task.priority}
                      </span>
                    </span>
                    <span className={`list-col-title ${isDone ? 'text-strikethrough' : ''}`}>
                      {task.title}
                    </span>
                    <span className="list-col-cat">
                      <span className="harbor-cat-tag">{task.category}</span>
                    </span>
                    <span className="list-col-status">
                      <span className={`status-dot ${isDone ? 'dot-done' : isHigh ? 'dot-active' : 'dot-pending'}`} />
                      {task.status}
                    </span>
                    <span className="list-col-date">{task.dueDate}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="outline-art-footer">
        <span className="footer-metric">FULL-STACK CRUD</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-metric">OPTIMISTIC UI</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <span className="footer-disclaimer">ILLUSTRATIVE INTERNSHIP WORKSPACE</span>
      </div>
    </div>
  );
}

function renderProjectArt(number: string) {
  switch (number) {
    case '01':
      return <ProjectArtVision4Text />;
    case '02':
      return <ProjectArtNathasha />;
    case '03':
      return <ProjectArtGlobal />;
    case '04':
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
                          {project.stack.slice(0, 6).map((item) => (
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

              {/* 3. ML Models & Multi-Stage Workflow (if defined) */}
              {selected.workflow && (
                <section className="cs-section" aria-labelledby="cs-workflow-heading">
                  <h3 id="cs-workflow-heading" className="cs-section-title">
                    <BrainCircuit size={18} className="cs-icon" aria-hidden="true" />
                    03. Multi-Stage Pipeline Execution Workflow
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

              {/* 5. Safety, Privacy & Gate Architecture (if defined) */}
              {selected.safetyGate && (
                <section className="cs-section" aria-labelledby="cs-safety-heading">
                  <h3 id="cs-safety-heading" className="cs-section-title">
                    <ShieldCheck size={18} className="cs-icon" aria-hidden="true" />
                    05. {selected.safetyGate.title}
                  </h3>
                  <div className="safety-callout-box">
                    <p>{selected.safetyGate.description}</p>
                    <ul className="safety-points-list">
                      {selected.safetyGate.points.map((pt) => (
                        <li key={pt.label}>
                          <strong>{pt.label}:</strong> {pt.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

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

              {/* 8A. Recorded Project Evaluation Results (if Vision4Text) */}
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

              {/* 8B. Documented Backend Test Results (if Nathasha) */}
              {selected.testResultsSummary && (
                <section className="cs-section" aria-labelledby="cs-test-results-heading">
                  <h3 id="cs-test-results-heading" className="cs-section-title">
                    <CheckCircle2 size={18} className="cs-icon" aria-hidden="true" />
                    08. Documented Backend Test Results ({selected.testResultsSummary.totalTests})
                  </h3>
                  <div className="eval-notice-box">
                    <span className="notice-badge">DOCUMENTED REPOSITORY REPORT</span>
                    <p>{selected.testResultsSummary.description}</p>
                  </div>
                  <div className="test-suites-grid">
                    {selected.testResultsSummary.testSuites.map((suite) => (
                      <div key={suite.name} className="test-suite-card">
                        <div className="suite-header">
                          <span className="suite-name">{suite.name}</span>
                          <span className="suite-badge-pass">{suite.passed} / {suite.total} PASS</span>
                        </div>
                        <div className="suite-progress-track">
                          <div className="suite-progress-bar" style={{ width: '100%' }} />
                        </div>
                      </div>
                    ))}
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
