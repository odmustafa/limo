# Tailwind CSS v4 Migration Guide for Texexpress Transportation

## Overview
This document outlines the comprehensive migration to Tailwind CSS v4 with enhanced neumorphic design system and tw-animate-css plugin integration.

## ✅ Completed Migration Steps

### 1. Package Configuration
- **Tailwind CSS v4**: `tailwindcss@^4.1.9` installed
- **tw-animate-css**: `tw-animate-css@^1.0.3` installed
- **PostCSS**: `postcss@^8.4.49` configured
- **Autoprefixer**: `autoprefixer@^10.4.20` included

### 2. CSS Configuration (globals.css)

#### Import Structure
\`\`\`css
@import "tailwindcss";
@import "tw-animate-css";
\`\`\`

#### Custom Variant
\`\`\`css
@custom-variant dark (&:is(.dark *));
\`\`\`

#### Design Tokens Structure
All design tokens are properly configured in three sections:

**:root Section**
- Base color palette with dark theme (dark green, gold, dark blue)
- HSL color values wrapped properly: `hsl(210, 30%, 8%)`
- Neumorphic shadow variables for depth effects
- Semantic token naming convention

**.dark Section**
- Dark mode color overrides
- Maintains same structure as :root
- Enhanced contrast for dark backgrounds

**@theme inline Section**
- Maps CSS variables to Tailwind utilities
- Font family configuration (Inter, Geist Mono)
- Radius scale configuration
- Color system mapping

### 3. Neumorphic Design System

#### Custom CSS Classes
\`\`\`css
.neumorphic {
  box-shadow: var(--shadow-neumorphic-dark), var(--shadow-neumorphic-light),
    var(--shadow-neumorphic-inset-dark), var(--shadow-neumorphic-inset-light);
}

.neumorphic-pressed {
  box-shadow: inset 8px 8px 16px rgba(0, 0, 0, 0.6),
    inset -4px -4px 8px rgba(255, 255, 255, 0.02);
}

.neumorphic-hover:hover {
  box-shadow: -10px -10px 20px rgba(255, 255, 255, 0.04),
    14px 14px 28px rgba(0, 0, 0, 0.7),
    inset -2px -2px 4px rgba(255, 255, 255, 0.01),
    inset 3px 3px 6px rgba(0, 0, 0, 0.3);
  transform: translateY(-2px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
\`\`\`

#### Shadow Variables
\`\`\`css
--shadow-neumorphic-light: -8px -8px 16px rgba(255, 255, 255, 0.03);
--shadow-neumorphic-dark: 12px 12px 24px rgba(0, 0, 0, 0.6);
--shadow-neumorphic-inset-light: inset -4px -4px 8px rgba(255, 255, 255, 0.02);
--shadow-neumorphic-inset-dark: inset 6px 6px 12px rgba(0, 0, 0, 0.5);
\`\`\`

### 4. Color System

#### Primary Colors
- **Primary**: `hsl(158, 64%, 12%)` - Dark green
- **Secondary/Accent**: `hsl(45, 100%, 51%)` - Gold
- **Background**: `hsl(210, 30%, 8%)` - Dark blue-gray

#### Semantic Tokens
All colors use semantic naming:
- `--color-background`, `--color-foreground`
- `--color-card`, `--color-card-foreground`
- `--color-primary`, `--color-primary-foreground`
- `--color-accent`, `--color-accent-foreground`
- `--color-muted`, `--color-muted-foreground`

### 5. Component Updates

#### Buttons
- Applied `neumorphic` and `neumorphic-hover` classes
- Enhanced depth with shadow system
- Proper color contrast with semantic tokens

#### Cards
- Neumorphic styling on all card components
- Backdrop blur for video overlay sections
- Pressed state for interactive elements

#### Forms & Inputs
- Neumorphic-pressed styling for input fields
- Enhanced focus states with ring colors
- Proper contrast ratios maintained

### 6. Video Backgrounds

#### Implementation
- Hero section: `/videos/hero-bg.webm` (dark green/gold gradient)
- About section: `/videos/about-bg.webm` (dark blue/gold gradient)
- Autoplay, loop, muted, playsInline attributes
- Gradient overlay for content readability

### 7. Contact Information

All contact details updated to match specifications:
- **Phone**: +1 (214) 450-5413
- **WhatsApp**: +1 (214) 450-5413
- **Email**: info@texexpress.com
- **SMS Links**: `sms:+12144505413&body=...`
- **WhatsApp Links**: `https://wa.me/12144505413?text=...`

### 8. Cal.com Integration

Embedded calendar from: `https://cal.com/elgatoai/15min`
- Month view layout
- Primary color: `#0e63c4` (matches brand)
- GDPR banner hidden
- Fullscreen and clipboard-write permissions

## 🎨 Design Enhancements

### Neumorphic Depth
- **Level 1**: Subtle depth for cards and containers
- **Level 2**: Medium depth for buttons and interactive elements
- **Level 3**: Deep inset for pressed/active states
- **Hover States**: Enhanced elevation with smooth transitions

### Typography
- **Font Family**: Inter (sans-serif), Geist Mono (monospace)
- **Line Height**: `leading-relaxed` for better readability
- **Font Weights**: Bold (700) for headings, semibold (600) for emphasis

### Spacing & Layout
- **Radius Scale**: 0.875rem base with sm/md/lg/xl variants
- **Container**: Max-width 1240px with responsive padding
- **Grid Systems**: Responsive breakpoints (md, lg)

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (md)
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Sticky CTA bar: 2 columns on mobile, 4 on desktop
- Navigation: Hamburger menu with neumorphic styling
- Cards: Single column on mobile, grid on larger screens

## 🚀 Performance Optimizations

### Video Loading
- Poster images for initial load
- Lazy loading with `loading="eager"` for above-fold content
- WebM format for optimal compression

### CSS Optimization
- No @layer base wrapping (Tailwind v4 best practice)
- Inline @theme configuration
- Minimal custom CSS (only neumorphic utilities)

## 🔧 Additional Features

### tw-animate-css Integration
- Fade-in animations on hero elements
- Pulse animation on experience badge
- Smooth transitions on hover states

### Accessibility
- Proper ARIA labels on interactive elements
- Semantic HTML structure
- Sufficient color contrast ratios
- Focus states on all interactive elements

## 📋 Migration Checklist

- [x] Install Tailwind CSS v4
- [x] Install tw-animate-css plugin
- [x] Configure globals.css with proper structure
- [x] Remove @layer base wrapping
- [x] Wrap HSL channel values in hsl()
- [x] Implement neumorphic design system
- [x] Update all components with semantic tokens
- [x] Add video backgrounds
- [x] Update contact information
- [x] Integrate Cal.com calendar
- [x] Add WhatsApp functionality
- [x] Generate luxury transportation images
- [x] Test responsive design
- [x] Verify accessibility standards

## 🎯 Key Differences from Tailwind v3

1. **No tailwind.config.js**: Configuration in CSS via @theme
2. **@import instead of @tailwind**: New import syntax
3. **@custom-variant**: New way to define variants
4. **Inline @theme**: Theme configuration in CSS
5. **No @layer base**: Direct CSS without layer wrapping

## 📞 Support & Maintenance

For questions or issues with the Tailwind v4 migration:
- Review this documentation
- Check Tailwind CSS v4 official docs
- Verify semantic token usage
- Test neumorphic classes in different contexts

---

**Last Updated**: Current build
**Tailwind Version**: 4.1.9
**tw-animate-css Version**: 1.0.3
