import { Github, Twitter, Linkedin, Instagram } from "lucide-react"
import { Background } from "@/components/main/background"

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#121212] text-white">
      <Background />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center">
              <div className="mr-2 h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <span className="text-xl font-bold">Learnify</span>
            </div>
            <p className="mt-4 max-w-md text-gray-400">
              Bridging the gap between education and real-world skills through live, project-based learning experiences.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-blue-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Learnify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
