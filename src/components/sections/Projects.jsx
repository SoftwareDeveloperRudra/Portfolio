import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';

const filterCategories = ['All', 'AI', 'Web', 'PHP', 'React', 'IoT'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const filteredProjects = projectsData.filter((project) => project.category.includes(activeFilter));

  return (
    <section id="projects" className="relative overflow-hidden bg-[#050b14] py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">02 / Selected work</p>
            <h2 className="max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">Things I&apos;ve <span className="text-gradient-accent">built.</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">Real projects across full-stack development, AI, databases and connected systems — presented as case-study-ready work.</p>
          </div>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">{String(filteredProjects.length).padStart(2, '0')} projects</div>
        </motion.div>

        <div className="mb-12 flex flex-wrap gap-2 border-y border-white/10 py-4">
          {filterCategories.map((category) => (
            <button key={category} onClick={() => setActiveFilter(category)} className={`relative rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${activeFilter === category ? 'text-[#050b14]' : 'text-slate-500 hover:text-white'}`}>
              {activeFilter === category && <motion.span layoutId="project-filter" className="absolute inset-0 rounded-full bg-cyan-300" />}
              <span className="relative">{category}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="space-y-7">
            {filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpenCaseStudy={setSelectedCaseStudy} />)}
          </motion.div>
        </AnimatePresence>
      </div>
      <CaseStudyModal project={selectedCaseStudy} onClose={() => setSelectedCaseStudy(null)} />
    </section>
  );
}
