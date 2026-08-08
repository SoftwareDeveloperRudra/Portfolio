import React from 'react';
import { motion } from 'framer-motion';

const skillsBadges = [
  'Full Stack Development',
  'AI Development',
  'Web Development',
  'Database Design',
  'REST APIs',
  'UI/UX',
  'Problem Solving',
];

// Parent animation container for staggered child entrance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Entrance delay between each badge
    },
  },
};

// Individual badge animation logic on scroll
const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const DeveloperJourney = () => {
  return (
    <section className="w-full py-12 bg-background/50 backdrop-blur-sm border-y border-white/5 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <span className="text-xs uppercase tracking-widest text-primary/80 font-semibold">
            Core Competencies
          </span>
          <h3 className="text-2xl font-bold text-text mt-1">
            Developer Journey
          </h3>
        </div>

        {/* Animated Badges Horizontal Grid/Flex */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {skillsBadges.map((skill, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface/60 border border-white/10 backdrop-blur-md text-text text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:bg-surface/90 cursor-default"
            >
              {/* Subtle Ambient Glow Effect on Hover */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 opacity-0 blur-md group-hover:opacity-100 transition-opacity duration-300 -z-10" />

              {/* Animated Checkmark Icon */}
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                ✓
              </span>

              {/* Badge Text */}
              <span className="tracking-wide group-hover:text-white transition-colors duration-300">
                {skill}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperJourney;