import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FaIcons from 'react-icons/fa';

export const TechBadge = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = FaIcons[skill.iconName] || FaIcons.FaCode;
  const glowColor = skill.color || '#8B5CF6';

  return (
    <div className="relative">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        tabIndex={0}
        role="button"
        aria-label={`${skill.name} skill badge.`}
        className="group relative flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-purple-500/80"
        style={{
          boxShadow: isHovered ? `0 0 20px ${glowColor}33` : 'none',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-950/80 border border-slate-800 group-hover:border-slate-700 transition-colors"
            style={{ color: glowColor }}
          >
            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
          </div>

          <span className="text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
            {skill.name}
          </span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-semibold bg-slate-950/80 border border-slate-800/90 text-purple-300 group-hover:border-purple-500/40 transition-colors">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: glowColor }}
          />
          {skill.proficiency}%
        </div>
      </motion.div>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 5, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-4 rounded-xl bg-slate-950/95 border border-purple-500/30 text-slate-100 shadow-2xl backdrop-blur-xl z-50 pointer-events-none"
            style={{
              boxShadow: `0 10px 30px -5px ${glowColor}40`,
            }}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
              <h5 className="font-bold text-sm text-white">{skill.name}</h5>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/50">
                {skill.experience}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {skill.description}
            </p>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Projects Used In:
              </span>
              <div className="flex flex-wrap gap-1">
                {skill.projectsUsedIn.map((proj, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300"
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-3 h-3 bg-slate-950 border-r border-b border-purple-500/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};