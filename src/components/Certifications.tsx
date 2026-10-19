import { useState, useId } from 'react';
import { ArrowUpRight, Download, ExternalLink, FileText, X } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Modal from './Modal';
import { certificates } from '../data/portfolio';
import type { Certificate } from '../data/portfolio';
import { asset } from '../data/assets';

const certCategories = [
  'All Credentials',
  'Programming',
  'Cloud & Security',
  'Data & AI',
  'Internships',
  'Hackathons',
] as const;

type CertCategory = (typeof certCategories)[number];

export default function Certifications() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [category, setCategory] = useState<CertCategory>('All Credentials');
  const [showAll, setShowAll] = useState(false);
  const filterId = useId();

  const getFilteredCertificates = () => {
    if (category === 'All Credentials') return certificates;
    if (category === 'Programming') return certificates.filter((c) => c.category === 'Programming');
    if (category === 'Cloud & Security') {
      return certificates.filter((c) => c.category === 'Cloud' || c.category === 'Security' || c.category === 'Professional Skills');
    }
    if (category === 'Data & AI') return certificates.filter((c) => c.category === 'Data & AI');
    if (category === 'Internships') return certificates.filter((c) => c.category === 'Internship');
    if (category === 'Hackathons') return certificates.filter((c) => c.category === 'Hackathon');
    return certificates;
  };

  const filtered = getFilteredCertificates();
  const visible = showAll || category !== 'All Credentials' ? filtered : filtered.slice(0, 6);

  const getCount = (cat: CertCategory) => {
    if (cat === 'All Credentials') return certificates.length;
    if (cat === 'Programming') return certificates.filter((c) => c.category === 'Programming').length;
    if (cat === 'Cloud & Security') {
      return certificates.filter((c) => c.category === 'Cloud' || c.category === 'Security' || c.category === 'Professional Skills').length;
    }
    if (cat === 'Data & AI') return certificates.filter((c) => c.category === 'Data & AI').length;
    if (cat === 'Internships') return certificates.filter((c) => c.category === 'Internship').length;
    if (cat === 'Hackathons') return certificates.filter((c) => c.category === 'Hackathon').length;
    return 0;
  };

  return (
    <section id="certifications" className="section certs-section" aria-labelledby="certs-heading">
      <div className="container">
        <div className="heading-between">
          <SectionHeading
            eyebrow="06 / CONTINUOUS LEARNING"
            title="Certificates &"
            emphasis="credentials."
            description="Selected training, competitive hackathons, and learning credentials verified by uploaded PDF documents."
          />
          <div className="project-count" aria-label={`${certificates.length} total verified credentials`}>
            <span>CREDENTIALS</span>
            <strong>
              {filtered.length < 10 ? `0${filtered.length}` : filtered.length}{' '}
              <span className="count-total">/ {certificates.length}</span>
            </strong>
          </div>
        </div>

        {/* Category Filters */}
        <div
          className="filter-row"
          role="group"
          id={filterId}
          aria-label="Filter certificates by domain"
        >
          {certCategories.map((cat) => {
            const count = getCount(cat);
            const isSelected = category === cat;
            return (
              <button
                key={cat}
                type="button"
                className={`filter-button ${isSelected ? 'selected' : ''}`}
                onClick={() => {
                  setCategory(cat);
                  setShowAll(false);
                }}
                aria-pressed={isSelected}
                aria-label={`Filter by ${cat} (${count} credentials)`}
              >
                <span>{cat}</span>
                <span className="filter-badge" aria-hidden="true">
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Certificate Cards Grid */}
        <div className="cert-grid">
          {visible.map((cert) => (
            <button
              type="button"
              className="cert-card-outline"
              key={cert.id}
              onClick={() => setSelected(cert)}
              aria-label={`Preview credential document: ${cert.title}`}
              aria-haspopup="dialog"
            >
              <span className="card-corner-bracket bracket-tl" />
              <span className="card-corner-bracket bracket-tr" />
              <span className="card-corner-bracket bracket-bl" />
              <span className="card-corner-bracket bracket-br" />

              <div className="cert-preview-pane">
                <img
                  src={asset(cert.image)}
                  alt={`Preview of certificate: ${cert.title}`}
                  loading="lazy"
                />
                <div className="cert-badge-overlay">
                  <span className="cert-cat-pill">{cert.category}</span>
                </div>
              </div>

              <div className="cert-details-pane">
                <div className="cert-meta-row">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <h3 className="cert-name">{cert.title}</h3>
                <div className="cert-action-prompt">
                  <span>View Document</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </div>
              </div>
            </button>
          ))}
        </div>

        {category === 'All Credentials' && filtered.length > 6 && (
          <div className="center-action">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="button button-outline"
            >
              {showAll ? 'Show fewer credentials' : `View all ${certificates.length} credentials`}{' '}
              <ArrowUpRight size={16} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>

      {/* Certificate Modal Dialog */}
      {selected && (
        <Modal
          className="certificate-dialog"
          titleId="cert-dialog-title"
          onClose={() => setSelected(null)}
        >
          <div className="certificate-modal-container">
            <div className="certificate-dialog-heading">
              <div>
                <div className="eyebrow">
                  <FileText size={13} aria-hidden="true" /> VERIFIED DOCUMENT PREVIEW
                </div>
                <h2 id="cert-dialog-title">{selected.title}</h2>
                <p>
                  {selected.issuer} · {selected.date} ({selected.category})
                </p>
              </div>
              <button
                type="button"
                className="dialog-close"
                onClick={() => setSelected(null)}
                aria-label="Close certificate preview dialog"
              >
                <X size={20} aria-hidden="true" />
              </button>
            </div>

            <div className="certificate-preview">
              <object
                data={asset(selected.file)}
                type="application/pdf"
                className="certificate-pdf-object"
                title={`PDF preview of ${selected.title}`}
              >
                <div className="certificate-preview-fallback">
                  <img
                    src={asset(selected.image)}
                    alt={`Preview image of ${selected.title}`}
                    className="fallback-thumb"
                  />
                  <div className="fallback-text">
                    <p>Inline PDF preview is not supported on this browser or mobile device.</p>
                    <a
                      href={asset(selected.file)}
                      target="_blank"
                      rel="noreferrer"
                      className="button button-secondary"
                    >
                      Open in New Tab <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </object>
            </div>

            <div className="certificate-actions">
              <a
                href={asset(selected.file)}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                Open in New Tab <ExternalLink size={15} aria-hidden="true" />
              </a>
              <a
                href={asset(selected.file)}
                download
                className="button button-primary"
              >
                Download PDF <Download size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
}
