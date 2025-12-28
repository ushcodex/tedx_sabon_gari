"use client"

import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const eventDate = new Date("2026-02-14T09:00:00").getTime()
  const now = new Date().getTime()
  const difference = eventDate - now

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return { days: 0, hours: 0, minutes: 0, seconds: 0 }
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return null
  }

  const timeUnits = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-background via-secondary/30 to-background overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-widest">THE COUNTDOWN HAS BEGUN</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Mark Your Calendar</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="relative group">
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-2 tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm font-semibold text-muted-foreground tracking-widest">
                  {unit.label}
                </div>
              </div>
              {index < 3 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 -translate-y-1/2 text-3xl text-primary font-bold">
                  :
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">February 14, 2026 • Sabon Gari, Zaria, Nigeria</p>
        </div>
      </div>
    </section>
  )
}
