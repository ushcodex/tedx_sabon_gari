import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Event badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-muted-foreground">TEDxSabonGari 2026 PRESENTS</span>
        </div>

        {/* Theme title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
          <span className="text-foreground">BRIDGING</span>
          <br />
          <span className="text-primary">THE GAP</span>
        </h1>

        {/* Tagline */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-8">
          <span className="text-lg md:text-xl font-semibold text-foreground">Bridge the Gap</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-lg md:text-xl font-semibold text-foreground">Build Understanding</span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-lg md:text-xl font-semibold text-foreground">Ignite Change</span>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          a proudly licensed local TEDx event committed to spreading powerful ideas and inspiring change in our
          community and beyond
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#tickets">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg animate-pulse-glow"
            >
              GET YOUR TICKETS
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Event details */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">DATE:</span>
            <span className="text-muted-foreground">February 14, 2026</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">LOCATION:</span>
            <span className="text-muted-foreground">NITT Auditorium Hall, Zaria</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary font-bold">TIME:</span>
            <span className="text-muted-foreground">8:00 AM</span>
          </div>
        </div>
      </div>
    </section>
  )
}
