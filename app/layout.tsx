import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luxury Chauffeur & Black‑Car Service in Dallas | Texexpress Transportation",
  description:
    "Private airport & FBO transfers, corporate roadshows, gala and stadium transport. Executive sedans, full‑size SUVs, and Mercedes Sprinters. Text for an instant booking.",
  generator: "v0.app",
  keywords:
    "Luxury limousine Dallas, Preston Hollow gala transportation, Highland Park Christmas lights tour, Uptown corporate limo service, Private charity ball Dallas, Exclusive Dallas fundraiser transportation, Dallas Opera gala limo, Crystal Charity Ball Dallas, Dallas Cowboys premium game transport, AT&T Stadium luxury rides, SMU football limo packages, Winspear Opera House events, Dallas Symphony Orchestra gala, New Year's Eve upscale party transport, Highland Park private club service, Folds of Honor gala limo bookings, Christmas holiday luxury car service, Dallas Mavericks VIP transportation, Preston Hollow estate limousine, Dallas elite social event rides",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} font-sans antialiased`}>{children}</body>
    </html>
  )
}
