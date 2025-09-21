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

// Memoized skill category card component
const SkillCategoryCard = memo(({ category, index }: { category: SkillCategory; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group"
  >
    <div className="relative p-8 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-2xl hover:bg-white/10 hover:border-purple-300/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
      {/* Background Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
      
      <div className="relative z-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
            <category.icon className="h-6 w-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-purple-400 transition-colors duration-300">
              {category.name}
            </h3>
          </div>
        </div>
        
        <p className="text-foreground/70 leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-300">
          {category.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
              viewport={{ once: true, margin: "-50px" }}
              className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-foreground/80 border border-white/20"
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

// Memoized individual skill card component
const SkillCard = memo(({ skill, index }: { skill: Skill; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ scale: 1.05, y: -4 }}
    className="group relative"
  >
    <div className="p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-xl hover:bg-white/10 hover:border-purple-300/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{skill.icon}</div>
      <h4 className="font-semibold text-xs sm:text-sm text-foreground mb-1 sm:mb-2 group-hover:text-purple-400 transition-colors duration-300">
        {skill.name}
      </h4>
      <span className="text-xs text-purple-400 font-medium">{skill.category}</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-pink-900/5 to-orange-900/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6"
          >
            <Brain className="w-8 h-8 text-white" />
          </motion.div>
          
          <SectionHeader
            title="Skills & Expertise"
            description="Technologies and tools I use to build innovative solutions and analyze complex data"
            size="lg"
            className="mb-0"
          />
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* All Skills Grid */}
        <MotionWrapper
          variant="fadeInUp"
          delay={0.4}
          className="text-center"
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ 
              scale: 1.03,
              textShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
              y: -2
            }}
            transition={{ duration: 0.3 }}
          >
            Technical Proficiency
          </motion.h3>
          <p className="text-foreground/60 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills across different domains and technologies
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-6xl mx-auto">
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