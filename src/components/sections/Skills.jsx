import { motion } from "framer-motion";
import {
  FaReact,
  FaPhp,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFastapi } from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", icon: <FaPhp /> },
      { name: "Python", icon: <FaPython /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-4"
        >
          My Skills
        </motion.h2>

        <p className="text-center text-gray-400 mb-16">
          Technologies I use to build modern web applications.
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-blue-500/20 bg-[#111827] p-8 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 rounded-xl bg-slate-800 p-3 hover:bg-blue-600 transition"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}