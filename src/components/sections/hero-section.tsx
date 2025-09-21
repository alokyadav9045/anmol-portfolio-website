"use client"

import React, { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { TextReveal } from "@/components/ui/text-reveal"
import { AdvancedTypewriter } from "@/components/ui/typewriter" 
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { FloatingParticles, BackgroundMesh } from "@/components/ui/floating-particles"
import { MotionWrapper } from "@/components/ui/motion-wrapper"

// Memoized hero section for better performance
export const HeroSection = memo(() => {
  const roles = useMemo(() => [
    "Frontend Developer",
    "Data Analytics"
  ], []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <BackgroundMesh className="opacity-60" />
      <FloatingParticles count={60} />

      {/* Content Container */}
      <div className="relative z-10 w-11/12 max-w-6xl mx-auto text-center py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Profile Image - First on mobile, second on desktop */}
          <MotionWrapper
            variant="fadeInRight"
            duration={0.8}
            delay={0.4}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <DirectionAwareHover className="w-80 h-80 lg:w-96 lg:h-96">
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src="/annmol.png"
                  alt="Anmol's Profile"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
                
                {/* Floating decoration */}
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>
              </div>
            </DirectionAwareHover>
          </MotionWrapper>

          {/* Text Content - Second on mobile, first on desktop */}
          <MotionWrapper
            variant="fadeInLeft"
            duration={0.8}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 text-lg md:text-xl text-purple-300 mb-4">
                Hi! I&apos;m Anmol Mishra 
                <motion.span 
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                  className="text-2xl"
                >
                  👋
                </motion.span>
              </span>
            </motion.div>

            {/* Main Title with Text Reveal */}
            <div className="space-y-4">
              <TextReveal 
                text="I'm a"
                className="text-2xl md:text-3xl font-semibold text-foreground/80"
                delay={0.4}
              />
              
              <div className="min-h-[80px] flex items-center">
                <AdvancedTypewriter
                  texts={roles}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                  gradientFrom="from-purple-400"
                  gradientTo="via-pink-400 to-orange-300"
                />
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-lg text-foreground/70 leading-relaxed max-w-xl">
                Currently pursuing BCA from Invertis University with expertise in 
                <span className="text-purple-400 font-medium"> web development</span> and 
                <span className="text-pink-400 font-medium"> data analytics</span>. 
                Passionate about creating beautiful, functional digital experiences.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row items-center gap-4 pt-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full text-white font-medium flex items-center gap-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden"
                >
                  <span className="relative z-10">Contact me</span>
                  <ExternalLink className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="https://drive.google.com/file/d/15mQbXIXR2MTup5u1p3EQLHkKw_1C7dAx/view?usp=drivesdk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 border-2 border-purple-300/30 hover:border-purple-400 rounded-full flex items-center gap-2 text-foreground hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  <span>Download Resume</span>
                  <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </motion.div>
          </MotionWrapper>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
})

// Set display name for debugging
HeroSection.displayName = 'HeroSection'