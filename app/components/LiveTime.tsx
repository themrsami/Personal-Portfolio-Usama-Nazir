'use client'

import { useState, useEffect } from 'react'

export default function LiveTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed top-4 left-4 z-50 bg-white/10 backdrop-blur-md dark:bg-gray-900/50 px-4 py-2 rounded-full border border-gray-200/20 dark:border-white/10 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          {time.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </div>
      </div>
    </div>
  )
}
