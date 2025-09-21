"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { 
  ExternalLink, 
  Github, 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Laptop, 
  PlayCircle, 
  DollarSign,
  MapPin,
  User,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  // Machine Learning & Data Analysis Projects
  {
    title: "Movie Recommendation System",
    description: "Intelligent movie recommendation engine using machine learning algorithms to suggest personalized content based on user preferences and viewing history.",
    category: "Machine Learning",
    icon: PlayCircle,
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Collaborative Filtering"],
    demo: "https://example.com/movie-recommender",
    github: "https://github.com/annmol099/movie-recommendation",
    featured: true,
    gradient: "from-purple-500 to-pink-500",
    stats: ["95% Accuracy", "10K+ Movies", "Content-Based Filtering"]
  },
  {
    title: "E-commerce Data Analysis",
    description: "Comprehensive analysis of e-commerce sales data to identify trends, customer behavior patterns, and business insights for strategic decision making.",
    category: "Data Analytics",
    icon: BarChart3,
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Visualization"],
    demo: "https://example.com/ecommerce-analysis",
    github: "https://github.com/annmol099/ecommerce-analysis",
    featured: false,
    gradient: "from-blue-500 to-cyan-500",
    stats: ["50K+ Records", "15+ Metrics", "Business Insights"]
  },
  {
    title: "Mudra Loan Analysis",
    description: "Analysis of Mudra loan disbursement patterns and success rates to understand micro-finance trends and borrower profiles across different regions.",
    category: "Financial Analytics",
    icon: DollarSign,
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Data Analytics", "Statistical Analysis", "Excel", "SQL"],
    demo: "https://example.com/mudra-analysis",
    github: "https://github.com/annmol099/mudra-loan-analysis",
    featured: false,
    gradient: "from-green-500 to-emerald-500",
    stats: ["1M+ Loans", "Regional Analysis", "Success Metrics"]
  },
  {
    title: "Laptop Price Prediction",
    description: "Machine learning model to predict laptop prices based on specifications like processor, RAM, storage, and brand using regression algorithms.",
    category: "Machine Learning",
    icon: Laptop,
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Machine Learning", "Regression", "Feature Engineering", "Scikit-learn"],
    demo: "https://example.com/laptop-price-predictor",
    github: "https://github.com/annmol099/laptop-price-prediction",
    featured: false,
    gradient: "from-orange-500 to-red-500",
    stats: ["85% Accuracy", "2K+ Laptops", "Price Prediction"]
  },
  {
    title: "Netflix Content Analysis",
    description: "Deep dive analysis of Netflix's content library, exploring genre trends, release patterns, and content strategy across different regions and time periods.",
    category: "Data Analytics",
    icon: PlayCircle,
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Data Visualization", "Pandas", "Plotly", "Content Analysis"],
    demo: "https://example.com/netflix-analysis",
    github: "https://github.com/annmol099/netflix-analysis",
    featured: false,
    gradient: "from-red-500 to-pink-500",
    stats: ["8K+ Titles", "Global Data", "Trend Analysis"]
  },
  {
    title: "Stock Market Analysis",
    description: "Comprehensive stock market data analysis with trend prediction, volatility assessment, and investment insights using technical indicators.",
    category: "Financial Analytics",
    icon: TrendingUp,
    image: "/api/placeholder/600/400",
    technologies: ["Python", "Financial Analysis", "Technical Indicators", "Time Series", "Matplotlib"],
    demo: "https://example.com/stock-analysis",
    github: "https://github.com/annmol099/stock-analysis",
    featured: false,
    gradient: "from-indigo-500 to-purple-500",
    stats: ["Real-time Data", "Multiple Stocks", "Technical Analysis"]
  },
  // Frontend Development Projects
  {
    title: "Hospital Finder Platform",
    description: "Location-based hospital finder application helping users locate nearby medical facilities with real-time availability and emergency services information.",
    category: "Frontend Development",
    icon: MapPin,
    image: "/api/placeholder/600/400",
    technologies: ["HTML", "CSS", "JavaScript", "Maps API", "Responsive Design"],
    demo: "https://example.com/hospital-finder",
    github: "https://github.com/annmol099/hospital-finder",
    featured: true,
    gradient: "from-teal-500 to-blue-500",
    stats: ["Location-Based", "Real-time", "Emergency Services"]
  },
  {
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website showcasing projects and skills with advanced animations, dark mode, and interactive components.",
    category: "Frontend Development",
    icon: User,
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    demo: "https://anmol-portfolio.vercel.app",
    github: "https://github.com/annmol099/portfolio",
    featured: false,
    gradient: "from-violet-500 to-purple-500",
    stats: ["Responsive", "Animated", "Modern Design"]
  }
]

const categories = [
  {
    name: "Machine Learning & Analytics",
    count: projects.filter(p => p.category.includes('Machine Learning') || p.category.includes('Analytics')).length,
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Frontend Development",
    count: projects.filter(p => p.category.includes('Frontend')).length,
    color: "from-blue-500 to-cyan-500"
  }
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")
  
  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => 
        selectedCategory === "ML/Analytics" 
          ? project.category.includes('Machine Learning') || project.category.includes('Analytics')
          : project.category.includes('Frontend')
      )

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
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
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6"
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              textShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
              rotateY: 5
            }}
            transition={{ duration: 0.3 }}
          >
            Featured Projects
          </motion.h2>
          <p className="text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            A showcase of my machine learning, data analysis, and frontend development work
          </p>
        </motion.div>

        {/* Category Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
                  <p className="text-foreground/60">Explore my work</p>
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.count}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 p-2 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-xl">
            {["All", "ML/Analytics", "Frontend"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${project.featured ? "lg:col-span-2" : ""} group`}
            >
              <Card className="h-full overflow-hidden bg-white/5 backdrop-blur-sm border border-purple-200/20 hover:bg-white/10 hover:border-purple-300/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Project Header */}
                <div className={`relative p-6 bg-gradient-to-br ${project.gradient} text-white`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      <project.icon className="h-6 w-6" />
                    </div>
                    {project.featured && (
                      <Badge className="bg-white/20 text-white border-white/30">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90 text-sm font-medium">{project.category}</p>
                </div>

                <CardContent className="p-6 space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-2 bg-white/5 rounded-lg">
                        <div className="text-xs text-foreground/60">{stat}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs bg-white/5 border-purple-200/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <div className="flex space-x-3 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 bg-white/5 border-purple-200/30 hover:bg-white/10" 
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 bg-white/5 border-purple-200/30 hover:bg-white/10" 
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="p-8 bg-white/5 backdrop-blur-sm border border-purple-200/20 rounded-2xl max-w-2xl mx-auto">
            <Brain className="h-12 w-12 mx-auto mb-4 text-purple-400" />
            <motion.h3 
              className="text-2xl font-bold mb-4 text-foreground cursor-pointer"
              whileHover={{ 
                scale: 1.03,
                color: "#a855f7",
                textShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              Interested in collaborating?
            </motion.h3>
            <p className="text-foreground/70 mb-6 leading-relaxed">
              I&apos;m always excited to work on new projects involving machine learning, data analysis, 
              and frontend development. Let&apos;s build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                asChild
              >
                <a href="https://github.com/annmol099" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 mr-2" />
                  View All Projects
                </a>
              </Button>
              <Button variant="outline" className="border-purple-200/30" asChild>
                <a href="#contact">
                  Get In Touch
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
