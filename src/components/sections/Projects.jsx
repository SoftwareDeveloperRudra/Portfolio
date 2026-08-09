import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';

const filterCategories = ['All', 'AI', 'Web', 'PHP', 'React', 'IoT'];

<<<<<<< HEAD
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
=======
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Filter project array dynamically
  const filteredProjects = projectsData.filter((project) =>
    project.category.includes(activeFilter)
  );

  return (
    <section
      id="projects"
      aria-label="Featured Projects Section"
      className="relative py-20 md:py-32 overflow-hidden bg-background text-text"
    >
      {/* Background Ambient Blur Blobs */}
      <div className="absolute top-1/4 right-0 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-[30rem] h-[30rem] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Projects That <span className="text-gradient-primary">Solve Real Problems</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            A collection of software projects showcasing my skills in full-stack development, AI, databases, and real-world application development.
          </p>
        </motion.div>

        {/* PROJECT FILTER BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16"
        >
          {filterCategories.map((category) => {
            const isActive = activeFilter === category;
            return (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-lg shadow-blue-500/30"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* PROJECTS SHOWCASE LIST */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="space-y-12 sm:space-y-16">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* CASE STUDY MODAL OVERLAY */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
};

export default Projects;
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
