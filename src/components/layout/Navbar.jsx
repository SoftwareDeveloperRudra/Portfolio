<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
=======
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from '../common/Button';

const navLinks = [
  { name: 'About', href: '#about' },
<<<<<<< HEAD
  { name: 'Journey', href: '#developer-journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
=======
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [active, setActive] = useState('about');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    const ids = navLinks.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0.05, 0.2, 0.5] });
    ids.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const resume = () => window.open('/resume.pdf', '_blank');

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#050b14]/80 py-3 backdrop-blur-xl' : 'bg-transparent py-5'}`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 md:px-10 xl:px-14">
        <a href="#hero" className="group flex items-center gap-2" aria-label="Rudra Umra home">
          <span className="text-sm font-black tracking-[0.18em] text-white sm:text-base">RUDRA</span>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
          <span className="text-[10px] font-semibold tracking-[0.16em] text-slate-500">DEV</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`relative text-[11px] font-semibold uppercase tracking-[0.16em] transition ${active === link.href.slice(1) ? 'text-white' : 'text-slate-500 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
          <Button variant="primary" size="sm" onClick={resume}>Hire / Resume</Button>
        </nav>

        <button className="rounded-lg border border-white/10 p-2 text-xl text-slate-300 md:hidden" onClick={() => setIsOpen((open) => !open)} aria-label="Toggle navigation">
=======

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 glass-panel border-b border-white/10' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-white flex items-center gap-1">
          <span className="text-primary">&lt;</span>
          <span>DevPortfolio</span>
          <span className="text-secondary">/&gt;</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm">Resume</Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl text-text hover:text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

<<<<<<< HEAD
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#050b14]/95 px-6 py-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className={`text-sm font-semibold uppercase tracking-[0.16em] transition hover:text-white ${active === link.href.slice(1) ? 'text-white' : 'text-slate-400'}`}>
                  {link.name}
                </a>
              ))}
              <Button variant="primary" size="sm" className="w-full" onClick={resume}>Hire / Resume</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
      {/* Mobile Drawer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-panel border-b border-white/10 px-6 py-6 absolute top-full left-0 right-0 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-text-muted hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="outline" size="sm" className="w-full">Resume</Button>
        </motion.div>
      )}
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
    </motion.header>
  );
};

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
