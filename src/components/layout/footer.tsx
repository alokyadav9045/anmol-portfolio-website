"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp, Sparkles, Code, Coffee, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "#home", description: "Back to top" },
  { name: "About", href: "#about", description: "Learn about me" },
  { name: "Projects", href: "#projects", description: "View my work" },
  { name: "Skills", href: "#skills", description: "Technical expertise" },
  { name: "Contact", href: "#contact", description: "Get in touch" },
]

const socialLinks = [
  { 
    name: "GitHub", 
    href: "https://github.com/annmol099", 
    icon: Github,
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/in/anmol099", 
    icon: Linkedin,
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
  },
  { 
    name: "Twitter", 
    href: "https://twitter.com/anmolmishra", 
    icon: Twitter,
    color: "hover:text-sky-500",
    bgColor: "hover:bg-sky-50 dark:hover:bg-sky-900/20"
  },
  { 
    name: "Email", 
    href: "mailto:anmol.mishra@example.com", 
    icon: Mail,
    color: "hover:text-purple-600",
    bgColor: "hover:bg-purple-50 dark:hover:bg-purple-900/20"
  },
]

const quickStats = [
  { label: "Projects Completed", value: "50+", icon: Code },
  { label: "Coffee Consumed", value: "∞", icon: Coffee },
  { label: "Years Experience", value: "3+", icon: Sparkles },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-purple-200/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/3 via-pink-500/3 to-orange-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <Link href="#home" className="group inline-block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 mb-4"
                >
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                    Anmol Mishra
                  </span>
                </motion.div>
              </Link>
              
              <p className="text-foreground/70 text-lg leading-relaxed mb-6 max-w-md">
                Passionate <span className="text-purple-400 font-semibold">Frontend Developer</span> and{" "}
                <span className="text-pink-400 font-semibold">Data Analyst</span> crafting beautiful, 
                functional digital experiences with modern technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-purple-200/20 hover:border-purple-300/30 transition-all duration-300"
                >
                  <stat.icon className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-purple-200/20 ${social.bgColor} ${social.color} transition-all duration-300 group`}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <motion.h3 
              className="text-xl font-bold text-foreground mb-6 flex items-center cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                color: "#a855f7",
                textShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-3" />
              Quick Links
            </motion.h3>
            <nav className="space-y-3">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={item.href}
                    className="group flex items-center space-x-3 text-foreground/70 hover:text-purple-400 transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-purple-500/50 rounded-full group-hover:bg-purple-400 group-hover:scale-125 transition-all duration-300" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-xs text-foreground/50">{item.description}</div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <motion.h3 
              className="text-xl font-bold text-foreground mb-6 flex items-center cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                color: "#a855f7",
                textShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full mr-3" />
              Get in Touch
            </motion.h3>
            
            <div className="space-y-4 mb-6">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 text-foreground/70"
              >
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Mail className="h-4 w-4 text-purple-400" />
                </div>
                <span>anmol.mishra@example.com</span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 text-foreground/70"
              >
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Phone className="h-4 w-4 text-purple-400" />
                </div>
                <span>+91 98765 43210</span>
              </motion.div>
              
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center space-x-3 text-foreground/70"
              >
                <div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg">
                  <MapPin className="h-4 w-4 text-purple-400" />
                </div>
                <span>Invertis University, UP</span>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                onClick={scrollToTop}
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 group relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center justify-center">
                  <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" />
                  Back to Top
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-purple-200/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-foreground/60">
              <span>© {new Date().getFullYear()} Anmol Mishra. Crafted with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" />
              <span>using Next.js, TypeScript & Framer Motion</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-foreground/60">
              <Link href="#" className="hover:text-purple-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-purple-300/30">•</span>
              <Link href="#" className="hover:text-purple-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <span className="text-purple-300/30">•</span>
              <span className="text-xs bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-medium">
                v2.0.0
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}