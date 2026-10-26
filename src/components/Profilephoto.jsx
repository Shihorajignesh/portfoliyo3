import { useState } from 'react'
import { motion } from 'framer-motion'
import useMouseTilt from '../hooks/useMouseTilt'
import { profile } from '../data/portfolioData'

// Photo: animated border + glow + hover tilt + floating. Photo બદલવા: public/images/jignesh-profile.jpg replace કરો.
export default function ProfilePhoto({ className = '' }) {
  const [failed, setFailed] = useState(false)
  const { ref, style, handlers } = useMouseTilt({ max: 12 })

  return (
    <div className={`perspective-1000 ${className}`}>
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="h-full w-full"
      >
        <motion.div
          ref={ref}
          {...handlers}
          style={{ ...style, transformStyle: 'preserve-3d' }}
          className="relative h-full w-full rounded-full"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-full bg-linear-to-br from-brand-orange/40 via-brand-violet/30 to-brand-cyan/20 blur-2xl"
          />
          {/* ફરતી gradient border */}
          <div className="relative h-full w-full overflow-hidden rounded-full p-0.75">
            <span
              aria-hidden="true"
              className="absolute -inset-1/2 animate-spin-slow bg-[conic-gradient(from_0deg,#ff7a1a,#ffb020,#8b5cf6,#22d3ee,#ff7a1a)]"
            />
            <div className="relative h-full w-full overflow-hidden rounded-full bg-ink-900">
              {failed ? (
                // Photo ન મળે તો initials બતાવે (page તૂટતું નથી)
                <div className="grid h-full w-full place-items-center bg-linear-to-br from-ink-800 to-ink-950">
                  <span className="text-gradient font-display text-6xl font-bold">JS</span>
                </div>
              ) : (
                <img
                  src={profile.photo}
                  alt={profile.photoAlt}
                  width="600"
                  height="600"
                  loading="eager"
                  decoding="async"
                  onError={() => setFailed(true)}
                  className="h-full w-full object-cover object-top"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}