import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CountdownSection } from "@/components/countdown-section"
import { StorySection } from "@/components/story-section"
import { SpeakersSection } from "@/components/speakers-section"
import { TicketsSection } from "@/components/tickets-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <StorySection />
      <SpeakersSection />
      <TicketsSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  )
}
