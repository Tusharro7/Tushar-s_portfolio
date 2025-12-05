import React, { useContext, useState } from "react";
import { ThemeContext } from "./theme/ThemeContext";
import ScrollFadeIn from "./scrollfadein/ScrollFadeIn";

const About = () => {
  const { darkMode } = useContext(ThemeContext);
  // const [showEducation, setShowEducation] = useState(false);

  const aboutLines = [
    "Hi, I’m Tushar makavana",
    "I am a passionate Front-End Developer skilled in React, JavaScript, and Tailwind CSS.",
    "I recently completed my B.E in Information Technology from Gujarat Technological University.",
    "I love creating responsive, modern, and user-friendly web applications.",
    "Let’s connect and create something amazing together!",
  ];

  // const educationData = [
  //   {
  //     title: "Diploma in Computer Engineering",
  //     cgpa: 8.5,
  //     institute: "Gujarat Technological University",
  //     year: "2019 - 2022",
  //   },
  //   {
  //     title: "B.E in Information Technology",
  //     cgpa: 8.6,
  //     institute: "Gujarat Technological University",
  //     year: "2022 - 2025",
  //   },
  // ];

  // // Trigger Education after About last line + minimal delay
  // const handleAboutComplete = () => {
  //   setTimeout(() => setShowEducation(true), 100); // 0.1s delay
  // };

  return (
    <>
      {/* About Section */}
      <ScrollFadeIn>
      <section
        id="about"
        className={`font-nunito relative z-10 flex flex-col items-center justify-start min-h-[80vh] md:justify-center px-6 md:px-20 py-16`}
      > 

        <div
          className={`max-w-3xl text-center space-y-4 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          {aboutLines.map((line, i) => (
            <ScrollFadeIn
              key={i}
              custom={i}
              className="text-lg md:text-xl"
              onAnimationComplete={() => {
                if (i === aboutLines.length - 1) handleAboutComplete();
              }}
            >
              {line}
            </ScrollFadeIn>
          ))}
        </div>
      </section>
</ScrollFadeIn>
      {/* Education Section
      {showEducation && (
        <section className="relative z-10 flex flex-col md:flex-row gap-6 px-6 md:px-20 mb-16">
          {educationData.map((edu, i) => (
            <ScrollFadeIn
              key={i}
              custom={i}
              className={`flex-1 p-6 rounded-2xl border border-gray-300
                          bg-white/20 backdrop-blur-md shadow-lg
                          ${darkMode ? "text-white" : "text-gray-800"}`}
            >
              <h3 className="text-xl font-semibold mb-2">{edu.title}</h3>
              <p className="mb-1 font-medium">CGPA: {edu.cgpa}</p>
              <p className="mb-1 text-sm">{edu.institute}</p>
              <p className="mb-2 text-sm text-gray-200 dark:text-gray-300">
                {edu.year}
              </p>
            </ScrollFadeIn>
          ))}
        </section>
        
      )} */}
    </>
  );
};

export default About;
