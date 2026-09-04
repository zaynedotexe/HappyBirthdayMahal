import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BadingSection({ messages }) {
  const [idx, setIdx] = useState(0)
  const [clicked, setClicked] = useState(0)
  const [burst, setBurst] = useState(false)

  const handleClick = () => {
    setIdx((i) => (i + 1) % messages.length)
    setClicked((c) => c + 1)
    setBurst(true)
    setTimeout(() => setBurst(false), 700)
  }

  return (
    <section className="section" id="bading" style={{ paddingTop: 20 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 22 }}
        >
          <h2 className="font-display" style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 700, color: '#1f0a14' }}>Okay, Enough With The Sweet Stuff…</h2>
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            style={{ marginTop: 10 }}
          >
            <span
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #e11d48, #a855f7)',
                color: 'white',
                padding: '10px 22px',
                borderRadius: 999,
                fontWeight: 900,
                fontSize: 'clamp(20px, 5vw, 30px)',
                letterSpacing: '-0.02em',
                boxShadow: '0 12px 32px rgba(225,29,72,0.22)',
                transform: 'rotate(-1deg)',
              }}
            >
              BADING KA PA RIN 😭😭😭
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass"
          style={{ maxWidth: 560, margin: '0 auto', borderRadius: 28, padding: '26px 22px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
        >
          {burst && (
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
              {[...Array(14)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ scale: 0, x: '50%', y: '50%', opacity: 1 }}
                  animate={{
                    scale: 1,
                    x: `${(Math.random() - 0.5) * 360}px`,
                    y: `${(Math.random() - 0.5) * 280}px`,
                    opacity: 0,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  style={{ position: 'absolute', left: '50%', top: '50%', fontSize: 18 }}
                >
                  {['😭','😂','❤️','✨','🫶','💖'][i % 6]}
                </motion.span>
              ))}
            </div>
          )}

          <p style={{ color: '#7a4a5a', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>
            {clicked === 0 ? 'Go on, i-click mo. 😏' : `Bading counter: ${clicked} 😭`}
          </p>

          <div style={{ minHeight: 64, display: 'grid', placeItems: 'center', marginBottom: 18 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ y: 12, opacity: 0, scale: 0.96, rotate: -1 }}
                animate={{ y: 0, opacity: 1, scale: 1, rotate: 0 }}
                exit={{ y: -10, opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.38, ease: [0.22,1,0.36,1] }}
                style={{
                  background: 'linear-gradient(135deg, #fff1f2, #fce7f3)',
                  border: '1px solid #ffe4e6',
                  padding: '14px 18px',
                  borderRadius: 16,
                  fontWeight: 700,
                  color: '#4a1020',
                  fontSize: 'clamp(14px, 2.6vw, 16px)',
                  boxShadow: '0 8px 20px rgba(225,29,72,0.08)',
                }}
              >
                “{messages[idx]}”
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleClick}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'white',
              border: '1.5px solid #fecdd3',
              color: '#e11d48',
              borderRadius: 999,
              padding: '12px 22px',
              fontWeight: 800,
              fontSize: 14.5,
              boxShadow: '0 8px 20px rgba(225,29,72,0.10)',
            }}
          >
            Excuse me?! 😭
          </motion.button>

          <p style={{ marginTop: 14, fontSize: 12.5, color: '#9a6a7a' }}>
            Inside joke lang natin ‘to — ikaw lang nakakaintindi. 🫶
          </p>
        </motion.div>
      </div>
    </section>
  )
}
