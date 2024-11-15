'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { blogPosts } from '../data'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Markdown from 'markdown-to-jsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { ArrowLeft } from 'lucide-react'

const Code = ({ className, children }: { className?: string; children: string }) => {
  const match = /language-(\w+)/.exec(className || '')
  return match ? (
    <SyntaxHighlighter
      style={tomorrow}
      language={match[1]}
      PreTag="div"
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className}>{children}</code>
  )
}

const MarkdownImage = ({ alt, src }: { alt?: string; src?: string }) => {
  return (
    <div className="relative w-full h-64 my-4">
      <Image
        src={src || ''}
        alt={alt || ''}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const [content, setContent] = useState('')
  const post = blogPosts.find((post) => post.slug === slug)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`/api/blog/${slug}`)
        if (!response.ok) throw new Error('Failed to fetch content')
        const data = await response.json()
        setContent(data.content)
      } catch (error) {
        console.error('Error loading blog post:', error)
        setContent('')
      }
    }

    if (post) {
      fetchContent()
    }
  }, [slug, post])

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Post not found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 py-8 px-4"
    >
      <article className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/blog"
            className="flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <Link
            href="/"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Back to Home
          </Link>
        </div>

        <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {post.title}
        </h1>
        
        <time className="text-gray-500 dark:text-gray-400 mb-8 block">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>

        <div className="blog-content">
          <Markdown
            options={{
              overrides: {
                code: Code,
                img: MarkdownImage,
              },
            }}
          >
            {content}
          </Markdown>
        </div>
      </article>
    </motion.main>
  )
}