'use client'

import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 z-50 origin-left"
      style={{
        scaleX,
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(124, 58, 237, 0.3)',
      }}
    />
  )
}
