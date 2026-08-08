import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from 'react-icons/fa';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import Button from '../common/Button';

// Rotating headline titles
const roles = [
  'Full Stack Developer',
  'Software Engineer',
  'AI Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle through titles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Smooth scroll handler for scroll indicator
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      aria-label="Hero Section"
      className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 md:py-20 overflow-hidden"
    >
      {/* Background Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Animated Ambient Glow Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[30rem] h-[30rem] bg-purple-600/25 rounded-full blur-[140px] pointer-events-none"
      />

      {/* Main Grid Content Layout */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: INTRO & CTA */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-blue-500/20 text-xs md:text-sm font-medium text-blue-400 mb-6 shadow-sm shadow-blue-500/10"
          >
            <span className="inline-block animate-bounce">👋</span>
            <span>Hello, I'm</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2"
          >
            Rudra Umra
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-10 sm:h-12 md:h-14 overflow-hidden mb-6 flex items-center"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-xl sm:text-3xl md:text-4xl font-bold text-gradient-accent"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl mb-8"
          >
            I'm passionate about building scalable web applications, AI-powered products, and software that solves real-world problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
          >
            <Button
              variant="primary"
              size="lg"
              icon={HiArrowRight}
              iconPosition="right"
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="View My Work"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={HiDownload}
              iconPosition="left"
              onClick={() => window.open('/resume.pdf', '_blank')}
              aria-label="Download Resume"
            >
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-5 pt-4 border-t border-white/5 w-full max-w-md"
          >
            <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
              Connect
            </span>
            <div className="h-px bg-white/10 flex-grow max-w-[40px]" />
            <div className="flex items-center gap-4">
              {[
                { name: 'GitHub', icon: FaGithub, href: 'https://github.com' },
                { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
                { name: 'Email', icon: FaEnvelope, href: 'mailto:contact@example.com' },
                { name: 'LeetCode', icon: FaCode, href: 'https://leetcode.com' },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-slate-400 hover:text-blue-400 text-xl transition-colors duration-200 p-2 rounded-lg hover:bg-white/5"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN: DEVELOPER WORKSPACE VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-6 relative flex justify-center items-center mt-6 lg:mt-0"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-lg"
          >
            <div className="glass-panel rounded-2xl p-6 shadow-2xl border border-white/10 relative overflow-hidden backdrop-blur-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="text-xs text-slate-400 font-mono tracking-wider">
                  DeveloperWorkspace.tsx
                </div>
                <div className="w-12" />
              </div>

              <div className="space-y-3 font-mono text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <span>1</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">engineer</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-emerald-400">"Rudra Umra"</span>;
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span>2</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">status</span>
                  <span className="text-slate-300">=</span>
                  <span className="text-emerald-400">"Building Future"</span>;
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span>3</span>
                  <span className="text-slate-400">// Core Skills & Stack</span>
                </div>
                <div className="pl-4 flex flex-wrap gap-2 py-2">
                  {['React', 'Tailwind', 'Node.js', 'Python', 'AI/ML'].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2.5 py-1 text-xs rounded-md bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span>4</span>
                  <span className="text-purple-400">function</span>
                  <span className="text-blue-400">solveProblem</span>() &#123;
                </div>
                <div className="pl-4 flex items-center gap-2 text-slate-500">
                  <span>5</span>
                  <span className="text-purple-400">return</span>
                  <span className="text-emerald-400">"High Impact Software"</span>;
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <span>6</span>
                  &#125;
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-emerald-400 font-medium">Available for Hire</span>
                </div>
                <span className="text-slate-500">100% Code Quality</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll to About Section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer group z-20"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-slate-500 group-hover:text-blue-400 transition-colors">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-blue-400 flex justify-center p-1.5 transition-colors"
        >
          <div className="w-1 h-2 bg-blue-400 rounded-full" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;