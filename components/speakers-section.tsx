import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { speakers } from "@/lib/content"

export function SpeakersSection() {
  return (
    <section id="speakers" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            SPEAKERS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Meet Our <span className="text-primary">Distinguished</span> Speakers
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Visionaries, thought leaders, and change-makers ready to share ideas worth spreading.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="group bg-card border-border overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mt-1">{speaker.title}</p>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{speaker.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View all button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Speakers
          </Button>
        </div>
      </div>
    </section>
  )
}
