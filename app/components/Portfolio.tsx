'use client'

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from 'react';

const projects = [
  {
    title: "Resume CV Builder",
    description: "A web app to build resumes with customizable templates and real-time previews.",
    image: "/project1.jpg",
    tags: ["Next.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/themrsami/Resume-CV-Builder",
    demo: "https://github.com/themrsami/Resume-CV-Builder",
    category: "Web App"
  },
  {
    title: "Learning Management System",
    description: "A comprehensive LMS built with React Native for course management.",
    image: "/project2.jpg",
    tags: ["React Native", "JavaScript"],
    github: "https://github.com/themrsami/LMS-Learning-Management-System-React-Native",
    demo: "https://github.com/themrsami/LMS-Learning-Management-System-React-Native",
    category: "Mobile App"
  },
  {
    title: "Expense Tracker",
    description: "Android app for tracking expenses with Firebase integration and PDF reports.",
    image: "/project3.jpg",
    tags: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/themrsami/Expense-Tracker-Firebase-With-PDF-Report-Android-App",
    demo: "https://github.com/themrsami/Expense-Tracker-Firebase-With-PDF-Report-Android-App",
    category: "Mobile App"
  },
  {
    title: "MongoDB Notes",
    description: "Comprehensive documentation covering MongoDB operations and best practices.",
    image: "/project4.jpg",
    tags: ["Markdown", "MongoDB"],
    github: "https://github.com/themrsami/Easy-MongoDB-Notes",
    demo: "https://github.com/themrsami/Easy-MongoDB-Notes",
    category: "Documentation"
  },
  {
    title: "Password Generator",
    description: "A modern password generator with customizable options using React.",
    image: "/project5.jpg",
    tags: ["React", "ShadCN UI", "React Icons"],
    github: "https://github.com/themrsami/Generate-Random-Password",
    demo: "https://github.com/themrsami/Generate-Random-Password",
    category: "Web App"
  },
  {
    title: "Weather App",
    description: "A sleek weather application built with React Native.",
    image: "/project6.jpg",
    tags: ["React Native", "JavaScript"],
    github: "https://github.com/themrsami/React-Native-Whether-App",
    demo: "https://github.com/themrsami/React-Native-Whether-App",
    category: "Mobile App"
  }
];

const categories = ["All", "Web App", "Mobile App", "Documentation"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <section id="portfolio" className="relative py-20 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 theme-transition overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/20 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/20 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/20 rounded-full mix-blend-multiply dark:mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            My Portfolio
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 theme-transition">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 border border-blue-500/50"
                  : "bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500/50 border border-gray-200 dark:border-white/10 theme-transition"
              }`}
              style={activeCategory === category ? {
                boxShadow: '0 0 15px rgba(59,130,246,0.5), 0 0 30px rgba(139,92,246,0.3)',
              } : undefined}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gray-50 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 hover:shadow-lg dark:hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] theme-transition"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40 dark:opacity-60" />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 theme-transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 theme-transition">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 theme-transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors theme-transition"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors theme-transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}