import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  Code2,
  Terminal,
  Cpu,
  Award,
  GitBranch,
  Database,
  Layout,
  BookOpen,
  Sparkles,
  Flame,
  Star,
  GitFork,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import {
  githubData,
  codingProfiles,
  certifications,
  currentLearningTopics,
} from "../data/developerPresenceData";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const chipContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const chipVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4 },
  },
};

// Helper to render dynamic SVG icons for profile cards
const renderProfileIcon = (iconType) => {
  const iconProps = { className: "w-5 h-5 text-zinc-300 transition-colors group-hover:text-cyan-400" };
  switch (iconType) {
    case "github":
      return <Github {...iconProps} />;
    case "linkedin":
      return <Linkedin {...iconProps} />;
    case "code":
      return <Code2 {...iconProps} />;
    case "terminal":
      return <Terminal {...iconProps} />;
    case "cpu":
      return <Cpu {...iconProps} />;
    case "award":
      return <Award {...iconProps} />;
    default:
      return <ExternalLink {...iconProps} />;
  }
};

// Helper for Certificate Card Icons
const renderCertIcon = (iconType) => {
  const iconProps = { className: "w-5 h-5 text-indigo-400" };
  switch (iconType) {
    case "python":
      return <Terminal {...iconProps} />;
    case "layout":
      return <Layout {...iconProps} />;
    case "database":
      return <Database {...iconProps} />;
    case "git-branch":
      return <GitBranch {...iconProps} />;
    case "code-2":
      return <Code2 {...iconProps} />;
    default:
      return <Award {...iconProps} />;
  }
};

// Heatmap level color mapping
const getContributionColor = (level) => {
  switch (level) {
    case 1:
      return "bg-indigo-950/80 border-indigo-800/40";
    case 2:
      return "bg-indigo-800/80 border-indigo-600/50";
    case 3:
      return "bg-indigo-600 border-indigo-400/60";
    case 4:
      return "bg-cyan-400 border-cyan-200 shadow-[0_0_8px_rgba(34,211,238,0.6)]";
    default:
      return "bg-zinc-900/90 border-zinc-800/60";
  }
};

export default function DeveloperPresence() {
  return (
    <section
      id="presence"
      className="relative w-full py-24 bg-zinc-950 text-zinc-100 overflow-hidden font-sans select-none"
      aria-label="Developer Presence and Continuous Learning"
    >
      {/* FUTURISTIC BACKGROUND GRID & LIGHT GLOWS */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f2e0f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f2e0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800 backdrop-blur-md shadow-inner text-xs font-mono font-medium tracking-wider text-cyan-400 uppercase">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Developer Presence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Learning Never Stops
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Beyond building projects, I continuously learn new technologies, contribute to GitHub,
            strengthen problem-solving skills, and earn certifications.
          </p>
        </motion.div>

        {/* MAIN DESKTOP GRID (LEFT: GITHUB OVERVIEW | RIGHT: CODING PROFILES) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12"
        >
          {/* LEFT COLUMN: GITHUB OVERVIEW CARD (7 COLS) */}
          <motion.div variants={itemVariants} className="lg:col-span-7">
            <div className="group relative rounded-3xl p-6 sm:p-8 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 hover:border-purple-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden">
              {/* Card Ambient Glow Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />

              {/* Profile Header Block */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 pb-6 border-b border-zinc-800/60">
                <div className="relative">
                  <img
                    src={githubData.profile.avatarUrl}
                    alt={githubData.profile.name}
                    className="w-20 h-20 rounded-2xl object-cover ring-2 ring-zinc-700/50 group-hover:ring-cyan-400/80 transition-all duration-300 shadow-md"
                  />
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 ring-2 ring-zinc-900"></span>
                  </span>
                </div>

                <div className="text-center sm:text-left flex-1 space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100 flex items-center justify-center sm:justify-start gap-2">
                        {githubData.profile.name}
                        <span className="text-xs font-mono font-normal text-zinc-400">
                          ({githubData.profile.username})
                        </span>
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-medium">
                        {githubData.profile.bio}
                      </p>
                    </div>

                    <a
                      href={githubData.profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit GitHub profile"
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800/80 hover:bg-zinc-700 text-xs font-mono font-medium text-zinc-200 border border-zinc-700/60 hover:border-zinc-500 transition-all group/btn"
                    >
                      <Github className="w-3.5 h-3.5 text-zinc-300 group-hover/btn:rotate-12 transition-transform" />
                      <span>Follow</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Animated Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6">
                {[
                  { label: "Repositories", value: githubData.stats.repositories },
                  { label: "Contributions", value: `${githubData.stats.contributions}+` },
                  { label: "Followers", value: githubData.stats.followers },
                  { label: "Following", value: githubData.stats.following },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-zinc-950/50 border border-zinc-800/40 text-center hover:border-zinc-700/60 transition-colors"
                  >
                    <div className="text-lg sm:text-xl font-extrabold font-mono text-zinc-100 bg-gradient-to-r from-cyan-400 to-indigo-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Streak Counter & Top Languages */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-6">
                {/* Streak Card */}
                <div className="md:col-span-5 p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-zinc-900/60 to-zinc-950/80 border border-amber-500/20 flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/40">
                    <Flame className="w-6 h-6 animate-bounce" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-amber-300/80 uppercase">Active Streak</div>
                    <div className="text-lg font-extrabold text-amber-200 font-mono">
                      {githubData.stats.currentStreak} Days
                    </div>
                    <div className="text-[10px] text-zinc-400">
                      Best: {githubData.stats.longestStreak} days continuous
                    </div>
                  </div>
                </div>

                {/* Top Languages Stack */}
                <div className="md:col-span-7 p-4 rounded-2xl bg-zinc-950/50 border border-zinc-800/40 flex flex-col justify-center space-y-2">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Top Languages
                  </div>
                  <div className="h-2 w-full bg-zinc-800/80 rounded-full overflow-hidden flex gap-0.5">
                    {githubData.topLanguages.map((lang, idx) => (
                      <div
                        key={idx}
                        style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                        className="h-full transition-all duration-500"
                        title={`${lang.name}: ${lang.percentage}%`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 pt-1">
                    {githubData.topLanguages.slice(0, 4).map((lang, idx) => (
                      <span key={idx} className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-300">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: lang.color }} />
                        {lang.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contribution Activity Graph Simulation */}
              <div className="space-y-2 pb-6">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
                    Contribution Activity
                  </span>
                  <span className="text-[10px] text-zinc-400">Past Year Heatmap</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-zinc-950/80 border border-zinc-800/60 overflow-x-auto">
                  <div className="grid grid-rows-7 grid-flow-col gap-1 min-w-[320px] justify-between">
                    {githubData.contributionGrid.map((level, i) => (
                      <div
                        key={i}
                        className={`w-2.5 h-2.5 rounded-[2px] border transition-transform hover:scale-125 ${getContributionColor(
                          level
                        )}`}
                      />
                    ))}
                  </div>
                  <div className="flex items-center justify-end gap-1.5 text-[10px] font-mono text-zinc-400 mt-2">
                    <span>Less</span>
                    {[0, 1, 2, 3, 4].map((lvl) => (
                      <div key={lvl} className={`w-2.5 h-2.5 rounded-[2px] border ${getContributionColor(lvl)}`} />
                    ))}
                    <span>More</span>
                  </div>
                </div>
              </div>

              {/* Featured Repositories Sub-grid */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Featured Repositories
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {githubData.pinnedRepositories.map((repo, i) => (
                    <a
                      key={i}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-2xl bg-zinc-950/60 border border-zinc-800/60 hover:border-cyan-500/40 hover:bg-zinc-900/60 transition-all flex flex-col justify-between group/repo"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className="text-xs font-mono font-bold text-zinc-200 group-hover/repo:text-cyan-400 transition-colors flex items-center gap-1.5 truncate">
                            <Code2 className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                            {repo.name}
                          </span>
                          <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover/repo:text-cyan-400 shrink-0 transition-colors" />
                        </div>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 mb-3">
                          {repo.description}
                        </p>
                      </div>
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/40">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          {repo.language}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-amber-400" /> {repo.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3 h-3 text-zinc-400" /> {repo.forks}
                          </span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: CODING PROFILES & PLATFORMS (5 COLS) */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Coding Profiles & Platforms
            </div>
            {codingProfiles.map((profile, i) => (
              <a
                key={i}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-2xl p-4 sm:p-5 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] overflow-hidden"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-cyan-500/30 transition-colors shrink-0">
                    {renderProfileIcon(profile.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors truncate">
                        {profile.platform}
                      </h4>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors shrink-0" />
                    </div>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">
                      {profile.username}
                    </div>
                    <p className="text-xs text-zinc-400 mt-2 line-clamp-2">
                      {profile.summary}
                    </p>
                    <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300 font-medium">
                      <span>{profile.badge}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* CERTIFICATIONS & CONTINUOUS LEARNING GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* CERTIFICATIONS (7 COLS) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <h3 className="text-sm font-mono font-semibold uppercase text-zinc-400 tracking-wider">
                Certifications & Achievements
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-5 rounded-2xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 group-hover:border-indigo-500/40 transition-colors">
                        {renderCertIcon(cert.icon)}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 px-2 py-1 rounded-md bg-zinc-950 border border-zinc-800">
                        {cert.issueDate}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-zinc-100 group-hover:text-indigo-300 transition-colors line-clamp-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-1 font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <span>ID: {cert.credentialId || "Verified"}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        Verify <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CURRENT LEARNING TOPICS (5 COLS) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <h3 className="text-sm font-mono font-semibold uppercase text-zinc-400 tracking-wider">
                Currently Learning
              </h3>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/80 space-y-4">
              <p className="text-xs text-zinc-400 leading-relaxed">
                Technologies, concepts, and frameworks I am actively exploring to expand my engineering skill set:
              </p>

              <motion.div
                variants={chipContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {currentLearningTopics.map((topic, i) => (
                  <motion.div
                    key={i}
                    variants={chipVariants}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{topic}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}