import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t-2 border-border py-12 neumorphic">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
                alt="Texexpress"
                width={50}
                height={50}
                className="drop-shadow-lg"
              />
              <span className="text-lg font-bold text-foreground">Texexpress</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional transportation services in Dallas-Fort Worth. Punctual • Safe • Discreet • Friendly •
              Experienced
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Fleet
                </Link>
              </li>
              <li>
                <Link href="#booking" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  href="/legal-notice"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  href="/driver-portal"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Driver Portal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Airport & FBO Transfers</li>
              <li>Corporate Roadshows</li>
              <li>Galas & Premier Events</li>
              <li>Sports & Concerts</li>
              <li>Highland Park Tours</li>
              <li>VIP/Celebrity Transport</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Phone className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+12144505413" className="text-muted-foreground hover:text-accent transition-colors">
                  +1 (214) 450-5413
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@texexpress.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  info@texexpress.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Dallas-Fort Worth, TX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Texexpress Transportation LLC. All rights reserved.</p>
          <p className="mt-2">Available 24/7 for your transportation needs</p>
        </div>
      </div>
    </footer>
  )
}
