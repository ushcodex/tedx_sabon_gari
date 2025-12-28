"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { speakers } from "@/lib/content"

export default function SpeakersPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 px-4 text-center bg-zinc-950">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
          DISTINGUISHED <span className="text-primary">SPEAKERS</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
          Meet the thought leaders, innovators, and changemakers who will share powerful ideas at TEDxSabonGari 2026.
        </p>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker, i) => (
              <div
                key={i}
                className={`group bg-zinc-900 rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-300 flex flex-col ${
                  activeIndex === i ? "border-primary" : ""
                }`}
                onTouchStart={() => setActiveIndex(i)}
                onTouchEnd={() => setActiveIndex(null)}
              >
                <div
                  className={`aspect-square relative overflow-hidden transition-all duration-500 ${
                    activeIndex === i ? "grayscale-0" : "grayscale group-hover:grayscale-0"
                  }`}
                >
                  <Image
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      activeIndex === i ? "scale-105" : "group-hover:scale-105"
                    }`}
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3
                    className={`text-2xl font-bold mb-2 transition-colors ${
                      activeIndex === i ? "text-primary" : "group-hover:text-primary"
                    }`}
                  >
                    {speaker.name}
                  </h3>
                  <p className="text-primary text-xs font-bold uppercase tracking-wider mb-4">{speaker.title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{speaker.bio}</p>
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
