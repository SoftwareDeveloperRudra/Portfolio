import React from 'react';
import { motion } from 'framer-motion';
import { FLOATING_CLOUD_TECHS } from '../data/skillsData';

export const TechCloud = () => {
  return (
    <div className="relative w-full py-8 overflow-hidden rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md shadow-2xl">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center mb-6">
        <span className="text-xs font-mono tracking-widest text-purple-400 uppercase">
          Interactive Ecosystem
        </span>
        <h4 className="text-lg font-bold text-slate-200 mt-1">
          Floating Tech Cloud
        </h4>
      </div>

      <div className="relative flex flex-wrap items-center justify-center gap-3 md:gap-5 px-6 min-h-[160px]">
        {FLOATING_CLOUD_TECHS.map((tech, idx) => {
          const yOffset = (idx % 2 === 0 ? 1 : -1) * (10 + (idx * 3) % 15);
          const xOffset = (idx % 3 === 0 ? 1 : -1) * (8 + (idx * 2) % 12);
          const duration = 4 + (idx % 4) * 1.2;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, yOffset, 0, -yOffset, 0],
                x: [0, xOffset, 0, -xOffset, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
                delay: idx * 0.2,
              }}
              whileHover={{
                scale: 1.15,
                zIndex: 20,
                boxShadow: `0 0 25px ${tech.color}80`,
              }}
              className="cursor-pointer px-4 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide border bg-slate-950/80 text-slate-200 border-slate-700/60 backdrop-blur-xl transition-all duration-300 flex items-center gap-2 group"
              style={{
                borderColor: `${tech.color}40`,
              }}
              tabIndex={0}
              aria-label={`Technology: ${tech.name}`}
            >
              <span
                className="w-2 h-2 rounded-full group-hover:animate-ping"
                style={{ backgroundColor: tech.color }}
              />
              <span className="group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};