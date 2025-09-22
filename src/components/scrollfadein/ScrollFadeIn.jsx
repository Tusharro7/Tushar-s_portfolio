import { motion } from "framer-motion";

const ScrollFadeIn = ({ children, custom = 0, className = "", onAnimationComplete }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className={className}
      custom={custom}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      variants={variants}
      onAnimationComplete={onAnimationComplete} // ← important
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
