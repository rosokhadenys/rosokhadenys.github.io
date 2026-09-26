import { Fragment } from 'react';
import { caseStudyPresentation, type Project } from '@/data/portfolio';
import { Tags } from './ui';

type NarrativeSection = 'challenge' | 'role' | 'solution' | 'results';

/** Preserve source paragraphs and order, presenting existing lists as semantic lists. */
function Narrative({ project, section }: { project: Project; section: NarrativeSection }) {
  const presentation = caseStudyPresentation[project.id];
  return <div className="case-narrative">{project[section].split('\n\n').map((paragraph, index) => {
    const lines = paragraph.split('\n');
    const sequence = lines.some(line => line.startsWith('→ '));
    const list = lines.every(line => line.startsWith('- '));
    const recovery = list && project.id === 'delivery' && section === 'solution';
    const observation = project.id === 'automation' && index === 1 && (section === 'challenge' || section === 'results');
    const approval = project.id === 'automation' && section === 'solution' && index === 4;
    return <Fragment key={index}>
      {project.id === 'operations' && section === 'solution' && (index === 0 || index === 5) && <h5 className="case-subheading">{index === 0 ? 'Subcontractor onboarding' : 'Delivery process'}</h5>}
      {sequence ? <ol className="case-process">{lines.map((line, step) => <li key={step}><span className="case-step-number" aria-hidden="true">{String(step + 1).padStart(2, '0')}</span><span>{line.replace(/^→ /, '')}</span></li>)}</ol>
        : list ? recovery ? <ol className="case-recovery">{lines.map((line, step) => <li key={step}><strong>{presentation?.recoverySteps?.[step]}</strong><span>{line.slice(2)}</span></li>)}</ol>
          : <ul className="case-screening">{lines.map(line => <li key={line}>{line.slice(2)}</li>)}</ul>
        : observation ? <aside className="case-observation"><span className="case-subheading">{section === 'challenge' ? presentation?.beforeLabel : presentation?.afterLabel}</span><p>{paragraph}</p></aside>
        : <p className={approval ? 'case-approval' : undefined}>{paragraph}</p>}
    </Fragment>;
  })}</div>;
}

export function CaseStudyContent({ project }: { project: Project }) {
  const outcomes = caseStudyPresentation[project.id]?.outcomes;
  const tools = Array.isArray(project.technologies) ? project.technologies : [project.technologies];
  return <div className="case-editorial">
    <div className="case-context">
      <section className="case-section"><h4>Challenge</h4><Narrative project={project} section="challenge" /></section>
      <section className="case-section"><h4>My Role</h4><Narrative project={project} section="role" /></section>
    </div>
    <div className="case-response">
      <section className="case-section"><h4>Solution</h4><Narrative project={project} section="solution" /></section>
      <section className="case-section case-result"><h4>Result</h4>{outcomes && <div className={`case-outcomes case-outcomes-${project.id}`}>{outcomes.map(outcome => <strong key={outcome}>{outcome}</strong>)}</div>}<Narrative project={project} section="results" /></section>
    </div>
    <section className="case-tools"><h4>Tools / Methods</h4><Tags items={tools} /></section>
  </div>;
}
