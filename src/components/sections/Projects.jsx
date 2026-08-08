import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '../../data/projectsData';
import ProjectCard from './ProjectCard';
import CaseStudyModal from './CaseStudyModal';

const filterCategories = ['All', 'AI', 'Web', 'PHP', 'React', 'IoT'];

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