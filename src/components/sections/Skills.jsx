import { motion } from 'framer-motion';
import { FaReact, FaPhp, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiFastapi } from 'react-icons/si';

const skillCategories = [
  { title: 'Frontend', number: '01', description: 'Interfaces that feel fast, clean and intentional.', skills: [{ name: 'HTML5', icon: <FaHtml5 /> }, { name: 'CSS3', icon: <FaCss3Alt /> }, { name: 'JavaScript', icon: <FaJs /> }, { name: 'React', icon: <FaReact /> }, { name: 'Tailwind CSS', icon: <SiTailwindcss /> }, { name: 'Bootstrap', icon: <FaBootstrap /> }] },
  { title: 'Backend', number: '02', description: 'APIs, business logic and server-side systems.', skills: [{ name: 'PHP', icon: <FaPhp /> }, { name: 'Python', icon: <FaPython /> }, { name: 'FastAPI', icon: <SiFastapi /> }] },
  { title: 'Data & Tools', number: '03', description: 'Reliable data and a development workflow built to ship.', skills: [{ name: 'MySQL', icon: <SiMysql /> }, { name: 'Git', icon: <FaGitAlt /> }, { name: 'GitHub', icon: <FaGithub /> }] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[#07101d] py-24 text-white sm:py-32">
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 xl:px-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">03 / Toolkit</p>
          <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-6xl">My <span className="text-gradient-accent">stack.</span></h2>
          <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">The technologies I use to turn an idea into a working product — from interface to API to database.</p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12">
          {skillCategories.map((category, index) => (
            <motion.div key={category.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className={`${index === 0 ? 'lg:col-span-5' : index === 1 ? 'lg:col-span-4' : 'lg:col-span-3'} group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a1220] p-6 sm:p-8`}>
              <div className="mb-12 flex items-start justify-between"><div><span className="text-xs font-mono text-cyan-300">{category.number}</span><h3 className="mt-2 text-2xl font-black">{category.title}</h3></div><span className="text-3xl font-black text-white/5">{category.number}</span></div>
              <p className="mb-7 max-w-sm text-sm leading-6 text-slate-500">{category.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill) => <div key={skill.name} className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.025] px-3 py-3 text-xs text-slate-300 transition hover:border-cyan-400/25 hover:bg-cyan-400/[0.05] hover:text-white"><span className="text-lg text-cyan-300">{skill.icon}</span>{skill.name}</div>)}
              </div>
              <div className="absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20" />
            </motion.div>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {['React', 'FastAPI', 'MySQL', 'AI Integration'].map((item, i) => <div key={item} className="border-t border-white/10 py-4"><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-600">0{i + 1}</span><span className="mt-1 block text-sm font-semibold text-slate-300">{item}</span></div>)}
        </div>
      </div>
    </section>
  );
}
