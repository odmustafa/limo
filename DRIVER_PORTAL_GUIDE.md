# Texexpress Driver Portal - Implementation Guide

## Overview

The Driver Portal is a password-protected pricing calculator designed exclusively for Texexpress drivers to calculate dynamic pricing before accepting bookings. This system uses event-based multipliers, neighborhood premiums, vehicle type adjustments, and day-of-week factors to generate accurate quotes.

## Access Information

**URL:** `/driver-portal`  
**Password:** `limodfw2025`  
**Access Level:** Drivers only (password-protected)

## Features

### 1. Dynamic Pricing Calculator

The calculator uses a sophisticated multiplier system based on:

- **Event Score (1-10):** Higher scores = higher multipliers
  - Score 9-10: 4.0x multiplier (Extreme Tier)
  - Score 7-8: 2.5x multiplier (High Tier)
  - Score 5-6: 1.8x multiplier (Elevated Tier)
  - Score 3-4: 1.3x multiplier (Standard Tier)

- **Day of Week:**
  - Friday/Saturday: +20% multiplier
  - Sunday (Cowboys games): +15% multiplier

- **Neighborhood Premium:**
  - Highland Park: +10%
  - Preston Hollow: +10%

- **Vehicle Type:**
  - Sedan: 1.0x (base)
  - SUV: 1.3x
  - Stretch Limo: 1.8x
  - Sprinter Van: 2.2x
  - Party Bus: 2.8x

### 2. Events Database

Pre-loaded with high-value DFW events optimized for SEO:

- **Crystal Charity Ball Dallas** (Score 10, 4hr min)
- **New Years Eve upscale party transport** (Score 10, 6hr min)
- **Dallas Cowboys premium game transport** (Score 8-9, 3hr min)
- **Dallas Opera gala limo** (Score 7, 3hr min)
- **Highland Park Christmas lights tour** (Score 7, 2hr min)
- **Winspear Opera House events** (Score 7, 3hr min)
- **Dallas Symphony Orchestra gala** (Score 8, 3hr min)
- **SMU football limo packages** (Score 6, 3hr min)
- **Folds of Honor gala limo bookings** (Score 8, 4hr min)
- **Dallas Mavericks VIP transportation** (Score 7, 3hr min)
- **World Cup Finals** (Score 10, 6hr min)

Drivers can add, edit, and delete events as needed.

### 3. Neighborhood Coverage

Premium service areas include:

- Highland Park (75205)
- University Park (75225)
- Preston Hollow (75229)
- Uptown/Turtle Creek (75219)
- Bluffview (75209)
- West Plano (75093)
- Frisco (75034)
- Southlake (76092)
- Arlington/AT&T Stadium
- Dallas Arts District
- Preston Hollow estate

## How to Use

### Step 1: Login
1. Navigate to `/driver-portal`
2. Enter password: `limodfw2025`
3. Click "Access Calculator"

### Step 2: Set Base Rate
- Default: $150/hour
- Adjust based on current market conditions

### Step 3: Select Booking Details
1. **Date:** Choose the service date (auto-calculates day of week)
2. **Event:** Select from pre-loaded events or leave blank for standard pricing
3. **Neighborhood:** Choose pickup/dropoff area
4. **Vehicle Type:** Select appropriate vehicle
5. **Hours:** Enter requested hours (system enforces event minimums)

### Step 4: Review Calculated Price
The system displays:
- Base hourly rate
- Applied multiplier
- Final hourly rate
- Minimum hours required
- Total booking price

### Step 5: Communicate Quote
Use the calculated total to provide accurate quotes to dispatch or directly to clients.

## SEO Keywords Integration

All event names use premium DFW limo service keywords for Nov-Dec 2025:

1. Luxury limousine Dallas
2. Preston Hollow gala transportation
3. Highland Park Christmas lights tour
4. Uptown corporate limo service
5. Private charity ball Dallas
6. Exclusive Dallas fundraiser transportation
7. Dallas Opera gala limo
8. Crystal Charity Ball Dallas
9. Dallas Cowboys premium game transport
10. AT&T Stadium luxury rides
11. SMU football limo packages
12. Winspear Opera House events
13. Dallas Symphony Orchestra gala
14. New Year's Eve upscale party transport
15. Highland Park private club service
16. Folds of Honor gala limo bookings
17. Christmas holiday luxury car service
18. Dallas Mavericks VIP transportation
19. Preston Hollow estate limousine
20. Dallas elite social event rides

## Technical Implementation

### Frontend
- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4 with enhanced neumorphic design
- **State Management:** React useState + localStorage
- **Authentication:** Client-side password protection

### Data Persistence
- **Storage:** Browser localStorage
- **Key:** `texexpress-events`
- **Format:** JSON array of event objects

### Design System
- **Theme:** Dark green, gold, and dark blue palette
- **Effects:** Heavy neumorphic shadows and inset effects
- **Typography:** Geist Sans for UI, consistent with main site
- **Responsive:** Mobile-first design with desktop enhancements

## Security Notes

1. **Password Protection:** Simple password gate for driver access
2. **Client-Side Only:** No sensitive data transmitted to server
3. **Local Storage:** All data stored in browser (per-device)
4. **No PII:** Calculator doesn't store customer information

## Maintenance

### Adding New Events
1. Click "Add Event" button
2. Enter event name (use SEO keywords)
3. Set event score (1-10)
4. Define minimum hours
5. Event auto-saves to localStorage

### Updating Base Rate
Adjust the base rate field to reflect current market pricing. This affects all calculations immediately.

### Deleting Events
Click the trash icon next to any event to remove it from the database.

## Future Enhancements (Phase 2)

- Integration with Cal.com for real-time availability
- Automatic quote generation and SMS delivery
- Historical pricing analytics
- Multi-driver access with individual logins
- Cloud sync for event database
- Stripe integration for deposit collection

## Support

For technical issues or feature requests, contact the development team or refer to the main README.md file.

---

**Last Updated:** October 2025  
**Version:** 1.0.0  
**Status:** Production Ready
