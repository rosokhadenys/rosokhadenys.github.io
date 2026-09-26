'use client';
import Image from 'next/image';
import { publicAsset } from '@/lib/public-asset';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { CVLink } from './ui';

export function Hero() {
  const reduce = useReducedMotion();
  return <section className="hero-poster shell" aria-labelledby="hero-title">
    <div className="poster-atmosphere" aria-hidden="true"><div className="poster-grid" /><div className="poster-rings" /><span className="poster-marker marker-one">+</span><span className="poster-marker marker-two">+</span></div>
    <motion.div className="hero-portrait reveal-element" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduce ? 0 : .65 }}>
      <Image src={publicAsset('/images/editorial-portrait-v2.png')} alt={`Illustrated portrait of ${profile.name}`} width={1073} height={1466} sizes="(max-width: 650px) 94vw, (max-width: 800px) 66vw, (max-width: 1100px) 60vw, 54vw" preload />
    </motion.div>
    <div className="poster-labels"><div className="eyebrow"><span>01 /</span> THE DIRECTION</div><p>PEOPLE.<br />PROCESS.<br />TECHNOLOGY.</p></div>
    <motion.div className="hero-copy" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: reduce ? 0 : .08 } } }}>
      {[
        <h1 id="hero-title" key="title">{profile.role}<br /><span>{profile.direction}.</span></h1>,
        <p className="hero-intro" key="intro">{profile.introduction}</p>,
        <div className="hero-actions" key="actions"><a className="button primary" href="#experience">View Experience <ArrowUpRight size={18} /></a><CVLink /></div>,
      ].map((child, index) => <motion.div className="reveal-element" key={index} variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduce ? 0 : .4 }}>{child}</motion.div>)}
    </motion.div>
  </section>;
}
