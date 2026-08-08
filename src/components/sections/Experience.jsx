import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaTrophy } from "react-icons/fa";

const achievements = [
  "Built StudyMate AI",
  "Created Capturra",
  "Plant Nursery Management System",
  "IoT Health Monitoring System",
  "Web Development Internship",
  "Learning AI & Full Stack Development",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 bg-[#050816] text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-5xl font-bold mb-16"
        >
          My Journey
        </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Education */}
          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-[#111827] p-8 border border-blue-500/20"
          >
            <FaGraduationCap className="text-4xl text-blue-400 mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Education
            </h3>

            <p className="text-gray-300">
              Bachelor of Engineering
            </p>

            <p className="text-gray-400">
              Computer Science Engineering
            </p>

            <p className="text-gray-500 mt-4">
              SN Patel Institute of Technology
            </p>

            <p className="text-blue-400 mt-2">
              2024 – 2028
            </p>

          </motion.div>

          {/* Experience */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-[#111827] p-8 border border-blue-500/20"
          >
            <FaBriefcase className="text-4xl text-blue-400 mb-4" />

            <h3 className="text-2xl font-bold mb-3">
              Experience
            </h3>

            <p className="text-gray-300">
              Web Development Intern
            </p>

            <ul className="mt-4 text-gray-400 space-y-2">
              <li>• Responsive UI Development</li>
              <li>• PHP & MySQL</li>
              <li>• Git & GitHub</li>
              <li>• Debugging</li>
              <li>• Team Collaboration</li>
            </ul>

          </motion.div>

          {/* Achievements */}

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-3xl bg-[#111827] p-8 border border-blue-500/20"
          >
            <FaTrophy className="text-4xl text-yellow-400 mb-4" />

            <h3 className="text-2xl font-bold mb-5">
              Achievements
            </h3>

            <div className="space-y-3">
              {achievements.map((item) => (
                <div
                  key={item}
                  className="bg-slate-800 rounded-xl p-3"
                >
                  {item}
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}