"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send, Mail, Phone, MapPin, Github, CheckCircle, Loader2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "mishraanmol2004@gmail.com",
    href: "mailto:mishraanmol2004@gmail.com",
    description: "Drop me a line anytime"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
    description: "Call for immediate response"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Invertis University, UP",
    href: "#",
    description: "Currently based in"
  },
  {
    icon: Github,
    title: "GitHub",
    value: "@annmol099",
    href: "https://github.com/annmol099",
    description: "Check out my repositories"
  }
]

interface FloatingLabelInputProps {
  id: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
  icon?: React.ReactNode;
}

function FloatingLabelInput({ id, name, type, value, onChange, placeholder, required, icon }: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  React.useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  return (
    <div className="relative">
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 z-10">
            {icon}
          </div>
        )}
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
          className={`
            w-full h-14 px-4 ${icon ? 'pl-12' : 'pl-4'} pr-4 pt-6 pb-2 
            bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-xl 
            text-foreground placeholder-transparent 
            focus:outline-none focus:border-purple-400 focus:bg-white/10
            transition-all duration-300 ease-out
            hover:border-purple-300/30 hover:bg-white/8
          `}
          placeholder={placeholder}
        />
        <motion.label
          htmlFor={id}
          initial={false}
          animate={{
            y: isFocused || hasValue ? -8 : 8,
            scale: isFocused || hasValue ? 0.85 : 1,
            color: isFocused ? "#a855f7" : "#64748b"
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={`
            absolute left-4 ${icon ? 'left-12' : 'left-4'} top-1/2 transform -translate-y-1/2 
            pointer-events-none origin-left font-medium
            ${isFocused || hasValue ? 'text-xs' : 'text-base'}
          `}
        >
          {placeholder}
        </motion.label>
      </div>
    </div>
  );
}

interface FloatingLabelTextareaProps {
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  rows?: number;
}

function FloatingLabelTextarea({ id, name, value, onChange, placeholder, required, rows = 5 }: FloatingLabelTextareaProps) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hasValue, setHasValue] = React.useState(false);

  React.useEffect(() => {
    setHasValue(value.length > 0);
  }, [value]);

  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        rows={rows}
        className={`
          w-full px-4 pt-6 pb-4 
          bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-xl 
          text-foreground placeholder-transparent resize-none
          focus:outline-none focus:border-purple-400 focus:bg-white/10
          transition-all duration-300 ease-out
          hover:border-purple-300/30 hover:bg-white/8
        `}
        placeholder={placeholder}
      />
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isFocused || hasValue ? -8 : 20,
          scale: isFocused || hasValue ? 0.85 : 1,
          color: isFocused ? "#a855f7" : "#64748b"
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className={`
          absolute left-4 top-6 transform -translate-y-1/2 
          pointer-events-none origin-left font-medium
          ${isFocused || hasValue ? 'text-xs' : 'text-base'}
        `}
      >
        {placeholder}
      </motion.label>
    </div>
  );
}

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-pink-900/5 to-orange-900/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.div>
          
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 30px rgba(168, 85, 247, 0.5)",
              rotateZ: 2
            }}
            transition={{ duration: 0.3 }}
          >
            Let&apos;s Connect
          </motion.h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let&apos;s discuss your next project.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Card className="border border-purple-200/20 bg-white/5 backdrop-blur-xl">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <div className="mb-6">
                  <motion.h3 
                    className="text-xl font-bold text-foreground mb-2 cursor-pointer"
                    whileHover={{ 
                      scale: 1.02,
                      color: "#a855f7",
                      textShadow: "0 0 15px rgba(168, 85, 247, 0.3)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    Send a Message
                  </motion.h3>
                  <p className="text-foreground/60">Fill out the form below and I&apos;ll get back to you within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <FloatingLabelInput
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <FloatingLabelInput
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address"
                        required
                        icon={<Mail className="w-5 h-5" />}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <FloatingLabelInput
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    viewport={{ once: true }}
                  >
                    <FloatingLabelTextarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      required
                      rows={4}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      disabled={isSubmitting || isSuccess}
                      className="w-full h-12 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-300 disabled:opacity-50 relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "0%" }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : isSuccess ? (
                          <>
                            <CheckCircle className="w-5 h-5 mr-2" />
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information Below Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16"
          >
            <div className="text-center mb-8 sm:mb-12">
              <motion.h3 
                className="text-2xl font-bold text-foreground mb-2 cursor-pointer"
                whileHover={{ 
                  scale: 1.03,
                  color: "#a855f7",
                  textShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                Other Ways to Connect
              </motion.h3>
              <p className="text-foreground/70">
                Choose your preferred method to get in touch
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group"
                >
                  <Card className="border border-purple-200/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-purple-300/30 transition-all duration-300 h-full">
                    <CardContent className="p-4 sm:p-6 text-center">
                      <a 
                        href={item.href}
                        className="flex flex-col items-center space-y-3 sm:space-y-4"
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <item.icon className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm sm:text-base text-purple-400 font-medium">{item.title}</p>
                          <p className="text-foreground font-semibold group-hover:text-purple-400 transition-colors duration-300 text-sm sm:text-base break-all">
                            {item.value}
                          </p>
                          <p className="text-foreground/60 text-xs sm:text-sm mt-1 px-2">{item.description}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}