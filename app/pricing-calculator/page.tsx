"use client"

import { useState, useEffect } from "react"
import { Calendar, DollarSign, Unlock, Plus, Trash2, Trophy, Music, Star, Sparkles, Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"

export default function PricingCalculatorPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [events, setEvents] = useState<any[]>([])
  const [baseRate, setBaseRate] = useState(150)

  // Calculator state
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedEvent, setSelectedEvent] = useState("")
  const [neighborhood, setNeighborhood] = useState("")
  const [vehicleType, setVehicleType] = useState("sedan")
  const [hours, setHours] = useState(3)
  const [dayOfWeek, setDayOfWeek] = useState("")
  const [showAddForm, setShowAddForm] = useState(false)
  const [eventFilter, setEventFilter] = useState("all")
  const [newEvent, setNewEvent] = useState({
    date: "",
    name: "",
    score: 5,
    neighborhood: "",
    minHours: 3,
    type: "event",
  })

  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = async () => {
    try {
      const stored = localStorage.getItem("limo-events")
      if (stored) {
        setEvents(JSON.parse(stored))
      } else {
        setEvents(getDefaultEvents())
      }
    } catch (error) {
      setEvents(getDefaultEvents())
    }
  }

  const saveEvents = async (newEvents: any[]) => {
    try {
      localStorage.setItem("limo-events", JSON.stringify(newEvents))
      setEvents(newEvents)
    } catch (error) {
      console.error("Failed to save events:", error)
    }
  }

  const getDefaultEvents = () => [
    // EXTREME DEMAND - NYE & World Cup
    { date: "2025-12-31", name: "New Years Eve", score: 10, neighborhood: "Multiple", minHours: 6, type: "holiday" },
    {
      date: "2026-06-14",
      name: "World Cup - Match 1",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-06-18",
      name: "World Cup - Match 2",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-06-22",
      name: "World Cup - Match 3",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-06-26",
      name: "World Cup - Match 4",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-06-30",
      name: "World Cup - Match 5",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-07-03",
      name: "World Cup - Match 6",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-07-07",
      name: "World Cup - Match 7",
      score: 10,
      neighborhood: "Arlington",
      minHours: 5,
      type: "worldcup",
    },
    {
      date: "2026-07-11",
      name: "World Cup - Semi Finals",
      score: 10,
      neighborhood: "Arlington",
      minHours: 6,
      type: "worldcup",
    },
    {
      date: "2026-07-14",
      name: "World Cup - FINALS",
      score: 10,
      neighborhood: "Arlington",
      minHours: 6,
      type: "worldcup",
    },

    // HIGH DEMAND - Premium Galas & Major Events
    {
      date: "2025-11-15",
      name: "Crystal Charity Ball",
      score: 10,
      neighborhood: "Preston Hollow",
      minHours: 4,
      type: "gala",
    },
    {
      date: "2025-11-15",
      name: "Folds of Honor Gala",
      score: 9,
      neighborhood: "Arlington",
      minHours: 4,
      type: "gala",
    },
    { date: "2025-11-15", name: "Red Tie Gala", score: 9, neighborhood: "Dallas", minHours: 4, type: "gala" },
    { date: "2025-11-21", name: "The Hope Party Gala", score: 9, neighborhood: "Dallas", minHours: 4, type: "gala" },
    {
      date: "2025-12-06",
      name: "Crystal Charity Ball Weekend",
      score: 9,
      neighborhood: "Highland Park",
      minHours: 4,
      type: "gala",
    },
    { date: "2025-12-31", name: "W Dallas Posh NYE", score: 10, neighborhood: "Dallas", minHours: 6, type: "nye" },
    {
      date: "2025-12-31",
      name: "Statler Royal Masquerade",
      score: 10,
      neighborhood: "Dallas",
      minHours: 6,
      type: "nye",
    },
    { date: "2025-12-31", name: "Virgin Hotels NYE", score: 10, neighborhood: "Dallas", minHours: 6, type: "nye" },
    {
      date: "2025-12-31",
      name: "Reunion Tower Fireworks",
      score: 10,
      neighborhood: "Dallas",
      minHours: 5,
      type: "nye",
    },

    // COWBOYS GAMES - High Demand
    {
      date: "2025-11-23",
      name: "Cowboys vs Eagles",
      score: 9,
      neighborhood: "Arlington",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-11-27",
      name: "Cowboys vs Chiefs (Thanksgiving)",
      score: 9,
      neighborhood: "Arlington",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-12-14",
      name: "Cowboys vs Vikings (SNF)",
      score: 8,
      neighborhood: "Arlington",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-12-21",
      name: "Cowboys vs Chargers",
      score: 7,
      neighborhood: "Arlington",
      minHours: 3,
      type: "sports",
    },

    // DALLAS OPERA & CULTURAL
    {
      date: "2025-11-07",
      name: "Dallas Opera - Carmelites",
      score: 7,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-11-09",
      name: "Dallas Opera - Carmelites",
      score: 7,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-11-12",
      name: "Dallas Opera - Carmelites",
      score: 7,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-11-15",
      name: "Dallas Opera - Carmelites",
      score: 7,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-12-13",
      name: "Dallas Opera Holiday Concert",
      score: 7,
      neighborhood: "Dallas",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-12-14",
      name: "Pink Martini Concert",
      score: 7,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },

    // TEXAS BALLET - The Nutcracker
    {
      date: "2025-11-28",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-11-29",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-11-30",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-12-04",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-12-05",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-12-06",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },
    {
      date: "2025-12-07",
      name: "The Nutcracker Ballet",
      score: 6,
      neighborhood: "Dallas Arts District",
      minHours: 3,
      type: "culture",
    },

    // SMU FOOTBALL
    {
      date: "2025-11-01",
      name: "SMU vs Miami (ACC)",
      score: 8,
      neighborhood: "University Park",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-11-22",
      name: "SMU vs Louisville",
      score: 7,
      neighborhood: "University Park",
      minHours: 3,
      type: "sports",
    },

    // DALLAS MAVERICKS - Premium Games
    {
      date: "2025-11-10",
      name: "Mavericks vs Bucks",
      score: 7,
      neighborhood: "Dallas",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-11-19",
      name: "Mavericks vs Knicks (ESPN)",
      score: 8,
      neighborhood: "Dallas",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-12-03",
      name: "Mavericks vs Heat",
      score: 7,
      neighborhood: "Dallas",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-12-06",
      name: "Mavericks vs Rockets",
      score: 7,
      neighborhood: "Dallas",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-12-23",
      name: "Mavericks vs Nuggets",
      score: 7,
      neighborhood: "Dallas",
      minHours: 3,
      type: "sports",
    },
    {
      date: "2025-12-25",
      name: "Mavericks vs Warriors (Christmas)",
      score: 9,
      neighborhood: "Dallas",
      minHours: 3,
      type: "sports",
    },

    // HOLIDAY SEASON
    {
      date: "2025-11-26",
      name: "Thanksgiving Weekend",
      score: 8,
      neighborhood: "Multiple",
      minHours: 3,
      type: "holiday",
    },
    {
      date: "2025-12-20",
      name: "Holiday Party Season",
      score: 7,
      neighborhood: "Highland Park",
      minHours: 4,
      type: "holiday",
    },
    { date: "2025-12-24", name: "Christmas Eve", score: 8, neighborhood: "Multiple", minHours: 3, type: "holiday" },
    { date: "2025-12-25", name: "Christmas Day", score: 7, neighborhood: "Multiple", minHours: 3, type: "holiday" },
  ]

  const handleLogin = () => {
    if (password === "limodfw2025") {
      setIsAuthenticated(true)
    } else {
      alert("Incorrect password")
    }
  }

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
  ]

  const calculateMultiplier = () => {
    let multiplier = 1.0

    const event = events.find((e) => e.name === selectedEvent)
    if (event) {
      if (event.score >= 9) multiplier = 2.5
      else if (event.score >= 7) multiplier = 1.8
      else if (event.score >= 5) multiplier = 1.4
      else multiplier = 1.2
    }

    let bonus = 0

    if (dayOfWeek === "Friday" || dayOfWeek === "Saturday") {
      bonus += 0.15
    } else if (dayOfWeek === "Sunday" && selectedEvent.includes("Cowboys")) {
      bonus += 0.1
    }

    if (neighborhood.includes("Highland Park") || neighborhood.includes("Preston Hollow")) {
      bonus += 0.1
    }

    multiplier = multiplier * (1 + bonus)

    const vehicleRates: Record<string, number> = {
      sedan: 1.0,
      suv: 1.25,
      stretch: 1.6,
      sprinter: 1.9,
      "party-bus": 2.3,
    }

    multiplier *= vehicleRates[vehicleType]

    return Math.min(multiplier, 5.0)
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
    if (!newEvent.name || !newEvent.date) {
      alert("Please fill in event name and date")
      return
    }

    const eventToAdd = {
      date: newEvent.date,
      name: newEvent.name,
      score: Number.parseInt(String(newEvent.score)) || 5,
      neighborhood: newEvent.neighborhood || "Dallas",
      minHours: Number.parseInt(String(newEvent.minHours)) || 3,
      type: newEvent.type || "event",
    }

    saveEvents([...events, eventToAdd])
    setShowAddForm(false)
    setNewEvent({ date: "", name: "", score: 5, neighborhood: "", minHours: 3, type: "event" })
    alert("Event added successfully!")
  }

  const deleteEvent = (eventToDelete: any) => {
    if (confirm(`Delete "${eventToDelete.name}"?`)) {
      const newEvents = events.filter(
        (e) => !(e.name === eventToDelete.name && e.date === eventToDelete.date && e.score === eventToDelete.score),
      )
      saveEvents(newEvents)
    }
  }

  const getEventIcon = (type: string) => {
    switch (type) {
      case "worldcup":
        return <Globe className="h-5 w-5" />
      case "gala":
        return <Star className="h-5 w-5" />
      case "nye":
        return <Sparkles className="h-5 w-5" />
      case "sports":
        return <Trophy className="h-5 w-5" />
      case "culture":
        return <Music className="h-5 w-5" />
      case "holiday":
        return <Sparkles className="h-5 w-5" />
      default:
        return <Calendar className="h-5 w-5" />
    }
  }

  const getEventColor = (type: string) => {
    switch (type) {
      case "worldcup":
        return "border-purple-500/30 bg-purple-900/10 text-purple-300"
      case "gala":
        return "border-pink-500/30 bg-pink-900/10 text-pink-300"
      case "nye":
        return "border-yellow-500/30 bg-yellow-900/10 text-yellow-300"
      case "sports":
        return "border-blue-500/30 bg-blue-900/10 text-blue-300"
      case "culture":
        return "border-teal-500/30 bg-teal-900/10 text-teal-300"
      case "holiday":
        return "border-red-500/30 bg-red-900/10 text-red-300"
      default:
        return "border-border bg-card/30 text-muted-foreground"
    }
  }

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00")
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  const getDayOfWeek = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00")
    return date.toLocaleDateString("en-US", { weekday: "short" })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="neumorphic bg-card rounded-3xl shadow-2xl p-8 max-w-md w-full border-2 border-border">
          <div className="flex items-center justify-center mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
              alt="Texexpress"
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>
          <h1 className="text-2xl font-bold text-center mb-6 text-foreground">Texexpress Pricing</h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleLogin()}
            placeholder="Enter password"
            className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl mb-4 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90 transition neumorphic-hover"
          >
            Access Calculator
          </button>
          <p className="text-xs text-muted-foreground mt-4 text-center">Password: limodfw2025</p>
        </div>
      </div>
    )
  }

  const pricing = selectedEvent ? calculatePrice() : null

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background p-4 pt-24 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-t-green-CifYSVrzCy1naN2zIlJPMpGFybZPI8.png"
                  alt="Texexpress"
                  width={64}
                  height={64}
                  className="drop-shadow-lg cursor-pointer"
                />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Texexpress Pricing</h1>
                <p className="text-accent text-sm">Dynamic Rate Calculator</p>
              </div>
            </div>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="flex items-center gap-2 px-4 py-2 bg-card text-foreground rounded-xl hover:bg-card/80 border-2 border-border neumorphic-hover"
            >
              <Unlock className="h-4 w-4" />
              Logout
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Calculator */}
            <div className="neumorphic bg-card rounded-3xl p-6 border-2 border-border">
              <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-accent" />
                Price Calculator
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Base Hourly Rate ($)</label>
                  <input
                    type="number"
                    value={baseRate}
                    onChange={(e) => setBaseRate(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value)
                      const date = new Date(e.target.value)
                      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                      setDayOfWeek(days[date.getDay()])
                    }}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic"
                  />
                  {dayOfWeek && (
                    <div className="mt-2 text-sm text-accent">
                      <span className="font-semibold">{dayOfWeek}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Select Event</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic"
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
                  <label className="block text-sm font-medium mb-2 text-foreground">Neighborhood</label>
                  <select
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic"
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
                  <label className="block text-sm font-medium mb-2 text-foreground">Vehicle Type</label>
                  <select
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic"
                  >
                    <option value="sedan">Sedan (1.0x)</option>
                    <option value="suv">SUV (1.3x)</option>
                    <option value="stretch">Stretch Limo (1.8x)</option>
                    <option value="sprinter">Sprinter Van (2.2x)</option>
                    <option value="party-bus">Party Bus (2.8x)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Hours Needed</label>
                  <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value))}
                    min="1"
                    className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl text-foreground focus:ring-2 focus:ring-accent focus:border-transparent neumorphic [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                  />
                </div>

                {pricing && (
                  <div className="neumorphic border-2 border-accent/50 rounded-2xl p-6 mt-6 bg-card/50">
                    <h3 className="font-bold text-xl mb-4 text-foreground">Calculated Price</h3>
                    <div className="space-y-2 text-foreground">
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
                        <span className="font-bold text-accent text-lg">${pricing.hourlyRate}/hour</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Minimum Hours:</span>
                        <span>{pricing.minHours}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Booking Hours:</span>
                        <span>{pricing.actualHours}</span>
                      </div>
                      <div className="border-t-2 border-border mt-3 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total:</span>
                          <span className="text-3xl font-bold text-accent">${pricing.totalPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <a
                        href={`sms:+12144505413&body=Hi%20Texpress%2C%20I'd%20like%20to%20book%20a%20ride%20for%20${selectedEvent}%20on%20${selectedDate}.%20Total%3A%20%24${pricing.totalPrice}%20for%20${pricing.actualHours}%20hours.`}
                        className="block w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-center hover:bg-primary/90 transition neumorphic-hover"
                      >
                        Book Now - ${pricing.totalPrice}
                      </a>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        Text us to confirm and complete payment
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Events List */}
            <div className="neumorphic bg-card rounded-3xl p-6 border-2 border-border">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-accent" />
                  Events Database ({events.filter((e) => eventFilter === "all" || e.type === eventFilter).length})
                </h2>
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-xl font-bold hover:bg-primary/90 transition neumorphic-hover"
                >
                  <Plus className="h-5 w-5" />
                  {showAddForm ? "Cancel" : "Add Event"}
                </button>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setEventFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition neumorphic-hover ${
                    eventFilter === "all"
                      ? "bg-accent text-accent-foreground"
                      : "bg-card/50 text-foreground border border-border"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setEventFilter("worldcup")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition neumorphic-hover ${
                    eventFilter === "worldcup"
                      ? "bg-purple-600 text-white"
                      : "bg-card/50 text-foreground border border-border"
                  }`}
                >
                  World Cup
                </button>
                <button
                  onClick={() => setEventFilter("gala")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition neumorphic-hover ${
                    eventFilter === "gala"
                      ? "bg-pink-600 text-white"
                      : "bg-card/50 text-foreground border border-border"
                  }`}
                >
                  Galas
                </button>
                <button
                  onClick={() => setEventFilter("sports")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition neumorphic-hover ${
                    eventFilter === "sports"
                      ? "bg-blue-600 text-white"
                      : "bg-card/50 text-foreground border border-border"
                  }`}
                >
                  Sports
                </button>
                <button
                  onClick={() => setEventFilter("culture")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition neumorphic-hover ${
                    eventFilter === "culture"
                      ? "bg-teal-600 text-white"
                      : "bg-card/50 text-foreground border border-border"
                  }`}
                >
                  Culture
                </button>
                <button
                  onClick={() => setEventFilter("holiday")}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition neumorphic-hover ${
                    eventFilter === "holiday"
                      ? "bg-red-600 text-white"
                      : "bg-card/50 text-foreground border border-border"
                  }`}
                >
                  Holidays
                </button>
              </div>

              {showAddForm && (
                <div className="mb-6 neumorphic p-5 rounded-2xl border-2 border-accent/50 bg-card/50">
                  <h3 className="text-foreground font-bold mb-4 text-lg">Add New Event</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Event Name *</label>
                      <input
                        type="text"
                        value={newEvent.name}
                        onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
                        placeholder="e.g., Cowboys vs Patriots"
                        className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none neumorphic"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Date *</label>
                        <input
                          type="date"
                          value={newEvent.date}
                          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-foreground focus:border-accent focus:outline-none neumorphic"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Event Type</label>
                        <select
                          value={newEvent.type}
                          onChange={(e) => setNewEvent({ ...newEvent, type: e.target.value })}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-foreground focus:border-accent focus:outline-none neumorphic"
                        >
                          <option value="event">General Event</option>
                          <option value="worldcup">World Cup</option>
                          <option value="gala">Gala</option>
                          <option value="nye">New Years Eve</option>
                          <option value="sports">Sports</option>
                          <option value="culture">Culture/Arts</option>
                          <option value="holiday">Holiday</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Neighborhood</label>
                      <select
                        value={newEvent.neighborhood}
                        onChange={(e) => setNewEvent({ ...newEvent, neighborhood: e.target.value })}
                        className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-foreground focus:border-accent focus:outline-none neumorphic"
                      >
                        <option value="">Select...</option>
                        {neighborhoods.map((n, idx) => (
                          <option key={idx} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Event Score (1-10)</label>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={newEvent.score}
                          onChange={(e) => setNewEvent({ ...newEvent, score: Number.parseInt(e.target.value) || 5 })}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-foreground focus:border-accent focus:outline-none neumorphic [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Min Hours</label>
                        <input
                          type="number"
                          min="1"
                          value={newEvent.minHours}
                          onChange={(e) => setNewEvent({ ...newEvent, minHours: Number.parseInt(e.target.value) || 3 })}
                          className="w-full px-4 py-3 bg-background border-2 border-border rounded-lg text-foreground focus:border-accent focus:outline-none neumorphic [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        addEvent()
                      }}
                      type="button"
                      className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-bold hover:bg-accent/90 transition neumorphic-hover"
                    >
                      Save Event
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2">
                {events
                  .filter((e) => eventFilter === "all" || e.type === eventFilter)
                  .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                  .map((event, idx) => {
                    const colors = getEventColor(event.type)
                    const icon = getEventIcon(event.type)
                    return (
                      <div key={idx} className={`neumorphic p-4 rounded-2xl border-2 ${colors}`}>
                        <div className="flex gap-4">
                          {/* Date Badge */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 rounded-xl neumorphic border-2 border-border flex flex-col items-center justify-center bg-card">
                              <div className="text-xs text-accent font-bold">
                                {getDayOfWeek(event.date).toUpperCase()}
                              </div>
                              <div className="text-xl font-bold text-foreground">
                                {new Date(event.date + "T00:00:00").getDate()}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {new Date(event.date + "T00:00:00")
                                  .toLocaleDateString("en-US", { month: "short" })
                                  .toUpperCase()}
                              </div>
                            </div>
                          </div>

                          {/* Event Details */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h3 className="font-bold text-foreground text-base leading-tight">{event.name}</h3>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  deleteEvent(event)
                                }}
                                className="flex-shrink-0 p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-lg transition"
                                title="Delete event"
                              >
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 mb-2">
                              {/* Type Badge */}
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold border-2 border-border bg-card/50">
                                {icon}
                                {event.type || "event"}
                              </span>

                              {/* Score Badge */}
                              <span
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold border-2
                                ${
                                  event.score >= 9
                                    ? "bg-red-900/40 text-red-300 border-red-700"
                                    : event.score >= 7
                                      ? "bg-orange-900/40 text-orange-300 border-orange-700"
                                      : event.score >= 5
                                        ? "bg-yellow-900/40 text-yellow-300 border-yellow-700"
                                        : "bg-teal-900/40 text-teal-300 border-teal-700"
                                }`}
                              >
                                Score: {event.score}
                              </span>

                              {/* Min Hours Badge */}
                              <span className="px-2.5 py-1 rounded-lg text-xs font-bold bg-card/50 text-muted-foreground border-2 border-border">
                                {event.minHours}h min
                              </span>
                            </div>

                            {/* Location */}
                            <div className="text-sm text-muted-foreground">{event.neighborhood}</div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>

          {/* Pricing Guide */}
          <div className="mt-6 neumorphic bg-card rounded-3xl p-6 border-2 border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Pricing Tier Guide</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-red-900/30 border-2 border-red-700 p-4 rounded-xl neumorphic">
                <h3 className="font-bold text-red-400 mb-2">Tier 1: Extreme (2.5x)</h3>
                <p className="text-sm text-foreground">Score 9-10: NYE, World Cup, Crystal Charity Ball</p>
              </div>
              <div className="bg-orange-900/30 border-2 border-orange-700 p-4 rounded-xl neumorphic">
                <h3 className="font-bold text-orange-400 mb-2">Tier 2: High (1.8x)</h3>
                <p className="text-sm text-foreground">Score 7-8: Major Cowboys games, Opera galas</p>
              </div>
              <div className="bg-yellow-900/30 border-2 border-yellow-700 p-4 rounded-xl neumorphic">
                <h3 className="font-bold text-yellow-400 mb-2">Tier 3: Elevated (1.4x)</h3>
                <p className="text-sm text-foreground">Score 5-6: Regular weekend events</p>
              </div>
              <div className="bg-teal-900/30 border-2 border-teal-700 p-4 rounded-xl neumorphic">
                <h3 className="font-bold text-teal-400 mb-2">Tier 4: Standard (1.2x)</h3>
                <p className="text-sm text-foreground">Score 3-4: Weekday bookings</p>
              </div>
            </div>
            <div className="mt-4 p-4 neumorphic rounded-xl border-2 border-border bg-card/50">
              <p className="text-sm text-foreground">
                <span className="font-semibold text-accent">Bonuses:</span> Weekend +15%, Premium neighborhoods +10%,
                Vehicle rates apply separately. Max total: 5x base rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
