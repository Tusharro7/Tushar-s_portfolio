import React, { useState, useEffect, useContext, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { ThemeContext } from "./theme/ThemeContext";
import Typed from "typed.js";
import { Link } from "react-router-dom";

const Hero = () => {
  const { darkMode } = useContext(ThemeContext);
  const [coords, setCoords] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const typedRef = useRef(null); 

  // Track mouse/touch position
  useEffect(() => {
    const handleMouseMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) setCoords({ x: e.touches[0].clientX, y: e.touches[0].clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Typed.js initialization
  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "A Front-End Developer",
        "building interactive, modern and responsive web apps with React.",
        "Designing user-friendly interfaces.",
        "Coder"
      ],
      loop: true,
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 400,
    });
    return () => typed.destroy();
  }, []);

  const radius = window.innerWidth < 768 ? 70 : 100;
  const bgGradient = darkMode
    ? `radial-gradient(circle ${radius}px at ${coords.x}px ${coords.y}px, #fffa8c, #ffb347, #111111)`
    : `radial-gradient(circle ${radius}px at ${coords.x}px ${coords.y}px, #fff9c4, #ffe082, #ffffff)`;
  const overlay = darkMode ? "bg-black/60" : "bg-white/30";

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
      className={`relative h-screen flex items-center justify-center overflow-hidden text-center font-nunito transition-colors duration-2000
        ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {/* Background gradient following mouse */}
      <motion.div
        className="absolute inset-0 transition-all duration-2000"
        style={{ background: bgGradient }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className={`absolute inset-0 transition-colors duration-2000 ${overlay}`} />

      {/* Hero content */}
      <div className="relative z-10 px-6 transition-colors duration-2000">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          animate={{
            x: (coords.x - window.innerWidth / 2) / 20,
            y: (coords.y - window.innerHeight / 2) / 20,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          Hi, I'm <span className="font-semibold">Tushar !</span>
        </motion.h1>

        {/* Typed text */}
        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-6 capitalize"
          animate={{
            x: (coords.x - window.innerWidth / 2) / 25,
            y: (coords.y - window.innerHeight / 2) / 25,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <span ref={typedRef}></span>
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <motion.a
            className={`px-6 py-3 rounded-xl shadow-lg font-semibold transition-colors duration-2000 ${hireBtn}`}
            whileHover={{ scale: 1.05, y: -3 }}
          >
            <Link to="/contact">Hire me</Link>
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/1STmpIk0YdzGf6z9bXNfEsT2FzIVkpr0B/view"
            className={`px-6 py-3 rounded-xl shadow-lg font-semibold border-2 transition-colors duration-2000 ${cvBtn}`}
            whileHover={{ scale: 1.05, y: -3 }}
            target="_blank"

          >
            Download CV
          </motion.a>
        </div>

        {/* Social icons */}
        <div className="flex gap-6 justify-center text-2xl transition-colors duration-2000">
          <motion.a
            href="https://github.com/Tusharro7"
            target="_blank"
            rel="noreferrer"
            className="transform transition-transform duration-300"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaGithub className={iconColor} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tusharmakavana/"
            target="_blank"
            rel="noreferrer"
            className="transform transition-transform duration-300"
            whileHover={{ scale: 1.2, y: -3 }}
          >
            <FaLinkedin className={iconColor} />
          </motion.a>
          <motion.a
            href="mailto:makavanatushar2345@gmail.com"
            className="transform transition-transform duration-300"
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
