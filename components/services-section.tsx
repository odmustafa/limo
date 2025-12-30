import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Clock, Music, Briefcase, TreePine, Heart, Shield } from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Plane,
    title: "Airport & FBO Transfers (DFW/DAL)",
    description: "Non‑stop curb‑to‑gate service with flight tracking and meet‑&‑greet on request.",
  },
  {
    icon: Briefcase,
    title: "Corporate & Investor Roadshows",
    description: "Hourly, multi‑stop itineraries with a seasoned chauffeur who knows DFW.",
  },
  {
    icon: Music,
    title: "Galas & Premier Events",
    description:
      "Dallas Opera & Symphony, Winspear, private charity balls, Crystal Charity Ball, Folds of Honor — arrive on time and in style.",
  },
  {
    icon: Clock,
    title: "Sports & Concerts",
    description: "AT&T Stadium and American Airlines Center VIP drop zones for Cowboys, Mavericks, and headline shows.",
  },
  {
    icon: TreePine,
    title: "Highland Park Christmas Lights Tours",
    description: "Private holiday routes through Highland Park & Preston Hollow.",
  },
  {
    icon: Heart,
    title: "Weddings & Date Nights",
    description: "Immaculate vehicles, chilled water, umbrella service, and discreet assistance.",
  },
  {
    icon: Shield,
    title: "VIP/Celebrity Transport",
    description: "Confidential routings, back‑of‑house access where permitted, unbranded vehicles on request.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Services</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Comprehensive transportation solutions tailored to your needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="neumorphic neumorphic-hover border-border bg-card">
                <CardHeader>
                  <div className="mb-2 flex justify-center">
                    <div className="neumorphic-pressed rounded-full bg-primary/20 p-4">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <CardTitle className="text-center text-card-foreground text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="neumorphic rounded-xl overflow-hidden">
              <Image
                src="/images/gmc-yukon-luxury-house.jpg"
                alt="GMC Yukon Denali luxury SUV"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="neumorphic rounded-xl overflow-hidden">
              <Image
                src="/images/sprinter-van-dallas.png"
                alt="Mercedes Sprinter van with Dallas skyline"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="neumorphic rounded-xl overflow-hidden">
              <Image
                src="/images/g-wagon-night.jpg"
                alt="Mercedes G-Wagon luxury SUV at night"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          {/* </CHANGE> */}
        </div>
      </div>
    </section>
  )
}
