// src/components/AchievementCard.jsx
import React from "react";
import { motion } from "framer-motion";

export const AchievementCard = ({ icon, title, description, index }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 shadow-lg hover:shadow-blue-500/10 flex flex-col justify-between"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      <div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200 mb-1">
          {title}
        </h4>
        <p className="text-xs text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};