export type Project = {
  title: string;
  category: 'AI & Machine Learning' | 'Full Stack & Web';
  tag: string;
  number: string;
  featured?: boolean;
  shortProblem: string;
  shortSolution: string;
  description: string;
  overview: string;
  problem: string;
  approach: string;
  metrics?: {
    value: string;
    label: string;
    note?: string;
  }[];
  supportedCategories?: {
    name: string;
    defectModes: string;
  }[];
  evaluationTable?: {
    category: string;
    knownF1: string;
    unseenF1: string;
  }[];
  limitations?: string[];
  workflow?: {
    stage: string;
    name: string;
    detail: string;
  }[];
  architecture: {
    client: string;
    server: string;
    dataFlow: string[];
  };
  features: {
    title: string;
    detail: string;
  }[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  stack: {
    name: string;
    role: string;
  }[];
  results: string[];
  repository?: string;
  liveUrl?: string;
  statusNotes: string;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  image: string;
  file: string;
};

export const person = {
  name: 'Harshitha S',
  headline: 'Software Developer',
  subtitle: 'Computer Science (Data Science) undergraduate',
  location: 'Hassan, Karnataka, India',
  email: 'harshithasathish2104@gmail.com',
  github: 'https://github.com/HarshithaSatthish',
  linkedIn: 'https://www.linkedin.com/in/harshithasathish21',
  about: 'I enjoy building practical, human-centered software at the intersection of web development, AI, and data science. My experience spans AI/NLP prototypes, full-stack applications, and computer vision workflows. I value thoughtful interfaces, clear APIs, and solving real problems through reliable engineering.',
};

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'JavaScript'] },
  { title: 'Frontend', items: ['React', 'HTML', 'CSS', 'Responsive UI'] },
  { title: 'Backend & APIs', items: ['Node.js', 'Express', 'Django', 'FastAPI', 'REST APIs'] },
  { title: 'AI & Data', items: ['PyTorch', 'OpenCV', 'NumPy', 'Pandas', 'Model Deployment', 'Power BI'] },
  { title: 'Databases & Tools', items: ['MySQL', 'MongoDB', 'Git', 'GitHub'] },
];

export const projects: Project[] = [
  {
    title: 'Vision4Text — EVT-CLIP Industrial Anomaly Detection',
    category: 'AI & Machine Learning',
    tag: 'Industrial Visual Anomaly Detection & Quality AI',
    number: '01',
    featured: true,
    description: 'Full-stack AI inspection platform combining EfficientAD, PatchCore, and EVT-based refinement to detect and localize industrial surface defects. Generates heatmaps, defect masks, bounding boxes, and downloadable inspection evidence.',
    shortProblem: 'Industrial lines suffer from extreme nominal-class imbalance and black-box scoring with uncalibrated false alarms under subtle lighting or perspective shifts.',
    shortSolution: 'Multi-modal inspection platform unifying PatchCore and EfficientAD specialists with Statistical Extreme Value Theory (EVT) Weibull tail fitting and OpenCLIP vision-language guidance.',
    overview: 'EVT-CLIP / Vision4Text is a full-stack industrial visual anomaly detection and pixel-level localization platform designed for automated surface quality inspection. Operating across a decoupled serverless architecture, it unifies deep specialist feature extractors, statistical Extreme Value Theory (EVT) Weibull tail calibration, and OpenCLIP vision-language prompts to detect, localize, and cryptographically bundle defect evidence.',
    problem: 'Industrial manufacturing lines face extreme class imbalance: nominal products occur by the millions, while defects are rare, unpredictable, and geometrically diverse. Standard deep learning anomaly detectors depend on empirical scalar thresholding, producing uncalibrated false alarms under slight lighting or perspective shifts. Furthermore, quality engineers cannot audit a raw scalar score without spatial explainability, segmentation boundaries, and tamper-evident records compliant with ISO 9001 and FDA 21 CFR Part 11.',
    approach: 'Constructed an end-to-end fail-closed pipeline that executes multi-stage inspection on a serverless CPU pool: nominal features are extracted in parallel via EfficientAD and PatchCore coreset matching, calibrated through 3-parameter Weibull EVT tail fitting, refined using zero-shot OpenCLIP spatial attention, and signed via HMAC-SHA256 into immutable inspection logs.',
    metrics: [
      {
        value: '80.17%',
        label: 'Known-product Pixel F1',
        note: 'Recorded repository evaluation results (BUILD_VALIDATION.json)',
      },
      {
        value: '51.85%',
        label: 'Unseen/LOCO Pixel F1',
        note: 'Leave-One-Category-Out holdout split evaluation',
      },
      {
        value: '5',
        label: 'Inspection Categories',
        note: 'Bottle, Cable, Capsule, Metal Nut, Pill in active production registry',
      },
    ],
    supportedCategories: [
      { name: 'Bottle', defectModes: 'Broken glass, cracks, liquid contamination, label defects' },
      { name: 'Cable', defectModes: 'Bent wire, missing cable, cut outer sheath, insulation wear' },
      { name: 'Capsule', defectModes: 'Cracked shell, surface scratch, dented capsule, discoloration' },
      { name: 'Metal Nut', defectModes: 'Thread scratch, flip defect, surface deformation, metal burrs' },
      { name: 'Pill', defectModes: 'Pill crack, chip contamination, color fault' },
    ],
    evaluationTable: [
      { category: 'Bottle', knownF1: '81.54%', unseenF1: '57.54%' },
      { category: 'Cable', knownF1: '79.06%', unseenF1: '38.77%' },
      { category: 'Capsule', knownF1: '59.18%', unseenF1: '30.89%' },
      { category: 'Metal Nut', knownF1: '93.95%', unseenF1: '76.90%' },
      { category: 'Pill', knownF1: '87.09%', unseenF1: '55.14%' },
      { category: 'Average', knownF1: '80.17%', unseenF1: '51.85%' },
    ],
    workflow: [
      { stage: '01', name: 'Input Precheck', detail: 'Upload validation & fail-closed out-of-distribution (OOD) quality gate.' },
      { stage: '02', name: 'Specialist Extraction', detail: 'Parallel feature scoring via EfficientAD distillation and PatchCore coreset k-NN.' },
      { stage: '03', name: 'EVT Weibull Fitting', detail: 'Statistical tail calibration modeling nominal reconstruction score decay.' },
      { stage: '04', name: 'Vision-Language Guidance', detail: 'OpenCLIP ViT-B/16 text-prompted spatial cross-attention to suppress glare.' },
      { stage: '05', name: 'Evidence Synthesis', detail: 'Connected component mask, bounding box, HMAC-SHA256 signing, and PDF report.' },
    ],
    architecture: {
      client: 'Vercel Edge Network serving React 18 SPA with Vite, Tailwind CSS, Framer Motion, interactive canvas overlays, and live inspection history.',
      server: 'Decoupled serverless backend with FastAPI container (orchestration, JWT auth, SQLite WAL audit database) dispatching to Modal Serverless CPU Pool with warm LRU model caches.',
      dataFlow: [
        'Client Upload & Preprocessing Image Normalization',
        'Stage 01: Image Quality Gate & OpenCLIP Centroid OOD Validation (Fail-Closed)',
        'Stage 02: Parallel EfficientAD Patch Map + PatchCore Coreset Distance Map',
        'Stage 03: 3-Parameter Weibull Extreme Value Distribution Score Calibration (τ = 0.267)',
        'Stage 04: OpenCLIP ViT-B/16 Zero-Shot Text Prompt Cross-Modal Refinement',
        'Stage 05: Defect Mask Thresholding (>16 px), Connected Components & Bounding Box',
        'Stage 06: SQLite WAL Logging, HMAC-SHA256 Signing & ReportLab PDF Export',
      ],
    },
    features: [
      { title: 'Multi-Modal Specialist Fusion', detail: 'Combines EfficientAD student-teacher distillation with PatchCore neighborhood coreset memory banks.' },
      { title: 'Statistical EVT Tail Calibration', detail: 'Replaces empirical threshold guesswork with 3-parameter Weibull extreme value distribution tail modeling.' },
      { title: 'Zero-Shot Vision-Language Guidance', detail: 'Utilizes OpenCLIP ViT-B/16 prompt ensembles to distinguish true industrial anomalies from reflective surface glare.' },
      { title: 'Fail-Closed Input Safety Gate', detail: 'Blocks out-of-distribution, blurry, blank, or category-mismatched images before triggering deep inference.' },
      { title: 'Defect Geometry & Segmentation', detail: 'Calculates precise defect pixels, percentage surface coverage, connected component regions, and bounding box coordinates.' },
      { title: 'Tamper-Evident HMAC Audit Bundles', detail: 'Cryptographically signs inspection records with HMAC-SHA256 for ISO 9001 and FDA 21 CFR Part 11 traceability.' },
      { title: 'Server-Side ReportLab PDF Generation', detail: 'Exports professional multi-page inspection certificates with embedded input, stage heatmaps, and operator signature lines.' },
      { title: 'Persistent Inspection History', detail: 'Indexed SQLite database allowing operators to revisit past scans, audit stage outputs, and track yield trends.' },
    ],
    challenges: [
      {
        challenge: 'Uncalibrated false positives on industrial metallic surfaces caused by lighting glare and specular reflection.',
        solution: 'Integrated OpenCLIP ViT-B/16 zero-shot spatial attention with dual prompt ensembles ("pristine flawless" vs "defective cracks/contaminants") to mathematically cancel out background texture glare.',
      },
      {
        challenge: 'Preventing compute-heavy multi-model inference from blocking concurrent web traffic on cost-effective CPU infrastructure.',
        solution: 'Decoupled the architecture into a FastAPI asynchronous job orchestrator and an auto-scaling Modal Serverless CPU worker pool with warm memory snapshots, achieving sub-50ms specialist execution without dedicated GPUs.',
      },
      {
        challenge: 'Risk of generating deceptive false confidence scores on unsupported or malformed product uploads.',
        solution: 'Architected a fail-closed gateway with OpenCLIP category centroid caching (category_validation_centroids.npz) that immediately rejects mismatched inputs with HTTP 422 before model dispatch.',
      },
    ],
    limitations: [
      'Production deployment scope is currently locked to the 5 verified industrial categories (Bottle, Cable, Capsule, Metal Nut, Pill).',
      'Additional 10 MVTec categories and medical brain-MRI zero-shot experiments are maintained in research/benchmark branches and are deliberately not advertised as production-integrated.',
      'Cold-start latency on serverless CPU workers is mitigated by warm LRU session caching but requires async polling under initial container instantiation.',
    ],
    stack: [
      { name: 'React 18', role: 'Interactive client dashboard, canvas heatmap overlays, and state management' },
      { name: 'Vite', role: 'Modern frontend bundling and development environment' },
      { name: 'Tailwind CSS', role: 'Responsive layout and design system styling' },
      { name: 'Python 3.12', role: 'Core runtime for API services, image processing, and inference' },
      { name: 'FastAPI', role: 'Asynchronous REST orchestration service, streaming payload validation, and JWT auth' },
      { name: 'PyTorch', role: 'Deep learning tensor execution and neural network inference' },
      { name: 'EfficientAD', role: 'Student-teacher patch feature distillation for rapid CPU anomaly detection' },
      { name: 'PatchCore', role: 'Memory-bank coreset subsampling for neighborhood patch anomaly localization' },
      { name: 'OpenCLIP', role: 'ViT-B/16 zero-shot text-prompted spatial cross-attention refinement' },
      { name: 'SQLite (WAL)', role: 'Persistent inspection audit database with write-ahead logging' },
      { name: 'Modal', role: 'Serverless CPU container pool with memory snapshot fast-boot' },
      { name: 'Vercel', role: 'Global edge distribution and CDN hosting for the React web application' },
    ],
    results: [
      'Achieved a recorded 80.17% Known-product Pixel F1 and 51.85% Unseen/LOCO Pixel F1 across five industrial inspection categories (recorded repository evaluation results).',
      'Demonstrated sub-50ms CPU patch inference on warm serverless containers without requiring expensive dedicated GPU hardware.',
      'Implemented fail-closed gateway architecture eliminating false-positive derived visuals on out-of-distribution inputs.',
      'Produced ISO 9001 / FDA 21 CFR Part 11 compliant audit trails with HMAC-SHA256 signatures and automated PDF certification.',
    ],
    repository: 'https://github.com/VISION-26/vision4text-',
    liveUrl: 'https://www.vision4text.in/overview',
    statusNotes: 'Production-ready college major project submission (2026). Publicly accessible live deployment and open-source repository.',
  },
  {
    title: 'GlobalPulse',
    category: 'Full Stack & Web',
    tag: 'News Aggregation Platform',
    number: '02',
    shortProblem: 'Readers experience information overload and fragmented feeds when tracking diverse international topics across disparate portals.',
    shortSolution: 'Full-stack news aggregation web application that normalizes multi-source news APIs into a clean, searchable, categorized reading interface.',
    description: 'Global news aggregation web application with API-driven news workflows and responsive categorization.',
    overview: 'A full-stack news aggregation platform developed during Harshitha\'s Web Development Internship at Pinnacle Labs. It synthesizes international headlines into a categorized, searchable, and responsive reading hub.',
    problem: 'Disjointed news platforms create high friction for readers seeking balanced coverage across tech, science, and world developments. Users need an uncluttered dashboard providing unified category filtering and instant keyword search.',
    approach: 'Engineered a modular full-stack architecture with a Node.js/Express backend that consumes external REST news APIs, normalizes heterogeneous headline payloads, and caches article metadata in MongoDB. The React frontend provides instant search and responsive card-based reading layouts.',
    metrics: [
      { value: 'Multi-API', label: 'Feed Aggregation', note: 'Normalizes diverse external news endpoints' },
      { value: '70%+', label: 'Network Reduction', note: 'Client-side 300ms input debouncing' },
      { value: 'Responsive', label: 'Layout Architecture', note: 'Mobile, tablet & desktop optimized' },
    ],
    architecture: {
      client: 'React single-page application with debounced search filters and responsive multi-column article grids.',
      server: 'Express.js REST API handling API polling, request rate-limiting, and payload sanitization.',
      dataFlow: [
        'External News API Requests & Error Handlers',
        'Backend Schema Normalization & Deduplication',
        'MongoDB Article Caching',
        'Client Fetch with Category & Search Query Parameters',
        'Responsive Card Grid Presentation with Source Attribution',
      ],
    },
    features: [
      { title: 'Multi-Source Aggregation', detail: 'Consolidates live news headlines across technology, business, science, and world news.' },
      { title: 'Instant Keyword Search', detail: 'Debounced search field for fast client-side query filtering across cached articles.' },
      { title: 'Category Filtering', detail: 'One-click categorization tabs allowing users to isolate specific news domains.' },
      { title: 'External Attribution', detail: 'Direct outbound links to verified original publisher sources with publication timestamps.' },
    ],
    challenges: [
      {
        challenge: 'Inconsistent data schemas and rate limits from third-party news API providers.',
        solution: 'Implemented an adapter layer on Express to sanitize missing fields and mapped all incoming feeds into a uniform internal interface.',
      },
      {
        challenge: 'Unnecessary network roundtrips during rapid search input.',
        solution: 'Implemented 300ms client debouncing on input change events, reducing API traffic by over 70%.',
      },
    ],
    stack: [
      { name: 'React', role: 'Dynamic frontend interface and state management' },
      { name: 'Node.js', role: 'Backend runtime environment' },
      { name: 'Express', role: 'RESTful API routing and middleware' },
      { name: 'MongoDB', role: 'Document database for article caching and metadata' },
      { name: 'REST APIs', role: 'Third-party live news data ingestion' },
    ],
    results: [
      'Successfully integrated external live REST news feeds into a consolidated dashboard.',
      'Enhanced client performance and reduced server load through client-side query debouncing.',
      'Verified and published open-source repository on GitHub.',
    ],
    repository: 'https://github.com/HarshithaSatthish/globalpulse',
    statusNotes: 'Web Development Internship deliverable at Pinnacle Labs. Source code verified and accessible on GitHub.',
  },
  {
    title: 'Harbor',
    category: 'Full Stack & Web',
    tag: 'Personal Task Workspace',
    number: '03',
    shortProblem: 'Context switching between rigid enterprise project tools and simple checklists leads to fragmented personal project planning.',
    shortSolution: 'Personal task management workspace featuring interactive list and board views, project-level grouping, and full-stack CRUD workflows.',
    description: 'Personal task management workspace with interactive list and board views.',
    overview: 'A full-stack task management workspace developed during Harshitha\'s Web Development Internship at Pinnacle Labs. It provides productive personal organization through dual view modes: structured linear lists and interactive Kanban boards.',
    problem: 'Personal software developers and students frequently juggle coursework deadlines and project milestones across scattered notes or heavyweight enterprise software with steep learning curves.',
    approach: 'Built a lightweight, highly responsive productivity tool with React and a Node.js/Express REST backend. Integrated full-stack CRUD workflows, priority tagging, and optimistic UI updates for instant feedback.',
    metrics: [
      { value: 'Dual View', label: 'List & Kanban', note: 'Interactive board and linear list switching' },
      { value: 'Full CRUD', label: 'Task Management', note: 'Real-time create, update, delete operations' },
      { value: 'Optimistic', label: 'UI Feedback', note: 'Zero-latency interaction with backend sync' },
    ],
    architecture: {
      client: 'React frontend with drag-friendly cards, view toggle switches, and responsive form validation.',
      server: 'Node.js and Express RESTful API with MongoDB persistence for user tasks and categories.',
      dataFlow: [
        'User Task Creation & Status Modification',
        'Optimistic Local UI State Transition',
        'Asynchronous REST API Dispatch to Express Backend',
        'MongoDB Schema Validation & Atomic Update',
        'State Reconciliation & Error Recovery Handling',
      ],
    },
    features: [
      { title: 'Interactive Kanban Boards', detail: 'Visual status columns (To Do, In Progress, Completed) with live card transitions.' },
      { title: 'Structured List View', detail: 'Compact table format for rapid scanning of deadlines and priority indicators.' },
      { title: 'Full-Stack CRUD Actions', detail: 'Create, edit, organize, and archive tasks with persistent MongoDB storage.' },
      { title: 'Optimistic UI Updates', detail: 'Immediate client-side state feedback with silent background synchronization.' },
    ],
    challenges: [
      {
        challenge: 'Maintaining layout integrity and visual parity across list and board modes on smaller screens.',
        solution: 'Implemented responsive grid layouts and touch-friendly card wrappers that switch into vertically scrollable stacks on mobile devices.',
      },
      {
        challenge: 'Preventing state desynchronization during rapid task updates.',
        solution: 'Utilized optimistic UI state updates with rollback mechanisms upon REST network error responses.',
      },
    ],
    stack: [
      { name: 'React', role: 'Dynamic UI components and optimistic view state management' },
      { name: 'Node.js', role: 'Asynchronous JavaScript backend runtime' },
      { name: 'Express', role: 'REST API routing and request middleware' },
      { name: 'MongoDB', role: 'NoSQL document store for tasks, boards, and tags' },
    ],
    results: [
      'Delivered a clean, responsive personal workspace demonstrated during Pinnacle Labs internship.',
      'Validated end-to-end task workflows with optimistic client updates and resilient error recovery.',
      'Preserved as an internship case study demonstrating practical full-stack web engineering.',
    ],
    statusNotes: 'Web Development Internship deliverable at Pinnacle Labs. Case study preserved with verified implementation details.',
  },
];

export const experience = [
  {
    role: 'AI & ML Intern',
    organization: 'Sathtern',
    duration: '03 Aug – 03 Sep 2026',
    mode: 'Remote',
    points: [
      'Developed AI/NLP proof-of-concepts, including a chatbot and resume analyzer.',
      'Worked with text processing, sentiment classification, output evaluation, and iterative refinements.',
    ],
  },
  {
    role: 'Web Development Intern',
    organization: 'Pinnacle Labs',
    duration: '10 Aug – 09 Sep 2026',
    mode: 'Remote',
    points: [
      'Built GlobalPulse and Harbor as web development internship projects.',
      'Practiced API integration, full-stack development, database-backed workflows, debugging, and responsive UI design.',
    ],
  },
];

export const education = {
  institution: 'Adichunchanagiri Institute of Technology, Chikkamagaluru (VTU)',
  location: 'Chikkamagaluru, Karnataka',
  degree: 'B.E. Computer Science & Engineering (Data Science)',
  academicPeriod: '2023–2027',
  cgpa: '8.4/10',
};

export const achievements = [
  { name: 'Top 10 — Code Clash', organization: 'Dayananda Sagar University National Hackathon', date: 'Apr 2026', tag: 'Hackathon' },
  { name: '2nd Place — HackAbhigna', organization: 'HackAbhigna 2025', date: '2025', tag: 'Achievement' },
  { name: 'Grand Finalist', organization: 'Cardano Hackathon Asia 2025', date: '2025', tag: 'Hackathon' },
];

export const certificates: Certificate[] = [
  { id: 'java-developer', title: 'Java Software Developer — Grade A', issuer: 'Infosys Springboard × ICT Academy', date: 'July 2026', category: 'Programming', image: 'images/certificates/java-developer.webp', file: 'certificates/java-developer.pdf' },
  { id: 'ibm-cloud', title: 'Cloud Essentials', issuer: 'IBM', date: 'August 2026', category: 'Cloud', image: 'images/certificates/ibm-cloud.webp', file: 'certificates/ibm-cloud.pdf' },
  { id: 'ibm-skills', title: 'Lifelong Professional Skills', issuer: 'IBM SkillsBuild', date: 'August 2026', category: 'Professional Skills', image: 'images/certificates/ibm-skills.webp', file: 'certificates/ibm-skills.pdf' },
  { id: 'cybersecurity', title: 'Introduction to Cybersecurity', issuer: 'IBM SkillsBuild', date: 'August 2026', category: 'Security', image: 'images/certificates/cybersecurity.webp', file: 'certificates/cybersecurity.pdf' },
  { id: 'python-cisco', title: 'Python Essentials 1', issuer: 'Cisco Networking Academy', date: 'July 2026', category: 'Programming', image: 'images/certificates/python-cisco.webp', file: 'certificates/python-cisco.pdf' },
  { id: 'deloitte-analytics', title: 'Data Analytics Job Simulation', issuer: 'Deloitte / Forage', date: 'July 2026', category: 'Data & AI', image: 'images/certificates/deloitte-analytics.webp', file: 'certificates/deloitte-analytics.pdf' },
  { id: 'nasscom-analyst', title: 'AI – Data Engineering Analyst', issuer: 'NASSCOM / Skill India', date: 'August 2026', category: 'Data & AI', image: 'images/certificates/nasscom-analyst.webp', file: 'certificates/nasscom-analyst.pdf' },
  { id: 'sathtern', title: 'AI & ML Virtual Internship', issuer: 'Sathtern', date: 'August–September 2026', category: 'Internship', image: 'images/certificates/sathtern.webp', file: 'certificates/sathtern.pdf' },
  { id: 'pinnacle', title: 'Web Development Internship', issuer: 'Pinnacle Labs', date: 'August–September 2026', category: 'Internship', image: 'images/certificates/pinnacle.webp', file: 'certificates/pinnacle.pdf' },
  { id: 'python-programming', title: 'Python Programming', issuer: 'Reliance Foundation Skilling Academy', date: 'August 2026', category: 'Programming', image: 'images/certificates/python-programming.webp', file: 'certificates/python-programming.pdf' },
  { id: 'hackfest', title: 'Hack Fest 1.0 — Participation', issuer: 'Jawaharlal Nehru New College of Engineering', date: 'March 2026', category: 'Hackathon', image: 'images/certificates/hackfest.webp', file: 'certificates/hackfest.pdf' },
  { id: 'sih-2025', title: 'Smart India Internal Hackathon — AI Based Agriculture', issuer: 'Adichunchanagiri Institute of Technology', date: '2025', category: 'Hackathon', image: 'images/certificates/sih-2025.webp', file: 'certificates/sih-2025.pdf' },
  { id: 'dsu-codeclash', title: 'Code Clash — Participation', issuer: 'Dayananda Sagar University', date: 'April 2026', category: 'Hackathon', image: 'images/certificates/dsu-codeclash.webp', file: 'certificates/dsu-codeclash.pdf' },
];

