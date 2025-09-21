"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface Box {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
  opacity: number
}

export function BackgroundBoxes({ children }: { children?: React.ReactNode }) {
  const [boxes, setBoxes] = React.useState<Box[]>([])

  React.useEffect(() => {
    const generateBoxes = () => {
      const newBoxes: Box[] = []
      for (let i = 0; i < 25; i++) {
        newBoxes.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 40 + 20,
          delay: Math.random() * 4,
          duration: Math.random() * 8 + 4,
          opacity: Math.random() * 0.1 + 0.02,
        })
      }
      setBoxes(newBoxes)
    }

    generateBoxes()
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Animated background boxes */}
      <div className="absolute inset-0 pointer-events-none">
        {boxes.map((box) => (
          <motion.div
            key={box.id}
            className="absolute border border-neutral-200 dark:border-neutral-800 bg-neutral-50/30 dark:bg-neutral-900/30 backdrop-blur-sm"
            style={{
              left: `${box.x}%`,
              top: `${box.y}%`,
              width: `${box.size}px`,
              height: `${box.size}px`,
              opacity: box.opacity,
            }}
            initial={{ 
              scale: 0,
              rotate: 0,
              x: 0,
              y: 0
            }}
            animate={{
              scale: [0, 1, 0.8, 1],
              rotate: [0, 90, 180, 270, 360],
              x: [0, 30, -20, 10, 0],
              y: [0, -20, 30, -10, 0],
            }}
            transition={{
              duration: box.duration,
              delay: box.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent dark:from-transparent dark:via-black/50 dark:to-transparent pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Individual animated box component
export function AnimatedBox({ 
  size = 40, 
  className = "",
  delay = 0 
}: { 
  size?: number
  className?: string
  delay?: number 
}) {
  return (
    <motion.div
      className={`border border-neutral-300 dark:border-neutral-700 bg-neutral-100/50 dark:bg-neutral-800/50 backdrop-blur-sm ${className}`}
      style={{
        width: size,
        height: size,
      }}
      initial={{ 
        scale: 0,
        rotate: 0,
        opacity: 0 
      }}
      animate={{
        scale: [0, 1, 0.9, 1],
        rotate: [0, 180, 360],
        opacity: [0, 0.6, 0.3, 0.6],
      }}
      transition={{
        duration: 6,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

// Grid background utility component
export function GridBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Main grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* Accent grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:96px_96px]" />
      
      {/* Floating boxes */}
      <div className="absolute top-10 left-10">
        <AnimatedBox size={30} delay={0} />
      </div>
      <div className="absolute top-20 right-20">
        <AnimatedBox size={25} delay={1} />
      </div>
      <div className="absolute bottom-32 left-16">
        <AnimatedBox size={35} delay={2} />
      </div>
      <div className="absolute bottom-20 right-32">
        <AnimatedBox size={28} delay={3} />
      </div>
      <div className="absolute top-1/3 left-1/4">
        <AnimatedBox size={20} delay={1.5} />
      </div>
      <div className="absolute top-2/3 right-1/3">
        <AnimatedBox size={32} delay={2.5} />
      </div>
    </div>
  )
}