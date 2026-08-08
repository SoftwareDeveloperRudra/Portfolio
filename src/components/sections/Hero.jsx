import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import Button from '../common/Button';

const roles = ['FULL-STACK DEVELOPER', 'SOFTWARE ENGINEER', 'AI ENTHUSIAST', 'PROBLEM SOLVER'];

const socials = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:contact@example.com' },
  { name: 'LeetCode', icon: FaCode, href: 'https://leetcode.com' },
];

const stats = [
  { value: '03+', label: 'PROJECTS' },
  { value: '10+', label: 'TECHNOLOGIES' },
  { value: 'AI + WEB', label: 'FOCUS' },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRoleIndex((prev) => (prev + 1) % roles.length), 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" aria-label="Hero Section" className="relative min-h-[calc(100vh-5rem)] overflow-hidden flex items-center py-16 md:py-20">
      {/* Reference-inspired art direction: bold typography + portrait + diagonal architecture */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-[14%] top-[12%] h-[72%] w-[58%] rotate-[-14deg] border border-violet-400/10 bg-violet-500/[0.025]" />
        <div className="absolute right-[-18%] top-[-15%] h-[95%] w-[70%] rotate-[18deg] border border-fuchsia-400/10 bg-fuchsia-500/[0.02]" />
        <div className="absolute -bottom-[35%] left-[30%] h-[65%] w-[65%] rotate-[-9deg] border border-indigo-400/10" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '52px 52px' }} />
        <motion.div animate={{ scale: [1, 1.16, 1], opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute left-[36%] top-[18%] h-80 w-80 rounded-full bg-violet-500/20 blur-[130px]" />
        <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} className="absolute right-[8%] bottom-[0] h-96 w-96 rounded-full bg-fuchsia-500/15 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-8 px-6 md:px-10 lg:grid-cols-12 lg:gap-2 xl:px-12">
        <div className="lg:col-span-8 lg:pr-4">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-5 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-violet-300 sm:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(167,139,250,.8)] animate-pulse" />
            Available for new opportunities
          </motion.div>

          <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
            Hello, I'm
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.08 }} className="max-w-[980px] text-[clamp(3.2rem,7.6vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.065em] text-white">
            I DON'T JUST
            <br />
            <span className="text-gradient-accent">WRITE CODE.</span>
            <br />
            I BUILD
            <br />
            EXPERIENCES.
          </motion.h1>

          <div className="mt-5 flex h-7 items-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span key={roleIndex} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} transition={{ duration: 0.3 }} className="text-xs font-bold uppercase tracking-[0.22em] text-violet-300 sm:text-sm">
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }} className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            I build scalable web applications, AI-powered products, and polished digital experiences that turn ideas into useful software.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="mt-7 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" icon={HiArrowRight} iconPosition="right" onClick={() => scrollTo('projects')}>View Projects</Button>
            <Button variant="outline" size="lg" icon={HiDownload} iconPosition="left" onClick={() => window.open('/resume.pdf', '_blank')}>Resume</Button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.38 }} className="mt-7 flex items-center gap-5">
            {socials.map(({ name, icon: Icon, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="text-slate-500 transition hover:-translate-y-0.5 hover:text-violet-300"><Icon className="text-base" /></a>
            ))}
          </motion.div>
        </div>

        {/* Portrait: put your own image at public/profile.jpg */}
        <motion.div initial={{ opacity: 0, x: 45 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.18 }} className="relative mt-2 flex min-h-[430px] items-end justify-center lg:col-span-4 lg:mt-0 lg:min-h-[620px]">
          <div className="absolute bottom-0 right-[-20%] h-[85%] w-[120%] rounded-full bg-violet-500/10 blur-[90px]" />
          <div className="absolute bottom-[4%] right-[-4%] h-[86%] w-[92%] rotate-[5deg] border border-violet-300/10" />

          <div className="relative z-10 flex h-full w-full items-end justify-center lg:justify-end">
            {/* Ambient Glow Behind Image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Faded Profile Image */}
            <img 
              src="/profile.png" 
              alt="Rudra Umra" 
              className="relative z-10 h-auto max-h-[750px] w-[130%] max-w-none object-contain scale-125 lg:scale-135 origin-bottom drop-shadow-[0_30px_70px_rgba(139,92,246,.25)] brightness-95 contrast-105 saturate-90" 
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                WebkitMaskComposite: 'source-in',
                maskComposite: 'intersect'
              }}
              onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} 
            />

            {/* Fallback frame if image missing */}
            <div className="relative z-10 hidden h-[440px] w-[290px] items-center justify-center border border-violet-300/20 bg-slate-950/40 text-center backdrop-blur-sm">
            </div>

            {/* Currently Building Badge */}
            <div className="absolute bottom-8 left-4 z-20 border border-white/10 bg-slate-950/85 px-4 py-3 backdrop-blur-md">
              <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500">Currently building</p>
              <p className="mt-1 text-sm font-bold text-white">Full Stack + AI</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Reference-like stats strip */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.6 }} className="absolute bottom-5 left-1/2 z-20 hidden w-[min(680px,78vw)] -translate-x-1/2 grid-cols-3 gap-2 md:grid">
        {stats.map((stat) => (
          <div key={stat.label} className="border border-white/10 bg-slate-950/55 px-4 py-3 text-center backdrop-blur-md">
            <div className="text-lg font-black text-white">{stat.value}</div>
            <div className="mt-0.5 text-[8px] font-semibold uppercase tracking-[0.25em] text-slate-500">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.button onClick={() => scrollTo('about')} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} className="absolute bottom-5 right-7 z-20 hidden flex-col items-center gap-2 text-slate-600 transition hover:text-violet-300 md:flex" aria-label="Scroll to About Section">
        <span className="text-[8px] uppercase tracking-[0.35em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="h-7 w-px bg-slate-700" />
      </motion.button>
    </section>
  );
};

export default Hero;
