"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "/fleet" },
  { name: "Booking", href: "#booking" },
  { name: "Legal Notice", href: "/legal-notice" },
  { name: "Pricing Calculator", href: "/pricing-calculator" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-border bg-background/95 backdrop-blur-md neumorphic">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
            alt="Texexpress"
            width={50}
            height={50}
            className="drop-shadow-lg"
          />
          <span className="hidden sm:block text-lg font-bold text-foreground">Texexpress Transportation</span>
        </Link>

        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex">
          <Button asChild className="neumorphic-hover bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
            <a href="sms:+12144505413&body=TEXPRESS%20BOOK">Text to Book</a>
          </Button>
        </div>
        {/* </CHANGE> */}

        <button
          type="button"
          className="md:hidden neumorphic-pressed p-2 rounded-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden border-t-2 border-border bg-background/95 backdrop-blur-md">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-muted neumorphic-hover"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {/* </CHANGE> */}
            <div className="pt-2">
              <Button
                asChild
                className="w-full neumorphic-hover bg-primary text-primary-foreground hover:bg-primary/90 font-bold"
              >
                <a href="sms:+12144505413&body=TEXPRESS%20BOOK">Text to Book</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
