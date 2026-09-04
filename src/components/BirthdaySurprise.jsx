import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gift, Sparkles, PartyPopper } from 'lucide-react'

export default function BirthdaySurprise({ data, onCelebrate }) {
  const [open, setOpen] = useState(false)

  const handle = () => {
    setOpen(true)
    onCelebrate?.()
  }

  return (
    <section className="section" id="surprise" style={{ paddingTop: 10 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          {!open ? (
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={handle}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #1f0a14 0%, #3a1028 55%, #5a1040 100%)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 28,
                padding: '34px 24px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(31,10,20,0.24)',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 600px 400px at 20% 0%, rgba(236,72,153,0.18) 0%, transparent 60%), radial-gradient(ellipse 500px 300px at 90% 100%, rgba(225,29,72,0.16) 0%, transparent 60%)' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', display: 'grid', placeItems: 'center', margin: '0 auto 14px', backdropFilter: 'blur(8px)' }}>
                  <Gift size={26} color="white" />
                </div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, marginBottom: 6 }}>One More Surprise 🎁</h3>
                <p style={{ opacity: 0.82, fontSize: 14.5, marginBottom: 18 }}>I saved the best for last. Ready, Mahal?</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', color: '#1f0a14', padding: '12px 22px', borderRadius: 999, fontWeight: 800, fontSize: 14 }}>
                  <Sparkles size={16} color="#e11d48" /> Open Surprise ✨
                </span>
              </div>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
              style={{
                background: 'linear-gradient(165deg, #1f0a14 0%, #2a1020 35%, #3a1028 100%)',
                color: 'white',
                borderRadius: 28,
                padding: '36px 24px 28px',
                position: 'relative',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 24px 80px rgba(31,10,20,0.36)',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 700px 500px at 50% -10%, rgba(236,72,153,0.22) 0%, transparent 62%), radial-gradient(ellipse 500px 400px at 90% 100%, rgba(225,29,72,0.16) 0%, transparent 60%)' }} />
              {/* confetti burst overlay inside card */}
              <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                {[...Array(22)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: -20, opacity: 0, rotate: 0, x: `${(i * 4.6) % 100}%` }}
                    animate={{ y: 420, opacity: [0,1,1,0], rotate: 360 + i * 40 }}
                    transition={{ delay: i * 0.04, duration: 1.8, ease: 'easeOut' }}
                    style={{ position: 'absolute', top: -10, fontSize: 16 }}
                  >
                    {['🎉','✨','💖','🎂','🌸','💝'][i % 6]}
                  </motion.span>
                ))}
              </div>

              <div style={{ position: 'relative' }}>
                <motion.div initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }} style={{ width: 64, height: 64, borderRadius: 20, background: 'linear-gradient(135deg, #e11d48, #ec4899)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', boxShadow: '0 12px 32px rgba(225,29,72,0.32)' }}>
                  <PartyPopper size={28} color="white" />
                </motion.div>
                <motion.h3 initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.22 }} className="font-display" style={{ fontSize: 'clamp(24px, 5vw, 34px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 10 }}>{data.title}</motion.h3>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }} style={{ fontSize: 16, opacity: 0.9, marginBottom: 8 }}>{data.subtitle}</motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.44 }} style={{ fontSize: 14.5, opacity: 0.78, lineHeight: 1.65, maxWidth: 520, margin: '0 auto 18px' }}>{data.description}</motion.p>
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56 }} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.18)', padding: '10px 16px', borderRadius: 999, fontSize: 13, fontWeight: 700, backdropFilter: 'blur(8px)' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: '#4ade80', boxShadow: '0 0 0 6px rgba(74,222,128,0.18)' }} /> Celebration mode: ON 🎉
                </motion.div>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
