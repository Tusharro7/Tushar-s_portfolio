import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { motion } from "framer-motion";
import ScrollFadeIn from "../scrollfadein/ScrollFadeIn";

const ProjectCard = ({ project, isLeft }) => {
  const { darkMode } = useContext(ThemeContext);
  const [showDesc, setShowDesc] = useState(false);

  // Auto-hide after 15s
  useEffect(() => {
    let timer;
    if (showDesc) {
      timer = setTimeout(() => setShowDesc(false), 15000);
    }
    return () => clearTimeout(timer);
  }, [showDesc]);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <ScrollFadeIn className="w-full my-8">
      <div
        className={`flex flex-col md:flex-row ${
          isLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-6 md:gap-10`}
      >
        {/* Image */}
        <div
          className="w-full md:w-1/2 cursor-pointer"
          onClick={() => setShowDesc(true)}
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-auto rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Description */}
        {showDesc && (
          <motion.div
            initial="hidden"
            animate="visible"
            className={`w-full md:w-1/2 p-4 rounded-xl shadow-lg bg-white/20 backdrop-blur-md ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            {project.description.map((line, i) => (
              <motion.p
                key={i}
                custom={i}
                variants={textVariant}
                initial="hidden"
                animate="visible"
                className="text-md mb-1"
              >
                {line}
              </motion.p>
            ))}

            {/* Show Visit button only if link exists */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-4 px-4 py-2 rounded-lg border transform transition duration-300 ${
                  darkMode
                    ? "border-white text-white hover:bg-white hover:text-black hover:scale-120"
                    : "border-black text-black hover:bg-black hover:text-white hover:scale-120"
                }`}
              >
                Visit
              </a>
            )}
          </motion.div>
        )}
      </div>
    </ScrollFadeIn>
  );
};

export default ProjectCard;
