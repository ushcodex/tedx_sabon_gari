import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "TEDxSabonGari 2026 | Bridging the Gap",
  description:
    "TEDxSabonGari 2026 - Bridging the Gap. Join us for an extraordinary experience of ideas worth spreading in Zaria, Nigeria.",
  keywords: ["TEDx", "TEDxSabonGari", "Sabon Gari", "Zaria", "Nigeria", "Ideas Worth Spreading", "Bridging the Gap"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
