'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { experience } from '@/data/portfolio';
import { Expand, Reveal, SectionIntro } from './ui';
function ExperienceDetail({ content }: { content: string | string[] }) {
  return Array.isArray(content)
    ? <ul>{content.map(item => <li key={item}>{item}</li>)}</ul>
    : <p>{content}</p>;
}
export function CareerTimeline() {
  const [expanded, setExpanded] = useState<string | null>(null);
  useEffect(() => {
    const revealLinkedRole = () => {
      const id = window.location.hash.slice(1);
      if (experience.some(entry => entry.id === id)) setExpanded(id);
    };
    revealLinkedRole();
    window.addEventListener('hashchange', revealLinkedRole);
    return () => window.removeEventListener('hashchange', revealLinkedRole);
  }, []);
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 70%'] });
  return <section id="experience" className="section shell"><Reveal><SectionIntro number="02" label="CAREER PATH" title="Experience, with perspective." description="A concise overview. Open a role for the full story." /></Reveal>
    <div className="timeline" ref={ref}><motion.div className="timeline-progress" style={{ scaleY: scrollYProgress }} />{experience.map((entry, index) => { const open = expanded === entry.id; return <motion.article layout={reduce ? false : 'position'} key={entry.id} id={entry.id} className={`experience-entry ${open ? 'is-open' : ''}`}>
      <span className="timeline-dot" /><button className="experience-toggle" aria-expanded={open} aria-controls={`${entry.id}-details`} onClick={() => setExpanded(open ? null : entry.id)}><span className="experience-date">{entry.period}<small>0{index + 1} / {index === 0 ? 'MOST RECENT' : 'EARLIER CHAPTER'}</small></span><span className="experience-summary"><span className="experience-company">{entry.company}{entry.location && ` · ${entry.location}`}</span><strong>{entry.position}</strong><span className="muted">{entry.description}</span>{!!entry.tags?.length && <span className="experience-tags">{entry.tags.map(tag => <span key={tag}>{tag}</span>)}</span>}</span><span className="expand-icon">{open ? <Minus size={19} /> : <Plus size={19} />}</span></button>
      <Expand open={open} id={`${entry.id}-details`}><div className="experience-details detail-grid">{entry.overview && <div><h4>Overview</h4><p>{entry.overview}</p>{entry.projectLink && <a className="text-link" href={entry.projectLink}>AI Lead-to-Proposal Automation</a>}</div>}{entry.scope && <div><h4>Scope</h4><ExperienceDetail content={entry.scope} /></div>}{!!entry.responsibilities?.length && <div><h4>What I owned</h4><ul>{entry.responsibilities.map(r => <li key={r}>{r}</li>)}</ul></div>}{entry.impact && <div><h4>Selected impact</h4><ExperienceDetail content={entry.impact} /></div>}{entry.tools && <div><h4>Tools / Processes</h4><ExperienceDetail content={entry.tools} /></div>}</div></Expand>
    </motion.article>; })}</div></section>;
}
