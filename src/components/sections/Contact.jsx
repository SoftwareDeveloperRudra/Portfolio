import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../common/Button';

const links = [
  { label: 'GitHub', value: '@rudraumra', href: 'https://github.com/rudraumra', icon: FaGithub },
  { label: 'LinkedIn', value: 'in/rudra-umra', href: 'https://linkedin.com/in/rudra-umra', icon: FaLinkedin },
  { label: 'Email', value: 'Available on request', href: 'https://linkedin.com/in/rudra-umra', icon: HiMail },
];

export default function Contact() {
  const email = () => {
    window.open('https://linkedin.com/in/rudra-umra', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-[#050b14] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)', backgroundSize: '56px 56px' }} />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 xl:px-14">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">05 / Contact</p>
            <h2 className="max-w-5xl text-[clamp(3.2rem,8vw,7rem)] font-black leading-[0.88] tracking-[-0.06em] text-white">
              LET&apos;S BUILD
              <br />
              <span className="text-gradient-accent">SOMETHING.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Have a project, internship opportunity, or an interesting idea? I&apos;m always open to meaningful conversations and new challenges.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="primary" size="lg" icon={FaArrowRight} iconPosition="right" onClick={email}>Get in touch</Button>
              <a href="#projects" className="inline-flex items-center rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:border-cyan-400/30 hover:text-white">Explore my work</a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1220]">
              <div className="border-b border-white/10 px-6 py-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">Connect / 2026</p>
              </div>
              <div className="divide-y divide-white/5">
                {links.map(({ label, value, href, icon: Icon }) => (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="group flex items-center gap-4 px-6 py-5 transition hover:bg-cyan-400/[0.04]">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-400 transition group-hover:border-cyan-400/20 group-hover:text-cyan-300"><Icon /></span>
                    <span className="min-w-0"><span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">{label}</span><span className="mt-1 block truncate text-sm font-semibold text-slate-300 group-hover:text-white">{value}</span></span>
                    <FaArrowRight className="ml-auto text-xs text-slate-700 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
