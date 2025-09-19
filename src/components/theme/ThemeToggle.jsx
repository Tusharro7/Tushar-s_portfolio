import React, { useContext } from "react";
import { BsEmojiSunglasses, BsEmojiSunglassesFill } from "react-icons/bs";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-3 rounded-full shadow-md transition-colors duration-500 hover:scale-110
        bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
    >
      {darkMode ? (
        <BsEmojiSunglassesFill className="text-white text-2xl transition-transform duration-700" />
      ) : (
        <BsEmojiSunglasses className="text-black text-2xl transition-transform duration-700" />
      )}
    </button>
  );
};

export default ThemeToggle;
