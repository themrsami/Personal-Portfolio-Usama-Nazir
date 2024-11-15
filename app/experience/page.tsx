'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Building2 } from 'lucide-react'

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    location: "Remote",
    period: "2022 - Present",
    description: [
      "Led development of multiple high-impact web applications using Next.js and TypeScript",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Mentored junior developers and conducted code reviews",
      "Architected scalable solutions handling 1M+ monthly active users"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd",
    location: "Lahore, Pakistan",
    period: "2020 - 2022",
    description: [
      "Developed and maintained multiple client projects using React and Node.js",
      "Integrated payment gateways and third-party APIs",
      "Improved application performance by 60% through optimization",
      "Collaborated with design team to implement responsive UI/UX"
    ]
  },
  {
    title: "Frontend Developer",
    company: "Creative Tech",
    location: "Lahore, Pakistan",
    period: "2018 - 2020",
    description: [
      "Built responsive web applications using React and Redux",
      "Implemented modern UI/UX designs with attention to detail",
      "Reduced load time by 50% through code optimization",
      "Worked closely with backend team to integrate APIs"
    ]
  }
]

export default function Experience() {
  return (
    <section className="min-h-screen py-20 px-4 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Professional Experience
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            My journey in software development and the impact I&apos;ve made.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20 group-hover:opacity-75 dark:opacity-30 dark:group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative p-6 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 theme-transition">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-4 mt-2 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center">
                        <Building2 className="w-4 h-4 mr-1" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2 md:mt-0 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {experience.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 text-blue-500 dark:text-blue-400">•</span>
                      <span className="text-gray-600 dark:text-gray-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
