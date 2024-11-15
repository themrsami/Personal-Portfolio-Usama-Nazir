'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Code2, BookText, Briefcase, Lightbulb, MessageCircle, Home } from 'lucide-react'

export default function NavButtons() {
  const buttons = [
    {
      href: '/',
      text: 'Home',
      icon: Home,
      color: 'from-indigo-600 to-violet-500'
    },
    {
      href: '/blog',
      text: 'Blog',
      icon: BookText,
      color: 'from-purple-600 to-blue-500'
    },
    {
      href: '/projects',
      text: 'Projects',
      icon: Code2,
      color: 'from-green-600 to-emerald-500'
    },
    {
      href: '/experience',
      text: 'Experience',
      icon: Briefcase,
      color: 'from-orange-600 to-red-500'
    },
    {
      href: '/ideas',
      text: 'Ideas',
      icon: Lightbulb,
      color: 'from-yellow-600 to-amber-500'
    },
    {
      href: '/contact',
      text: 'Contact',
      icon: MessageCircle,
      color: 'from-pink-600 to-rose-500'
    }
  ]

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex gap-3 p-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20"
      >
        {buttons.map((button) => (
          <Link key={button.href} href={button.href}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                relative group flex items-center gap-2 px-4 py-2 rounded-full
                bg-gradient-to-r ${button.color}
                text-white font-medium
                transition-all duration-300
                hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900
              `}
            >
              <button.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{button.text}</span>
              <div 
                className={`absolute -inset-1 rounded-full bg-gradient-to-r ${button.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />
            </motion.button>
          </Link>
        ))}
      </motion.div>
    </div>
  )
}
