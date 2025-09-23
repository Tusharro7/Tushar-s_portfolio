import React, { useRef, useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Typed from "typed.js";
import { ThemeContext } from "./theme/ThemeContext";

const Hero = () => {
  const typedRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);
  const [coords, setCoords] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  // Track mouse/touch globally
  useEffect(() => {
    const handleMouseMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        setCoords({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Typed.js
  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: [
        "A Front-End Developer",
        "Building interactive, modern and responsive web apps with React.",
        "Designing user-friendly interfaces.",
        "Coder",
      ],
      loop: true,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 400,
    });
    return () => typed.destroy();
  }, []);

  // Button styles
  const hireBtn = darkMode
    ? "bg-white text-black hover:bg-gray-300"
    : "bg-black text-white hover:bg-gray-700";

  const cvBtn = darkMode
    ? "border-white text-white hover:bg-white hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";

  const iconColor = darkMode
    ? "text-white hover:text-gray-400"
    : "text-black hover:text-gray-600";

  return (
    <section
      id="home"
      className={`w-full flex items-center justify-center
                  text-center font-nunito relative px-6
                  py-12 h-screen md:h-screen`}
    >
      {/* Hero content */}
      <div className="flex flex-col items-center justify-center px-6 z-10 space-y-6 md:space-y-8">
        {/* Heading with parallax + hover */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          animate={{
            x: (coords.x - window.innerWidth / 2) / 20,
            y: (coords.y - window.innerHeight / 2) / 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          Hi, I'm <span className="font-semibold text-orange-400" >Tushar!</span>
        </motion.h1>

        {/* Typed.js Text */}
        <motion.p className="text-lg md:text-xl max-w-2xl mx-auto capitalize">
          <span ref={typedRef}></span>
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a
            href="#contact"
            className={`px-6 py-3 rounded-xl shadow-lg font-semibold transition-colors duration-200 ${hireBtn}`}
            whileHover={{ scale: 1.05, y: -3 }}
          >
            Hire Me
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1T7LLUFGaYI6DpBaH5Gb_4C6W9dwJNC5K/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-3 rounded-xl shadow-lg font-semibold border-2 transition-colors duration-200 ${cvBtn}`}
            whileHover={{ scale: 1.05, y: -3 }}
          >
            Download CV
          </motion.a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 justify-center text-2xl">
          <motion.a
            href="https://github.com/Tusharro7"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaGithub className={iconColor} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tusharmakavana/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaLinkedin className={iconColor} />
          </motion.a>
          <motion.a
            href="mailto:makavanatushar2345@gmail.com"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaEnvelope className={iconColor} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
