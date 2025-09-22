import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../components/theme/ThemeContext";
import ScrollFadeIn from "../components/scrollfadein/ScrollFadeIn";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const { darkMode } = useContext(ThemeContext);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const iconVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  const textColor = darkMode ? "text-white" : "text-black";
  const borderColor = darkMode
    ? "border-white text-white hover:bg-white hover:text-black"
    : "border-black text-black hover:bg-black hover:text-white";

  const contactDetails = [
    { icon: <FaGithub />, text: "Tusharro7", link: "https://github.com/Tusharro7" },
    { icon: <FaLinkedin />, text: "Tusharmakavana", link: "https://www.linkedin.com/in/tusharmakavana/" },
    { icon: <FaEnvelope />, text: "makavanatushar2345@gmail.com", link: "mailto:makavanatushar2345@gmail.com" },
    { icon: <FaPhone />, text: "+91 9601918552", link: "tel:+919601918552" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="relative z-10 px-6 md:px-20 py-16">
      {/* Section Title */}
      <ScrollFadeIn className={`text-center mb-12 ${textColor}`}>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg md:text-xl">
          Feel free to reach out via email, phone, or connect on social platforms.
        </p>
      </ScrollFadeIn>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <ScrollFadeIn className="w-full md:w-1/2">
          <form
            onSubmit={handleSubmit}
            className={`flex flex-col gap-4 p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-md ${textColor}`}
          >
            <input
              type="text"
              placeholder="Your Name"
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white ${textColor} border ${darkMode ? "border-white" : "border-black"}`}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white ${textColor} border ${darkMode ? "border-white" : "border-black"}`}
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white ${textColor} border ${darkMode ? "border-white" : "border-black"}`}
              required
            />
            <button
              type="submit"
              className={`px-4 py-2 mt-2 rounded-lg font-medium border-2 ${borderColor} transition-all duration-300 hover:scale-105`}
            >
              Send Message
            </button>
          </form>
        </ScrollFadeIn>

        {/* Contact Details */}
        <ScrollFadeIn className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 p-6 rounded-xl shadow-lg bg-white/10 backdrop-blur-md">
          <h3 className={`text-3xl font-semibold mb-4 ${textColor}`}>Connect with Me</h3>
          <div className="flex flex-col gap-4 w-full">
            {contactDetails.map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariant}
                className="flex items-center gap-3 text-lg hover:scale-105 transition-transform duration-300"
              >
                <span className={`text-2xl ${textColor}`}>{item.icon}</span>
                <span className={`${textColor}`}>{item.text}</span>
              </motion.a>
            ))}
          </div>
        </ScrollFadeIn>
      </div>

      {/* Scroll to top button */}
      {showScroll && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors"
        >
          ↑
        </button>
      )}
    </section>
  );
};

export default Contact;
