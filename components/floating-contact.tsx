'use client';
import { useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion } from 'motion/react';
import { Linkedin, Mail, MessageCircle, X } from 'lucide-react';
import { contact } from '@/data/portfolio';

type Bounds = { left: number; right: number; top: number; bottom: number; size: number };
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max));
const actions = [
  { label: 'Email', aria: 'Email Denys Rosokha', href: `mailto:${contact.email}`, icon: Mail, external: false },
  { label: 'LinkedIn', aria: 'Open Denys Rosokha LinkedIn profile', href: contact.linkedin, icon: Linkedin, external: true },
  { label: 'WhatsApp', aria: 'Contact Denys Rosokha on WhatsApp', href: `https://wa.me/${contact.phone.replace(/\D/g, '')}`, icon: MessageCircle, external: true },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [nearContact, setNearContact] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [ready, setReady] = useState(false);
  const [side, setSide] = useState<'left' | 'right'>('right');
  const dock = useRef<'left' | 'right'>('right');
  const [menuTop, setMenuTop] = useState(-178);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const launcher = useRef<HTMLButtonElement>(null);
  const bounds = useRef<Bounds>({ left: 28, right: 28, top: 28, bottom: 28, size: 54 });
  const gesture = useRef<{ id: number; startX: number; startY: number; x: number; y: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduce = useReducedMotion();
  const hidden = nearContact && !dragging;

  useEffect(() => {
    let initialized = false;
    const measure = () => {
      if (!container.current) return;
      const style = getComputedStyle(container.current, '::before');
      const viewport = window.visualViewport;
      const left = viewport?.offsetLeft ?? 0;
      const top = viewport?.offsetTop ?? 0;
      const width = viewport?.width ?? innerWidth;
      const height = viewport?.height ?? innerHeight;
      const size = container.current.offsetWidth;
      const b = { left: left + parseFloat(style.paddingLeft), right: left + width - parseFloat(style.paddingRight) - size,
        top: top + parseFloat(style.paddingTop), bottom: top + height - parseFloat(style.paddingBottom) - size, size };
      bounds.current = b;
      x.stop(); y.stop();
      x.set(gesture.current ? clamp(x.get(), b.left, b.right) : dock.current === 'right' ? b.right : b.left);
      y.set(initialized ? clamp(y.get(), b.top, b.bottom) : b.bottom);
      initialized = true;
      setOpen(false);
      setReady(true);
    };
    measure();
    window.addEventListener('resize', measure);
    window.visualViewport?.addEventListener('resize', measure);
    window.visualViewport?.addEventListener('scroll', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.visualViewport?.removeEventListener('resize', measure);
      window.visualViewport?.removeEventListener('scroll', measure);
      x.stop(); y.stop();
    };
  }, [x, y]);

  useEffect(() => {
    const section = document.getElementById('contact');
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setNearContact(entry.isIntersecting && entry.intersectionRatio >= .15), { threshold: [0, .15] });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hidden) return;
    setOpen(false);
    if (container.current?.contains(document.activeElement)) {
      document.querySelector<HTMLAnchorElement>('#contact a')?.focus({ preventScroll: true });
    }
  }, [hidden]);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        launcher.current?.focus();
        setTooltipDismissed(true);
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  const finishDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const g = gesture.current;
    if (!g || g.id !== event.pointerId) return;
    gesture.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    if (g.moved) {
      const b = bounds.current;
      dock.current = x.get() < (b.left + b.right) / 2 ? 'left' : 'right';
      setSide(dock.current);
      animate(x, dock.current === 'left' ? b.left : b.right, { duration: reduce ? 0 : .24, ease: [.22, 1, .36, 1] });
      animate(y, clamp(y.get(), b.top, b.bottom), { duration: reduce ? 0 : .24 });
    }
    setDragging(false);
  };

  return <motion.div ref={container} className="floating-contact" data-side={side} data-dragging={dragging} inert={hidden || !ready} aria-hidden={hidden || !ready}
    initial={false} animate={{ opacity: hidden || !ready ? 0 : 1, scale: hidden && !reduce ? .94 : 1 }}
    transition={{ duration: reduce ? .08 : .2 }} style={{ x, y, pointerEvents: hidden ? 'none' : undefined }}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
    <motion.button ref={launcher} type="button" className="contact-launcher" aria-label="Open contact options"
      aria-expanded={open} aria-controls={open ? 'floating-contact-options' : undefined}
      whileHover={reduce ? undefined : { scale: 1.025 }} whileTap={reduce ? undefined : { scale: .97 }}
      onMouseEnter={() => setTooltipDismissed(false)} onFocus={() => setTooltipDismissed(false)}
      onKeyDown={event => { if (event.key === 'Escape') setTooltipDismissed(true); }}
      onPointerDown={event => {
        if (!event.isPrimary || event.button !== 0) return;
        x.stop(); y.stop(); suppressClick.current = false;
        gesture.current = { id: event.pointerId, startX: event.clientX, startY: event.clientY, x: x.get(), y: y.get(), moved: false };
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={event => {
        const g = gesture.current;
        if (!g || g.id !== event.pointerId) return;
        const dx = event.clientX - g.startX, dy = event.clientY - g.startY;
        if (!g.moved && Math.hypot(dx, dy) < 6) return;
        g.moved = true; suppressClick.current = true;
        setDragging(true); setOpen(false); setTooltipDismissed(true);
        const b = bounds.current;
        x.set(clamp(g.x + dx, b.left, b.right)); y.set(clamp(g.y + dy, b.top, b.bottom));
      }}
      onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={finishDrag}
      onClick={event => {
        if (suppressClick.current && event.detail !== 0) { suppressClick.current = false; return; }
        const b = bounds.current;
        const desiredTop = y.get() - 178 >= b.top ? y.get() - 178 : y.get() + b.size + 12;
        setMenuTop(clamp(desiredTop, b.top, Math.max(b.top, b.bottom + b.size - 166)) - y.get());
        setOpen(value => !value); setTooltipDismissed(true);
      }}>
      <motion.span className="contact-orb-icon" animate={{ rotate: open && !reduce ? 90 : 0 }} transition={{ duration: reduce ? 0 : .2 }}>
        {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}
      </motion.span>
    </motion.button>
    {!open && !dragging && !tooltipDismissed && <span className="contact-launcher-tooltip" role="tooltip">Contact me</span>}
    <AnimatePresence>{open && !hidden && <motion.div id="floating-contact-options" className="floating-contact-options" style={{ top: menuTop }}
      initial="closed" animate="open" exit="closed" variants={{ closed: { opacity: 0, transition: { duration: .08 } }, open: { opacity: 1, transition: { staggerChildren: reduce ? 0 : .05 } } }}>
      {actions.map(({ label, aria, href, icon: Icon, external }) => <motion.a key={label} href={href} aria-label={aria}
        target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}
        variants={{ closed: { opacity: 0, y: reduce ? 0 : 9, x: reduce ? 0 : side === 'right' ? 5 : -5, scale: reduce ? 1 : .97 }, open: { opacity: 1, x: 0, y: 0, scale: 1 } }}
        transition={{ duration: reduce ? .08 : .26, ease: [.22, 1, .36, 1] }}
        onClick={() => { setOpen(false); launcher.current?.focus(); setTooltipDismissed(true); }}><Icon size={18} aria-hidden="true" />{label}</motion.a>)}
    </motion.div>}</AnimatePresence>
  </motion.div>;
}
