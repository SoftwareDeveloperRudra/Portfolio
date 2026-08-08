import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaMapMarkerAlt, FaRocket, FaCheckCircle } from 'react-icons/fa';

// Timeline Data Structure
const timelineData = [
  { year: '2024', title: 'Started Bachelor of Engineering', subtitle: 'Computer Science & Engineering' },
  { year: 'Phase 1', title: 'Learned Web Fundamentals', subtitle: 'HTML, CSS & JavaScript' },
  { year: 'Phase 2', title: 'Mastered Frontend Frameworks', subtitle: 'React & Modern UI Architecture' },
  { year: 'Phase 3', title: 'Explored Backend & Databases', subtitle: 'PHP, MySQL & Python' },
  { year: 'Phase 4', title: 'Building Scalable APIs', subtitle: 'FastAPI & Microservices' },
  { year: 'Phase 5', title: 'AI Integration & Products', subtitle: 'StudyMate AI & Generative Workflows' },
  { year: 'Phase 6', title: 'Web Development Internship', subtitle: 'Real-world Client Software & Web Apps' },
  { year: 'Future Goal', title: 'Software Engineer', subtitle: 'Creating High-Impact Global Products' },
];

// Fact Cards Data Structure
const factCards = [
  {
    id: 1,
    title: 'Education',
    icon: FaGraduationCap,
    gradient: 'from-blue-500/20 to-cyan-500/10',
    borderColor: 'group-hover:border-blue-500/50',
    iconColor: 'text-blue-400',
    details: [
      'Bachelor of Engineering',
      'Computer Science Engineering',
      'SN Patel Institute of Technology',
    ],
  },
  {
    id: 2,
    title: 'Focus',
    icon: FaCode,
    gradient: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'group-hover:border-purple-500/50',
    iconColor: 'text-purple-400',
    details: [
      'Full Stack Development',
      'Artificial Intelligence',
      'Problem Solving',
    ],
  },
  {
    id: 3,
    title: 'Location',
    icon: FaMapMarkerAlt,
    gradient: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'group-hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    details: [
      'Surat, Gujarat',
      'India',
    ],
  },
  {
    id: 4,
    title: 'Goal',
    icon: FaRocket,
    gradient: 'from-amber-500/20 to-orange-500/10',
    borderColor: 'group-hover:border-amber-500/50',
    iconColor: 'text-amber-400',
    details: [
      'Become a Software Engineer',
      'Build Impactful Products',
    ],
  },
];

// Framer Motion Stagger Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <section
      id="about"
      aria-label="About Me Section"
      className="relative py-20 md:py-28 overflow-hidden bg-background text-text"
    >
      {/* ================================================== */}
      {/* BACKGROUND AMBIENT GLOWS                            */}
      {/* ================================================== */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
            My Journey
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient-primary">Me</span>
          </h2>
        </motion.div>

        {/* ================================================== */}
        {/* MAIN LAYOUT GRID (LEFT: STORY, RIGHT: TIMELINE)     */}
        {/* ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE: PERSONAL STORY (7 COLS ON DESKTOP) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base md:text-lg leading-relaxed"
          >
            <p className="font-medium text-white text-lg md:text-xl leading-snug">
              I am a Computer Science Engineering student at <span className="text-blue-400 font-semibold">SN Patel Institute of Technology</span>, passionate about building software that solves real-world problems.
            </p>
            
            <p className="text-slate-400">
              My journey started with curiosity about how websites and applications work. That curiosity gradually became a passion for software development.
            </p>

            <p className="text-slate-400">
              Over time I explored frontend development, backend development, databases, and AI technologies.
            </p>

            <p className="text-slate-400">
              Today I enjoy building complete products using <span className="text-slate-200 font-semibold">React, FastAPI, PHP, Python, MySQL</span>, and modern development tools.
            </p>

            <div className="p-5 rounded-2xl glass-panel border border-blue-500/20 bg-blue-500/5 mt-6">
              <p className="text-slate-200 font-medium text-sm md:text-base italic">
                "My goal is to become a Software Engineer who creates scalable applications with great user experiences and meaningful impact."
              </p>
            </div>
          </motion.div>

          {/* RIGHT SIDE: ANIMATED TIMELINE (5 COLS ON DESKTOP) */}
          <div className="lg:col-span-5 relative pl-4 sm:pl-8">
            {/* Continuous Vertical Glowing Line */}
            <div className="absolute top-2 bottom-2 left-4 sm:left-8 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 opacity-30" />

            {/* Timeline Items List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start gap-4 group"
                >
                  {/* Glowing Marker Dot */}
                  <div className="relative flex items-center justify-center -left-[1.35rem] sm:-left-[2.35rem] mt-1 z-10">
                    <span className="w-4 h-4 rounded-full bg-slate-900 border-2 border-blue-400 group-hover:scale-125 group-hover:border-purple-400 group-hover:bg-purple-500 transition-all duration-300 shadow-sm shadow-blue-500/50" />
                    <span className="absolute w-6 h-6 rounded-full bg-blue-500/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Content Container */}
                  <div className="glass-panel p-4 rounded-xl border border-white/5 group-hover:border-white/20 transition-all duration-300 w-full hover:-translate-y-0.5">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-sm md:text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

        {/* ================================================== */}
        {/* FACT CARDS SECTION (FOUR COLUMNS / GRID)           */}
        {/* ================================================== */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {factCards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group glass-panel rounded-2xl p-6 border border-white/10 ${card.borderColor} transition-all duration-300 relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Subtle Ambient Background Gradient on Card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div>
                  {/* Card Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-2xl" />
                    </div>
                    <span className="text-xs font-mono text-slate-500">0{card.id}</span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {card.title}
                  </h3>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {card.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        <FaCheckCircle className="text-[10px] text-blue-400 mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default About;