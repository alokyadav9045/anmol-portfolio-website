"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

interface LoaderProps {
  onComplete?: () => void;
}

export function AdvancedLoader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  const loadingStages = useMemo(() => [
    { progress: 20, text: "Loading assets..." },
    { progress: 40, text: "Preparing components..." },
    { progress: 60, text: "Setting up animations..." },
    { progress: 80, text: "Almost ready..." },
    { progress: 100, text: "Welcome!" },
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentStage = loadingStages.find(stage => progress < stage.progress);
      if (currentStage) {
        setProgress(currentStage.progress);
        setLoadingText(currentStage.text);
      }
    }, 800);

    if (progress >= 100) {
      setTimeout(() => {
        onComplete?.();
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [progress, onComplete, loadingStages]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            animate={{
              x: Math.random() * 1920,
              y: Math.random() * 1080,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center">
        {/* Logo/Brand with animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 mx-auto border-4 border-transparent border-t-purple-400 border-r-pink-400 rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                A
              </span>
            </div>
          </div>
        </motion.div>

        {/* Loading text with typewriter effect */}
        <motion.h2
          key={loadingText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-semibold text-white mb-8"
        >
          {loadingText}
        </motion.h2>

        {/* Progress bar */}
        <div className="w-80 max-w-sm mx-auto mb-4">
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 rounded-full relative"
            >
              <motion.div
                animate={{ x: [-10, 80, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              />
            </motion.div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/80 text-sm mt-2 text-center"
          >
            {progress}%
          </motion.p>
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
              initial={{ 
                x: Math.random() * 300 + 50,
                y: Math.random() * 300 + 50,
                scale: 0 
              }}
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0] 
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}