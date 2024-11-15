'use client'

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { memo, useState, useEffect } from "react";

// Move constants outside component to prevent recreation
const roles = [
  "Full Stack Developer",
  "UI/UX Designer",
  "Problem Solver",
  "Tech Enthusiast"
];

// Memoize the theme button to prevent unnecessary re-renders
const ThemeButton = memo(function ThemeButton({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-lg border border-white/10 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ) : (
        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
});

function Hero() {
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <ThemeButton theme={theme} toggleTheme={toggleTheme} />

      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="absolute inset-0 opacity-75">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/20 rounded-full mix-blend-multiply filter blur-lg" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/20 rounded-full mix-blend-multiply filter blur-lg" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/20 rounded-full mix-blend-multiply filter blur-lg" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Usama Nazir
              </span>
            </h1>

            <RoleAnimation />

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I create beautiful, responsive web applications with modern technologies
              and best practices. Let&apos;s build something amazing together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <a
                href="#contact"
                className="group relative flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow duration-300 border border-blue-500/50"
              >
                Let&apos;s Talk
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/Resume-Usama-Nazir.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 bg-white/10 dark:bg-white/10 text-gray-900 dark:text-white rounded-full font-medium hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 border border-gray-200 dark:border-white/10 hover:border-blue-500/50"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Memoize the role animation component
const RoleAnimation = memo(function RoleAnimation() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-20 relative">
      <AnimatePresence mode="wait">
        <motion.p
          key={currentRole}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300 transition-colors duration-300 absolute left-0 right-0"
        >
          {roles[currentRole]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
});

export default memo(Hero);