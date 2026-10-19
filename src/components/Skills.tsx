import { BrainCircuit, Cpu, Database, FileCode2, Layout, Server } from 'lucide-react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { skillGroups } from '../data/portfolio';

const categoryMeta: Record<
  string,
  {
    icon: typeof FileCode2;
    role: string;
    description: string;
  }
> = {
  Languages: {
    icon: FileCode2,
    role: 'Core Languages',
    description: 'Object-oriented programming, data structures, and algorithmic scripting.',
  },
  Frontend: {
    icon: Layout,
    role: 'Modern Client-Side',
    description: 'Component architecture, semantic accessibility, and responsive systems.',
  },
  'Backend & APIs': {
    icon: Server,
    role: 'Server & Services',
    description: 'RESTful architectures, asynchronous routing, and API integration.',
  },
  'AI & Data': {
    icon: BrainCircuit,
    role: 'Intelligence & Vision',
    description: 'Computer vision pipelines, NLP prototypes, and exploratory data analysis.',
  },
  'Databases & Tools': {
    icon: Database,
    role: 'Data & DevOps',
    description: 'Relational & NoSQL persistence, schema design, and Git collaboration.',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="section section-alt" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHeading
          eyebrow="02 / TECHNICAL TOOLKIT"
          title="Tools I use to"
          emphasis="engineer solutions."
          description="Verified technologies applied in academic coursework, competitive hackathons, and internship projects — documented with integrity without arbitrary percentage bars."
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const meta = categoryMeta[group.title] || {
              icon: Cpu,
              role: 'Technical Category',
              description: 'Applied technical skills.',
            };
            const Icon = meta.icon;

            return (
              <motion.article
                className="skill-panel"
                key={group.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="skill-panel-top">
                  <div className="panel-badge-group">
                    <span className="panel-number">0{index + 1}</span>
                    <span className="panel-role">{meta.role}</span>
                  </div>
                  <div className="skill-icon-wrap" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="panel-heading">
                  <h3>{group.title}</h3>
                  <p className="panel-desc">{meta.description}</p>
                </div>

                <div className="skill-tags" aria-label={`Skills in ${group.title}`}>
                  {group.items.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
