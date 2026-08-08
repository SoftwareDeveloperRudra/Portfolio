// src/components/JourneySection.jsx
import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { timelineEvents, achievementsData, statisticsData } from "../data/journeyData";
import { TimelineItem } from "./TimelineItem";
import { AchievementCard } from "./AchievementCard";
import { Counter } from "./Counter";

export const JourneySection = () => {
  const [activeEventId, setActiveEventId] = useState(timelineEvents[0].id);
  const containerRef = useRef(null);

  // Active event selector
  const activeEvent = timelineEvents.find((e) => e.id === activeEventId) || timelineEvents[0];

  // Scroll Progress Line Animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#07090E] text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans"
      aria-label="Experience, Education, and Achievements"
    >
      {/* Background Lights & Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <span className="inline-block text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full mb-4">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Learning, Building & Growing Every Year
          </h2>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
            Every project, internship, and milestone has helped me become a stronger software engineer.
          </p>
        </motion.div>

        {/* Dynamic Timeline Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-24">
          
          {/* Left Column: Interactive Vertical Timeline Bar (35%) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-28 bg-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Milestone Navigator
              </h3>

              <div className="relative pl-2 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
                {/* Static Timeline Axis Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gray-800" />
                
                {/* Animated Dynamic Fill Axis Line */}
                <motion.div
                  style={{ scaleY }}
                  className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-blue-400 origin-top"
                />

                <div className="space-y-2">
                  {timelineEvents.map((event) => (
                    <TimelineItem
                      key={event.id}
                      event={event}
                      isActive={activeEventId === event.id}
                      onClick={() => setActiveEventId(event.id)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Content Detail Panel (65%) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <motion.div
              key={activeEvent.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-2xl relative overflow-hidden group"
            >
              {/* Card Ambient Glow */}
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {activeEvent.year}
                </span>
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  {activeEvent.type}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {activeEvent.title}
              </h3>
              
              <h4 className="text-base sm:text-lg font-medium text-purple-400 mb-6">
                {activeEvent.subtitle} {activeEvent.institution && `• ${activeEvent.institution}`}
              </h4>

              <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
                {activeEvent.description}
              </p>

              {/* Special Internship Highlight Section */}
              {activeEvent.highlights && (
                <div className="mb-6 p-4 rounded-xl bg-black/30 border border-white/5 space-y-2">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                    Key Deliverables & Skills
                  </span>
                  <ul className="space-y-2">
                    {activeEvent.highlights.map((item, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-gray-300 flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skill Tags */}
              {activeEvent.skills && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {activeEvent.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Achievements Grid Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Milestones & Achievements
          </h3>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto">
            Key accomplishments and continuous progress throughout my software development path.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20"
        >
          {achievementsData.map((item, index) => (
            <AchievementCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20 border border-white/10 backdrop-blur-2xl shadow-2xl"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {statisticsData.map((stat) => (
              <div key={stat.id} className="flex flex-col items-center justify-center p-2">
                <span className="text-xs sm:text-sm font-medium text-gray-400 mb-2">
                  {stat.label}
                </span>
                {stat.isText ? (
                  <span className="font-extrabold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {stat.textValue}
                  </span>
                ) : (
                  <Counter target={stat.target} suffix={stat.suffix} />
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default JourneySection;