"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create grid points
    const gridSize = 30
    const points: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = []

    const createGrid = () => {
      points.length = 0
      const numX = Math.ceil(canvas.width / gridSize) + 1
      const numY = Math.ceil(canvas.height / gridSize) + 1

      for (let x = 0; x < numX; x++) {
        for (let y = 0; y < numY; y++) {
          const pointX = x * gridSize
          const pointY = y * gridSize
          points.push({
            x: pointX,
            y: pointY,
            originX: pointX,
            originY: pointY,
            vx: 0,
            vy: 0,
          })
        }
      }
    }

    createGrid()
    window.addEventListener("resize", createGrid)

    // Animation variables
    let mouseX = 0
    let mouseY = 0
    let animationFrameId: number
    let lastTime = 0
    const mouseMoveStrength = 100
    const mouseMoveRadius = 200
    const pointAnimationSpeed = 0.03

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = (time: number) => {
      const deltaTime = time - lastTime
      lastTime = time

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update points
      for (let i = 0; i < points.length; i++) {
        const point = points[i]

        // Calculate distance from mouse
        const dx = mouseX - point.originX
        const dy = mouseY - point.originY
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseMoveRadius) {
          const force = (mouseMoveRadius - distance) / mouseMoveRadius
          point.vx += (dx / distance) * force * mouseMoveStrength
          point.vy += (dy / distance) * force * mouseMoveStrength
        }

        // Apply velocity with damping
        point.x += point.vx * (deltaTime / 16)
        point.y += point.vy * (deltaTime / 16)
        point.vx *= 0.9
        point.vy *= 0.9

        // Return to origin
        point.x += (point.originX - point.x) * pointAnimationSpeed
        point.y += (point.originY - point.y) * pointAnimationSpeed
      }

      // Draw connections
      ctx.beginPath()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"

      for (let i = 0; i < points.length; i++) {
        const pointA = points[i]

        for (let j = i + 1; j < points.length; j++) {
          const pointB = points[j]
          const dx = pointA.x - pointB.x
          const dy = pointA.y - pointB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < gridSize * 1.5) {
            ctx.moveTo(pointA.x, pointA.y)
            ctx.lineTo(pointB.x, pointB.y)
          }
        }
      }

      ctx.stroke()

      // Draw points
      for (let i = 0; i < points.length; i++) {
        const point = points[i]
        ctx.fillStyle = "rgba(255, 255, 255, 0.2)"
        ctx.beginPath()
        ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", createGrid)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0e]/80 via-[#0c0c0e] to-[#0c0c0e]"></div>
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <motion.div
        className="absolute inset-0 z-0 bg-[url('/grid.svg')] bg-center opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      />
    </div>
  )
}
