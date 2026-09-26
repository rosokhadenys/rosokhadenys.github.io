'use client';
import { useEffect, useState } from 'react';
import { Menu, X, Command } from 'lucide-react';
import { CVLink } from './ui';
const links = ['About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact'];
export function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState('');
  useEffect(() => {
    let previous = window.scrollY;
    const onScroll = () => { const y = window.scrollY; if (Math.abs(y - previous) > 8) { setHidden(y > previous && y > 180); previous = y; } };
    const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }); }, { rootMargin: '-15% 0px -60% 0px' });
    links.forEach(link => { const node = document.getElementById(link.toLowerCase()); if (node) observer.observe(node); });
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);
  return <header className={`floating-nav ${hidden && !open ? 'nav-hidden' : ''}`} onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); document.getElementById('menu-toggle')?.focus(); } }}>
    <a className="brand" href="#main" aria-label="Back to top"><Command size={20} /><span>Denys Rosokha</span></a>
    <nav className="desktop-nav" aria-label="Main navigation">{links.map(label => <a key={label} href={`#${label.toLowerCase()}`} aria-current={active === label.toLowerCase() ? 'location' : undefined}>{label}</a>)}</nav>
    <CVLink compact /><button id="menu-toggle" className="icon-button menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{links.map(label => <a key={label} href={`#${label.toLowerCase()}`} onClick={() => setOpen(false)}>{label}</a>)}</nav>}
  </header>;
}
