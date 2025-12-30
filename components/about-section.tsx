import { VideoBackground } from "@/components/video-background"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Users, Award } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Clock,
    title: "Punctual",
    description: "Always on time, every time. Your schedule is our priority.",
  },
  {
    icon: Shield,
    title: "Safe",
    description: "Professionally trained drivers with impeccable safety records.",
  },
  {
    icon: Users,
    title: "Discreet",
    description: "Confidential service for executives and high-profile clients.",
  },
  {
    icon: Award,
    title: "Experienced",
    description: "17+ years serving Dallas-Fort Worth with excellence.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      <VideoBackground src="/videos/about-bg.webm" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">About Texexpress</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Texpress Transportation offers discreet, white‑glove service for Dallas–Fort Worth. Your chauffeur is
              courteous, punctual, and experienced — the kind of driver executives and touring artists request by name.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="neumorphic neumorphic-hover bg-card/90 backdrop-blur-sm border-border"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 flex justify-center">
                    <div className="neumorphic-pressed rounded-full bg-primary/20 p-4">
                      <feature.icon className="h-7 w-7 text-accent" />
                    </div>
                  </div>
                  <h3 className="mb-2 text-center text-xl font-semibold text-card-foreground">{feature.title}</h3>
                  <p className="text-center text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <div className="neumorphic rounded-xl overflow-hidden">
              <Image
                src="/images/limo-private-jet.jpg"
                alt="Black limousine parked next to private jet"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="neumorphic rounded-xl overflow-hidden">
              <Image
                src="/images/chauffeur-driving.jpg"
                alt="Professional chauffeur driving luxury vehicle"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* </CHANGE> */}

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4 text-lg">
              A seasoned, reliable chauffeur trusted by executives, athletes, and touring artists.
            </p>
            <a
              href="sms:+12144505413&body=FBO"
              className="inline-flex items-center text-accent hover:text-accent/80 font-semibold text-lg"
            >
              Text 'FBO' for Private Jet Transfers →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
