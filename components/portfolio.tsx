'use client';
import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Hero } from './hero';
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Users, Layers3, Sparkles, Plus, Minus, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { portfolio as p, type LearningEntry } from '@/data/portfolio';
import { FloatingNav } from './floating-nav';
import { FloatingContact } from './floating-contact';
import { CareerTimeline } from './career-timeline';
import { ProjectGrid } from './projects';
import { AIWorkflow } from './ai-workflow';
import { CVLink, Expand, Reveal, SectionIntro } from './ui';
function About() {
  const [selected, setSelected] = useState<number | null>(null);
  return <section id="about" className="section shell"><Reveal><SectionIntro number="01" label="THE DIRECTION" title="From operations to a digital future." /><div className="about-grid"><div><p className="about-copy" style={{ whiteSpace: 'pre-line' }}>{p.profile.overview}</p><div className="trajectory" aria-label="Professional direction">{p.profile.trajectory.map((stage, i) => <div key={stage}><span className={i === 4 ? 'accent' : ''}>{stage}</span>{i < 4 && <ArrowDown size={15} />}</div>)}</div></div><div className="capabilities">{p.capabilities.map((capability, i) => { const Icon = [BriefcaseBusiness, Users, Layers3, Sparkles][i]; return <div className="capability" key={capability.title}><button aria-expanded={selected === i} aria-controls={`capability-${i}`} onClick={() => setSelected(selected === i ? null : i)}><Icon size={21} strokeWidth={1.5} /><span><strong>{capability.title}</strong><small>{capability.summary}</small></span>{selected === i ? <Minus size={17} /> : <Plus size={17} />}</button><Expand open={selected === i} id={`capability-${i}`}><p>{capability.detail}</p></Expand></div>; })}</div></div></Reveal></section>;
}
function LearningItem({ item }: { item: LearningEntry }) {
  return <div className="learning-item"><h4>{item.title}</h4><p>{item.organization}</p>{item.location && <p>{item.location}</p>}{item.status && <span className="learning-status">{item.status}</span>}{item.description && <p className="learning-description">{item.description}</p>}</div>;
}
function SkillsAndEducation() {
  return <><section id="skills" className="section shell"><Reveal><SectionIntro number="05" label="CAPABILITIES & TOOLS" title="The toolkit behind the work." /><div className="skills-grid">{p.skills.map((group, i) => <div className="skill-group" key={group.title}><span className="eyebrow">0{i + 1}</span><h3>{group.title}</h3><ul className="skill-items">{group.items.map(item => <li key={item}>{item}</li>)}</ul></div>)}</div></Reveal></section><section id="education" className="education-section shell"><h2 className="sr-only">Education, continuous learning and languages</h2><Reveal><div className="education-grid"><div><h3>Education</h3>{p.education.map(item => <LearningItem key={item.title} item={item} />)}</div><div><h3>Continuous learning</h3>{p.certifications.map(item => <LearningItem key={item.title} item={item} />)}</div><div><h3>Languages</h3>{p.languages.map(language => <p key={language}>{language}</p>)}</div></div></Reveal></section></>;
}
function ContactCTA() {
  return <section id="contact" className="contact-section shell"><Reveal><div className="eyebrow">06 / LET’S CONNECT</div><h2>Let’s build efficient<br /><span>digital products together.</span></h2><div className="contact-links">{p.contact.email ? <a className="button primary" href={`mailto:${p.contact.email}`}><Mail size={17} />Email<ArrowUpRight size={17} /></a> : null}{p.contact.linkedin ? <a className="button secondary" href={p.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={17} /></a> : null} {p.contact.phone && <a className="button secondary" href={`https://wa.me/${p.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" aria-label="Contact Denys Rosokha on WhatsApp"><MessageCircle size={17} />WhatsApp<ArrowUpRight size={17} /></a>}<CVLink /></div></Reveal></section>;
}
export default function Portfolio() {
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><FloatingNav /><main id="main" tabIndex={-1}><Hero /><About /><CareerTimeline /><ProjectGrid /><AIWorkflow /><SkillsAndEducation /><ContactCTA /></main><footer className="shell"><span>{p.profile.name} <span className="muted">/ {p.profile.role}</span></span><a href="#main">Back to top <ArrowRight size={15} /></a></footer><FloatingContact /></MotionConfig>;
}
