import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { person } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-row">
          <a href="#home" className="footer-brand-logo" aria-label="Harshitha S — Back to top">
            <span className="logo-h">H</span>
            <span className="logo-s">S</span>
          </a>

          <a href="#home" className="footer-back-to-top" aria-label="Back to top of page">
            <span>Back to top</span>
            <ArrowUp size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            <span>© {currentYear} Harshitha S. Built with intention &amp; precision.</span>
          </div>

          <div className="footer-social-links" aria-label="Social and professional profiles">
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in new tab)"
            >
              <Github size={18} aria-hidden="true" />
            </a>
            <a
              href={person.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in new tab)"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
            <a
              href={`mailto:${person.email}`}
              aria-label="Send email to Harshitha S"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="footer-tech-stack">
            <span>REACT 19 // TYPESCRIPT // VITE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
