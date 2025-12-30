"use client"

import { useState, useEffect } from "react"
import { Calendar, DollarSign, Unlock, Plus, Trash2, TrendingUp, MapPin } from "lucide-react"

interface Event {
  date: string
  name: string
  score: number
  neighborhood: string
  minHours: number
}

interface DriverPricingCalculatorProps {
  onLogout: () => void
}

export function DriverPricingCalculator({ onLogout }: DriverPricingCalculatorProps) {
  const [events, setEvents] = useState<Event[]>([])
  const [baseRate, setBaseRate] = useState(150)

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [vehicleType, setVehicleType] = useState("sedan")
  const [hours, setHours] = useState(3)
  const [dayOfWeek, setDayOfWeek] = useState("")

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = () => {
    const stored = localStorage.getItem("texexpress-events")
    if (stored) {
      setEvents(JSON.parse(stored))
    } else {
      const defaultEvents = getDefaultEvents()
      setEvents(defaultEvents)
      localStorage.setItem("texexpress-events", JSON.stringify(defaultEvents))
    }
  }

  const saveEvents = (newEvents: Event[]) => {
    localStorage.setItem("texexpress-events", JSON.stringify(newEvents))
    setEvents(newEvents)
  }

  const getDefaultEvents = (): Event[] => [
    {
      date: "2025-12-31",
      name: "New Years Eve upscale party transport",
      score: 10,
      neighborhood: "Highland Park",
      minHours: 6,
    },
    { date: "2025-11-15", name: "Crystal Charity Ball Dallas", score: 10, neighborhood: "Preston Hollow", minHours: 4 },
    {
      date: "2025-11-23",
      name: "Dallas Cowboys premium game transport",
      score: 8,
      neighborhood: "Arlington",
      minHours: 3,
    },
    {
      date: "2025-11-27",
      name: "Dallas Cowboys premium game transport (Thanksgiving)",
      score: 9,
      neighborhood: "Arlington",
      minHours: 3,
    },
    {
      date: "2025-12-14",
      name: "Dallas Cowboys premium game transport (SNF)",
      score: 8,
      neighborhood: "Arlington",
      minHours: 3,
    },
    { date: "2025-11-07", name: "Dallas Opera gala limo", score: 7, neighborhood: "Dallas Arts District", minHours: 3 },
    { date: "2025-12-06", name: "Private charity ball Dallas", score: 9, neighborhood: "Highland Park", minHours: 4 },
    {
      date: "2025-12-20",
      name: "Highland Park Christmas lights tour",
      score: 7,
      neighborhood: "Highland Park",
      minHours: 2,
    },
    {
      date: "2025-11-10",
      name: "Winspear Opera House events",
      score: 7,
      neighborhood: "Dallas Arts District",
      minHours: 3,
    },
    {
      date: "2025-12-15",
      name: "Dallas Symphony Orchestra gala",
      score: 8,
      neighborhood: "Dallas Arts District",
      minHours: 3,
    },
    { date: "2025-11-20", name: "SMU football limo packages", score: 6, neighborhood: "University Park", minHours: 3 },
    {
      date: "2025-12-10",
      name: "Folds of Honor gala limo bookings",
      score: 8,
      neighborhood: "Preston Hollow",
      minHours: 4,
    },
    { date: "2025-11-25", name: "Dallas Mavericks VIP transportation", score: 7, neighborhood: "Dallas", minHours: 3 },
    { date: "2026-06-14", name: "World Cup Match Day 1", score: 10, neighborhood: "Arlington", minHours: 5 },
    { date: "2026-07-14", name: "World Cup Finals", score: 10, neighborhood: "Arlington", minHours: 6 },
  ]

  const neighborhoods = [
    "Highland Park (75205)",
    "University Park (75225)",
    "Preston Hollow (75229)",
    "Uptown/Turtle Creek (75219)",
    "Bluffview (75209)",
    "West Plano (75093)",
    "Frisco (75034)",
    "Southlake (76092)",
    "Arlington/AT&T Stadium",
    "Dallas Arts District",
    "Preston Hollow estate",
  ]

  const calculateMultiplier = () => {
    let multiplier = 1.0

    const event = events.find((e) => e.name === selectedEvent)
    if (event) {
      if (event.score >= 9) multiplier = 4.0
      else if (event.score >= 7) multiplier = 2.5
      else if (event.score >= 5) multiplier = 1.8
      else multiplier = 1.3
    }

    if (dayOfWeek === "Friday" || dayOfWeek === "Saturday") {
      multiplier *= 1.2
    } else if (dayOfWeek === "Sunday" && selectedEvent.includes("Cowboys")) {
      multiplier *= 1.15
    }

    if (neighborhood.includes("Highland Park") || neighborhood.includes("Preston Hollow")) {
      multiplier *= 1.1
    }

    const vehicleMultipliers: Record<string, number> = {
      sedan: 1.0,
      suv: 1.3,
      stretch: 1.8,
      sprinter: 2.2,
      "party-bus": 2.8,
    }
    multiplier *= vehicleMultipliers[vehicleType]

    return multiplier
  }

  const calculatePrice = () => {
    const multiplier = calculateMultiplier()
    const event = events.find((e) => e.name === selectedEvent)
    const minHours = event?.minHours || 3
    const actualHours = Math.max(hours, minHours)

    return {
      hourlyRate: Math.round(baseRate * multiplier),
      totalPrice: Math.round(baseRate * multiplier * actualHours),
      multiplier: multiplier.toFixed(2),
      minHours: minHours,
      actualHours: actualHours,
    }
  }

  const addEvent = () => {
    const name = prompt("Event name (use SEO keywords):")
    if (!name) return

    const scoreStr = prompt("Event score (1-10):")
    const minHoursStr = prompt("Minimum hours:")

    const newEvent: Event = {
      date: selectedDate || new Date().toISOString().split("T")[0],
      name: name,
      score: Number.parseInt(scoreStr || "5"),
      neighborhood: neighborhood || "Dallas",
      minHours: Number.parseInt(minHoursStr || "3"),
    }

    saveEvents([...events, newEvent])
  }

  const deleteEvent = (index: number) => {
    if (confirm("Delete this event?")) {
      const newEvents = events.filter((_, i) => i !== index)
      saveEvents(newEvents)
    }
  }

  const pricing = selectedEvent ? calculatePrice() : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--background-dark))] via-[hsl(var(--primary))] to-[hsl(var(--background-dark))] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center bg-[hsl(var(--card))]"
              style={{
                boxShadow: `
                  8px 8px 16px rgba(0, 0, 0, 0.4),
                  -8px -8px 16px rgba(255, 255, 255, 0.02),
                  inset 2px 2px 4px rgba(0, 0, 0, 0.3),
                  inset -2px -2px 4px rgba(255, 255, 255, 0.05)
                `,
              }}
            >
              <span className="text-2xl font-bold text-[hsl(var(--primary))]">T</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[hsl(var(--foreground))]">Texexpress Pricing</h1>
              <p className="text-[hsl(var(--primary))] text-sm">Dynamic Rate Calculator</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-[hsl(var(--card))] text-[hsl(var(--foreground))] rounded-xl hover:brightness-110 border border-[hsl(var(--border))] transition-all"
            style={{
              boxShadow: `
                4px 4px 8px rgba(0, 0, 0, 0.3),
                -4px -4px 8px rgba(255, 255, 255, 0.02)
              `,
            }}
          >
            <Unlock className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div
            className="bg-[hsl(var(--card))] rounded-3xl p-6 border border-[hsl(var(--border))]"
            style={{
              boxShadow: `
                20px 20px 60px rgba(0, 0, 0, 0.5),
                -20px -20px 60px rgba(255, 255, 255, 0.02),
                inset 2px 2px 4px rgba(255, 255, 255, 0.05),
                inset -2px -2px 4px rgba(0, 0, 0, 0.5)
              `,
            }}
          >
            <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-6 flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-[hsl(var(--accent))]" />
              Price Calculator
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">
                  Base Hourly Rate ($)
                </label>
                <input
                  type="number"
                  value={baseRate}
                  onChange={(e) => setBaseRate(Number(e.target.value))}
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => {
                    setSelectedDate(e.target.value)
                    const date = new Date(e.target.value)
                    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                    setDayOfWeek(days[date.getDay()])
                  }}
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                />
                {dayOfWeek && (
                  <div className="mt-2 text-sm text-[hsl(var(--primary))]">
                    <span className="font-semibold">{dayOfWeek}</span>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">Select Event</label>
                <select
                  value={selectedEvent}
                  onChange={(e) => setSelectedEvent(e.target.value)}
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                >
                  <option value="">-- Select Event --</option>
                  {events
                    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .map((event, idx) => (
                      <option key={idx} value={event.name}>
                        {event.date} - {event.name} (Score: {event.score})
                      </option>
                    ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">Neighborhood</label>
                <select
                  value={neighborhood}
                  onChange={(e) => setNeighborhood(e.target.value)}
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                >
                  <option value="">-- Select Neighborhood --</option>
                  {neighborhoods.map((n, idx) => (
                    <option key={idx} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">Vehicle Type</label>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                >
                  <option value="sedan">Sedan (1.0x)</option>
                  <option value="suv">SUV (1.3x)</option>
                  <option value="stretch">Stretch Limo (1.8x)</option>
                  <option value="sprinter">Sprinter Van (2.2x)</option>
                  <option value="party-bus">Party Bus (2.8x)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-[hsl(var(--foreground))]">Hours Needed</label>
                <input
                  type="number"
                  value={hours}
                  onChange={(e) => setHours(Number(e.target.value))}
                  min="1"
                  className="w-full px-4 py-3 bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl text-[hsl(var(--foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))]"
                  style={{
                    boxShadow: `
                      inset 4px 4px 8px rgba(0, 0, 0, 0.4),
                      inset -4px -4px 8px rgba(255, 255, 255, 0.02)
                    `,
                  }}
                />
              </div>

              {pricing && (
                <div
                  className="bg-gradient-to-br from-[hsl(var(--primary))]/20 to-[hsl(var(--card))] border-2 border-[hsl(var(--primary))] rounded-2xl p-6 mt-6"
                  style={{
                    boxShadow: `
                      inset 4px 4px 12px rgba(0, 0, 0, 0.3),
                      inset -4px -4px 12px rgba(255, 255, 255, 0.05),
                      0 8px 24px rgba(0, 0, 0, 0.4)
                    `,
                  }}
                >
                  <h3 className="font-bold text-xl mb-4 text-[hsl(var(--foreground))]">Calculated Price</h3>
                  <div className="space-y-2 text-[hsl(var(--foreground))]">
                    <div className="flex justify-between">
                      <span>Base Rate:</span>
                      <span className="font-semibold">${baseRate}/hour</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Multiplier:</span>
                      <span className="font-semibold">{pricing.multiplier}x</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Hourly Rate:</span>
                      <span className="font-bold text-[hsl(var(--accent))] text-lg">${pricing.hourlyRate}/hour</span>
                    </div>
                    <div className="flex justify-between text-sm text-[hsl(var(--muted-foreground))]">
                      <span>Minimum Hours:</span>
                      <span>{pricing.minHours}</span>
                    </div>
                    <div className="flex justify-between text-sm text-[hsl(var(--muted-foreground))]">
                      <span>Booking Hours:</span>
                      <span>{pricing.actualHours}</span>
                    </div>
                    <div className="border-t border-[hsl(var(--border))] mt-3 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-3xl font-bold text-[hsl(var(--accent))]">${pricing.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div
            className="bg-[hsl(var(--card))] rounded-3xl p-6 border border-[hsl(var(--border))]"
            style={{
              boxShadow: `
                20px 20px 60px rgba(0, 0, 0, 0.5),
                -20px -20px 60px rgba(255, 255, 255, 0.02),
                inset 2px 2px 4px rgba(255, 255, 255, 0.05),
                inset -2px -2px 4px rgba(0, 0, 0, 0.5)
              `,
            }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-[hsl(var(--foreground))] flex items-center gap-2">
                <Calendar className="w-6 h-6 text-[hsl(var(--primary))]" />
                Events Database
              </h2>
              <button
                onClick={addEvent}
                className="flex items-center gap-2 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] px-4 py-2 rounded-xl font-semibold hover:brightness-110 transition-all"
                style={{
                  boxShadow: `
                    4px 4px 8px rgba(0, 0, 0, 0.3),
                    -4px -4px 8px rgba(255, 255, 255, 0.02)
                  `,
                }}
              >
                <Plus className="w-4 h-4" />
                Add Event
              </button>
            </div>

            <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2">
              {events
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .map((event, idx) => (
                  <div
                    key={idx}
                    className="bg-[hsl(var(--card))] p-4 rounded-2xl border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))] transition-all"
                    style={{
                      boxShadow: `
                        8px 8px 16px rgba(0, 0, 0, 0.4),
                        -8px -8px 16px rgba(255, 255, 255, 0.02),
                        inset 1px 1px 2px rgba(255, 255, 255, 0.05)
                      `,
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="font-bold text-[hsl(var(--foreground))] text-lg">{event.name}</div>
                        <div className="text-sm text-[hsl(var(--muted-foreground))] mt-2 space-y-1">
                          <div className="text-[hsl(var(--primary))]">{event.date}</div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {event.neighborhood}
                          </div>
                          <div className="flex gap-2 mt-2">
                            <span
                              className="px-3 py-1 rounded-full text-xs font-semibold border"
                              style={{
                                backgroundColor: "hsl(var(--primary) / 0.2)",
                                color: "hsl(var(--primary))",
                                borderColor: "hsl(var(--primary) / 0.5)",
                                boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              Score: {event.score}
                            </span>
                            <span
                              className="px-3 py-1 rounded-full text-xs font-semibold border"
                              style={{
                                backgroundColor: "hsl(var(--accent) / 0.2)",
                                color: "hsl(var(--accent))",
                                borderColor: "hsl(var(--accent) / 0.5)",
                                boxShadow: "inset 2px 2px 4px rgba(0, 0, 0, 0.2)",
                              }}
                            >
                              Min: {event.minHours}h
                            </span>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteEvent(idx)}
                        className="text-red-400 hover:text-red-300 ml-3 p-2 rounded-lg hover:bg-red-950/30 transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          className="mt-6 bg-[hsl(var(--card))] rounded-3xl p-6 border border-[hsl(var(--border))]"
          style={{
            boxShadow: `
              20px 20px 60px rgba(0, 0, 0, 0.5),
              -20px -20px 60px rgba(255, 255, 255, 0.02),
              inset 2px 2px 4px rgba(255, 255, 255, 0.05),
              inset -2px -2px 4px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-[hsl(var(--accent))]" />
            Pricing Tier Guide
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: "hsl(0 70% 15%)",
                borderColor: "hsl(0 70% 40%)",
                boxShadow: `
                  8px 8px 16px rgba(0, 0, 0, 0.4),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.05)
                `,
              }}
            >
              <h3 className="font-bold text-red-400 mb-2">Tier 1: Extreme (4.0x)</h3>
              <p className="text-sm text-slate-300">Score 9-10: NYE, World Cup, Crystal Charity Ball Dallas</p>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: "hsl(30 70% 15%)",
                borderColor: "hsl(30 70% 40%)",
                boxShadow: `
                  8px 8px 16px rgba(0, 0, 0, 0.4),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.05)
                `,
              }}
            >
              <h3 className="font-bold text-orange-400 mb-2">Tier 2: High (2.5x)</h3>
              <p className="text-sm text-slate-300">
                Score 7-8: Dallas Cowboys premium game transport, Dallas Opera gala limo
              </p>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: "hsl(45 70% 15%)",
                borderColor: "hsl(45 70% 40%)",
                boxShadow: `
                  8px 8px 16px rgba(0, 0, 0, 0.4),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.05)
                `,
              }}
            >
              <h3 className="font-bold text-yellow-400 mb-2">Tier 3: Elevated (1.8x)</h3>
              <p className="text-sm text-slate-300">
                Score 5-6: Highland Park Christmas lights tour, SMU football limo packages
              </p>
            </div>
            <div
              className="p-4 rounded-xl border"
              style={{
                backgroundColor: "hsl(var(--primary) / 0.15)",
                borderColor: "hsl(var(--primary) / 0.4)",
                boxShadow: `
                  8px 8px 16px rgba(0, 0, 0, 0.4),
                  inset 2px 2px 4px rgba(255, 255, 255, 0.05)
                `,
              }}
            >
              <h3 className="font-bold text-[hsl(var(--primary))] mb-2">Tier 4: Standard (1.3x)</h3>
              <p className="text-sm text-slate-300">Score 3-4: Uptown corporate limo service, weekday bookings</p>
            </div>
          </div>
        </div>

        <div
          className="mt-6 bg-[hsl(var(--card))] rounded-3xl p-6 border border-[hsl(var(--border))]"
          style={{
            boxShadow: `
              20px 20px 60px rgba(0, 0, 0, 0.5),
              -20px -20px 60px rgba(255, 255, 255, 0.02),
              inset 2px 2px 4px rgba(255, 255, 255, 0.05),
              inset -2px -2px 4px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          <h2 className="text-xl font-bold text-[hsl(var(--foreground))] mb-4">Premium Service Areas & Events</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-[hsl(var(--muted-foreground))]">
            <div>
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">Luxury Neighborhoods</h3>
              <ul className="space-y-1">
                <li>Highland Park private club service</li>
                <li>Preston Hollow gala transportation</li>
                <li>Preston Hollow estate limousine</li>
                <li>University Park luxury rides</li>
                <li>Uptown corporate limo service</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">Elite Events</h3>
              <ul className="space-y-1">
                <li>Private charity ball Dallas</li>
                <li>Exclusive Dallas fundraiser transportation</li>
                <li>Folds of Honor gala limo bookings</li>
                <li>Dallas elite social event rides</li>
                <li>New Years Eve upscale party transport</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[hsl(var(--foreground))] mb-2">Sports & Entertainment</h3>
              <ul className="space-y-1">
                <li>AT&T Stadium luxury rides</li>
                <li>Dallas Mavericks VIP transportation</li>
                <li>Winspear Opera House events</li>
                <li>Dallas Symphony Orchestra gala</li>
                <li>Christmas holiday luxury car service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
