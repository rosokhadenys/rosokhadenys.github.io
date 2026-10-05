'use client';
import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { Hero } from './hero';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Users, Layers3, Sparkles, Plus, Minus, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { portfolio as p } from '@/data/portfolio';
import { FloatingNav } from './floating-nav';
import { FloatingContact } from './floating-contact';
import { CareerTimeline } from './career-timeline';
import { EducationTimeline } from './education-timeline';
import { ProjectGrid } from './projects';
import { AIWorkflow } from './ai-workflow';
import { CVLink, Expand, Reveal, SectionIntro } from './ui';
function About() {
  const [selected, setSelected] = useState<number | null>(null);
  const paragraphs = p.profile.overview.split('\n\n');
  return <section id="about" className="section shell">
    <Reveal><SectionIntro number="01" label="THE DIRECTION" title="From operations to a digital future." /></Reveal>
    <Reveal className="about-opening"><p className="about-copy">{paragraphs[0]}</p></Reveal>
    <div className="content-stats">{p.profile.stats.map(stat => <Reveal key={stat.value}><strong>{stat.value}</strong><p>{stat.label}</p></Reveal>)}</div>
    <div className="about-grid"><div className="about-story">{paragraphs.slice(1).map(paragraph => <Reveal key={paragraph}><p className="about-copy">{paragraph}</p></Reveal>)}</div>
      <Reveal className="capabilities">{p.capabilities.map((capability, i) => { const Icon = [BriefcaseBusiness, Users, Layers3, Sparkles][i]; return <div className="capability" key={capability.title}><button aria-expanded={selected === i} aria-controls={`capability-${i}`} onClick={() => setSelected(selected === i ? null : i)}><Icon size={21} strokeWidth={1.5} /><span><strong>{capability.title}</strong><small>{capability.summary}</small></span>{selected === i ? <Minus size={17} /> : <Plus size={17} />}</button><Expand open={selected === i} id={`capability-${i}`}><p>{capability.detail}</p></Expand></div>; })}</Reveal>
    </div>
  </section>;
}
function SkillsAndEducation() {
  return <><section id="skills" className="section shell"><Reveal><SectionIntro number="05" label="CAPABILITIES & TOOLS" title="The toolkit behind the work." /><div className="skills-grid">{p.skills.map((group, i) => <Reveal className="skill-group" key={group.title}><span className="eyebrow">0{i + 1}</span><h3>{group.title}</h3><ul className="skill-items">{group.items.map(item => <li key={item}>{item}</li>)}</ul></Reveal>)}</div></Reveal></section><EducationTimeline /></>;
}
function ContactCTA() {
  return <section id="contact" className="contact-section shell"><Reveal><div className="eyebrow">06 / LET’S CONNECT</div><h2>Let’s build efficient<br /><span>digital products together.</span></h2><p className="contact-availability">{p.contact.availability}</p><div className="contact-links">{p.contact.email ? <a className="button primary" href={`mailto:${p.contact.email}`}><Mail size={17} />Email<ArrowUpRight size={17} /></a> : null}{p.contact.linkedin ? <a className="button secondary" href={p.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ArrowUpRight size={17} /></a> : null} {p.contact.phone && <a className="button secondary" href={`https://wa.me/${p.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noreferrer" aria-label="Contact Denys Rosokha on WhatsApp"><MessageCircle size={17} />WhatsApp<ArrowUpRight size={17} /></a>}<CVLink /></div></Reveal></section>;
}
export default function Portfolio() {
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main">Skip to content</a><FloatingNav /><main id="main" tabIndex={-1}><Hero /><About /><CareerTimeline /><ProjectGrid /><AIWorkflow /><SkillsAndEducation /><ContactCTA /></main><footer className="shell"><span>{p.profile.name} <span className="muted">/ {p.profile.role}</span></span><a href="#main">Back to top <ArrowRight size={15} /></a></footer><FloatingContact /></MotionConfig>;
}
