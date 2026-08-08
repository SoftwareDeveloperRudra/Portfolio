import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skillsData';
import { SkillCard } from './SkillCard';
import { TechCloud } from './TechCloud';

// Variants for staggered grid entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const SkillSection = () => {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 overflow-hidden"
    >
      {/* Decorative Background Grid */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Glow Orbs */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-700/15 rounded-full blur-[128px] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-700/15 rounded-full blur-[128px] pointer-events-none" 
      />

      <div className="relative max-w-7xl mx-auto space-y-16">
        {/* Header Block & Tech Cloud */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/50 text-purple-300 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              My Expertise
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Technologies I Use to Build{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Modern Software
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              I enjoy working across the entire development lifecycle—from designing responsive interfaces to building scalable backends and integrating AI into real-world applications.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full"
          >
            <TechCloud />
          </motion.div>
        </div>

        {/* Skill Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SKILL_CATEGORIES.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillSection;