'use client';
import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { education, languages } from '@/data/portfolio';
import { Expand, Reveal, SectionIntro } from './ui';

// Reuse CareerTimeline's layout classes and motion settings without changing Experience.
export function EducationTimeline() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 70%'] });
  return <section id="education" className="section shell education-timeline">
    <Reveal><SectionIntro number="06" label="EDUCATION" title="Education, in progress." description="Formal education and practical training — from foundations to IT project delivery." /></Reveal>
    <div className="timeline" ref={ref}>
      <motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} />
      {education.map((entry, index) => {
        const open = expanded === entry.id;
        return <motion.article layout={reduce ? false : 'position'} key={entry.id} className={`experience-entry ${open ? 'is-open' : ''}`}>
          <span className="timeline-dot" />
          <button className="experience-toggle" aria-expanded={open} aria-controls={`${entry.id}-details`} onClick={() => setExpanded(open ? null : entry.id)}>
            <span className="experience-date">{entry.period}<small>0{index + 1} / {entry.chapter}</small></span>
            <span className="experience-summary">
              <span className="experience-company">{entry.organization}</span>
              <strong>{entry.title}</strong>
              {entry.subtitle && <span className="muted">{entry.subtitle}</span>}
              <span className="muted">{entry.summary}</span>
              <span className="experience-tags">{entry.tags.map(tag => <span key={tag}>{tag}</span>)}</span>
            </span>
            <span className="expand-icon">{open ? <Minus size={19} /> : <Plus size={19} />}</span>
          </button>
          <Expand open={open} id={`${entry.id}-details`}><div className="experience-details detail-grid">
            <div><h4>Programme</h4><p>{entry.subtitle || entry.title}</p></div>
            <div><h4>{index === 0 ? 'Institutions' : 'Institution'}</h4><p>{entry.organization}</p></div>
            <div><h4>{entry.status ? 'Status' : 'Date'}</h4><p>{entry.status || entry.date}</p></div>
            {entry.location && <div><h4>Location</h4><p>{entry.location}</p></div>}
            {entry.description && <div><h4>Description</h4><p style={{ whiteSpace: 'pre-line' }}>{entry.description}</p></div>}
          </div></Expand>
        </motion.article>;
      })}
    </div>
    <Reveal className="education-languages"><h3>Languages</h3><ul>{languages.map(language => <li key={language}>{language}</li>)}</ul></Reveal>
  </section>;
}
