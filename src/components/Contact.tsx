import { useState } from 'react';
import type { FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { person } from '../data/portfolio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(person.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  function openEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const subject = String(data.get('subject') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email || !subject || !message) return;

    const body = `Hi Harshitha,\n\n${message}\n\nFrom: ${name} (${email})`;
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    setStatus('Your default email app has been opened with a pre-filled draft. Please review and click Send in your email client to deliver the message.');
  }

  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHeading
          eyebrow="09 / INITIATE CONTACT"
          title="Have an opportunity?"
          emphasis="Let's build together."
          description="Open to software engineering roles, full-stack internships, and technical collaborations."
        />

        <div className="contact-layout-grid">
          {/* Column 1: Direct Contact Details & Copy Action */}
          <div className="contact-info-card-outline">
            <span className="card-corner-bracket bracket-tl" />
            <span className="card-corner-bracket bracket-tr" />
            <span className="card-corner-bracket bracket-bl" />
            <span className="card-corner-bracket bracket-br" />

            <div className="contact-kicker-row">
              <span className="contact-kicker">DIRECT COMMUNICATION</span>
              <span className="contact-availability-tag">
                <span className="art-pulse-dot" /> AVAILABLE FOR HIRE
              </span>
            </div>

            <h3 className="contact-lead-title">
              Let's connect and discuss your next initiative.
            </h3>
            <p className="contact-lead-desc">
              Whether you are recruiting for software engineering roles or looking to discuss full-stack &amp; computer vision applications, my inbox is always open.
            </p>

            <div className="contact-email-box">
              <div className="email-row-main">
                <Mail size={18} className="email-icon" aria-hidden="true" />
                <span className="email-text">{person.email}</span>
              </div>
              <button
                type="button"
                className="btn-copy-email"
                onClick={copyEmail}
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={14} className="icon-success" aria-hidden="true" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} aria-hidden="true" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div className="contact-meta-list">
              <div className="meta-item">
                <MapPin size={16} className="meta-icon" aria-hidden="true" />
                <span>{person.location}</span>
              </div>
              <div className="meta-item">
                <Sparkles size={16} className="meta-icon" aria-hidden="true" />
                <span>IST (UTC +5:30) · Open to Remote &amp; On-Site</span>
              </div>
            </div>

            <div className="contact-social-row">
              <a
                href={person.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Harshitha S GitHub profile (opens in new window)"
              >
                <Github size={16} aria-hidden="true" />
                <span>GitHub</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>

              <a
                href={person.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label="Harshitha S LinkedIn profile (opens in new window)"
              >
                <Linkedin size={16} aria-hidden="true" />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Message Form */}
          <div className="contact-form-card-outline">
            <span className="card-corner-bracket bracket-tl" />
            <span className="card-corner-bracket bracket-tr" />
            <span className="card-corner-bracket bracket-bl" />
            <span className="card-corner-bracket bracket-br" />

            <form className="contact-form" onSubmit={openEmail}>
              <div className="form-top-row">
                <span className="form-kicker">DRAFT MESSAGE</span>
                <span className="form-client-tag">CLIENT-SIDE MAILTO</span>
              </div>

              <div className="form-fields-grid">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    placeholder="e.g. Alex Chen"
                    autoComplete="name"
                    required
                    maxLength={100}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="e.g. alex@company.com"
                    autoComplete="email"
                    required
                    maxLength={200}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  placeholder="e.g. Software Engineering Opportunity / Collaboration"
                  required
                  maxLength={140}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Share details regarding your team, project requirements, or opportunity..."
                  required
                  rows={5}
                  maxLength={5000}
                />
              </div>

              <button type="submit" className="button button-primary btn-submit-message">
                Generate Email Draft <Send size={15} aria-hidden="true" />
              </button>

              <p className="form-privacy-note">
                🔒 Client-side mailto: Generating this draft opens your default email client. No form inputs are transmitted to or stored on any server.
              </p>

              {status && (
                <p className="form-status-alert" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
