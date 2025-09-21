"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="animate-fade-in-up"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Have questions or want to work together? Drop me a line!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto animate-fade-in-up animation-delay-200"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/25"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/25"
                required
              />
            </div>
          </div>
          <div className="form-group mb-6">
            <textarea
              name="message"
              rows={6}
              placeholder="Enter your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 focus:border-purple-500 focus:shadow-lg focus:shadow-purple-500/25 resize-none"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 text-white rounded-full mx-auto hover:shadow-lg hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25"
            >
              Submit Now
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}