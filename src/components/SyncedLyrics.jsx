import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import marilagLyrics from '../data/lyrics.js'

export default function SyncedLyrics({ shouldPlay, isPlaying }) {
  const [currentTime, setCurrentTime] = useState(0)
  const [activeIndex, setActiveIndex] = useState(-1)
  const intervalRef = useRef(null)
  const startRef = useRef(0)
  const pausedTimeRef = useRef(0)

  useEffect(() => {
    if (!shouldPlay) {
      setCurrentTime(0)
      setActiveIndex(-1)
      pausedTimeRef.current = 0
      return
    }
    if (isPlaying) {
      startRef.current = Date.now() - pausedTimeRef.current * 1000
      if (intervalRef.current) clearInterval(intervalRef.current)
      intervalRef.current = setInterval(() => {
        const elapsed = (Date.now() - startRef.current) / 1000
        setCurrentTime(elapsed)
        if (elapsed > 140) {
          startRef.current = Date.now()
          pausedTimeRef.current = 0
          setCurrentTime(0)
        } else {
          pausedTimeRef.current = elapsed
        }
      }, 250)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [shouldPlay, isPlaying])

  useEffect(() => {
    let idx = -1
    for (let i = 0; i < marilagLyrics.length; i++) {
      if (currentTime >= marilagLyrics[i].time) idx = i
      else break
    }
    if (idx !== activeIndex) setActiveIndex(idx)
  }, [currentTime, activeIndex])

  if (!shouldPlay || activeIndex < 0) return null

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
          background: 'radial-gradient(ellipse 900px 600px at 50% 50%, rgba(255,255,255,0.55) 0%, transparent 70%)',
          opacity: 0.6,
        }}
      />
      <div style={{ position: 'relative', width: 'min(920px, 92vw)', textAlign: 'center', padding: '20px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 18, scale: 0.98, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, scale: 0.99, filter: 'blur(4px)' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(22px, 4.2vw, 42px)',
              fontWeight: 700,
              lineHeight: 1.25,
              color: 'rgba(31, 10, 20, 0.14)',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 24px rgba(255,255,255,0.8)',
            }}
          >
            <div
              style={{
                color: 'rgba(190, 18, 60, 0.11)',
                fontFamily: 'Caveat, cursive',
                fontSize: 'clamp(14px, 2.2vw, 18px)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Marilag • Dionela ♡ — {String(Math.floor(currentTime / 60)).padStart(1, '0')}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
            </div>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(31,10,20,0.16) 0%, rgba(190,18,60,0.16) 50%, rgba(168,85,247,0.14) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 1px 0 rgba(255,255,255,0.6))',
              }}
            >
              {current.text}
            </div>
            {next && (
              <div
                style={{
                  marginTop: 10,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                  fontSize: 'clamp(12px, 1.8vw, 15px)',
                  fontWeight: 600,
                  color: 'rgba(31, 10, 20, 0.07)',
                  letterSpacing: '0.01em',
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
