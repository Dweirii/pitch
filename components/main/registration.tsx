"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Background } from "@/components/main/background"

export function EarlyRegistrationSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
    }
  }

  return (
    <div className="relative overflow-hidden bg-[#121212] text-white">
      <Background />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-800 bg-black/30 p-8 backdrop-blur-sm md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
              Join the{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Early Access
              </span>{" "}
              List
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
              Be among the first to experience Learnify and help shape the future of learning.
            </p>
          </div>

          <div className="mt-8">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 rounded-full border-gray-700 bg-gray-900/50 px-6 text-white placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button
                  type="submit"
                  className="group h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-8 text-base font-semibold transition-all hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
                >
                  Pre-register
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center space-x-2 rounded-lg bg-green-900/20 p-4 text-green-400">
                <CheckCircle className="h-5 w-5" />
                <span>Thank you! You're on the early access list.</span>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-400">
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="mr-2 h-4 w-4 text-blue-400" />
              <span>Early adopter benefits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
