import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

const SectionTitle = ({ subtitle, title, description, align = 'center' }) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <motion.div 
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeInUp}
      className={`flex flex-col ${alignment[align]} mb-16 relative z-10`}
    >
      {subtitle && (
        <span className="text-xs font-semibold tracking-widest uppercase text-primary mb-3 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gradient-primary max-w-2xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-muted text-base md:text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;