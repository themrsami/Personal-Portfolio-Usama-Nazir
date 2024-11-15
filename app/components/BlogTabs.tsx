'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { blogPosts } from '../blog/data'

interface BlogTabsProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function BlogTabs({ activeCategory, onCategoryChange }: BlogTabsProps) {
  // Get unique categories from blog posts
  const categories = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  ).sort()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-wrap gap-2 mb-8"
    >
      <motion.button
        key="all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
          activeCategory === 'all'
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
        }`}
      >
        All
      </motion.button>
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}
