import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Globe } from "lucide-react"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Legal Notice | Texexpress Transportation",
  description:
    "Zero-Tolerance Policy, Drug & Alcohol Testing, and Dallas 311 compliance information for Texexpress Transportation LLC.",
}

export default function LegalNoticePage() {
  const lastUpdated = "October 25, 2025"

  return (
    <>
      <Header />
      {/* </CHANGE> */}
      <main className="min-h-screen bg-background text-foreground pt-20">
        {/* Header */}
        <header className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_400px_at_50%_-100px,hsl(var(--accent)/0.12),transparent)]" />
          <div className="container mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-8">
            <div className="flex items-center gap-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
                alt="Texexpress Transportation logo"
                width={60}
                height={60}
                className="drop-shadow-[0_0_20px_hsl(var(--accent)/0.25)]"
              />
              <div className="hidden h-8 w-px bg-gradient-to-b from-accent/0 via-accent/40 to-accent/0 md:block" />
              <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Legal Notice</h1>
            </div>
            <span className="text-sm text-muted-foreground">Last updated {lastUpdated}</span>
          </div>
        </header>

        {/* Anchor Nav */}
        <nav className="sticky top-20 z-20 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 py-3 text-sm">
            <a
              href="#zero-tolerance"
              className="neumorphic-hover rounded-full border border-border bg-card px-3 py-1.5 text-card-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Zero‑Tolerance Policy
            </a>
            <a
              href="#testing"
              className="neumorphic-hover rounded-full border border-border bg-card px-3 py-1.5 text-card-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Drug & Alcohol Testing
            </a>
            <a
              href="#consequences"
              className="neumorphic-hover rounded-full border border-border bg-card px-3 py-1.5 text-card-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Consequences
            </a>
            <a
              href="#compliance"
              className="neumorphic-hover rounded-full border border-border bg-card px-3 py-1.5 text-card-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Compliance (Dallas 311)
            </a>
            <a
              href="#chapter47a"
              className="neumorphic-hover rounded-full border border-border bg-card px-3 py-1.5 text-card-foreground transition hover:border-accent/60 hover:text-accent"
            >
              Dallas Code Ch. 47A Summary
            </a>
          </div>
        </nav>

        {/* Content */}
        <section className="container mx-auto w-full max-w-3xl px-6 py-10 md:py-16">
          {/* Intro card */}
          <div className="neumorphic relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 md:p-8">
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-[conic-gradient(from_180deg_at_50%_50%,hsl(var(--accent)/0.06),transparent_25%,transparent_75%,hsl(var(--accent)/0.08))]" />
            <div className="relative">
              <h2
                id="zero-tolerance"
                className="scroll-mt-28 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
              >
                Zero‑Tolerance Policy
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Texpress Transportation LLC is committed to a safe, professional, and drug‑free workplace for clients
                and employees. The following policy applies to all current and future employees.
              </p>
              <div className="mt-6 space-y-4 text-foreground">
                <h3 className="font-semibold text-accent">Prohibited Conduct</h3>
                <ul className="list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
                  <li>
                    Using, possessing, soliciting, or selling narcotics, illegal drugs, alcohol, or prescription
                    medication without a valid prescription on company or customer premises, or while performing job
                    duties.
                  </li>
                  <li>
                    Being impaired or under the influence of legal or illegal drugs or alcohol off premises if it
                    negatively impacts work performance, safety, or the company's reputation.
                  </li>
                  <li>
                    Possessing, using, soliciting, or selling drugs or alcohol off premises if it adversely affects work
                    performance, safety, or the company's reputation.
                  </li>
                  <li>
                    Having any detectable amount of prohibited substances while at work, on company or customer
                    premises, or conducting company business. "Prohibited substances" include illegal drugs, alcohol, or
                    prescription drugs not taken in accordance with a valid prescription.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Testing */}
          <div id="testing" className="neumorphic mt-10 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="scroll-mt-28 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Drug & Alcohol Testing
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Texexpress Transportation LLC may require testing in the following situations:
            </p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-medium text-accent">Random Testing:</span> Employees may be randomly selected for
                drug and/or alcohol testing at the company's discretion.
              </li>
              <li>
                <span className="font-medium text-accent">For‑Cause Testing:</span> Required when there is reasonable
                suspicion of use or impairment (evidence of substances on or near an employee, unusual behavior, poor
                performance, excessive absenteeism or tardiness, etc.).
              </li>
              <li>
                <span className="font-medium text-accent">Post‑Accident Testing:</span> Required after any on‑the‑job
                accident or injury under circumstances suggesting potential influence. Applies to injured employees and
                those who may have contributed to the incident.
              </li>
            </ul>
          </div>

          {/* Consequences */}
          <div id="consequences" className="neumorphic mt-10 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="scroll-mt-28 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Consequences of Policy Violation
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A verified positive test result indicating a policy violation, or refusal to submit to required testing,
              may result in disciplinary action, up to and including termination. Employees will have an opportunity to
              explain relevant circumstances prior to any final employment action.
            </p>
          </div>

          {/* Compliance (Dallas 311) */}
          <div id="compliance" className="neumorphic mt-10 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="scroll-mt-28 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Compliance — Dallas 311 (Ordinance 29696)
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To report a complaint to the City of Dallas regarding Transportation‑for‑Hire services, use the Dallas 311
              system:
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="neumorphic rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold text-accent flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone
                </h3>
                <ul className="mt-2 space-y-2 text-muted-foreground">
                  <li>
                    Within Dallas city limits: <span className="font-medium text-foreground">311</span>
                  </li>
                  <li>
                    Outside Dallas: <span className="font-medium text-foreground">(214) 670‑3111</span>
                  </li>
                </ul>
              </div>
              <div className="neumorphic rounded-xl border border-border bg-card p-4">
                <h3 className="font-semibold text-accent flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Online
                </h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Submit and track service requests via the Dallas 311 portal. Include a detailed description, date/time
                  and location, relevant identifiers (vehicle numbers/company), and contact information if you want
                  updates.
                </p>
                <a
                  href="https://dallascrm.my.site.com/public/s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dallas 311 online portal"
                  className="neumorphic-hover mt-3 inline-block rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent hover:border-accent/40 hover:bg-accent/15"
                >
                  Open Dallas 311 Portal
                </a>
                <a
                  href="https://dallascityhall.com/services/311/Pages/about-us.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="About Dallas 311"
                  className="neumorphic-hover mt-2 inline-block rounded-lg border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent hover:border-accent/40 hover:bg-accent/15"
                >
                  About Dallas 311
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Note: Dallas 311 is for non‑emergency issues. For emergencies dial 911. Some legacy URLs under
              /services/311/ may return "Page Not Found." Use the portal link above for requests.
            </p>
          </div>

          {/* Chapter 47A Summary */}
          <div id="chapter47a" className="neumorphic mt-10 rounded-2xl border border-border bg-card/30 p-6 md:p-8">
            <h2 className="scroll-mt-28 text-xl font-semibold tracking-tight text-foreground md:text-2xl">
              Dallas City Code — Chapter 47A (Transportation for Hire)
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Chapter 47A establishes standards for transportation‑for‑hire within Dallas to protect public health and
              safety and ensure city‑wide service. It covers permitting, driver and vehicle requirements, insurance,
              operational standards, and non‑discrimination. It includes provisions for Dallas Love Field and DFW
              Airport. Exclusions include DART vehicles, courtesy shuttles, and carpooling arrangements.
            </p>
          </div>

          {/* Footnotes / disclaimers */}
          <div className="mt-12 border-t border-border pt-6 text-sm text-muted-foreground">
            <p className="leading-relaxed">
              This page provides policy information for convenience only and does not create a contract of employment.
              Texexpress Transportation LLC is an at‑will employer. Nothing herein limits the company's rights to modify
              this policy at any time.
            </p>
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
