import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import siteConfig from './config/siteConfig.js'

import OpeningScreen from './components/OpeningScreen.jsx'
import FloatingPhotos from './components/FloatingPhotos.jsx'
import PhotoViewer from './components/PhotoViewer.jsx'
import Hero from './components/Hero.jsx'
import BirthdayMessage from './components/BirthdayMessage.jsx'
import LoveLetter from './components/LoveLetter.jsx'
import BadingSection from './components/BadingSection.jsx'
import Memories from './components/Memories.jsx'
import Timeline from './components/Timeline.jsx'
import Reasons from './components/Reasons.jsx'
import InteractiveQuestion from './components/InteractiveQuestion.jsx'
import BirthdaySurprise from './components/BirthdaySurprise.jsx'
import MusicPlayer from './components/MusicPlayer.jsx'
import SyncedLyrics from './components/SyncedLyrics.jsx'
import FinalSection from './components/FinalSection.jsx'

export default function App() {
  const [entered, setEntered] = useState(false)
  const [viewerIndex, setViewerIndex] = useState(null)
  const [celebrating, setCelebrating] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)

  useEffect(() => {
    if (!entered) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
  }, [entered])

  const handleEnter = () => {
    setEntered(true)

    setTimeout(() => {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3400)
    }, 600)
  }

  const handleCelebrate = () => {
    setCelebrating(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 4200)
  }

  const nextPhoto = () => setViewerIndex((i) => (i + 1) % siteConfig.photos.length)
  const prevPhoto = () => setViewerIndex((i) => (i - 1 + siteConfig.photos.length) % siteConfig.photos.length)

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflowX: 'hidden' }}>

      <AnimatePresence>
        {!entered && (
          <OpeningScreen config={siteConfig} onOpen={handleEnter} isOpen={entered} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showConfetti && (
          <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 70, overflow: 'hidden' }}>
            {[...Array(siteConfig.animation?.confettiCount || 64)].map((_, i) => {
              const left = (i * 13.7) % 100
              const delay = (i % 9) * 0.12
              const dur = 2.2 + (i % 5) * 0.45
              const size = 14 + (i % 4) * 5
              const emoji = ['🎉','🎂','💖','✨','🌸','💝','🎈','💗'][i % 8]
              const isDot = i % 3 === 0
              return (
                <motion.span
                  key={i}
                  initial={{ y: -30, opacity: 0, rotate: 0, x: `${left}vw` }}
                  animate={{ y: '110vh', opacity: [0,1,1,0], rotate: 360 + i * 20 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay, duration: dur, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    top: -20,
                    fontSize: isDot ? 8 : size,
                    lineHeight: 1,
                  }}
                >
                  {isDot ? (
                    <span style={{ display: 'block', width: 8, height: 8, borderRadius: 999, background: ['#e11d48','#ec4899','#f59e0b','#a855f7','#06b6d4'][i % 5] }} />
                  ) : (
                    emoji
                  )}
                </motion.span>
              )
            })}
          </div>
        )}
      </AnimatePresence>

      <SyncedLyrics shouldPlay={entered} isPlaying={musicPlaying} />

      <div aria-hidden style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden', opacity: entered ? 1 : 0, transition: 'opacity 1s ease' }}>
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${8 + i * 9}%`,
              bottom: -30,
              fontSize: 12 + (i % 3) * 4,
              opacity: 0.07,
              animation: `heartFloat ${12 + i}s linear infinite`,
              animationDelay: `${i * 1.1}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: entered ? 1 : 0 }}
        transition={{ duration: 0.9, ease: [0.22,1,0.36,1] }}
        style={{ position: 'relative', zIndex: 1, pointerEvents: entered ? 'auto' : 'none' }}
      >

        <div style={{ position: 'relative', overflow: 'visible' }}>

          <div className="floating-desktop-wrap" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 2 }}>
            <FloatingPhotos photos={siteConfig.photos} onSelect={(i) => setViewerIndex(i)} desktopOnly />
          </div>

          <div style={{ position: 'relative', zIndex: 3 }}>
            <Hero config={siteConfig} />
          </div>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 3 }}>
          <div className="mobile-strip">
            <div style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '6px 4px 16px', scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}>
              {siteConfig.photos.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setViewerIndex(idx)}
                  style={{
                    flex: '0 0 168px',
                    scrollSnapAlign: 'center',
                    background: 'white',
                    borderRadius: 16,
                    overflow: 'hidden',
                    border: '1px solid #ffe4e6',
                    boxShadow: '0 8px 24px rgba(31,10,20,0.10)',
                    textAlign: 'left',
                    padding: 0,
                    cursor: 'pointer',
                  }}
                  aria-label={p.caption}
                >
                  <div style={{ height: 170, overflow: 'hidden', position: 'relative' }}>
                    <img src={p.image} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                    <span style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(255,255,255,0.92)', borderRadius: 999, width: 24, height: 24, display: 'grid', placeItems: 'center', fontSize: 12 }}>❤️</span>
                  </div>
                  <div style={{ padding: '10px 12px 12px' }}>
                    <div style={{ fontFamily: 'Caveat, cursive', fontSize: 14, fontWeight: 700, color: '#4a1020', lineHeight: 1.2 }}>{p.caption}</div>
                    <div style={{ fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9a6a7a', fontWeight: 700, marginTop: 2 }}>{p.date}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <style>{`
            .mobile-strip { display: none; }
            @media (max-width: 900px) {
              .mobile-strip { display: block; }
              .floating-desktop-wrap { display: none !important; }
            }
            @media (min-width: 901px) {
              .mobile-strip { display: none !important; }
            }
          `}</style>
        </div>

        <BirthdayMessage data={siteConfig.messages.birthdayMessage} />
        <LoveLetter data={siteConfig.messages.loveLetter} />
        <BadingSection messages={siteConfig.badingMessages} />
        <Memories memories={siteConfig.memories} onSelectPhoto={(i) => setViewerIndex(i)} />
        <Timeline items={siteConfig.timeline} />
        <Reasons reasons={siteConfig.reasons} />
        <InteractiveQuestion data={siteConfig.interactiveQuestion} />
        <BirthdaySurprise data={siteConfig.messages.surprise} onCelebrate={handleCelebrate} />
        <FinalSection data={siteConfig.messages.finalMessage} />

        <nav
          aria-label="Section navigation"
          style={{
            position: 'fixed',
            right: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            background: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(12px)',
            border: '1px solid #ffe4e6',
            padding: '10px 8px',
            borderRadius: 999,
            boxShadow: '0 8px 24px rgba(31,10,20,0.08)',
          }}
          className="side-dots"
        >
          {[
            { id: 'hero', label: 'Top' },
            { id: 'message', label: 'Message' },
            { id: 'letter', label: 'Letter' },
            { id: 'memories', label: 'Memories' },
            { id: 'timeline', label: 'Story' },
            { id: 'reasons', label: 'Reasons' },
            { id: 'final', label: 'Final' },
          ].map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-label={`Go to ${s.label}`}
              style={{ width: 8, height: 8, borderRadius: 999, background: '#fecdd3', display: 'block', transition: 'all 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#e11d48')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#fecdd3')}
            />
          ))}
          <style>{`@media (max-width: 900px) { .side-dots { display: none !important; } }`}</style>
        </nav>
      </motion.div>

      <PhotoViewer photos={siteConfig.photos} index={viewerIndex} onClose={() => setViewerIndex(null)} onNext={nextPhoto} onPrev={prevPhoto} />
      <MusicPlayer shouldPlay={entered} onPlayingChange={setMusicPlaying} />

      <AnimatePresence>
        {celebrating && showConfetti && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: 'fixed', inset: 0, background: 'radial-gradient(ellipse 900px 700px at 50% 30%, rgba(225,29,72,0.08) 0%, transparent 62%)', pointerEvents: 'none', zIndex: 65 }} />
        )}
      </AnimatePresence>
    </div>
  )
}
