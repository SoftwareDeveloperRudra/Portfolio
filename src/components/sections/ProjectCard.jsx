import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaBookOpen } from 'react-icons/fa';
import Button from '../common/Button';

const ProjectCard = ({ project, index, onOpenCaseStudy }) => {
  const isEven = index % 2 === 0;

  return (
<<<<<<< HEAD
    <motion.article
      layout
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1220]/80 shadow-2xl backdrop-blur-xl transition-colors duration-500 hover:border-cyan-400/30"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,211,238,.09),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,.09),transparent_30%)]" />
      <div className={`relative grid items-stretch lg:grid-cols-12 ${isEven ? '' : 'lg:[&>*:first-child]:order-2'}`}>
        <div className="relative min-h-[280px] overflow-hidden lg:col-span-7 lg:min-h-[430px]">
          <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050b14] via-transparent to-transparent opacity-80" />
          <div className="absolute left-5 top-5 rounded-full border border-cyan-300/20 bg-[#050b14]/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300 backdrop-blur-md">
            {project.tag}
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
            <span className="font-mono text-xs text-white/60">0{index + 1} / 0{4}</span>
            <span className="hidden text-xs uppercase tracking-[0.18em] text-white/50 sm:block">Selected Work</span>
          </div>
        </div>

        <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-5 lg:p-10">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">{project.category.filter((c) => c !== 'All').join(' · ')}</p>
          <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">{project.shortDescription}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span key={tech} className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-slate-300 transition group-hover:border-cyan-400/20 group-hover:text-cyan-100">{tech}</span>
            ))}
          </div>

          <div className="mt-7 grid grid-cols-1 gap-2 border-t border-white/10 pt-5 sm:grid-cols-2">
            {project.features.slice(0, 4).map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-slate-400">
                <FaCheckCircle className="shrink-0 text-cyan-300" />{feature}
=======
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative glass-panel rounded-3xl p-6 md:p-10 border border-white/10 hover:border-blue-500/40 transition-all duration-500 overflow-hidden shadow-2xl"
    >
      {/* Background Accent Glows */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] group-hover:bg-blue-600/20 transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] group-hover:bg-purple-600/20 transition-all duration-500 pointer-events-none" />

      <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}>
        
        {/* IMAGE CONTAINER */}
        <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:shadow-blue-500/10 transition-all duration-500 aspect-video">
            {/* Tag Badge overlay */}
            <div className="absolute top-4 left-4 z-20">
              <span className="text-xs font-mono font-bold tracking-wider text-blue-300 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-blue-500/30">
                {project.tag}
              </span>
            </div>

            {/* Hover Image Zoom */}
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
          </div>
        </div>

        {/* INFO CONTAINER */}
        <div className={`lg:col-span-6 flex flex-col items-start ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 group-hover:border-blue-500/30 group-hover:text-blue-200 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features List */}
          <div className="grid grid-cols-2 gap-2.5 w-full mb-8 pt-4 border-t border-white/5">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                <FaCheckCircle className="text-blue-400 text-[11px] flex-shrink-0" />
                <span>{feature}</span>
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
              </div>
            ))}
          </div>

<<<<<<< HEAD
          <div className="mt-8 flex flex-wrap gap-2">
            {project.liveDemo && <Button variant="primary" size="sm" icon={FaExternalLinkAlt} onClick={() => window.open(project.liveDemo, '_blank')}>Live Demo</Button>}
            {project.github && <Button variant="outline" size="sm" icon={FaGithub} onClick={() => window.open(project.github, '_blank')}>GitHub</Button>}
            {project.hasCaseStudy && <Button variant="secondary" size="sm" icon={FaBookOpen} onClick={() => onOpenCaseStudy(project)}>Case Study</Button>}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
=======
          {/* Action Button Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveDemo && (
              <Button
                variant="primary"
                size="sm"
                icon={FaExternalLinkAlt}
                onClick={() => window.open(project.liveDemo, '_blank')}
                aria-label={`Live demo for ${project.title}`}
              >
                Live Demo
              </Button>
            )}

            {project.github && (
              <Button
                variant="outline"
                size="sm"
                icon={FaGithub}
                onClick={() => window.open(project.github, '_blank')}
                aria-label={`GitHub repository for ${project.title}`}
              >
                GitHub
              </Button>
            )}

            {project.hasCaseStudy && (
              <Button
                variant="secondary"
                size="sm"
                icon={FaBookOpen}
                onClick={() => onOpenCaseStudy(project)}
                aria-label={`Open case study for ${project.title}`}
              >
                Case Study
              </Button>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
>>>>>>> 36f352f2b4750cca9afa8203f1c992dff72fc568
