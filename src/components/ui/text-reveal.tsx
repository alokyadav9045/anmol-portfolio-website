"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function TextReveal({ text, className = "", delay = 0, duration = 0.8 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [delay]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: duration,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className={`overflow-hidden ${className}`}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={childVariants}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

interface AnimatedTextRevealProps {
  texts: string[];
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function AnimatedTextReveal({ 
  texts, 
  className = "",
  gradientFrom = "from-purple-600",
  gradientTo = "to-pink-600"
}: AnimatedTextRevealProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`relative ${className}`}>
      {texts.map((text, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: currentIndex === index ? 1 : 0,
            y: currentIndex === index ? 0 : 20,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
        >
          <TextReveal text={text} />
        </motion.div>
      ))}
      {/* Placeholder to maintain height */}
      <div className="invisible">
        <TextReveal text={texts[0]} />
      </div>
    </div>
  );
}