// src/components/TimelineItem.jsx
import React from "react";
import { motion } from "framer-motion";

export const TimelineItem = ({ event, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left relative pl-8 py-3 transition-all duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-r-xl ${
        isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
      }`}
      aria-label={`Select item: ${event.title}`}
    >
      {/* Node Dot */}
      <span
        className={`absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${
          isActive
            ? "bg-blue-500 border-white scale-125 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
            : "bg-gray-900 border-gray-600 group-hover:border-blue-400"
        }`}
      />

      <div className="flex flex-col">
        <span className="text-xs font-mono font-semibold tracking-wider text-blue-400 uppercase">
          {event.year}
        </span>
        <span className="text-sm sm:text-base font-semibold text-white truncate group-hover:text-blue-300 transition-colors">
          {event.title}
        </span>
        <span className="text-xs text-gray-400 truncate">
          {event.subtitle}
        </span>
      </div>
    </button>
  );
};