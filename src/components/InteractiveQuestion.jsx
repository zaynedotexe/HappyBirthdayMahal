import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function InteractiveQuestion({ data }) {
  const [phase, setPhase] = useState(0) // 0 question, 1 wrong, 2 reveal
  if (!data?.enabled) return null

  return (
    <section className="section" id="question" style={{ paddingTop: 10 }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ maxWidth: 640, margin: '0 auto', borderRadius: 28, padding: '34px 24px', position: 'relative', overflow: 'hidden' }}
        >
          {/* glow */}
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 500px 300px at 50% 0%, rgba(225,29,72,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <AnimatePresence mode="wait">
            {phase === 0 && (
              <motion.div key="q" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.45 }}>
                <h2 className="font-display" style={{ fontSize: 'clamp(22px, 4.5vw, 30px)', fontWeight: 700, color: '#1f0a14', marginBottom: 18 }}>{data.question}</h2>
                <motion.button
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPhase(1)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'linear-gradient(135deg, #e11d48, #ec4899)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 999,
                    padding: '14px 28px',
                    fontWeight: 800,
                    fontSize: 15,
                    boxShadow: '0 12px 28px rgba(225,29,72,0.24)',
                  }}
                >
                  {data.buttonText} <Heart size={16} fill="white" />
                </motion.button>
              </motion.div>
            )}

            {phase === 1 && (
              <motion.div key="w" initial={{ opacity: 0, scale: 0.9, rotate: -1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ type: 'spring', stiffness: 300, damping: 18 }}>
                <div style={{ fontSize: 32, marginBottom: 8 }}>😭</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, color: '#be123c', marginBottom: 8 }}>{data.wrongAnswer}</h3>
                <p style={{ color: '#7a4a5a', marginBottom: 18 }}>Nice try, bading. But…</p>
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setPhase(2)}
                  style={{ background: 'white', border: '1.5px solid #fecdd3', color: '#e11d48', borderRadius: 999, padding: '12px 22px', fontWeight: 800 }}
                >
                  Eh ano ba? 🥺
                </motion.button>
              </motion.div>
            )}

            {phase === 2 && (
              <motion.div key="r" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                {/* burst */}
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                  {[...Array(18)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ y: 40, opacity: 0, scale: 0.7, x: `${50 + (Math.random()-0.5)*40}%` }}
                      animate={{ y: -30 - Math.random()*60, opacity: [0,1,0], scale: 1 }}
                      transition={{ delay: i * 0.06, duration: 1.2, ease: 'easeOut' }}
                      style={{ position: 'absolute', bottom: 20, fontSize: 18 + Math.random()*8 }}
                    >
                      {['💖','💗','✨','🥺','🫶','💝'][i % 6]}
                    </motion.span>
                  ))}
                </div>

                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 260 }} style={{ width: 56, height: 56, borderRadius: 999, background: 'linear-gradient(135deg, #e11d48, #ec4899)', display: 'grid', placeItems: 'center', margin: '0 auto 14px', boxShadow: '0 10px 24px rgba(225,29,72,0.22)' }}>
                  <Heart size={26} fill="white" color="white" />
                </motion.div>
                <h3 className="font-display" style={{ fontSize: 22, fontWeight: 700, color: '#1f0a14', marginBottom: 8 }}>{data.reveal}</h3>
                <p style={{ color: '#6b3245', fontSize: 15, lineHeight: 1.65, maxWidth: 520, margin: '0 auto' }}>{data.subReveal}</p>
                <button onClick={() => setPhase(0)} style={{ marginTop: 16, background: 'transparent', border: 'none', color: '#9a6a7a', fontSize: 12, fontWeight: 700, textDecoration: 'underline', textUnderlineOffset: 3 }}>Ask me again 🫶</button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
