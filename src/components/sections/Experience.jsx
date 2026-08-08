import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const achievements = ['Built StudyMate AI', 'Created Capturra', 'Plant Nursery Management System', 'IoT Health Monitoring System', 'Web Development Internship', 'Learning AI & Full Stack Development'];

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#050b14] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">04 / Experience</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">Where I&apos;m <span className="text-gradient-accent">headed.</span></h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          <motion.div initial={{ opacity: 0, x: -25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 rounded-[2rem] border border-white/10 bg-[#0a1220] p-7 sm:p-10">
            <div className="flex items-center gap-4 border-b border-white/10 pb-6"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300"><FaGraduationCap /></span><div><p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Education</p><h3 className="text-xl font-bold">Bachelor of Engineering</h3></div></div>
            <div className="mt-8 flex gap-6"><div className="relative"><div className="h-full w-px bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent" /><span className="absolute left-1/2 top-1 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.8)]" /></div><div><p className="font-semibold text-slate-200">Computer Science & Engineering</p><p className="mt-2 text-sm text-slate-500">SN Patel Institute of Technology</p><p className="mt-5 font-mono text-xs uppercase tracking-[0.15em] text-cyan-300">2023 — 2027</p><p className="mt-6 max-w-xl text-sm leading-7 text-slate-400">Building a strong foundation in software engineering while turning coursework into practical projects across web development, AI, databases and systems.</p></div></div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 25 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 rounded-[2rem] border border-white/10 bg-[#0a1220] p-7 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/10 text-xl text-blue-300"><FaBriefcase /></span><p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-slate-600">Experience</p><h3 className="mt-2 text-2xl font-black">Web Development Intern</h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">{['Responsive UI Development', 'PHP & MySQL', 'Git & GitHub', 'Debugging', 'Team Collaboration'].map((x) => <li key={x} className="flex gap-3"><span className="text-cyan-300">—</span>{x}</li>)}</ul>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-5 rounded-[2rem] border border-white/10 bg-[#0a1220] p-7 sm:p-10">
          <div className="mb-7 flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-xl text-cyan-300"><FaTrophy /></span><div><p className="text-[10px] uppercase tracking-[0.2em] text-slate-600">Milestones</p><h3 className="text-xl font-bold">Things I&apos;m proud of</h3></div></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{achievements.map((item, i) => <div key={item} className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-cyan-400/20 hover:bg-cyan-400/[0.04]"><span className="font-mono text-xs text-cyan-300/60">0{i + 1}</span><span className="text-sm text-slate-300 group-hover:text-white">{item}</span></div>)}</div>
        </motion.div>
      </div>
    </section>
  );
}
