"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Comet {
  id: number
  delay: number
  duration: number
  size: number
}

export function CometCard({ 
  children, 
  className = "",
  size = 200 
}: { 
  children?: React.ReactNode
  className?: string
  size?: number 
}) {
  const [comets, setComets] = React.useState<Comet[]>([])

  React.useEffect(() => {
    const generateComets = () => {
      const newComets: Comet[] = []
      for (let i = 0; i < 3; i++) {
        newComets.push({
          id: i,
          delay: i * 2,
          duration: 4 + Math.random() * 2,
          size: 2 + Math.random() * 2,
        })
      }
      setComets(newComets)
    }

    generateComets()
  }, [])

  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Main card container */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full h-full rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 border-2 border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl backdrop-blur-sm"
      >
        {/* Animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(45deg, transparent, rgba(0,0,0,0.1), transparent, rgba(0,0,0,0.1), transparent)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Comet trails */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {comets.map((comet) => (
            <motion.div
              key={comet.id}
              className="absolute w-full h-full"
              initial={{ x: "-100%", y: "-100%" }}
              animate={{ 
                x: ["100%", "100%", "-100%"],
                y: ["100%", "100%", "-100%"]
              }}
              transition={{
                duration: comet.duration,
                delay: comet.delay,
                repeat: Infinity,
                ease: "linear",
                times: [0, 0.1, 1]
              }}
            >
              <div
                className="w-1 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-300 to-transparent opacity-60"
                style={{
                  height: `${comet.size}px`,
                  transform: "rotate(45deg)",
                  boxShadow: "0 0 6px currentColor",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Inner glow effect */}
        <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white/20 via-transparent to-black/5 dark:from-white/5 dark:via-transparent dark:to-white/10" />

        {/* Content container */}
        <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
          {children}
        </div>

        {/* Corner accents */}
        <div className="absolute top-2 right-2 w-3 h-3 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-400 rounded-full opacity-40" />
        <div className="absolute bottom-2 left-2 w-2 h-2 bg-gradient-to-br from-gray-300 to-gray-500 dark:from-gray-600 dark:to-gray-400 rounded-full opacity-60" />
      </motion.div>

      {/* External floating elements */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-br from-gray-400 to-gray-600 dark:from-gray-500 dark:to-gray-300 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

// Variant for smaller accent cards
export function MiniCometCard({ 
  children, 
  className = "",
  delay = 0 
}: { 
  children?: React.ReactNode
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 border border-gray-300 dark:border-gray-600 overflow-hidden shadow-lg ${className}`}
    >
      {/* Mini comet effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%", y: "-100%" }}
        animate={{ x: "100%", y: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          delay: delay + 1,
        }}
      >
        <div className="w-0.5 h-8 bg-gradient-to-b from-transparent via-gray-400 dark:via-gray-300 to-transparent transform rotate-45 opacity-50" />
      </motion.div>
      
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </motion.div>
  )
}