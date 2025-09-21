"use client"

import React, { memo, useMemo } from "react"
import { motion } from "framer-motion"
import { 
  Code2, 
  Database, 
  Brain,
  Globe, 
  Workflow,
  Smartphone
} from "lucide-react"
import { MotionWrapper } from "@/components/ui/motion-wrapper"
import { SectionHeader } from "@/components/ui/section-header"
import type { LucideIcon } from "lucide-react"

// Skill category interface
interface SkillCategory {
  icon: LucideIcon
  name: string
  description: string
  proficiency: number
  color: string
  skills: string[]
}

// Individual skill interface
interface Skill {
  name: string
  category: string
  level: number
  icon: string
}

// Memoized skill category card component with mobile optimization
const SkillCategoryCard = memo(({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.5, 
      delay: index * 0.08, // Reduced delay for faster appearance
      ease: "easeOut"
    }}
    viewport={{ once: true, margin: "-20px" }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="group"
  >
    <div className="relative p-4 sm:p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-purple-300/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
          <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-105 transition-transform duration-300`}>
            <category.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg sm:text-xl mb-1 sm:mb-2 text-foreground group-hover:text-purple-400 transition-colors duration-300">
              {category.name}
            </h3>
          </div>
        </div>
        
        <p className="text-foreground/70 leading-relaxed mb-3 sm:mb-4 group-hover:text-foreground/90 transition-colors duration-300 text-sm sm:text-base">
          {category.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.2, 
                delay: index * 0.05 + skillIndex * 0.03, // Faster skill tag animations
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-20px" }}
              className="px-2 py-1 sm:px-3 sm:py-1 bg-white/10 rounded-full text-xs font-medium text-foreground/80 border border-white/20 hover:bg-white/20 transition-colors duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
))

SkillCategoryCard.displayName = 'SkillCategoryCard'

// Memoized individual skill card component with performance optimization
const SkillCard = memo(({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ 
      duration: 0.3, 
      delay: index * 0.03, // Much faster appearance
      ease: "easeOut"
    }}
    viewport={{ once: true, margin: "-20px" }}
    whileHover={{ scale: 1.03, y: -2 }}
    className="group relative"
  >
    <div className="p-2 sm:p-3 md:p-4 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-lg sm:rounded-xl hover:bg-white/10 hover:border-purple-300/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2 md:mb-3">{skill.icon}</div>
      <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1 md:mb-2 group-hover:text-purple-400 transition-colors duration-300">
        {skill.name}
      </h4>
      <span className="text-xs text-purple-400 font-medium">{skill.category}</span>
      <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  </motion.div>
))

SkillCard.displayName = 'SkillCard'

// Memoized skills section for better performance
export const SkillsSection = memo(() => {
  const skillCategories = useMemo((): SkillCategory[] => [
    {
      icon: Code2,
      name: "Programming Languages",
      description: "Core programming and scripting languages",
      proficiency: 92,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "JavaScript", "Dart", "C", "HTML", "CSS"]
    },
    {
      icon: Database,
      name: "Data & Analytics",
      description: "Data manipulation, analysis and visualization",
      proficiency: 88,
      color: "from-purple-500 to-violet-500",
      skills: ["SQL", "Data Analytics", "Advanced Excel", "Airtable"]
    },
    {
      icon: Brain,
      name: "AI & Machine Learning",
      description: "Artificial intelligence and deep learning frameworks",
      proficiency: 85,
      color: "from-pink-500 to-rose-500",
      skills: ["Machine Learning", "Deep Learning", "N8n AI Automation"]
    },
    {
      icon: Globe,
      name: "Web Development",
      description: "Modern web technologies and frameworks",
      proficiency: 90,
      color: "from-green-500 to-emerald-500",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      icon: Workflow,
      name: "Automation & Tools",
      description: "Workflow automation and productivity tools",
      proficiency: 82,
      color: "from-orange-500 to-amber-500",
      skills: ["N8n AI Automation", "Advanced Excel", "Airtable"]
    },
    {
      icon: Smartphone,
      name: "Mobile Development",
      description: "Cross-platform mobile application development",
      proficiency: 78,
      color: "from-indigo-500 to-blue-500",
      skills: ["Dart", "Flutter", "Mobile UI/UX"]
    }
  ], [])

  const allSkills = useMemo((): Skill[] => [
    { name: "Python", category: "Programming", level: 95, icon: "🐍" },
    { name: "SQL", category: "Database", level: 90, icon: "🗃️" },
    { name: "Machine Learning", category: "AI/ML", level: 85, icon: "🤖" },
    { name: "Deep Learning", category: "AI/ML", level: 82, icon: "🧠" },
    { name: "N8n AI Automation", category: "Automation", level: 88, icon: "⚡" },
    { name: "Advanced Excel", category: "Analytics", level: 92, icon: "📊" },
    { name: "Airtable", category: "Database", level: 85, icon: "📋" },
    { name: "Data Analytics", category: "Analytics", level: 90, icon: "📈" },
    { name: "HTML", category: "Web", level: 95, icon: "🌐" },
    { name: "CSS", category: "Web", level: 92, icon: "🎨" },
    { name: "JavaScript", category: "Programming", level: 88, icon: "⚡" },
    { name: "Dart", category: "Programming", level: 80, icon: "🎯" },
    { name: "C", category: "Programming", level: 75, icon: "⚙️" }
  ], [])

  return (
    <section id="skills" className="relative py-16 sm:py-20 overflow-hidden">
      {/* Simplified background effects for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-pink-900/5 to-orange-900/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Optimized for mobile */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-30px" }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl sm:rounded-2xl mb-4 sm:mb-6"
          >
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </motion.div>
          
          <SectionHeader
            title="Skills & Expertise"
            description="Technologies and tools I use to build innovative solutions and analyze complex data"
            size="lg"
            className="mb-0"
          />
        </div>

        {/* Skill Categories - Mobile optimized grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* All Skills Grid - Optimized for faster loading */}
        <MotionWrapper
          variant="fadeInUp"
          delay={0.3}
          className="text-center"
        >
          <motion.h3 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ 
              scale: 1.02,
              textShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
              y: -1
            }}
            transition={{ duration: 0.2 }}
          >
            Technical Proficiency
          </motion.h3>
          <p className="text-foreground/60 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            A comprehensive overview of my technical skills across different domains and technologies
          </p>
          
          {/* Mobile-first responsive grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 max-w-6xl mx-auto">
            {allSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
})

SkillsSection.displayName = 'SkillsSection'