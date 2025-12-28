import { Button } from "@/components/ui/button"
import { sponsors } from "@/lib/content"

export function SponsorsSection() {
  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            SPONSORS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Become a <span className="text-primary">Sponsor</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a sponsor, your brand gets visibility to thousands of people. What better way to get your brand in front
            of innovators, leaders, and change-makers?
          </p>
          <a href="https://wa.me/2348162942976" target="_blank" rel="noopener noreferrer">
            <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              CONTACT US
            </Button>
          </a>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center p-4"
            >
              <img
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                className="max-h-24 w-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
