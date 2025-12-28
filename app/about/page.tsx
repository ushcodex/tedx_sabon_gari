"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { team } from "@/lib/content"

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 bg-[url('/tedx-audience-stage.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tighter">
            ABOUT <span className="text-primary">TEDx</span>SABONGARI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ideas worth spreading in our community and beyond
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-border group">
              <Image
                src="/about-cover.jpg?height=600&width=800&query=TEDxSabonGari+audience"
                alt="About TEDxSabonGari"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Introducing TEDxSabonGari</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to TEDxSabonGari, a proudly licensed local TEDx event committed to spreading powerful ideas and
                inspiring change in our community and beyond.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Vision</h3>
              <p className="text-muted-foreground">
                To build a dynamic, informed, and inspired local community where great ideas lead to real impact.
              </p>
            </div>
            <div className="bg-zinc-900/50 p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-4 text-primary">Mission</h3>
              <p className="text-muted-foreground">
                To create a platform where diverse voices and brilliant minds from Sabon Gari and beyond can connect,
                inspire, and drive meaningful change.
              </p>
            </div>
          </div>

          <div className="space-y-8 bg-zinc-900/30 p-10 rounded-3xl border border-primary/20">
            <h3 className="text-3xl font-bold text-center">Theme: &quot;Bridging the Gap&quot;</h3>
            <p className="text-xl text-center text-muted-foreground italic max-w-2xl mx-auto">
              &quot;Our theme will explore ideas around social, economic, cultural, and technological divides and how
              innovation, collaboration, and empathy can help us close those gaps.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meet the <span className="text-primary">Team</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <div
                key={i}
                className={`group bg-zinc-900 rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 ${
                  activeIndex === i ? "border-primary" : ""
                }`}
                onTouchStart={() => setActiveIndex(i)}
                onTouchEnd={() => setActiveIndex(null)}
              >
                <div
                  className={`aspect-[3/4] relative overflow-hidden transition-all duration-500 ${
                    activeIndex === i ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                  }`}
                >
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      activeIndex === i ? "scale-110" : "group-hover:scale-110"
                    }`}
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                  <p className="text-primary text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
