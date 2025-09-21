"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
  showCursor?: boolean;
}

export function Typewriter({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
  showCursor = true,
}: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);

      return () => clearTimeout(pauseTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span className="font-mono">{currentText}</span>
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          className="ml-1 text-purple-500 font-bold"
        >
          |
        </motion.span>
      )}
    </div>
  );
}

interface AdvancedTypewriterProps {
  texts: string[];
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
  prefix?: string;
}

export function AdvancedTypewriter({
  texts,
  className = "",
  gradientFrom = "from-purple-600",
  gradientTo = "to-pink-600",
  prefix = "",
}: AdvancedTypewriterProps) {
  return (
    <div className={`flex items-center ${className}`}>
      {prefix && (
        <span className="mr-2 text-foreground/80">{prefix}</span>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`bg-gradient-to-r ${gradientFrom} ${gradientTo} bg-clip-text text-transparent`}
      >
        <Typewriter
          texts={texts}
          typingSpeed={80}
          deletingSpeed={40}
          pauseDuration={3000}
        />
      </motion.div>
    </div>
  );
}