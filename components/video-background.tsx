"use client"

interface VideoBackgroundProps {
  src: string
  className?: string
  overlay?: boolean
}

export function VideoBackground({ src, className = "", overlay = true }: VideoBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video autoPlay loop muted playsInline className="h-full w-full object-cover">
        <source src={src} type="video/webm" />
      </video>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      )}
    </div>
  )
}
