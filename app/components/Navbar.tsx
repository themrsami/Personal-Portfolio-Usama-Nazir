'use client'

import { useEffect, useState, useCallback } from 'react'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, Layout, MessageSquare, Mail } from 'lucide-react'
import { cn } from "@/lib/utils"

const navItems = [
  { name: 'Home', icon: Home, href: '/' },
  { name: 'About', icon: User, href: '/#about' },
  { name: 'Services', icon: Briefcase, href: '/#services' },
  { name: 'Portfolio', icon: Layout, href: '/#portfolio' },
  { name: 'Testimonials', icon: MessageSquare, href: '/#testimonials' },
  { name: 'Contact', icon: Mail, href: '/#contact' }
]

export default function Navbar() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState(pathname)

  const updateSection = useCallback((newSection: string) => {
    if (activeSection !== newSection) {
      setActiveSection(newSection)
      history.replaceState(null, '', newSection)
    }
  }, [activeSection])

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 3
          
          // Check if we're at the top of the page first
          if (window.scrollY < 50) {
            updateSection('/')
            ticking = false
            return
          }

          // Get all sections and their positions
          const sections = navItems
            .map(item => ({
              id: item.href.replace('/#', ''),
              href: item.href
            }))
            .filter(item => item.id !== '')
            .map(section => {
              const element = document.getElementById(section.id)
              if (!element) return null
              const rect = element.getBoundingClientRect()
              return {
                id: section.id,
                href: section.href,
                top: window.scrollY + rect.top,
                bottom: window.scrollY + rect.bottom
              }
            })
            .filter((section): section is NonNullable<typeof section> => section !== null)

          // Find the current section
          const currentSection = sections.find(section => 
            scrollPosition >= section.top && 
            scrollPosition <= section.bottom
          )

          if (currentSection) {
            updateSection(currentSection.href)
          }

          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [updateSection])

  const scrollToSection = (href: string) => {
    const id = href.replace('/#', '')
    const element = document.getElementById(id)
    
    updateSection(href)
    
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    } else if (href === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const isActive = (href: string) => {
    if (href === '/' && (activeSection === '/' || activeSection === '/#home')) {
      return true
    }
    return href === activeSection
  }

  return (
    <motion.nav 
      className="fixed bottom-4 md:bottom-8 left-0 right-0 mx-auto w-fit z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
    >
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-xl theme-transition" />
        
        {/* Navigation buttons */}
        <ul className="relative flex items-center gap-1 bg-white/70 dark:bg-black/10 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200/50 dark:border-white/10 shadow-lg dark:shadow-[0_0_15px_rgba(0,0,0,0.5)] theme-transition">
          {navItems.map((item) => (
            <motion.li 
              key={item.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  isActive(item.href)
                    ? "text-white dark:text-white"
                    : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white theme-transition"
                )}
                aria-label={item.name}
              >
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                      boxShadow: '0 0 15px #3b82f6, 0 0 30px #8b5cf6',
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  <item.icon className="w-5 h-5" />
                </span>
              </button>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}