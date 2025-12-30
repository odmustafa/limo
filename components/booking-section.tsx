"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Image from "next/image"

export function BookingSection() {
  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">Book Your Ride</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Schedule your transportation through our live calendar or text us for instant booking
            </p>
          </div>

          <div className="mb-12 neumorphic rounded-xl overflow-hidden max-w-3xl mx-auto">
            <Image
              src="/images/client-luxury-sedan.jpg"
              alt="Client exiting luxury sedan"
              width={800}
              height={400}
              className="w-full h-80 object-cover object-[center_10%]"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="neumorphic bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-card-foreground">
                  <Calendar className="h-6 w-6 text-accent" />
                  Live Calendar Booking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="neumorphic-pressed rounded-xl overflow-hidden bg-muted/50 p-4">
                  <iframe
                    src="https://cal.com/elgatoai/15min?embed=1&layout=month_view&primary_color=0e63c4&hide_gdpr_banner=1"
                    className="w-full min-h-[600px] border-0 rounded-lg"
                    title="Book via Cal.com"
                    allow="clipboard-write; fullscreen"
                  />
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center">
                  Select your preferred date and time from available slots
                </p>
              </CardContent>
            </Card>

            <Card className="neumorphic bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Quick Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    asChild
                    size="lg"
                    className="neumorphic-hover w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6"
                  >
                    <a href="sms:+12144505413&body=TEXPRESS%20BOOK">Text to Book Now</a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="neumorphic-hover w-full border-2 border-accent text-foreground hover:bg-accent hover:text-accent-foreground bg-card font-bold text-lg py-6"
                  >
                    <a href="sms:+12144505413&body=QUOTE%20DFW%20→%20DAL%2009:30%20AM%204%20pax%202%20bags">
                      Text for Instant Quote
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="neumorphic-hover w-full border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground bg-card font-bold text-lg py-6"
                  >
                    <a href="https://wa.me/12144505413?text=TEXPRESS%20BOOK" target="_blank" rel="noopener noreferrer">
                      WhatsApp Booking
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="neumorphic-hover w-full border-2 border-muted text-foreground hover:bg-muted bg-card font-bold text-lg py-6"
                  >
                    <a href="tel:+12144505413">Call: +1 (214) 450-5413</a>
                  </Button>
                </div>

                <div className="neumorphic-pressed rounded-xl bg-muted/50 p-6 mt-6">
                  <h3 className="font-semibold text-foreground mb-3 text-lg">Contact Information</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-foreground">Phone:</span>
                      <a href="tel:+12144505413" className="text-accent hover:text-accent/80">
                        +1 (214) 450-5413
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-foreground">WhatsApp:</span>
                      <a
                        href="https://wa.me/12144505413"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80"
                      >
                        +1 (214) 450-5413
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="font-medium text-foreground">Email:</span>
                      <a href="mailto:info@texpress.com" className="text-accent hover:text-accent/80">
                        info@texpress.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="text-center text-sm text-muted-foreground mt-4">
                  <p>Available 24/7 for your transportation needs</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
