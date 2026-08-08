import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCheckCircle, FaBookOpen } from 'react-icons/fa';
import Button from '../common/Button';

const ProjectCard = ({ project, index, onOpenCaseStudy }) => {
  const isEven = index % 2 === 0;

  return (
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
              </div>
            ))}
          </div>

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