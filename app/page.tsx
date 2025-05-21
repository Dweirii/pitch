import { Navbar } from "@/components/main/navbar"
import { HeroSection } from "@/components/main/hero"
import { AboutSection } from "@/components/main/about"
import { FeaturesSection } from "@/components/main/features"
import { EventsSection } from "@/components/main/event"
import { EarlyRegistrationSection } from "@/components/main/registration"
import { Footer } from "@/components/main/footer"

export default function Home() {
  return (
    <>

      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <EventsSection />
        <EarlyRegistrationSection />
      </main>
      <Footer />
    </>
  )
}
