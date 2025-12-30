# Phase 2: Quote Automation & Payment Integration

## Overview

Phase 2 transforms Texexpress from a manual booking system into an automated quote-to-payment platform with intelligent routing, dynamic pricing, and no-show protection.

## Goals

1. **Reduce Manual Work:** Automate quote generation and booking confirmations
2. **Capture Revenue:** Enable deposit collection to reduce no-shows
3. **Improve Experience:** Instant quotes with transparent pricing
4. **Increase Conversions:** Streamline booking flow from quote to confirmation

## Technical Implementation Plan

### 1. Smart Quote Calculator with Cal Routing

**Objective:** Replace basic booking form with intelligent Cal.com Routing Form

**Features:**
- Real-time distance calculation (Google Maps Distance Matrix API)
- Dynamic pricing based on:
  - Route distance and duration
  - Vehicle class selection
  - Time of day (peak hours, late night premiums)
  - Service type (Airport, Hourly, Point-to-Point, FBO)
  - Event-based multipliers (from driver portal logic)
- Instant quote display before booking

**Technical Stack:**
- Cal.com Routing Forms API
- Google Maps Distance Matrix API
- Next.js Server Actions for pricing logic
- Edge Functions for real-time calculations

**Implementation Steps:**

\`\`\`typescript
// app/actions/calculate-quote.ts
'use server'

import { calculateDistance } from '@/lib/google-maps'
import { getEventMultiplier } from '@/lib/pricing'

export async function calculateQuote(data: {
  pickup: string
  dropoff: string
  date: string
  time: string
  vehicleType: string
  serviceType: string
}) {
  // 1. Calculate distance and duration
  const route = await calculateDistance(data.pickup, data.dropoff)
  
  // 2. Get base rate for vehicle type
  const baseRates = {
    sedan: 150,
    suv: 195,
    stretch: 270,
    sprinter: 330,
    'party-bus': 420
  }
  
  // 3. Apply time-of-day multiplier
  const hour = parseInt(data.time.split(':')[0])
  const timeMultiplier = (hour >= 22 || hour <= 5) ? 1.3 : 1.0
  
  // 4. Apply event multiplier if applicable
  const eventMultiplier = await getEventMultiplier(data.date)
  
  // 5. Calculate final price
  const baseRate = baseRates[data.vehicleType]
  const totalMultiplier = timeMultiplier * eventMultiplier
  const hourlyRate = Math.round(baseRate * totalMultiplier)
  
  // 6. Determine minimum hours based on service type
  const minHours = data.serviceType === 'airport' ? 2 : 3
  const estimatedHours = Math.max(route.duration / 3600, minHours)
  
  return {
    hourlyRate,
    estimatedHours,
    totalPrice: Math.round(hourlyRate * estimatedHours),
    distance: route.distance,
    duration: route.duration,
    breakdown: {
      baseRate,
      timeMultiplier,
      eventMultiplier,
      totalMultiplier
    }
  }
}
\`\`\`

### 2. Dynamic Upsells During Booking

**Objective:** Increase average booking value with relevant add-ons

**Upsells:**
- Child safety seats (+$15 each)
- Additional stops (+$25 per stop)
- Meet & greet service (+$35)
- Premium refreshments (+$20)
- Red carpet service (+$50)
- Airport fast-track assistance (+$40)

**Implementation:**
- Cal.com custom fields for upsell selection
- Dynamic price updates in real-time
- Conditional upsells based on service type

\`\`\`typescript
// components/booking-upsells.tsx
export function BookingUpsells({ serviceType, onUpdate }) {
  const upsells = [
    { id: 'child-seat', name: 'Child Safety Seat', price: 15, applicable: ['all'] },
    { id: 'extra-stop', name: 'Additional Stop', price: 25, applicable: ['all'] },
    { id: 'meet-greet', name: 'Meet & Greet', price: 35, applicable: ['airport', 'fbo'] },
    { id: 'refreshments', name: 'Premium Refreshments', price: 20, applicable: ['all'] },
    { id: 'red-carpet', name: 'Red Carpet Service', price: 50, applicable: ['event', 'gala'] },
    { id: 'fast-track', name: 'Airport Fast-Track', price: 40, applicable: ['airport'] }
  ]
  
  const availableUpsells = upsells.filter(u => 
    u.applicable.includes('all') || u.applicable.includes(serviceType)
  )
  
  return (
    <div className="space-y-3">
      <h3 className="font-semibold">Enhance Your Experience</h3>
      {availableUpsells.map(upsell => (
        <UpsellCard key={upsell.id} {...upsell} onSelect={onUpdate} />
      ))}
    </div>
  )
}
\`\`\`

### 3. No-Show Protection with Stripe

**Objective:** Reduce no-shows and secure revenue

**Strategy:**
- Capture authorization (not charge) for 20% deposit
- Auto-release hold after successful ride
- Charge no-show fee if cancelled <4 hours before pickup
- Support credit cards and digital wallets

**Implementation:**

\`\`\`typescript
// app/actions/create-payment-intent.ts
'use server'

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function createPaymentIntent(bookingData: {
  totalPrice: number
  customerEmail: string
  bookingId: string
}) {
  // Create payment intent for 20% deposit
  const depositAmount = Math.round(bookingData.totalPrice * 0.20)
  
  const paymentIntent = await stripe.paymentIntents.create({
    amount: depositAmount * 100, // Convert to cents
    currency: 'usd',
    capture_method: 'manual', // Authorization only
    metadata: {
      bookingId: bookingData.bookingId,
      totalPrice: bookingData.totalPrice,
      customerEmail: bookingData.customerEmail
    },
    description: `Texexpress Transportation - Booking ${bookingData.bookingId}`
  })
  
  return {
    clientSecret: paymentIntent.client_secret,
    depositAmount
  }
}

// Release hold after successful ride
export async function releasePaymentHold(paymentIntentId: string) {
  await stripe.paymentIntents.cancel(paymentIntentId)
}

// Charge no-show fee
export async function chargeNoShowFee(paymentIntentId: string) {
  await stripe.paymentIntents.capture(paymentIntentId)
}
\`\`\`

### 4. FBO/Private Jet Fast-Track

**Objective:** Streamline high-value FBO transfer bookings

**Features:**
- Dedicated "Text 'FBO'" CTA buttons
- Pre-filled SMS with tail number, FBO location, date/time, pax count
- Priority routing to owner (instant notification)
- Tail number validation
- FBO location autocomplete

**Implementation:**

\`\`\`typescript
// components/fbo-fast-track.tsx
export function FBOFastTrack() {
  const fboLocations = [
    'Dallas Love Field (KDAL)',
    'Dallas Executive (KRBD)',
    'Addison Airport (KADS)',
    'Fort Worth Alliance (KAFW)',
    'Texas Jet FBO'
  ]
  
  const generateFBOSMS = (data: {
    tailNumber: string
    fboLocation: string
    date: string
    time: string
    passengers: number
  }) => {
    const message = `FBO Transfer Request: Tail ${data.tailNumber} | ${data.fboLocation} | ${data.date} ${data.time} | ${data.passengers} pax`
    return `sms:+12144505413&body=${encodeURIComponent(message)}`
  }
  
  return (
    <div className="neumorphic rounded-2xl p-6">
      <h3 className="text-xl font-bold mb-4">Private Jet Transfer</h3>
      <form className="space-y-4">
        <input placeholder="Tail Number (e.g., N123AB)" />
        <select>
          {fboLocations.map(loc => <option key={loc}>{loc}</option>)}
        </select>
        <input type="date" />
        <input type="time" />
        <input type="number" placeholder="Passengers" />
        <Button onClick={() => window.location.href = generateFBOSMS(formData)}>
          Text FBO Request
        </Button>
      </form>
    </div>
  )
}
\`\`\`

### 5. Enhanced Booking Confirmations

**Objective:** Provide comprehensive booking details and real-time updates

**Features:**
- Auto-generated PDF itineraries
- QR code for driver identification
- Real-time flight tracking (for airport pickups)
- Driver photo and vehicle details (sent 2 hours before)
- Live GPS tracking link (sent 30 minutes before)

**Implementation:**

\`\`\`typescript
// lib/generate-itinerary.ts
import { jsPDF } from 'jspdf'
import QRCode from 'qrcode'

export async function generateItinerary(booking: Booking) {
  const doc = new jsPDF()
  
  // Generate QR code
  const qrCode = await QRCode.toDataURL(booking.id)
  
  // Add logo
  doc.addImage('/logo.png', 'PNG', 10, 10, 30, 30)
  
  // Add booking details
  doc.setFontSize(20)
  doc.text('Texexpress Transportation', 50, 20)
  doc.setFontSize(12)
  doc.text(`Booking Confirmation: ${booking.id}`, 50, 30)
  
  // Add QR code
  doc.addImage(qrCode, 'PNG', 150, 10, 40, 40)
  
  // Add trip details
  doc.text(`Pickup: ${booking.pickup}`, 10, 60)
  doc.text(`Dropoff: ${booking.dropoff}`, 10, 70)
  doc.text(`Date: ${booking.date}`, 10, 80)
  doc.text(`Time: ${booking.time}`, 10, 90)
  doc.text(`Vehicle: ${booking.vehicleType}`, 10, 100)
  doc.text(`Total: $${booking.totalPrice}`, 10, 110)
  
  return doc.output('blob')
}
\`\`\`

### 6. Dynamic Pricing Dashboard (Owner-Side)

**Objective:** Give owner control over pricing rules

**Features:**
- Adjust pricing by time windows
- Set vehicle availability
- Enable/disable surge pricing
- Configure corporate account discounts
- View pricing analytics

**Implementation:**

\`\`\`typescript
// app/admin/pricing/page.tsx
export default function PricingDashboard() {
  return (
    <div className="space-y-6">
      <PricingRulesEditor />
      <VehicleAvailability />
      <SurgePricingToggle />
      <CorporateDiscounts />
      <PricingAnalytics />
    </div>
  )
}
\`\`\`

## Timeline

**Week 1-2:** Smart Quote Calculator + Google Maps integration  
**Week 3:** Dynamic Upsells + Cal.com Routing Forms  
**Week 4:** Stripe Payment Integration + No-Show Protection  
**Week 5:** FBO Fast-Track + Enhanced Confirmations  
**Week 6:** Owner Pricing Dashboard + Testing  
**Week 7:** Launch Phase 2

## Success Metrics

- **Conversion Rate:** Target 35% increase (quote → booking)
- **No-Show Rate:** Target 60% reduction
- **Average Booking Value:** Target 25% increase (via upsells)
- **Quote Response Time:** Target <30 seconds
- **Customer Satisfaction:** Target 4.8+ stars

## Next Steps

1. Review and approve Phase 2 plan
2. Set up Stripe account and test mode
3. Configure Google Maps API with billing
4. Upgrade Cal.com to Teams plan ($15/user/month)
5. Begin Week 1 implementation

---

**Status:** Ready for Implementation  
**Estimated Cost:** $500-800/month (APIs + Cal.com)  
**ROI:** 3-6 months based on no-show reduction alone
