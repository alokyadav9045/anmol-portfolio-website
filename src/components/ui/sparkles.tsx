"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export function Sparkles({ children }: { children?: React.ReactNode }) {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([])

  React.useEffect(() => {
    const generateSparkles = () => {
      const newSparkles: Sparkle[] = []
      for (let i = 0; i < 15; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 10 + 8,
          delay: Math.random() * 3,
          duration: Math.random() * 3 + 2,
        })
      }
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
            }}
            initial={{ scale: 0, rotate: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: sparkle.duration,
              delay: sparkle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width={sparkle.size}
              height={sparkle.size}
              viewBox="0 0 24 24"
              fill="none"
              className="text-black/40 dark:text-white/40"
            >
              <path
                d="M12 0L14.59 8.41L23 9L14.59 15.59L12 24L9.41 15.59L1 9L9.41 8.41L12 0Z"
                fill="currentColor"
                className="drop-shadow-lg"
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Individual sparkle component for more control
export function SparkleIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-black/60 dark:text-white/60 ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <path
        d="M12 0L14.59 8.41L23 9L14.59 15.59L12 24L9.41 15.59L1 9L9.41 8.41L12 0Z"
        fill="currentColor"
        className="drop-shadow-lg"
      />
    </motion.svg>
  )
}