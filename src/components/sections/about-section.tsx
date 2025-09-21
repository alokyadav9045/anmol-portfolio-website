"use client"

import React, { memo, useMemo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Code, GraduationCap, FolderOpen, Monitor, Flame, Database, Palette, GitBranch } from "lucide-react"
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover"
import { MotionWrapper } from "@/components/ui/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import type { LucideIcon } from "lucide-react"

// Tool interface
interface Tool {
  name: string
  icon: LucideIcon
}

// About skill card interface (different from global SkillCategory)
interface AboutSkillCard {
  icon: LucideIcon
  title: string
  description: string
}

// Memoized skill card component for better performance with mobile optimizations
const SkillCard = memo(({ skill, index }: { skill: AboutSkillCard; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother mobile animation
    }}
    viewport={{ once: true, margin: "-30px" }}
    whileHover={{ y: -8 }}
    className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-4 sm:p-6 cursor-pointer bg-white dark:bg-gray-800 hover:bg-[#fcf4ff] dark:hover:bg-purple-900/20 hover:-translate-y-2 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#9333ea] transition-all group"
  >
    <div className="w-6 sm:w-7 mt-2 sm:mt-3 group-hover:scale-110 transition-transform duration-300 text-xl sm:text-2xl">
      <skill.icon className="w-6 h-6 sm:w-7 sm:h-7" />
    </div>
    <h3 className="my-3 sm:my-4 font-semibold text-gray-700 dark:text-gray-300 text-sm sm:text-base">{skill.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.description}</p>
  </motion.div>
))

SkillCard.displayName = 'SkillCard'

// Memoized tool icon component with mobile optimization
const ToolIcon = memo(({ tool, index }: { tool: Tool; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 0.4, 
      delay: 0.1 + index * 0.08,
      ease: "easeOut"
    }}
    viewport={{ once: true, margin: "-30px" }}
    whileHover={{ y: -6, scale: 1.08 }}
    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-2 duration-300 hover:shadow-lg hover:shadow-purple-500/20 transition-all group bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
    title={tool.name}
  >
    <tool.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
  </motion.div>
))

ToolIcon.displayName = 'ToolIcon'

// Memoized about section for better performance
export const AboutSection = memo(() => {
  const skillCards = useMemo((): AboutSkillCard[] => [
    {
      icon: Code,
      title: "Languages",
      description: "HTML, CSS, JavaScript, Python, Data analyst",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Bachelor of Computer Applications (BCA)",
    },
    {
      icon: FolderOpen,
      title: "Projects",
      description: "Built more than 5 projects",
    },
  ], [])

  const tools = useMemo(() => [
    { name: "VS Code", icon: Monitor },
    { name: "Firebase", icon: Flame },
    { name: "MongoDB", icon: Database },
    { name: "Figma", icon: Palette },
    { name: "Git", icon: GitBranch },
  ], [])

  const profileImage = useMemo(() => (
    <Image
      src="/annmol.png"
      alt="Anmol's Profile"
      width={400}
      height={400}
      className="w-full h-full object-cover rounded-3xl"
      priority
    />
  ), [])

  return (
    <section id="about" className="w-full px-4 sm:px-6 md:px-8 lg:px-[12%] py-16 sm:py-20 scroll-mt-20">
      <SectionHeader
        subtitle="Introduction"
        title="About me"
        className="mb-12 sm:mb-16"
      />

      <div className="flex w-full flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20 my-16 sm:my-20">
        {/* Profile Image - Optimized for mobile */}
        <MotionWrapper
          variant="fadeInLeft"
          duration={0.8}
          delay={0.2}
          className="max-w-max mx-auto relative order-1 lg:order-1"
        >
          <DirectionAwareHover className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="relative w-full h-full rounded-3xl overflow-hidden ring-2 sm:ring-4 ring-purple-700/40 bg-gradient-to-br from-purple-400 to-pink-500 p-0.5 sm:p-1">
              {profileImage}
            </div>
          </DirectionAwareHover>
        </MotionWrapper>

        {/* Content - Optimized spacing and typography for mobile */}
        <MotionWrapper
          variant="fadeInRight"
          duration={0.8}
          delay={0.4}
          className="flex-1 order-2 lg:order-2"
        >
          <p className="mb-8 sm:mb-10 max-w-2xl text-gray-300 leading-relaxed text-sm sm:text-base">
            Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, data structures, 
            and database management. Proficient in Python, SQL, and web development, with a keen interest in data analytics, 
            AI, and software development. Passionate about solving real-world problems through technology and continuously learning new skills. 
            Strong analytical and problem-solving abilities, with experience in project development and teamwork. Looking for opportunities to apply
            knowledge and gain hands-on experience in the IT industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mb-10 sm:mb-12">
            {skillCards.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>

          <h4 className="my-4 sm:my-6 text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg">Tools I Use</h4>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap justify-center sm:justify-start">
            {tools.map((tool, index) => (
              <ToolIcon key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'