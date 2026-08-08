import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaCheckCircle } from 'react-icons/fa';

const CaseStudyModal = ({ project, onClose }) => {
  // Prevent background scrolling while modal is active
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-3xl max-h-[85vh] glass-panel border border-white/15 rounded-3xl p-6 sm:p-10 overflow-y-auto shadow-2xl z-10 bg-slate-900/90 text-left"
        >
          {/* Close Icon Button */}
          <button
            onClick={onClose}
            aria-label="Close Case Study Modal"
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <HiX className="text-xl" />
          </button>

          {/* Modal Header */}
          <div className="mb-8 pr-8">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block mb-3">
              Case Study
            </span>
            <h2 id="modal-title" className="text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>

          {/* Modal Body Sections */}
          <div className="space-y-8 text-slate-300 text-sm sm:text-base leading-relaxed">
            
            {/* Overview */}
            <div>
              <h3 className="text-lg font-bold text-white mb-2 text-blue-300">Overview</h3>
              <p className="text-slate-400">{caseStudy.overview}</p>
            </div>

            {/* Problem vs Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div className="bg-red-500/5 p-4 rounded-xl border border-red-500/20">
                <h4 className="text-sm font-bold text-red-400 mb-2">The Problem</h4>
                <p className="text-xs sm:text-sm text-slate-300">{caseStudy.problem}</p>
              </div>

              <div className="bg-emerald-500/5 p-4 rounded-xl border border-emerald-500/20">
                <h4 className="text-sm font-bold text-emerald-400 mb-2">The Solution</h4>
                <p className="text-xs sm:text-sm text-slate-300">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Architecture */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-lg font-bold text-white mb-2 text-purple-300">Architecture & System Flow</h3>
              <p className="text-slate-400">{caseStudy.architecture}</p>
            </div>

            {/* Challenges & Learnings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
              <div>
                <h4 className="text-sm font-bold text-amber-400 mb-2">Key Challenges</h4>
                <p className="text-xs sm:text-sm text-slate-400">{caseStudy.challenges}</p>
              </div>

              <div>
                <h4 className="text-sm font-bold text-cyan-400 mb-2">Key Learnings</h4>
                <p className="text-xs sm:text-sm text-slate-400">{caseStudy.learnings}</p>
              </div>
            </div>

            {/* Future Improvements */}
            {caseStudy.futureImprovements && (
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-lg font-bold text-white mb-3 text-emerald-300">Future Roadmap</h3>
                <ul className="space-y-2">
                  {caseStudy.futureImprovements.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                      <FaCheckCircle className="text-emerald-400 text-[11px] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CaseStudyModal;