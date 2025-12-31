"use client"

import type React from "react"
import { useState } from "react"
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
import Script from "next/script"
import { ticketTiers } from "@/lib/content"
import { PaymentSuccessView } from "@/components/payment-success-view"

// Declare PaystackPop on window
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

  const handleTicketClick = (tier: (typeof ticketTiers)[0]) => {
    setSelectedTier(tier)
    setIsDialogOpen(true)
    setSuccessData(null) // Reset success state
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Split name into first and last
    const names = formData.name.split(" ")
    const firstName = names[0]
    const lastName = names.slice(1).join(" ") || ""

    // 1. Setup Paystack Popup
    const handler = window.PaystackPop.setup({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY, // Uses Vercel Env Variable
      email: formData.email,
      amount: (selectedTier?.rawPrice || 0) * 100, // Amount in kobo
      currency: "NGN",
      metadata: {
        custom_fields: [
          {
            display_name: "Mobile Number",
            variable_name: "mobile_number",
            value: formData.phone,
          },
          {
            display_name: "First Name",
            variable_name: "first_name",
            value: firstName,
          },
          {
            display_name: "Last Name",
            variable_name: "last_name",
            value: lastName,
          },
          {
            display_name: "Ticket Type",
            variable_name: "ticket_type",
            value: selectedTier?.name,
          },
        ],
      },
      callback: async function (response: any) {
        // 2. Payment Success on Frontend -> Now Verify on Backend
        try {
            const verifyReq = await fetch('/api/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reference: response.reference }),
            });
            
            const verifyData = await verifyReq.json();

            if (verifyReq.ok && verifyData.status === 'success') {
                // 3. Verification Success -> Show Success View
                setSuccessData({
                  reference: response.reference,
                  amount: selectedTier?.rawPrice || 0,
                  ticket: selectedTier?.name || "",
                })
            } else {
                alert("Payment Verification Failed. Please contact support.")
            }
        } catch (error) {
            console.error("Verification Error:", error);
            alert("Network error verifying payment.")
        } finally {
            setIsProcessing(false)
        }
      },
      onClose: function () {
        setIsProcessing(false)
        alert("Transaction was not completed, window closed.")
      },
    })

    // 4. Open the Iframe
    handler.openIframe()
  }

  const handleClose = () => {
    setIsDialogOpen(false)
    setSuccessData(null)
    setFormData({ name: "", email: "", phone: "" })
  }

  return (
    <section id="tickets" className="py-24 bg-background relative overflow-hidden">
      {/* Load Paystack Script */}
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      {/* Background decoration */}
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
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Many people missed last year&apos;s event waiting until the last minute. Secure your spot today and be part
            of bridging the gap.
          </p>
        </div>

        {/* Ticket Cards */}
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
              <form onSubmit={handlePayment}>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-foreground">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      required
                      className="bg-background border-border"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email Address
                    </Label>
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
                    <Label htmlFor="phone" className="text-foreground">
                      Phone Number
                    </Label>
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
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      `Pay ${selectedTier?.price} via Paystack`
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </>
          ) : (
            successData && (
              <PaymentSuccessView
                amount={successData.amount}
                ticket={successData.ticket}
                reference={successData.reference}
                closeDialog={handleClose}
              />
            )
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
        } 
