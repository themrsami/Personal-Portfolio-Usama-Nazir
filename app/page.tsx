'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Loading from './loading'

// Static imports for critical components
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Dynamic imports for non-critical components
const About = dynamic(() => import('./components/About'), {
  loading: () => <Loading />,
})
const Services = dynamic(() => import('./components/Services'), {
  loading: () => <Loading />,
})
const Portfolio = dynamic(() => import('./components/Portfolio'), {
  loading: () => <Loading />,
})
const Testimonials = dynamic(() => import('./components/Testimonials'), {
  loading: () => <Loading />,
})
const Contact = dynamic(() => import('./components/Contact'), {
  loading: () => <Loading />,
})
const Footer = dynamic(() => import('./components/Footer'), {
  loading: () => <Loading />,
})

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Navbar />
      
      {/* Critical content loaded immediately */}
      <Hero />

      {/* Non-critical content loaded dynamically */}
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
      >
        <Suspense fallback={<Loading />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
        
        <Suspense fallback={<Loading />}>
          <Footer />
        </Suspense>
      </motion.div>

      {/* Structured data for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            mainEntity: {
              '@type': 'Person',
              name: 'Usama Nazir',
              jobTitle: 'Full Stack Developer',
              description: 'Expert Full Stack Developer specializing in React, Next.js, and modern web development.',
              knowsAbout: [
                'React.js',
                'Next.js',
                'TypeScript',
                'Node.js',
                'UI/UX Design',
                'Full Stack Development'
              ],
              offers: {
                '@type': 'Offer',
                itemOffered: [
                  {
                    '@type': 'Service',
                    name: 'Full Stack Development',
                    description: 'End-to-end web application development'
                  },
                  {
                    '@type': 'Service',
                    name: 'UI/UX Design',
                    description: 'User interface and experience design'
                  }
                ]
              }
            }
          })
        }}
      />
    </main>
  )
}