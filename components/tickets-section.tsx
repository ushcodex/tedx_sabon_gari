"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Sparkles, Loader2 } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ticketTiers } from "@/lib/content"
import { PaymentSuccessView } from "@/components/payment-success-view"

declare global {
  interface Window {
    PaystackPop: any
  }
}

export function TicketsSection() {
  const [selectedTier, setSelectedTier] = useState<(typeof ticketTiers)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" })
  const [successData, setSuccessData] = useState<{ reference: string; amount: number; ticket: string } | null>(null)
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  // Load Paystack script dynamically
  useEffect(() => {
    if (typeof window !== "undefined" && window.PaystackPop) {
      setIsScriptLoaded(true)
      return
    }

    const script = document.createElement("script")
    script.src = "https://js.paystack.co/v1/inline.js"
    script.async = true
    script.onload = () => {
      console.log("Paystack script loaded successfully")
      setIsScriptLoaded(true)
    }
    script.onerror = () => {
      console.error("Failed to load Paystack script")
    }
    document.body.appendChild(script)

    return () => {
      // Cleanup if needed
    }
  }, [])

  const handleTicketClick = (tier: (typeof ticketTiers)[0]) => {
    setSelectedTier(tier)
    setIsDialogOpen(true)
    setSuccessData(null)
  }

  const handlePayment = async () => {
    if (!isScriptLoaded || !window.PaystackPop) {
      alert("Payment system is still loading. Please wait a moment and try again.")
      return
    }

    setIsProcessing(true)

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY
    const amountInKobo = (selectedTier?.rawPrice || 0) * 100

    console.log("PAYSTACK CONFIG CHECK:", {
      key: publicKey,
      email: formData.email,
      amount: amountInKobo,
      tier: selectedTier?.name,
      scriptLoaded: isScriptLoaded,
    })

    // 1. Validate Inputs
    if (!publicKey) {
      alert("Configuration Error: Missing Paystack Public Key")
      setIsProcessing(false)
      return
    }
    if (!formData.email || !formData.email.includes("@")) {
      alert("Please enter a valid email address")
      setIsProcessing(false)
      return
    }
    if (amountInKobo <= 0) {
      alert("Error: Ticket price is invalid (0)")
      setIsProcessing(false)
      return
    }

    const names = formData.name.split(" ")
    const firstName = names[0] || "Guest"
    const lastName = names.slice(1).join(" ") || "."
    const reference = `TEDX_${Date.now()}_${Math.floor(Math.random() * 1000000)}`

    // Store selected tier info for callback
    const currentTier = selectedTier

    const paystackConfig = {
      key: publicKey,
      email: formData.email,
      amount: amountInKobo,
      currency: "NGN",
      ref: reference,
      firstname: firstName,
      lastname: lastName,
      metadata: {
        custom_fields: [
          { display_name: "Phone", variable_name: "mobile_number", value: formData.phone },
          { display_name: "Ticket", variable_name: "ticket_type", value: currentTier?.name },
          { display_name: "Full Name", variable_name: "full_name", value: formData.name },
        ],
      },
      callback: function (response: { reference: string }) {
        console.log("Payment completed! Reference:", response.reference)
        
        // Verify payment on server
        fetch("/api/verify-payment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference: response.reference }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Verification response:", data)
            // Use setTimeout to ensure state update happens after Paystack iframe cleanup
            setTimeout(() => {
              setIsDialogOpen(true) // Ensure dialog stays open
              setSuccessData({
                reference: response.reference,
                amount: currentTier?.rawPrice || 0,
                ticket: currentTier?.name || "",
              })
              setIsProcessing(false)
              console.log("Success data set, dialog should show confirmation")
            }, 100)
          })
          .catch((err) => {
            console.error("Verification Error:", err)
            // Show success anyway since payment was completed
            setTimeout(() => {
              setIsDialogOpen(true)
              setSuccessData({
                reference: response.reference,
                amount: currentTier?.rawPrice || 0,
                ticket: currentTier?.name || "",
              })
              setIsProcessing(false)
            }, 100)
          })
      },
      onClose: function () {
        console.log("Payment popup closed")
        setIsProcessing(false)
        // Reopen our dialog so user can retry or close properly
        setIsDialogOpen(true)
      },
    }

    try {
      console.log("Initializing Paystack with config:", { ...paystackConfig, key: "***" })
      
      // Close our dialog to prevent focus/z-index conflicts with Paystack iframe
      setIsDialogOpen(false)
      
      // Small delay to ensure dialog is fully closed before Paystack opens
      setTimeout(() => {
        const handler = window.PaystackPop.setup(paystackConfig)
        handler.openIframe()
      }, 100)
    } catch (error) {
      console.error("Paystack Init Error:", error)
      alert("Failed to initialize payment. Please refresh the page and try again.")
      setIsProcessing(false)
      setIsDialogOpen(true) // Reopen dialog on error
    }
  }

  const handleClose = () => {
    setIsDialogOpen(false)
    setSuccessData(null)
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <section id="tickets" className="py-24 bg-background relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            TICKETS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Get Your <span className="text-primary">Ticket</span> Now!
          </h2>
          <p className="text-xl text-muted-foreground">Don&apos;t wait until it&apos;s sold out.</p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {ticketTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative bg-card border-border transition-all duration-300 hover:shadow-xl ${
                tier.popular ? "border-primary shadow-lg shadow-primary/10 scale-105" : "hover:border-primary/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pt-8">
                <CardTitle className="text-xl font-bold text-foreground">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>

              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleTicketClick(tier)}
                  className={`w-full mt-8 font-semibold ${
                    tier.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
                  }`}
                >
                  Get {tier.name} Ticket
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-card border-border">
          {!successData ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground">Complete Registration</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  You are purchasing a <span className="text-primary font-bold">{selectedTier?.name}</span> ticket for{" "}
                  {selectedTier?.price}.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={(e: React.FormEvent) => { e.preventDefault(); handlePayment(); }}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-foreground">Full Name</Label>
                    <Input
                      id="name"
                      required
                      className="bg-background border-border"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-foreground">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      className="bg-background border-border"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      className="bg-background border-border"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isProcessing || !isScriptLoaded}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : !isScriptLoaded ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      `Pay ${selectedTier?.price} via Paystack`
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-foreground text-center">Payment Successful!</DialogTitle>
                <DialogDescription className="sr-only">
                  Your payment was successful. Please take a screenshot of your ticket details.
                </DialogDescription>
              </DialogHeader>
              <PaymentSuccessView
                amount={successData.amount}
                ticket={successData.ticket}
                reference={successData.reference}
                closeDialog={handleClose}
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
