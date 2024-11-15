'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Resume CV Builder",
    description: "A web app to build resumes with customizable templates and real-time previews. Features multiple export options and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/themrsami/Resume-CV-Builder",
    features: ["Real-time preview", "Multiple templates", "Export options"],
    image: "/projects/resume-builder.png"
  },
  {
    title: "Learning Management System",
    description: "A comprehensive LMS built with React Native, featuring course management and user-friendly design for both students and instructors.",
    tech: ["React Native", "JavaScript"],
    github: "https://github.com/themrsami/LMS-Learning-Management-System-React-Native",
    features: ["User-friendly design", "Course management"],
    image: "/projects/lms.png"
  },
  {
    title: "Expense Tracker",
    description: "Android app for tracking expenses with Firebase integration and PDF report generation capabilities.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/themrsami/Expense-Tracker-Firebase-With-PDF-Report-Android-App",
    features: ["Expense management", "PDF report generation", "Firebase integration"],
    image: "/projects/expense-tracker.png"
  },
  {
    title: "MongoDB Notes",
    description: "Comprehensive documentation and notes covering MongoDB operations, data modeling, indexing, and aggregation with practical examples.",
    tech: ["Markdown", "MongoDB"],
    github: "https://github.com/themrsami/Easy-MongoDB-Notes",
    features: ["Detailed MongoDB topics", "Practical examples"],
    image: "/projects/mongodb-notes.png"
  },
  {
    title: "Password Generator",
    description: "A modern password generator with customizable options and secure password generation using React and ShadCN UI.",
    tech: ["React", "ShadCN UI", "React Icons"],
    github: "https://github.com/themrsami/Generate-Random-Password",
    features: ["Customizable options", "Secure passwords"],
    image: "/projects/password-gen.png"
  },
  {
    title: "Weather App",
    description: "A sleek weather application built with React Native, displaying current weather conditions with a user-friendly interface.",
    tech: ["React Native", "JavaScript"],
    github: "https://github.com/themrsami/React-Native-Whether-App",
    features: ["Current weather display", "User-friendly interface"],
    image: "/projects/weather-app.png"
  }
]

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Featured Projects
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that demonstrate my expertise in web development, mobile apps, and technical documentation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 theme-transition"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-800"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <Button
            variant="outline"
            size="lg"
            className="bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800"
            asChild
          >
            <a href="https://github.com/themrsami" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
