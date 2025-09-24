import React, { useState, useContext, useEffect } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { BsEmojiSunglasses, BsEmojiSunglassesFill } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./theme/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = ["home","about","skills","projects","contact"];

  const containerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.5, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.2 }
    },
    exit: { opacity: 0, height: 0, transition: { duration: 0.4 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };

  // ✅ Manual offset scroll (works properly on mobile + desktop)
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({ top, behavior: "smooth" });

      // delay closing menu so scroll isn't interrupted
      setTimeout(() => setIsOpen(false), 400);
    }
  }

  // Intersection Observer to track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: "-100px 0px -100px 0px"
      }
    );

    menuItems.forEach(item => {
      const section = document.getElementById(item);
      if (section) observer.observe(section);
    });

    return () => {
      menuItems.forEach(item => {
        const section = document.getElementById(item);
        if (section) observer.unobserve(section);
      });
    }
  }, []);

  return (
    <div className='font-nunito w-full fixed top-0 z-20'>
      {/* Navbar Top */}
      <div className={`flex py-4 px-6 md:px-20 w-full justify-between items-center border-b-2 border-gray-400 rounded-b-3xl transition-colors duration-700
        ${darkMode ? "text-white bg-black/50 backdrop-blur-md" : "text-black bg-white/50 backdrop-blur-md"}`}>

        {/* Logo */}
        <div className="p1">
          <h1 className='text-3xl font-medium cursor-pointer text-center'>Tushar™</h1>
        </div>

        {/* Desktop Menu */}
        <div className="p2 hidden md:flex gap-4">
          {menuItems.map(item => (
            <span
              key={item}
              className={`px-4 cursor-pointer hover:font-semibold transition-colors ${
                activeSection === item ? "font-bold text-orange-500" : ""
              }`}
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </span>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p4 rounded-full shadow-md bg-gray-200 dark:bg-gray-800 transition-colors duration-500 hover:scale-110 hover:bg-gray-300 dark:hover:bg-gray-700"
          >
            {darkMode ? (
              <BsEmojiSunglassesFill className="text-white text-2xl transition-transform duration-700" />
            ) : (
              <BsEmojiSunglasses className="text-black text-2xl transition-transform duration-700" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <div className="p3 md:hidden items-center flex">
            <button onClick={() => setIsOpen(!isOpen)} className="text-3xl focus:outline-none">
              {isOpen ? <IoMdClose /> : <IoMdMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={`md:hidden shadow-lg px-6 py-4 flex flex-col gap-4 transition-colors duration-500
              ${darkMode ? "bg-black text-white border-gray-700" : "bg-white text-black border-gray-200"}`}
          >
            {menuItems.map(item => (
              <motion.div key={item} variants={itemVariants}>
                <span
                  className={`hover:font-semibold cursor-pointer transition-colors ${
                    activeSection === item ? "font-bold text-orange-400" : ""
                  }`}
                  onClick={() => scrollToSection(item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
