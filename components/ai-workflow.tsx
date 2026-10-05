'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { UserRound, ClipboardList, Table2, Sparkles, Calculator, FileText, ShieldCheck, Mail, Send, Play, Pause, RotateCcw } from 'lucide-react';
import { projects, workflowSteps } from '@/data/portfolio';
import { CaseStudy } from './projects';
import { Reveal, SectionIntro } from './ui';

const icons = [UserRound, ClipboardList, Table2, Sparkles, Calculator, FileText, ShieldCheck, Mail, Send];
const STAGE_DURATION = 5000;
const stageExcerpts = [
  'lead processing',
  'structured the knowledge base',
  'leads structured in Google Sheets',
  '',
  'Equipment and configuration recommendation before proposal calculation.',
  'proposal preparation',
  '',
  'follow-ups sent via Gmail, with human approval before anything goes to the client.',
  'Less repetitive work, faster proposal preparation and sales follow-up.',
];
interface Connection { path: string }
// Unprovided detail stays editable in the data layer, never in the public UI.
const isProvided = (value: string) => !!value.trim() && !/\[[^\]]+\]/.test(value);

// Measure actual node positions so the same connections follow both desktop and mobile layouts.
function useConnections() {
  const graph = useRef<HTMLDivElement>(null);
  const [connections, setConnections] = useState<Connection[]>([]);
  useEffect(() => {
    const container = graph.current;
    if (!container) return;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = container.getBoundingClientRect();
        const nodes = Array.from(container.querySelectorAll<HTMLElement>('.workflow-node')).map(node => node.getBoundingClientRect());
        setConnections(nodes.slice(0, -1).map((from, i) => {
          const to = nodes[i + 1];
          const sameRow = Math.abs(from.top + from.height / 2 - to.top - to.height / 2) < 10;
          if (sameRow) {
            const forward = to.left > from.left;
            const x1 = (forward ? from.right : from.left) - bounds.left;
            const x2 = (forward ? to.left : to.right) - bounds.left;
            const y = from.top + from.height / 2 - bounds.top;
            return { path: `M ${x1} ${y} L ${x2} ${y}` };
          }
          const x1 = from.left + from.width / 2 - bounds.left;
          const x2 = to.left + to.width / 2 - bounds.left;
          const y1 = from.bottom - bounds.top;
          const y2 = to.top - bounds.top;
          const mid = (y1 + y2) / 2;
          return { path: `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}` };
        }));
      });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    container.querySelectorAll('.workflow-node').forEach(node => observer.observe(node));
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return { graph, connections };
}

export function AIWorkflow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0);
  const reduce = useReducedMotion();
  const { graph, connections } = useConnections();

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (active === workflowSteps.length - 1) { setPlaying(false); setPaused(false); }
      else setActive(index => index + 1);
    }, STAGE_DURATION);
    return () => window.clearTimeout(timer);
  }, [active, playing, run]);

  function restart() { setActive(0); setPaused(false); setPlaying(true); setRun(value => value + 1); }
  function togglePlayback() {
    if (playing) { setPlaying(false); setPaused(true); }
    else if (paused) { setPlaying(true); setPaused(false); }
    else restart();
  }
  const detailPanel = useRef<HTMLDivElement>(null);
  useEffect(() => { if (detailPanel.current) detailPanel.current.scrollTop = 0; }, [active]);
  const step = workflowSteps[active];
  return <section id="automation" className="automation-section"><div className="shell"><Reveal>
    <SectionIntro number="04" label="SYSTEMS IN MOTION" title="One lead. A connected journey." description="An interactive workflow concept. Select a stage or follow the sequence." />
    <div className="workflow-panel">
      <div className="workflow-toolbar"><span className="eyebrow"><span className="status-dot" /> WORKFLOW DEMONSTRATION</span><div className="workflow-controls">
        <button className="button primary" onClick={togglePlayback}>{playing ? <Pause size={15} /> : <Play size={15} />}{playing ? 'Pause' : 'Play Workflow'}</button>
        <button className="icon-button" aria-label="Restart workflow" onClick={restart}><RotateCcw size={18} /></button>
      </div></div>
      <div className="workflow-workspace">
      <div className="workflow-nodes" ref={graph}>
        <svg className="workflow-connections" aria-hidden="true">
          {connections.map(({ path }, i) => <g key={i} data-connection={i}>
            <path d={path} className={`connection-track ${i < active ? 'traversed' : ''} ${i === active || i === active - 1 ? 'relevant' : ''}`} />
            {playing && i === active && !reduce && <motion.path key={`${i}-${run}`} d={path} className="connection-pulse" initial={{ pathLength: .16, pathSpacing: .84, pathOffset: -.16 }} animate={{ pathOffset: 1 }} transition={{ duration: STAGE_DURATION / 1000, ease: 'linear' }} />}
          </g>)}
        </svg>
        {workflowSteps.map((node, i) => {
          const Icon = icons[i];
          return <div className={`workflow-slot ${node.id === 'chatgpt' ? 'processing-center' : ''} ${node.id === 'human-approval' ? 'human-control' : ''} ${i === active ? 'active' : ''} ${i < active ? 'complete' : ''}`} key={node.id}>
            <button className="workflow-node" aria-pressed={active === i} aria-controls="workflow-stage" onClick={() => { setPlaying(false); setPaused(false); setActive(i); }}>
              <span className="node-number">{String(i + 1).padStart(2, '0')}</span><Icon size={23} strokeWidth={1.5} /><strong>{node.title}</strong>
            </button>

          </div>;
        })}
      </div>
      <div className="workflow-details" ref={detailPanel} id="workflow-stage" aria-live="polite" aria-atomic="true">
        <motion.div key={step.id} initial={{ opacity: reduce ? 1 : 0, y: reduce ? 0 : 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .25 }}>
        <div className="workflow-detail-heading"><span className="eyebrow">STAGE {String(active + 1).padStart(2, '0')} / 09</span><h3>{step.title}</h3><p>{isProvided(step.description) ? step.description : stageExcerpts[active]}</p></div>
        <div className="detail-grid">{[['Input', step.input], ['Process', step.process], ['Output', step.output], ['Role in workflow', step.role]].filter(([, text]) => isProvided(text)).map(([label, text]) => <div key={label}><h4>{label}</h4><p>{text}</p></div>)}</div>
        </motion.div>
      </div>
      </div>
      <p className="workflow-note">Interactive demonstration of the documented workflow.</p>
    </div>
    <CaseStudy project={projects[0]} />
  </Reveal></div></section>;
}
