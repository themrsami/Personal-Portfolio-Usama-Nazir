'use client'

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Resume CV Builder",
    description: "A web app to build resumes with customizable templates and real-time previews. Features multiple export options and responsive design.",
    status: "Completed",
    impact: "Helping job seekers create professional resumes easily",
    github: "https://github.com/themrsami/Resume-CV-Builder",
    technologies: ["Next.js", "Tailwind CSS", "JavaScript"],
    category: "Productivity"
  },
  {
    title: "Learning Management System",
    description: "A comprehensive LMS built with React Native, featuring course management and user-friendly design for both students and instructors.",
    status: "Completed",
    impact: "Facilitating online education and course management",
    github: "https://github.com/themrsami/LMS-Learning-Management-System-React-Native",
    technologies: ["React Native", "JavaScript"],
    category: "Education"
  },
  {
    title: "Expense Tracker",
    description: "Android app for tracking expenses with Firebase integration and PDF report generation capabilities.",
    status: "Completed",
    impact: "Helping users manage their finances effectively",
    github: "https://github.com/themrsami/Expense-Tracker-Firebase-With-PDF-Report-Android-App",
    technologies: ["React Native", "Expo", "Firebase"],
    category: "Finance"
  },
  {
    title: "MongoDB Notes",
    description: "Comprehensive documentation and notes covering MongoDB operations, data modeling, indexing, and aggregation with practical examples.",
    status: "Completed",
    impact: "Supporting developers in learning MongoDB",
    github: "https://github.com/themrsami/Easy-MongoDB-Notes",
    technologies: ["Markdown", "MongoDB"],
    category: "Education"
  },
  {
    title: "Password Generator",
    description: "A modern password generator with customizable options and secure password generation using React and ShadCN UI.",
    status: "Completed",
    impact: "Enhancing online security with strong passwords",
    github: "https://github.com/themrsami/Generate-Random-Password",
    technologies: ["React", "ShadCN UI", "React Icons"],
    category: "Security"
  },
  {
    title: "Weather App",
    description: "A sleek weather application built with React Native, displaying current weather conditions with a user-friendly interface.",
    status: "Completed",
    impact: "Providing easy access to weather information",
    github: "https://github.com/themrsami/React-Native-Whether-App",
    technologies: ["React Native", "JavaScript"],
    category: "Utility"
  },
  {
    title: "AI-Powered Portfolio Assistant",
    description: "An AI assistant that helps users create and maintain their professional portfolios with personalized recommendations.",
    status: "In Progress",
    impact: "Revolutionizing portfolio creation with AI",
    technologies: ["Next.js", "OpenAI API", "TypeScript"],
    category: "AI/ML"
  },
  {
    title: "Developer Productivity Tools",
    description: "A collection of CLI tools and VS Code extensions to enhance developer workflow and productivity.",
    status: "Planning",
    impact: "Streamlining development processes",
    technologies: ["Node.js", "TypeScript", "VS Code API"],
    category: "Developer Tools"
  }
]

export default function Ideas() {
  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-4">
            Innovation Lab
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of completed projects and upcoming ideas. From concept to reality, tracking the journey of each innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] dark:hover:shadow-cyan-500/50 hover:shadow-cyan-200/50 dark:hover:border-cyan-500 hover:border-cyan-200"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <Badge
                  variant={project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"}
                  className="ml-2"
                >
                  {project.status}
                </Badge>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                    Impact
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.impact}
                  </p>
                </div>

                {project.github && (
                  <div className="pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
