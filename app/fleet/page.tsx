import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Bus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Fleet | Texexpress Transportation - Executive Sedans, SUVs & Sprinters",
  description:
    "Executive sedans, full-size SUVs, and Mercedes Sprinters. Business-class comfort for solo travelers, families, and groups up to 14 passengers.",
}

const fleet = [
  {
    icon: Users,
    title: "Executive Sedan",
    capacity: "2–3 passengers • discreet",
    description: "Business‑class comfort for solo travelers and couples.",
    features: ["Leather interior", "Climate control", "Complimentary water", "Phone chargers"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sleek%20Luxury%20Seat%20with%20Blue%20Lighting-KJhHOkbfAhlKIlKlpP7kio3IpfqJDS.png",
  },
  {
    icon: Briefcase,
    title: "Full‑Size SUV",
    capacity: "5–6 passengers • luggage‑ready",
    description: "GMC Yukon Denali or equivalent for families and teams.",
    features: ["Spacious cabin", "Ample luggage space", "Premium sound system", "Tinted windows"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-bg-T3lSa546tVaB4tVbHZ9BLlGzlclKn3.jpg",
  },
  {
    icon: Bus,
    title: "Mercedes Sprinter (Executive Coach)",
    capacity: "11–14 passengers",
    description: "Spacious, quiet cabin for groups, touring artists, and roadshows.",
    features: ["Executive seating", "Entertainment system", "Privacy partition", "Overhead storage"],
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sleek%20Luxury%20Seat%20with%20Blue%20Lighting-KJhHOkbfAhlKIlKlpP7kio3IpfqJDS.png",
  },
]

export default function FleetPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background text-foreground pt-20">
        {/* Header */}
        <header className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-100px,hsl(var(--accent)/0.12),transparent)]" />
          <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
            <div className="mb-6 flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
                alt="Texexpress Transportation logo"
                width={100}
                height={100}
                className="drop-shadow-[0_0_20px_hsl(var(--accent)/0.25)]"
              />
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Our Fleet</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Immaculate vehicles maintained to the highest standards. From executive sedans to Mercedes Sprinters, we
              have the perfect vehicle for your journey.
            </p>
          </div>
        </header>

        {/* Fleet Cards */}
        <section className="container mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-8 md:grid-cols-1 lg:gap-12">
            {fleet.map((vehicle, index) => (
              <Card
                key={vehicle.title}
                className={`neumorphic neumorphic-hover overflow-hidden border-border bg-card ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex flex-col md:flex`}
              >
                <div className="relative h-64 w-full md:h-auto md:w-1/2">
                  <Image
                    src={vehicle.image || "/placeholder.svg"}
                    alt={`${vehicle.title} interior`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 md:w-1/2">
                  <CardHeader className="p-0">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="neumorphic-pressed rounded-full bg-primary/20 p-3">
                        <vehicle.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-card-foreground">{vehicle.title}</CardTitle>
                        <p className="text-sm text-accent font-semibold">{vehicle.capacity}</p>
                      </div>
                    </div>
                    <CardDescription className="text-base text-muted-foreground leading-relaxed">
                      {vehicle.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 mt-6">
                    <h4 className="mb-3 font-semibold text-foreground">Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {vehicle.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="neumorphic mt-12 rounded-xl border border-border bg-card/40 p-6 text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Note:</span> Vehicle models may vary by availability;
              comparable or better class provided.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto max-w-4xl px-6 py-16">
          <div className="neumorphic rounded-2xl border border-border bg-card/40 p-8 text-center md:p-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Ready to Book?</h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              Text us for instant booking or call to discuss your transportation needs.
            </p>
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
                <a href="tel:+12144505413">Call +1 (214) 450-5413</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border bg-card/30">
          <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Texexpress Transportation LLC. All rights reserved.
            </p>
            <Link
              href="/"
              className="neumorphic-hover rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Back to Home
            </Link>
          </div>
        </footer>
      </main>
    </>
  )
}
