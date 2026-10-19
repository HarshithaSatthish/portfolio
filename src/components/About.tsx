import { useRef, useState } from 'react';
import { ArrowUpRight, BrainCircuit, Code2, Database, Layers, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { asset } from '../data/assets';
import { education, experience } from '../data/portfolio';

const focusAreas = [
  {
    title: 'Full-Stack Engineering',
    icon: Code2,
    text: 'Building accessible, high-performance React frontends paired with robust Node.js, Express, and FastAPI REST architectures.',
  },
  {
    title: 'AI & Computer Vision',
    icon: BrainCircuit,
    text: 'Developing practical AI workflows, including PyTorch/OpenCV anomaly detection pipelines and NLP prototypes for text analysis.',
  },
  {
    title: 'Data-Driven Problem Solving',
    icon: Database,
    text: 'Leveraging structured data pipelines, NumPy, Pandas, and exploratory data analysis to transform complex inputs into clear insights.',
  },
  {
    title: 'Pragmatic Software Architecture',
    icon: Layers,
    text: 'Emphasizing modularity, clean component boundaries, reproducible workflows, and verifiable engineering over artificial complexity.',
  },
];

function AboutPhotoCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glowX, glowY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`about-photo-card ${isHovered ? 'is-hovered' : ''}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{
        transform: isHovered
          ? `perspective(900px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale3d(1.015, 1.015, 1.015)`
          : undefined,
      }}
    >
      {/* Background halo with restrained red/pink ambient blur */}
      <div
        className="about-photo-halo"
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(255, 138, 144, 0.35) 0%, rgba(229, 72, 77, 0.22) 40%, rgba(255, 179, 184, 0.08) 65%, transparent 75%)`,
        }}
      />

      {/* Main card body with illuminated border */}
      <div className="about-photo-frame">
        {/* Four animated corner brackets inspired by reference video */}
        <div className="about-portrait-wrap">
          <span className="about-corner-bracket corner-tl" aria-hidden="true" />
          <span className="about-corner-bracket corner-tr" aria-hidden="true" />
          <span className="about-corner-bracket corner-bl" aria-hidden="true" />
          <span className="about-corner-bracket corner-br" aria-hidden="true" />

          <img
            src={asset('images/portrait-casual.webp')}
            alt="Harshitha S — Computer Science (Data Science) undergraduate"
            loading="lazy"
            className="about-portrait-img"
          />
        </div>

        <span className="photo-label">CURIOUS BY NATURE. BUILDER BY CHOICE.</span>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-heading">
      <div className="container">
        <SectionHeading
          eyebrow="01 / THE PERSON BEHIND THE CODE"
          title="A little"
          emphasis="about me."
          description="Software developer and Computer Science undergraduate driven by practical engineering, AI exploration, and human-centered design."
        />

        <div className="about-grid">
          {/* Column 1: Portrait & Quick Snapshot */}
          <div className="about-visual-column">
            <AboutPhotoCard />

            <div className="about-snapshot-card">
              <div className="snapshot-header">
                <Sparkles size={16} className="snapshot-icon" aria-hidden="true" />
                <span>ACADEMIC SNAPSHOT</span>
              </div>
              <p className="snapshot-degree">{education.degree}</p>
              <p className="snapshot-school">{education.institution}</p>
              <div className="snapshot-metrics">
                <div>
                  <span className="metric-label">Academic Period</span>
                  <span className="metric-val">{education.academicPeriod}</span>
                </div>
                <div>
                  <span className="metric-label">Cumulative CGPA</span>
                  <span className="metric-val metric-highlight">{education.cgpa}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Narrative & Focus Areas */}
          <div className="about-content">
            <div className="about-intro">
              Designing with intention.<br />
              <span>Building with purpose.</span>
            </div>

            <div className="about-body-text">
              <p>
                I am a <strong>Software Developer</strong> and Computer Science &amp;
                Engineering (Data Science) undergraduate at <strong>{education.institution}</strong>.
              </p>
              <p>
                My engineering passion lies at the convergence of modern web development and applied
                data intelligence. Rather than treating AI as an isolated black box, I focus on
                translating machine-learning capabilities into responsive, intuitive user experiences
                that solve real-world problems.
              </p>
              <p>
                Through competitive hackathons (including Top 10 at Dayananda Sagar University's Code
                Clash and 2nd Place at HackAbhigna) and dual virtual internships at{' '}
                <strong>{experience[0].organization}</strong> (AI/NLP proof-of-concepts) and{' '}
                <strong>{experience[1].organization}</strong> (full-stack web platforms), I have built
                production-minded habits around API design, code maintainability, and end-to-end
                delivery.
              </p>
            </div>

            <div className="about-focus-header">
              <h3>Core Focus &amp; Applied Interests</h3>
            </div>

            <div className="about-focus">
              {focusAreas.map((item, idx) => (
                <motion.div
                  className="focus-row"
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                >
                  <div className="focus-icon" aria-hidden="true">
                    <item.icon size={22} />
                  </div>
                  <div className="focus-details">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                  <ArrowUpRight className="focus-arrow" size={18} aria-hidden="true" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
