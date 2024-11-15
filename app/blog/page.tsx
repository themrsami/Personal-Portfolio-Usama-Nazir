'use client'

import { blogPosts } from "./data"
import BlogCard from "@/app/components/BlogCard"
import BlogTabs from "@/app/components/BlogTabs"
import { motion } from "framer-motion"
import SearchBar from "@/app/components/SearchBar"
import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  // Filter posts based on active category and search term
  const filteredPosts = useMemo(() => {
    return blogPosts
      .filter(post => 
        (activeCategory === 'all' || post.tags.includes(activeCategory)) &&
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }, [activeCategory, searchTerm])

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Blog Posts
          </h1>
          <Link
            href="/"
            className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Thoughts on web development, programming, and technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <BlogTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No posts found matching your criteria.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
