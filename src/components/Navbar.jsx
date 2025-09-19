import React, { useState, useContext } from 'react'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import { BsEmojiSunglasses, BsEmojiSunglassesFill } from "react-icons/bs";
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "./theme/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { darkMode, setDarkMode } = useContext(ThemeContext); // ✅ Use context instead of local state

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

  return (
    <div className='font-nunito w-full fixed top-0 z-50'>
      {/* Navbar Top */}
      <div className={`flex py-4 px-6 md:px-20 w-full justify-between items-center border-b-2 border-gray-400 rounded-b-3xl transition-colors duration-700
        ${darkMode ? "text-white bg-black/50 backdrop-blur-md" : "text-black bg-white/50 backdrop-blur-md"}`}>
        
        {/* Logo */}
        <div className="p1">
          <h1 className='text-3xl font-medium cursor-pointer text-center'>Tushar™</h1>
        </div>

        {/* Desktop Menu */}
        <div className="p2 hidden md:flex gap-4">
          {["Home","About","Skills","Projects","Contact"].map(item => (
            <Link key={item} to={item === "Home" ? "/" : `/${item}`} className='px-4 hover:font-semibold'>
              {item}
            </Link>
          ))}
        </div>

        {/* Right Section: Theme toggle + Mobile menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
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
            {["Home","About","Skills","Projects","Contact"].map(item => (
              <motion.div key={item} variants={itemVariants}>
                <Link
                  to={item === "Home" ? "/" : `/${item}`}
                  className="hover:font-semibold cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
