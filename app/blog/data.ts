export interface BlogPost {
  id: number
  title: string
  description: string
  date: string
  slug: string
  image: string
  tags: string[]
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'AI-Driven Web Development: Building Smart Applications in 2024',
    description: 'Explore how to integrate AI capabilities into web applications using TensorFlow.js, Hugging Face, and OpenAI. Learn to build intelligent features that enhance user experience.',
    date: '2023-12-20',
    slug: 'ai-driven-web-development',
    image: '/blog/ai-web-dev.jpg',
    tags: ['Artificial Intelligence', 'Web Development', 'Machine Learning', 'TensorFlow.js', 'OpenAI', 'React'],
    author: 'Usama Nazir'
  },
  {
    id: 2,
    title: 'Mastering TypeScript in 2025: The Complete Developer\'s Guide',
    description: 'An in-depth guide to TypeScript\'s advanced features, best practices, and upcoming features for 2025. Learn about type safety, generics, decorators, and modern TypeScript patterns.',
    date: '2023-12-18',
    slug: 'mastering-typescript-2025',
    image: '/blog/typescript.jpg',
    tags: ['TypeScript', 'JavaScript', 'Web Development', 'Programming', 'Software Engineering'],
    author: 'Usama Nazir'
  },
  {
    id: 3,
    title: 'Modern Web Performance Optimization: A Complete Guide',
    description: 'Learn advanced techniques for optimizing web applications, from Core Web Vitals to modern performance APIs. Master the art of building lightning-fast web experiences.',
    date: '2023-12-16',
    slug: 'modern-web-performance-optimization',
    image: '/blog/performance.jpg',
    tags: ['Performance', 'Web Development', 'Core Web Vitals', 'Optimization', 'React', 'Next.js'],
    author: 'Usama Nazir'
  },
  {
    id: 4,
    title: 'The Power of Framer Motion: Building Modern Web Animations in React',
    description: 'Master Framer Motion for creating fluid, professional animations in React applications. Learn advanced animation techniques, performance optimization, and accessibility best practices.',
    date: '2023-12-14',
    slug: 'power-of-framer-motion',
    image: '/blog/framer-motion.jpg',
    tags: ['Animation', 'React', 'Framer Motion', 'Web Development', 'UX Design', 'Performance'],
    author: 'Usama Nazir'
  },
  {
    id: 5,
    title: 'Building a Modern Portfolio with Next.js in 2024: The Ultimate Guide',
    description: 'Learn how to build a professional portfolio website using Next.js 14, React 18, TypeScript, and Tailwind CSS. Includes SEO optimization, performance best practices, and deployment strategies.',
    date: '2023-12-12',
    slug: 'building-modern-portfolio-nextjs',
    image: '/blog/portfolio.jpg',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Web Development', 'Portfolio'],
    author: 'Usama Nazir'
  }
]
