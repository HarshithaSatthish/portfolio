import { Award, Flame, Sparkles, Trophy } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { achievements } from '../data/portfolio';

export default function Leadership() {
  return (
    <section id="achievements" className="section milestones-section" aria-labelledby="milestones-heading">
      <div className="container">
        <div className="heading-between">
          <SectionHeading
            eyebrow="07 / BEYOND THE CLASSROOM"
            title="Milestones &"
            emphasis="recognition."
            description="Competitive hackathons and technical recognitions verified by certificates and event records."
          />
          <div className="project-count" aria-label={`${achievements.length} verified milestones`}>
            <span>HONORS</span>
            <strong>0{achievements.length}</strong>
          </div>
        </div>

        <div className="milestones-grid">
          {achievements.map((item, idx) => (
            <article key={item.name} className="milestone-card-outline">
                <span className="card-corner-bracket bracket-tl" />
                <span className="card-corner-bracket bracket-tr" />
                <span className="card-corner-bracket bracket-bl" />
                <span className="card-corner-bracket bracket-br" />

                <div className="milestone-header-row">
                  <div className="milestone-badge-left">
                    <span className="milestone-index">0{idx + 1}</span>
                    <span className="milestone-tag">{item.tag}</span>
                  </div>
                  <div className="milestone-icon-wrap">
                    {idx === 1 ? (
                      <Trophy size={20} className="icon-trophy" aria-hidden="true" />
                    ) : idx === 0 ? (
                      <Flame size={20} className="icon-flame" aria-hidden="true" />
                    ) : (
                      <Award size={20} className="icon-award" aria-hidden="true" />
                    )}
                  </div>
                </div>

                <div className="milestone-body">
                  <span className="milestone-date">{item.date}</span>
                  <h3 className="milestone-title">{item.name}</h3>
                  <p className="milestone-org">{item.organization}</p>
                </div>

                <div className="milestone-footer-row">
                  <span className="milestone-verified-badge">
                    <Sparkles size={11} aria-hidden="true" /> VERIFIED RECOGNITION
                  </span>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
