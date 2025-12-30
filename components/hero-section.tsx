import { VideoBackground } from "@/components/video-background"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <VideoBackground src="/videos/hero-bg.webm" />

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
              alt="Texexpress Transportation"
              width={180}
              height={180}
              className="animate-fade-in drop-shadow-2xl"
            />
          </div>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Dallas Executive Chauffeur Service
          </h1>

          <p className="mb-4 text-xl text-accent md:text-2xl font-semibold">
            Punctual • Safe • Discreet — Friendly • Experienced
          </p>

          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Professional black‑car transportation across Dallas–Fort Worth. Airport & FBO transfers, corporate
            roadshows, private events, and bespoke tours for discerning clients.
          </p>
          {/* </CHANGE> */}

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="neumorphic neumorphic-hover bg-primary text-primary-foreground text-lg px-8 py-6 font-bold"
            >
              <a href="sms:+12144505413&body=TEXPRESS%20BOOK">Text to Book</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="neumorphic neumorphic-hover border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 font-bold bg-card"
            >
              <a href="sms:+12144505413&body=QUOTE%20DFW%20→%20DAL%2009:30%20AM%204%20pax%202%20bags">
                Text for Instant Quote
              </a>
            </Button>
          </div>

          <div className="mt-12 flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/badge-experience-alt-mLmabXGEcnG4A6qaHoKfoqdUsKAzEL.png"
              alt="17+ Years Experience"
              width={140}
              height={140}
              className="animate-pulse drop-shadow-2xl"
            />
          </div>

          <div className="mt-8 text-muted-foreground">
            <p className="text-sm">
              Call us:{" "}
              <a href="tel:+12144505413" className="text-accent hover:text-accent/80 font-semibold">
                +1 (214) 450-5413
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
