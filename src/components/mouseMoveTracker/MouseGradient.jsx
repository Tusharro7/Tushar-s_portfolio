import React, { useContext } from "react";
import { motion } from "framer-motion";
import { MouseContext } from "./MouseContext";
import { ThemeContext } from "../theme/ThemeContext";

const MouseGradient = () => {
  const { coords } = useContext(MouseContext);
  const { darkMode } = useContext(ThemeContext);

  const radius = window.innerWidth < 768 ? 70 : 100;

  const bgGradient = darkMode
    ? `radial-gradient(circle ${radius}px at ${coords.x}px ${coords.y}px, #fffa8c, #ffb347, #111111)`
    : `radial-gradient(circle ${radius}px at ${coords.x}px ${coords.y}px, #fff9c4, #ffe082, #ffffff)`;

  const overlay = darkMode ? "bg-black/60" : "bg-white/30";

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ background: bgGradient }}
        animate={{ opacity: [0.9, 1, 0.9] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <div className={`absolute inset-0 ${overlay} z-0`} />
    </div>
  );
};

export default MouseGradient;
