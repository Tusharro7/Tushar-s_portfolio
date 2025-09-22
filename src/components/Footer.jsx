import React, { useContext } from "react";
import ScrollFadeIn from "../components/scrollfadein/ScrollFadeIn"; 
import { ThemeContext } from "../components/theme/ThemeContext";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const textColor = darkMode ? "text-white" : "text-gray-400";

  return (
    <ScrollFadeIn className="relative z-10 w-full py-6 px-4 md:px-20 flex flex-col justify-center items-center bg-transparent">
      <p className={`text-sm mb-2 text-center ${textColor}`}>
        © 2025 Tushar Makavana. All rights reserved.
      </p>
      <p className={`text-sm text-center ${textColor}`}>
        Built with React & Tailwind CSS.
      </p>
    </ScrollFadeIn>
  );
};

export default Footer;
