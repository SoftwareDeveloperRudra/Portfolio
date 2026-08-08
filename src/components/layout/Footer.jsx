import React from 'react';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/rudraumra', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rudra-umra', icon: FaLinkedin },
  { label: 'LeetCode', href: 'https://leetcode.com/rudraumra', icon: FaCode },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#03070d] text-slate-500">
      <div className="mx-auto max-w-[1400px] px-6 py-8 md:px-10 xl:px-14">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <a href="#hero" className="inline-flex items-center gap-2 text-sm font-black tracking-[0.18em] text-white"><span>RUDRA</span><span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" /><span className="text-[10px] text-slate-600">DEV</span></a>
            <p className="mt-2 text-xs text-slate-600">Designing. Building. Learning. Shipping.</p>
          </div>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-lg border border-white/5 text-slate-500 transition hover:border-cyan-400/20 hover:text-cyan-300"><Icon className="text-sm" /></a>)}
            <a href="#hero" aria-label="Back to top" className="ml-2 grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-cyan-400/30 hover:text-white"><HiArrowUp /></a>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-2 border-t border-white/5 pt-5 text-[10px] uppercase tracking-[0.18em] sm:flex-row sm:justify-between"><span>© 2026 Rudra Umra</span><span>Built with React · Tailwind · Framer Motion</span></div>
      </div>
    </footer>
  );
}
