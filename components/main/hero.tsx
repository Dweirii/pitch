"use client"

import { useState, useEffect, useRef } from "react"
import { Play, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Background } from "@/components/main/background"
import { motion } from "framer-motion"

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const playVideo = () => {
    setIsVideoPlaying(true)
    setTimeout(() => {
      const video = videoRef.current
      if (!video) return
      video.play()

      // Only enter fullscreen on small screens (mobile)
      if (window.innerWidth < 768) {
        if (video.requestFullscreen) {
          video.requestFullscreen().catch(() => {})
        } else if ((video as any).webkitEnterFullscreen) {
          (video as any).webkitEnterFullscreen()
        }
      }
    }, 200)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="relative overflow-hidden bg-[#0c0c0e] text-white">
      <Background />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.div
          className="space-y-8 md:space-y-12"
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          variants={container}
        >
          <motion.h1
            className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            variants={container}
          >
            <motion.span className="block" variants={item}>Learn.</motion.span>
            <motion.span className="block" variants={item}>Build.</motion.span>
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent"
              variants={item}
            >
              Thrive.
            </motion.span>
          </motion.h1>

          <motion.p className="mx-auto max-w-2xl text-lg text-gray-300 sm:text-xl md:text-2xl" variants={item}>
            Learnify bridges the gap between education and real-world skills through live, project-based learning experiences.
          </motion.p>

          <motion.div
            className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-6 sm:space-y-0"
            variants={item}
          >
            <Button
              size="lg"
              className="group relative h-14 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-10 text-base font-semibold transition-all hover:shadow-[0_0_30px_rgba(124,58,237,0.6)]"
            >
              <span className="relative z-10 flex items-center">
                Pre-register for Early Access
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 transition-opacity group-hover:opacity-100"></span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="h-14 rounded-full border-gray-700 bg-transparent px-8 text-base font-medium text-gray-300 transition-all hover:border-gray-500 hover:bg-gray-900/50 hover:text-white"
            >
              Learn more
            </Button>
          </motion.div>

          <motion.p className="text-sm text-gray-400 sm:text-base" variants={item}>
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-green-500 mr-2"></span>
            Learnify is the launchpad for hands-on learners. We connect students with real-world challenges through live sessions and project-based learning, empowering them to build, fail, and succeed — just like in the real world.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 w-full max-w-5xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-xl border border-gray-800 bg-black/50 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
            {!isVideoPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900/80 to-black/80">
                <div className="text-center">
                  <Button
                    onClick={playVideo}
                    className="group relative h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20 hover:scale-110"
                  >
                    <Play className="h-8 w-8 fill-white text-white transition-transform group-hover:scale-110" />
                    <span className="absolute inset-0 animate-ping rounded-full bg-white/20 opacity-75"></span>
                  </Button>
                  <p className="mt-4 text-lg font-medium text-gray-300">Watch demo</p>
                </div>
              </div>
            ) : (
              <video
                ref={videoRef}
                className="w-full h-full"
                controls
                playsInline
                src="/demo.mp4"
              />
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}