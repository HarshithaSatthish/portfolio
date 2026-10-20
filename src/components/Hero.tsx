import { useState, useEffect, useRef, Component, type ReactNode, type ErrorInfo } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { asset } from '../data/assets';
import { person } from '../data/portfolio';
import { TypographyVortexCanvas } from '@designcodeio/threeui';
import '@designcodeio/threeui/style.css';

interface ThreeUIBoundaryProps {
  children: ReactNode;
}

interface ThreeUIBoundaryState {
  hasError: boolean;
}

class ThreeUIBoundary extends Component<ThreeUIBoundaryProps, ThreeUIBoundaryState> {
  constructor(props: ThreeUIBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ThreeUIBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('ThreeUI fallback triggered:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default function Hero() {
  const [canUseThreeUI, setCanUseThreeUI] = useState<boolean>(false);
  const [isHeroInView, setIsHeroInView] = useState<boolean>(true);
  const [canTilt, setCanTilt] = useState<boolean>(false);
  const heroRef = useRef<HTMLElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 26, stiffness: 170 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleStageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canTilt) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleStageMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  useEffect(() => {
    const mediaReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mediaHover = window.matchMedia('(hover: hover) and (pointer: fine)');
    const mediaWidth = window.matchMedia('(min-width: 841px)');

    const evaluate = () => {
      try {
        const eligible =
          !mediaReducedMotion.matches &&
          mediaHover.matches &&
          mediaWidth.matches;

        setCanTilt(eligible);
        setCanUseThreeUI(eligible);
      } catch {
        setCanTilt(false);
        setCanUseThreeUI(false);
      }
    };

    evaluate();

    mediaReducedMotion.addEventListener('change', evaluate);
    mediaHover.addEventListener('change', evaluate);
    mediaWidth.addEventListener('change', evaluate);

    // Performance: observe hero visibility to unmount ThreeUI WebGL when offscreen
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && heroRef.current) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setIsHeroInView(entry.isIntersecting);
        },
        { threshold: 0.05 }
      );
      observer.observe(heroRef.current);
    }

    return () => {
      mediaReducedMotion.removeEventListener('change', evaluate);
      mediaHover.removeEventListener('change', evaluate);
      mediaWidth.removeEventListener('change', evaluate);
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow"
          >
            <span className="live-dot" aria-hidden="true" />
            AVAILABLE FOR OPPORTUNITIES
          </motion.div>

          <div
            className="hero-headline-stage"
            onMouseMove={handleStageMouseMove}
            onMouseLeave={handleStageMouseLeave}
          >
            {canUseThreeUI && isHeroInView && (
              <ThreeUIBoundary>
                <div className="hero-vortex-backdrop" aria-hidden="true">
                  <TypographyVortexCanvas
                    mode="dark"
                    phrase="HARSHITHA / SOFTWARE DEVELOPER / AI & DATA / "
                    speed={0.4}
                    ringGrowth={1.21}
                    opacity={0.38}
                    particleAmount={0.75}
                    className="hero-threeui-canvas"
                  />
                </div>
              </ThreeUIBoundary>
            )}

            <motion.h1
              id="hero-title"
              className="hero-cinematic-title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={canTilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
            >
              <span className="hero-eyeline">HI, I'M</span>
              <span className="hero-name-editorial" data-text="HARSHITHA">
                <span className="name-letter-white">HARSH</span>
                <span className="name-letter-red">ITHA</span>
              </span>
            </motion.h1>
          </div>

          <motion.p
            className="hero-job"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.2 }}
          >
            <span>{person.headline.toUpperCase()}</span>
            <span className="hero-divider" aria-hidden="true">/</span>
            <span>AI &amp; DATA SCIENCE</span>
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.28 }}
          >
            {person.about}
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.35 }}
          >
            <a className="button button-primary" href="#projects">
              Explore My Work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a
              className="button button-ghost"
              href={asset('resume.pdf')}
              download="Harshitha_S_Resume.pdf"
            >
              Download Resume <Download size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <div className="social-row" aria-label="Professional social channels">
            <a
              href={person.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Harshitha S GitHub profile"
            >
              <Github size={19} aria-hidden="true" />
            </a>
            <a
              href={person.linkedIn}
              target="_blank"
              rel="noreferrer"
              aria-label="Harshitha S LinkedIn profile"
            >
              <Linkedin size={19} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${person.email}`}
              aria-label={`Send email to ${person.email}`}
            >
              <Mail size={19} aria-hidden="true" />
            </a>
            <span className="social-label">
              HASSAN, KARNATAKA, INDIA <ArrowUpRight size={12} aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portrait of Harshitha S">
          <div className="visual-grid" aria-hidden="true" />
          <div className="hero-portrait-frame">
            <img
              src={asset('images/portrait-business.webp')}
              alt="Harshitha S — Software Developer"
              fetchPriority="high"
              className="hero-static-portrait"
            />
          </div>
          <span className="visual-corner visual-corner-top" aria-hidden="true" />
          <span className="visual-corner visual-corner-bottom" aria-hidden="true" />
        </div>
      </div>

      <div className="container hero-bottom">
        <a href="#about" className="scroll-cue">
          SCROLL TO EXPLORE <ArrowDown size={16} aria-hidden="true" />
        </a>
        <span>
          WEB DEVELOPMENT <span className="muted-star" aria-hidden="true">✳</span>
          MACHINE LEARNING <span className="muted-star" aria-hidden="true">✳</span>
          COMPUTER VISION
        </span>
      </div>
    </section>
  );
}
