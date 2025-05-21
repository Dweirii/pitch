"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Zap, Brain, Users, Globe, Smartphone, ArrowRight } from "lucide-react"
import { Background } from "@/components/main/background"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("about-section")
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const features = [
    {
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      title: "Live Learning, Not Just Videos",
      description: "Real-time, interactive sessions guided by industry mentors.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-400" />,
      title: "Project-Based Curriculum",
      description: "Learn by building actual products and solving real problems.",
    },
    {
      icon: <Brain className="h-6 w-6 text-blue-400" />,
      title: "AI-Powered Support",
      description: "Smart assistance through chatbots trained on your course content.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Community-Driven",
      description: "Join a like-minded network of learners, mentors, and creators.",
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      title: "Built for Arabic-Speaking Learners",
      description: "Native Arabic content with localized support.",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-400" />,
      title: "Mobile-First & Accessible",
      description: "Learn anywhere, anytime – no expensive devices needed.",
    },
  ]

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
    <div id="about-section" className="relative overflow-hidden bg-[#0c0c0e] text-white py-24 sm:py-32">
      <Background />

      {/* Decorative elements */}
      <div className="absolute left-1/4 top-1/3 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute right-1/4 bottom-1/3 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-3 inline-block rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            Our Mission
          </div>
          <h2 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            What is{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-600 bg-clip-text text-transparent">
              Learnify
            </span>
            ?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            We're reimagining education for the digital age, making high-quality learning accessible, engaging, and
            effective for everyone.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          className="mx-auto max-w-5xl"
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:translate-y-[-4px]"
              >
                <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 translate-y-[-8px] rounded-full bg-gradient-to-r from-blue-500/10 to-purple-600/10 blur-2xl transition-all duration-500 group-hover:translate-x-6 group-hover:translate-y-[-6px] group-hover:from-blue-500/20 group-hover:to-purple-600/20"></div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-3 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-purple-600/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-white">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                        {feature.title}
                      </span>
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </div>
  )
}
