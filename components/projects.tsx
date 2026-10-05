'use client';
import { useEffect, useState } from 'react';
import { CaseStudyContent } from './case-study-content';
import { ArrowUpRight, ArrowRight, Sparkles, Server, Network, Minus, Plus } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { Expand, Reveal, SectionIntro, Tags } from './ui';
export function CaseStudy({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const revealLinkedCase = () => {
      if ((window.location.hash === `#project-${project.id}` || window.location.hash === `#case-study-${project.id}`)) setOpen(true);
    };
    revealLinkedCase();
    window.addEventListener('hashchange', revealLinkedCase);
    return () => window.removeEventListener('hashchange', revealLinkedCase);
  }, [project.id]);
  return <div className="case-study" id={`case-study-${project.id}`}><button className="case-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls={`case-${project.id}`}><span>{open ? 'Close the case study' : 'Explore the case study'}</span>{open ? <Minus size={19} /> : <Plus size={19} />}</button><Expand open={open} id={`case-${project.id}`}><CaseStudyContent project={project} /></Expand></div>;
}
export function ProjectGrid() {
  return <section id="projects" className="section shell"><Reveal><SectionIntro number="03" label="SELECTED PROJECTS" title="From complexity to clarity." description="Explore the thinking, the process, and the work behind it." /><div className="project-grid">{projects.map((project, i) => { const Icon = [Sparkles, Server, Network][i]; return <article id={`project-${project.id}`} className={`project-card ${i === 0 ? 'featured' : ''}`} key={project.id}>
    <div className={`project-visual visual-${i}`} aria-hidden="true">{i === 0 ? <div className="signal-art"><div className="signal-orbit" /><div className="signal-orbit inner" /><span className="signal-small left"><Network size={25} /></span><span className="signal-core"><Sparkles size={40} /></span><span className="signal-small right"><ArrowUpRight size={25} /></span><div className="signal-line" /></div> : <Icon size={42} strokeWidth={1} />}<span className="visual-index">0{i + 1} / PROJECT PREVIEW</span></div>
    <div className="project-copy"><span className="eyebrow">{project.category}</span><h3>{project.title}</h3><p>{project.summary}</p><Tags items={project.tags} />{i === 0 ? <a className="text-link" href="#automation">Explore the workflow <ArrowRight size={18} /></a> : <CaseStudy project={project} />}</div>
  </article>; })}</div></Reveal></section>;
}
