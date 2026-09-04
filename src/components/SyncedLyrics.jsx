import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import marilagLyrics from '../data/lyrics.js'

export default function SyncedLyrics({ shouldPlay, isPlaying, currentTime: propTime }) {
  const [internalTime, setInternalTime] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const currentTime = propTime != null ? propTime : internalTime

  useEffect(() => {
    if (propTime != null) return
    if (!shouldPlay || !isPlaying) return
    let raf
    let start = Date.now() - internalTime * 1000
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000
      if (elapsed > 140) {
        start = Date.now()
        setInternalTime(0)
      } else {
        setInternalTime(elapsed)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [shouldPlay, isPlaying, propTime, internalTime])

  useEffect(() => {
    if (!shouldPlay) {
      setActiveIndex(-1)
      return
    }
    let idx = -1
    for (let i = 0; i < marilagLyrics.length; i++) {
      if (currentTime >= marilagLyrics[i].time) idx = i
      else break
    }
    if (idx !== activeIndex) setActiveIndex(idx)
  }, [currentTime, activeIndex, shouldPlay])

  useEffect(() => {
    if (!shouldPlay) setInternalTime(0)
  }, [shouldPlay])

  if (!shouldPlay || !isPlaying || activeIndex < 0) return null

  const current = marilagLyrics[activeIndex]
  const next = marilagLyrics[activeIndex + 1]

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 900px 600px at 50% 50%, rgba(255,255,255,0.52) 0%, transparent 72%)',
          opacity: 0.7,
        }}
      />
      <div style={{ position: 'relative', width: 'min(920px, 92vw)', textAlign: 'center', padding: '20px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, scale: 0.97, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, scale: 0.99, filter: 'blur(6px)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(22px, 4.2vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
            }}
          >
            <div
              style={{
                color: 'rgba(190, 18, 60, 0.14)',
                fontFamily: 'Caveat, cursive',
                fontSize: 'clamp(13px, 2vw, 16px)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Marilag • Dionela ♡ — {String(Math.floor(currentTime / 60)).padStart(1, '0')}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(31,10,20,0.18) 0%, rgba(190,18,60,0.18) 50%, rgba(168,85,247,0.16) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.7))',
              }}
            >
              {current.text}
            </div>
            {next && (
              <div
                style={{
                  marginTop: 12,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.7vw, 14px)',
                  fontWeight: 600,
                  color: 'rgba(31, 10, 20, 0.09)',
                  letterSpacing: '0.02em',
                }}
              >
                {next.text}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
