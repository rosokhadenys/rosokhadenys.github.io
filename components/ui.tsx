'use client';
import type { ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Download } from 'lucide-react';
import { contact } from '@/data/portfolio';
import { publicAsset } from '@/lib/public-asset';
export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={`reveal-element ${className}`} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: reduce ? 0 : .45 }}>{children}</motion.div>;
}
export function Expand({ open, id, children }: { open: boolean; id: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return <AnimatePresence initial={false}>{open && <motion.div id={id} className="expand-content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduce ? 0 : .28, ease: [.22, 1, .36, 1] }}>{children}</motion.div>}</AnimatePresence>;
}
export function SectionIntro({ number, label, title, description }: { number: string; label: string; title: string; description?: string }) {
  return <div className="section-intro"><div><div className="eyebrow"><span>{number} /</span> {label}</div><h2>{title}</h2></div>{description && <p>{description}</p>}</div>;
}
export function CVLink({ compact = false }: { compact?: boolean }) {
  return contact.cv ? <a className={`button secondary ${compact ? 'compact' : ''}`} href={publicAsset(contact.cv)} download="Denys-Rosokha-CV.pdf">Download CV <Download size={16} /></a> : <span className="cv-unavailable"><button className={`button secondary ${compact ? 'compact' : ''}`} disabled>Download CV <Download size={16} /></button><small>CV coming soon</small></span>;
}
export function Tags({ items }: { items: string[] }) { return <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>; }
