"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Globe, Users, BarChart3, Zap } from 'lucide-react'
import { Background } from "@/components/main/background"


export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById("features-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  // Auto-rotate through features
  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isVisible])

const features = [
  {
    icon: <Code className="h-6 w-6 text-blue-400" />,
    title: "Live Project Labs",
    description: "Work on real challenges in live, mentor-led rooms — build, present, and iterate in real time.",
  },
  {
    icon: <Zap className="h-6 w-6 text-blue-400" />,
    title: "AI-Powered Learning Engine",
    description: "An intelligent algorithm that adapts content to your pace, skills, and interests — just like your favorite social feed.",
  },
  {
    icon: <Globe className="h-6 w-6 text-blue-400" />,
    title: "Arabic-First Experience",
    description: "Purpose-built for Arabic-speaking learners — native content, cultural context, and localized support.",
  },
  {
    icon: <Users className="h-6 w-6 text-blue-400" />,
    title: "Community That Builds Together",
    description: "Join a tribe of learners, mentors, and creators — collaborate, get feedback, and grow together.",
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
    title: "Smart Progress Tracking",
    description: "Visual dashboards, adaptive learning paths, and performance insights tailored to your growth.",
  },
];


  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div id="features-section" className="relative overflow-hidden bg-[#0c0c0e] text-white py-24 sm:py-32">
      <Background />

      {/* Decorative elements */}
      <div className="absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute right-1/3 bottom-1/4 h-72 w-72 rounded-full bg-purple-500/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            Unique Features
          </div>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Why Learnify{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Stands Out
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Our platform combines cutting-edge technology with proven learning methods to create an experience unlike any other.
          </p>
        </motion.div>

        {/* Featured highlight */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5"></div>
            
            <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8 lg:p-12">
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20">
                  {features[activeFeature].icon}
                </div>
                <h3 className="mb-4 text-2xl font-bold sm:text-3xl">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {features[activeFeature].title}
                  </span>
                </h3>
                <p className="mb-6 text-lg text-gray-300">{features[activeFeature].description}</p>
                
                <div className="flex space-x-3">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveFeature(index)}
                      className={`h-2 w-8 rounded-full transition-all ${
                        index === activeFeature 
                          ? "bg-gradient-to-r from-blue-400 to-purple-600" 
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                      aria-label={`View feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="mx-auto max-w-6xl"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`group relative overflow-hidden rounded-xl border ${
                  index === activeFeature 
                    ? "border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]" 
                    : "border-gray-800"
                } bg-gradient-to-br from-gray-900/80 to-black/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon with gradient background */}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-3 transition-transform duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>

                  {/* Title with gradient text */}
                  <h3 className="mb-2 text-xl font-bold">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                      {feature.title}
                    </span>
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
