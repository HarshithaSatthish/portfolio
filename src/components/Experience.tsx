import { BriefcaseBusiness, Calendar, Download, FileText, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { education, experience } from '../data/portfolio';
import { asset } from '../data/assets';

export default function Experience() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
      <div className="container">
        <SectionHeading
          eyebrow="08 / THE JOURNEY SO FAR"
          title="Experience &"
          emphasis="education."
          description="Internships and academic background focused on applied artificial intelligence and modern web engineering."
        />

        <div className="experience-layout-grid">
          {/* Column 1: Internship Timeline */}
          <div className="timeline-column">
            <div className="column-subheading">
              <BriefcaseBusiness size={20} className="subheading-icon" aria-hidden="true" />
              <span>Internship Experience</span>
            </div>

            <div className="timeline-wrapper">
              {experience.map((entry) => (
                <article key={entry.organization} className="timeline-card-outline">
                  <span className="card-corner-bracket bracket-tl" />
                  <span className="card-corner-bracket bracket-tr" />
                  <span className="card-corner-bracket bracket-bl" />
                  <span className="card-corner-bracket bracket-br" />

                  <div className="timeline-header-meta">
                    <span className="timeline-role-badge">{entry.role}</span>
                    <span className="timeline-duration">
                      <Calendar size={12} aria-hidden="true" /> {entry.duration}
                    </span>
                  </div>

                  <div className="timeline-company-row">
                    <h3 className="company-name">{entry.organization}</h3>
                    <span className="company-mode">
                      <MapPin size={11} aria-hidden="true" /> {entry.mode}
                    </span>
                  </div>

                  <ul className="timeline-points-list">
                    {entry.points.map((pt, pIdx) => (
                      <li key={pIdx}>
                        <span className="point-bullet" aria-hidden="true">▪</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          {/* Column 2: Education & Resume Cards */}
          <div className="education-column">
            <div className="column-subheading">
              <GraduationCap size={20} className="subheading-icon" aria-hidden="true" />
              <span>Academic Education</span>
            </div>

            {/* Education Card */}
            <article className="education-card-outline">
              <span className="card-corner-bracket bracket-tl" />
              <span className="card-corner-bracket bracket-tr" />
              <span className="card-corner-bracket bracket-bl" />
              <span className="card-corner-bracket bracket-br" />

              <div className="edu-top-row">
                <span className="edu-period-badge">
                  <Calendar size={12} aria-hidden="true" /> {education.academicPeriod}
                </span>
                <span className="edu-status-badge">CURRENT UNDERGRADUATE</span>
              </div>

              <h3 className="edu-degree">{education.degree}</h3>
              <p className="edu-institution">{education.institution}</p>
              <p className="edu-location">
                <MapPin size={12} aria-hidden="true" /> {education.location}
              </p>

              <div className="edu-score-box">
                <div className="score-val-wrap">
                  <span className="score-number">{education.cgpa}</span>
                  <span className="score-label">CUMULATIVE GPA</span>
                </div>
                <span className="score-verified-tag">
                  <Sparkles size={11} aria-hidden="true" /> VERIFIED VTU RECORD
                </span>
              </div>
            </article>

            {/* One-Page Resume Card */}
            <article className="resume-download-card-outline">
              <span className="card-corner-bracket bracket-tl" />
              <span className="card-corner-bracket bracket-tr" />
              <span className="card-corner-bracket bracket-bl" />
              <span className="card-corner-bracket bracket-br" />

              <div className="resume-card-header">
                <span className="resume-kicker">
                  <FileText size={12} aria-hidden="true" /> CURRICULUM VITAE
                </span>
                <span className="resume-size-tag">169 KB PDF</span>
              </div>

              <h3 className="resume-card-title">Looking for the complete resume?</h3>
              <p className="resume-card-desc">
                Download the official one-page resume summarizing engineering skills, verified projects, internships, and certifications.
              </p>

              <div className="resume-action-wrap">
                <a
                  href={asset('resume.pdf')}
                  download="Harshitha_S_Resume.pdf"
                  className="button button-primary"
                >
                  Download Official Resume <Download size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
