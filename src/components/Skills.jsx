import React, { useContext } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { motion } from "framer-motion";

const Skills = ({ onComplete }) => {
  const { darkMode } = useContext(ThemeContext);

  const languages = [
    { name: "HTML", icon: <FaHtml5 size={24} color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJsSquare size={24} color="#F7DF1E" /> },
  ];

  const tools = [
    { name: "VS Code", icon: <VscVscodeInsiders size={24} color="#007ACC" /> },
    { name: "Git", icon: <FaGitAlt size={24} color="#F05032" /> },
    { name: "GitHub", icon: <FaGithub size={24} color={darkMode ? "#fff" : "#000"} /> },
    { name: "Bootstrap", icon: <FaBootstrap size={24} color="#7952B3" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={24} color="#06B6D4" /> },
    { name: "React", icon: <FaReact size={24} color="#61DAFB" /> },
  ];

  const allSkills = [...languages, ...tools];

  // Variants
  const headingVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 20, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <section
      id="skills"
      className={`relative z-10 flex flex-col items-center justify-start font-nunito px-6 md:px-10 py-16`}
    >
      {/* Section Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.6 }}
        variants={headingVariant}
        className={`text-center mb-12 ${darkMode ? "text-white" : "text-black"}`}
      >
        {/* <h2 className="text-4xl md:text-3xl font-bold mb-4">Skills</h2> */}
        <p className="text-lg md:text-xl">
          Here is the list of technologies and tools I work with:
        </p>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.6 }}
        variants={headingVariant}
        className={`text-center mb-8 ${darkMode ? "text-white" : "text-black"}`}
      >
        <h3 className="text-3xl font-semibold mb-4">Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3">
          {languages.map((lang, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={iconVariant}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.6 }}
              className="flex items-center justify-center gap-2 px-3 py-1.5 border rounded-full border-gray-400 bg-white/20 backdrop-blur-md shadow-sm font-medium text-sm hover:cursor-pointer  "
              whileHover={{ scale: 1.1 }}
            >
              {lang.icon} {lang.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Tools & Stacks */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="hidden"
        viewport={{ once: false, amount: 0.6 }}
        variants={headingVariant}
        className={`text-center mt-12 ${darkMode ? "text-white" : "text-black"}`}
      >
        <h3 className="text-3xl font-semibold mb-4">Tools & Stacks</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={iconVariant}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.6 }}
              className="flex items-center justify-center gap-2 px-3 py-1.5 border rounded-full border-gray-400 bg-white/20 backdrop-blur-md shadow-sm font-medium text-sm
              hover: cursor-pointer"
              whileHover={{ scale: 1.1 }}

            >
              {tool.icon} {tool.name}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Horizontal Marquee */}
      <div className="w-full overflow-hidden mt-16 py-4">
        <motion.div
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 15,
            ease: "linear",
          }}
        >
          {allSkills.concat(allSkills).map((skill, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center gap-2 px-4 py-1.5 border rounded-full border-gray-300 bg-white/20 backdrop-blur-md shadow-sm font-medium cursor-pointer text-sm"
              whileHover={{ scale: 1.2 }}
            >
              {skill.icon} {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
