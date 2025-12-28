import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="text-primary font-bold text-2xl">TED</span>
              <span className="text-primary font-bold text-sm align-super">x</span>
              <span className="text-foreground font-semibold text-xl">SabonGari</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              TEDxSabonGari is an independently organized TED event, bringing together visionaries and change-makers to
              share ideas worth spreading.
            </p>

            {/* Newsletter */}
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-secondary border-border" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Subscribe</Button>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Speakers", href: "/speakers" },
                { label: "Tickets", href: "/#tickets" },
                { label: "Sponsors", href: "/#sponsors" },
                { label: "FAQ", href: "/#faq" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Sabon Gari, Zaria, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:tedxsabongari@gmail.com" className="hover:text-primary transition-colors">
                  tedxsabongari@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <span className="mb-1">+234 816 294 2976</span>
                  <span>+234 903 662 5032</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground pt-2">
                <a 
                  href="https://wa.me/2348162942976" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs border border-primary/50 rounded px-2 py-1 hover:bg-primary/10 transition-colors"
                >
                  Partner (WhatsApp)
                </a>
                <a 
                  href="https://wa.me/2349036625032" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs border border-primary/50 rounded px-2 py-1 hover:bg-primary/10 transition-colors"
                >
                  Join Movement (WhatsApp)
                </a>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  size="icon"
                  variant="outline"
                  className="border-border hover:border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Icon className="w-4 h-4" />
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 TEDxSabonGari. All rights reserved. This independent TEDx event is operated under license from TED.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
