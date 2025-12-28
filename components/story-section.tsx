import { Button } from "@/components/ui/button"

export function StorySection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            The Story Behind
            <br />
            <span className="text-primary">The Spark</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            It started as a vision to create a platform where ideas transcend boundaries. A space where the Sabon Gari
            community and beyond come together to learn, share, and grow.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary/30">
              <img src="/about-cover.jpg" alt="TEDxSabonGari Event" className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              TEDxSabonGari is more than an event—it&apos;s a movement. We believe in the power of ideas to transform
              communities, challenge perspectives, and inspire action.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our theme, <span className="text-primary font-semibold">&quot;Bridging the Gap&quot;</span>, speaks to our
              commitment to connect diverse voices, bridge generational divides, and create pathways for meaningful
              dialogue and collaboration.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Now, we&apos;re back to do it all over again—bigger, bolder, and more impactful than ever.
            </p>
          </div>
        </div>

        {/* Feature banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/90 to-primary p-8 md:p-12">
          <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
          <div className="relative text-center">
            <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-4">
              BIGGER, BOLDER, AND BRIDGING
              <br />
              <span className="text-background/90">THE GAP.</span>
            </h3>
            <a
              href="https://wa.me/2349036625032"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-background text-primary hover:bg-background/90 font-semibold px-8">
                Join The Movement
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
