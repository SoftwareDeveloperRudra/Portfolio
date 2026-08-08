import React from 'react';
import { motion } from 'framer-motion';
import { TechBadge } from './TechBadge';

export const SkillCard = ({ category, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="group relative flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-purple-500/40 backdrop-blur-xl transition-all duration-500 shadow-xl overflow-hidden"
    >
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 rounded-full blur-3xl group-hover:bg-purple-600/20 transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl group-hover:bg-blue-600/20 transition-all duration-500 pointer-events-none" />

      <div>
        <div className="mb-6">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors flex items-center justify-between">
            {category.categoryTitle}
          </h3>
          <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
            {category.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {category.skills.map((skill) => (
            <TechBadge key={skill.id} skill={skill} />
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
        <span>{category.skills.length} Technologies</span>
        <span className="text-purple-400/80 group-hover:text-purple-300 transition-colors">
          Interactive Stack &rarr;
        </span>
      </div>
    </motion.div>
  );
};