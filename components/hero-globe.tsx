"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Globe parameters
    const globeRadius = Math.min(canvas.width, canvas.height) * 0.3
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Battery locations (random for now)
    const batteries = Array.from({ length: 50 }, () => ({
      lat: Math.random() * Math.PI - Math.PI / 2,
      lng: Math.random() * Math.PI * 2,
      size: Math.random() * 3 + 1,
      color: `rgba(74, 222, 128, ${Math.random() * 0.5 + 0.5})`,
    }))

    // Animation variables
    let rotation = 0
    const rotationSpeed = 0.005

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw globe
      ctx.beginPath()
      ctx.arc(centerX, centerY, globeRadius, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(10, 10, 10, 0.5)"
      ctx.fill()

      // Draw grid lines
      ctx.strokeStyle = "rgba(74, 222, 128, 0.2)"
      ctx.lineWidth = 0.5

      // Latitude lines
      for (let lat = -80; lat <= 80; lat += 20) {
        const latRad = (lat * Math.PI) / 180
        ctx.beginPath()
        for (let lng = 0; lng <= 360; lng += 5) {
          const lngRad = ((lng + rotation * (180 / Math.PI)) * Math.PI) / 180
          const x = centerX + globeRadius * Math.cos(latRad) * Math.sin(lngRad)
          const y = centerY - globeRadius * Math.sin(latRad)
          if (lng === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Longitude lines
      for (let lng = 0; lng < 360; lng += 20) {
        const lngRad = ((lng + rotation * (180 / Math.PI)) * Math.PI) / 180
        ctx.beginPath()
        for (let lat = -90; lat <= 90; lat += 5) {
          const latRad = (lat * Math.PI) / 180
          const x = centerX + globeRadius * Math.cos(latRad) * Math.sin(lngRad)
          const y = centerY - globeRadius * Math.sin(latRad)
          if (lat === -90) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.stroke()
      }

      // Draw batteries
      batteries.forEach((battery) => {
        const lngRad = battery.lng + rotation
        const x = centerX + globeRadius * Math.cos(battery.lat) * Math.sin(lngRad)
        const y = centerY - globeRadius * Math.sin(battery.lat)

        // Only draw if on the visible side of the globe
        if (Math.cos(battery.lat) * Math.cos(lngRad) > 0) {
          ctx.beginPath()
          ctx.arc(x, y, battery.size, 0, Math.PI * 2)
          ctx.fillStyle = battery.color
          ctx.fill()

          // Add glow effect
          ctx.shadowColor = "rgba(74, 222, 128, 0.8)"
          ctx.shadowBlur = 10
          ctx.beginPath()
          ctx.arc(x, y, battery.size * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })

      // Update rotation
      rotation += rotationSpeed

      requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.div
      className="relative h-[400px] w-full overflow-hidden rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
    </motion.div>
  )
}
