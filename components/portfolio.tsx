'use client';
import { MotionConfig } from 'motion/react';
import { Hero } from './hero';
import { ArrowRight, ArrowUpRight, Mail, Linkedin, MessageCircle } from 'lucide-react';
import { portfolio as p } from '@/data/portfolio';
import { FloatingNav } from './floating-nav';
import { FloatingContact } from './floating-contact';
import { CareerTimeline } from './career-timeline';
import { EducationTimeline } from './education-timeline';
import { ProjectGrid } from './projects';
import { AIWorkflow } from './ai-workflow';
import { CVLink, Reveal, SectionIntro } from './ui';
function About() {
  const cases = [
    { ...p.profile.stats[0], href: '#experience-3' },
    { ...p.profile.stats[1], href: '#experience-3' },
    { ...p.profile.stats[2], href: '#experience-2' },
    { ...p.profile.stats[3], href: '#project-operations' },
  ];
  return <section id="about" className="section shell about-bridge" aria-labelledby="about-title">
    <Reveal duration={.35} distance={10}><div className="eyebrow"><span>01 /</span> THE DIRECTION</div></Reveal>
    <div className="bridge-intro">
      <Reveal duration={.35} distance={10}><h2 id="about-title">Built in operations.<br /><span>Ready for digital delivery.</span></h2></Reveal>
      <div className="bridge-copy">
        <Reveal duration={.35} distance={10} delay={.1}><p>I’ve built businesses, coordinated teams and kept complex projects moving — with ownership from the first customer conversation to delivery.</p></Reveal>
        <Reveal duration={.35} distance={10} delay={.18}><p className="bridge-next">Now I bring that hands-on experience into digital projects and practical AI-enabled workflows.</p></Reveal>
      </div>
    </div>
    <div className="bridge-cases">{cases.map((item, i) => <Reveal key={item.value} className="bridge-case-wrap" duration={.35} distance={10}>
      <a className="bridge-case" href={item.href}><span className="bridge-case-number">0{i + 1} / 04 <ArrowUpRight size={18} /></span><strong>{item.value}</strong><p>{item.label}</p></a>
    </Reveal>)}</div>
    <Reveal className="bridge-cta" duration={.35} distance={10}><a href="#experience">Explore my experience <ArrowRight size={18} /></a></Reveal>
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
