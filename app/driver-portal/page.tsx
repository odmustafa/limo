"use client"

import { useState } from "react"
import { Lock, Unlock } from "lucide-react"
import { DriverPricingCalculator } from "@/components/driver-pricing-calculator"

export default function DriverPortalPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (password === "limodfw2025") {
      setIsAuthenticated(true)
      setError("")
    } else {
      setError("Incorrect password")
      setPassword("")
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background-dark))] via-[hsl(var(--primary))] to-[hsl(var(--background-dark))] flex items-center justify-center p-4">
        <div className="relative max-w-md w-full">
          <div
            className="bg-[hsl(var(--card))] rounded-3xl p-8 border border-[hsl(var(--border))]"
            style={{
              boxShadow: `
                20px 20px 60px rgba(0, 0, 0, 0.5),
                -20px -20px 60px rgba(255, 255, 255, 0.02),
                inset 2px 2px 4px rgba(255, 255, 255, 0.05),
                inset -2px -2px 4px rgba(0, 0, 0, 0.5)
              `,
            }}
          >
            <div className="flex items-center justify-center mb-6">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center bg-[hsl(var(--card))]"
                style={{
                  boxShadow: `
                    8px 8px 16px rgba(0, 0, 0, 0.4),
                    -8px -8px 16px rgba(255, 255, 255, 0.02),
                    inset 2px 2px 4px rgba(0, 0, 0, 0.3),
                    inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                  `,
                }}
              >
                <Lock className="w-10 h-10 text-[hsl(var(--primary))]" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-center mb-2 text-[hsl(var(--foreground))]">Driver Portal</h1>
            <p className="text-center text-[hsl(var(--muted-foreground))] mb-6">
              Texpress Transportation Pricing System
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">Access Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleLogin()}
                  placeholder="Enter driver password"
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm text-center bg-red-950/30 py-2 rounded-lg border border-red-900/50">
                  {error}
                </div>
              )}

              <button
                onClick={handleLogin}
                className="w-full bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                style={{
                  boxShadow: `
                    6px 6px 12px rgba(0, 0, 0, 0.4),
                    -6px -6px 12px rgba(255, 255, 255, 0.02),
                    inset 1px 1px 2px rgba(255, 255, 255, 0.1)
                  `,
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <Unlock className="w-5 h-5" />
                  Access Calculator
                </span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-[hsl(var(--border))]">
              <p className="text-xs text-[hsl(var(--muted-foreground))] text-center">
                Authorized personnel only. All activity is logged.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <DriverPricingCalculator onLogout={() => setIsAuthenticated(false)} />
}
