"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CounterProps {
  end: number
  duration?: number
  label: string
  suffix?: string
  delay?: number
}

export default function CounterAnimation({ end, duration = 2, label, suffix = "", delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }

    const timeoutId = setTimeout(() => {
      animationFrame = requestAnimationFrame(step)
    }, delay)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(timeoutId)
    }
  }, [end, duration, delay])

  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      <div className="text-3xl font-bold text-green-400 md:text-4xl">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </motion.div>
  )
}
