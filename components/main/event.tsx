import { MapPin, Calendar, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Background } from "@/components/main/background"

export function EventsSection() {
  const events = [
    {
      title: "CABSAT 2025",
      location: "Dubai, UAE",
      date: "March 2025",
      description: "Showcasing Learnify at the leading content & education tech expo in the MENA region.",
      image: "/placeholder.svg?height=200&width=400",
      icon: "🏙️",
    },
    {
      title: "King Abdullah II School of IT Expo",
      location: "Amman, Jordan",
      date: "February 2025",
      description: "Representing innovation at the University of Jordan's student startup showcase.",
      image: "/placeholder.svg?height=200&width=400",
      icon: "🎓",
    },
    {
      title: "Learnify Demo — AlJude",
      location: "Virtual Event",
      date: "January 2025",
      description: "We hosted a live stream with real users and achieved 200+ active participants in just one hour.",
      image: "/placeholder.svg?height=200&width=400",
      icon: "🌍",
    },
  ]

  return (
    <div className="relative overflow-hidden bg-[#121212] text-white">
      <Background />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Learnify in{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
            We've showcased Learnify at key tech and education events across the region.
          </p>
        </div>

        {/* Events grid */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-black/30 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-black/40 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)]"
              >
                {/* Gradient hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Event image */}
                <div className="relative aspect-video w-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900/30 to-purple-900/30 text-4xl">
                    {event.icon}
                  </div>
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="h-full w-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Event details */}
                <div className="relative z-10 p-6">
                  <h3 className="mb-2 text-xl font-bold">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                      {event.title}
                    </span>
                  </h3>

                  <div className="mb-3 flex flex-wrap gap-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300">{event.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* More events button */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="group rounded-full border-gray-700 bg-transparent px-8 py-6 text-base font-semibold text-white transition-all hover:border-purple-500 hover:bg-black/30 hover:text-purple-400 hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]"
            >
              <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              More Events
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
