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

// Memoized skill card component for better performance
const SkillCard = memo(({ skill, index }: { skill: AboutSkillCard; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8 }}
    className="border-[0.5px] border-gray-400 dark:border-gray-600 rounded-xl p-6 cursor-pointer bg-white dark:bg-gray-800 hover:bg-[#fcf4ff] dark:hover:bg-purple-900/20 hover:-translate-y-2 duration-500 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#9333ea] transition-all group"
  >
    <div className="w-7 mt-3 group-hover:scale-110 transition-transform duration-300 text-2xl">
      <skill.icon className="w-7 h-7" />
    </div>
    <h3 className="my-4 font-semibold text-gray-700 dark:text-gray-300">{skill.title}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{skill.description}</p>
  </motion.div>
))

SkillCard.displayName = 'SkillCard'

// Memoized tool icon component
const ToolIcon = memo(({ tool, index }: { tool: Tool; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8, scale: 1.1 }}
    className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-2 duration-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all group bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-purple-900/20"
    title={tool.name}
  >
    <tool.icon className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-purple-500 group-hover:scale-110 transition-all duration-300" />
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
    <section id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      <SectionHeader
        subtitle="Introduction"
        title="About me"
        className="mb-16"
      />

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        {/* Profile Image - First on mobile, first on desktop */}
        <MotionWrapper
          variant="fadeInLeft"
          duration={0.8}
          delay={0.2}
          className="max-w-max mx-auto relative order-1 lg:order-1"
        >
          <DirectionAwareHover className="w-80 sm:w-96 h-80 sm:h-96">
            <div className="relative w-full h-full rounded-3xl overflow-hidden ring-4 ring-purple-700/40 bg-gradient-to-br from-purple-400 to-pink-500 p-1">
              {profileImage}
            </div>
          </DirectionAwareHover>

          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="bg-gray-800 w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 flex items-center justify-center">
              <span className="text-2xl">💻</span>
            </div>
          </motion.div>
        </MotionWrapper>

        {/* Content - Second on mobile, second on desktop */}
        <MotionWrapper
          variant="fadeInRight"
          duration={0.8}
          delay={0.4}
          className="flex-1 order-2 lg:order-2"
        >
          <p className="mb-10 max-w-2xl text-gray-300 leading-relaxed">
            Motivated Bachelor of Computer Applications (BCA) student with a strong foundation in programming, data structures, 
            and database management. Proficient in Python, SQL, and web development, with a keen interest in data analytics, 
            AI, and software development. Passionate about solving real-world problems through technology and continuously learning new skills. 
            Strong analytical and problem-solving abilities, with experience in project development and teamwork. Looking for opportunities to apply
            knowledge and gain hands-on experience in the IT industry.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-12">
            {skillCards.map((skill, index) => (
              <SkillCard key={skill.title} skill={skill} index={index} />
            ))}
          </div>

          <h4 className="my-6 text-gray-700 dark:text-gray-300 font-semibold text-lg">Tools I Use</h4>

          <div className="flex items-center gap-3 sm:gap-5 flex-wrap">
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