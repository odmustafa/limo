"use client"

import { Phone, MessageSquare, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function StickyCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-border bg-card/95 backdrop-blur-md neumorphic">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 py-3">
          <Button asChild className="neumorphic-hover bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            <a href="sms:+12144505413&body=TEXPRESS%20BOOK">
              <MessageSquare className="mr-2 h-4 w-4" />
              Text to Book
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="neumorphic-hover border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground bg-card font-bold"
          >
            <a href="tel:+12144505413">
              <Phone className="mr-2 h-4 w-4" />
              Call
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="neumorphic-hover border-2 border-accent text-foreground hover:bg-accent hover:text-accent-foreground bg-card font-bold"
          >
            <a href="https://wa.me/12144505413?text=TEXPRESS%20BOOK" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="neumorphic-hover border-2 border-muted text-foreground hover:bg-muted hover:text-foreground bg-card font-bold"
          >
            <a href="mailto:info@texexpress.com">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
