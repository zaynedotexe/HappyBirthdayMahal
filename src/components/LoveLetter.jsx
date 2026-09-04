import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Heart, Sparkles, X } from 'lucide-react'

export default function LoveLetter({ data }) {
  const [open, setOpen] = useState(false)

  return (
    <section className="section" id="letter" style={{ overflow: 'visible' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 28 }}
        >
          <span className="section-label"><Mail size={12} /> Love Letter</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, marginTop: 16, color: '#1f0a14' }}>{data.title}</h2>
          <p className="font-serif" style={{ fontStyle: 'italic', color: '#7a4a5a', marginTop: 8, fontSize: 16 }}>{data.preview}</p>
        </motion.div>

        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'linear-gradient(180deg, #fff1f2 0%, #ffe4e6 100%)',
              border: '1px solid #fecdd3',
              borderRadius: 20,
              padding: open ? '0 0 24px' : '28px 24px',
              position: 'relative',
              minHeight: open ? 0 : 220,
              boxShadow: '0 20px 60px rgba(225,29,72,0.12)',
              overflow: 'hidden',
            }}
          >

            <AnimatePresence>
              {!open && (
                <motion.div
                  exit={{ rotateX: -92, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 140,
                    background: 'linear-gradient(180deg, #fecdd3 0%, #ffe4e6 100%)',
                    clipPath: 'polygon(0 0, 100% 0, 50% 72%)',
                    transformOrigin: 'top',
                    display: 'grid',
                    placeItems: 'center',
                    paddingBottom: 28,
                  }}
                >
                  <span style={{ width: 56, height: 56, borderRadius: 999, background: 'white', display: 'grid', placeItems: 'center', boxShadow: '0 8px 20px rgba(225,29,72,0.18)', border: '2px solid #ffe4e6' }}>
                    <Heart size={22} fill="#e11d48" color="#e11d48" />
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {!open ? (
              <div style={{ position: 'relative', zIndex: 1, paddingTop: 96, paddingBottom: 8 }}>
                <div style={{ width: 64, height: 64, borderRadius: 999, background: 'white', border: '1px solid #ffe4e6', display: 'grid', placeItems: 'center', margin: '0 auto 14px', boxShadow: '0 8px 24px rgba(225,29,72,0.10)' }}>
                  <Mail size={24} color="#e11d48" />
                </div>
                <p style={{ color: '#7a4a5a', fontSize: 14, marginBottom: 18, fontWeight: 500 }}>A letter sealed with all my kabadingan & love</p>
                <motion.button
                  whileHover={{ scale: 1.03, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setOpen(true)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: 'linear-gradient(135deg, #e11d48, #ec4899)',
                    color: 'white',
                    border: 'none',
                    borderRadius: 999,
                    padding: '13px 24px',
                    fontWeight: 700,
                    fontSize: 14.5,
                    boxShadow: '0 10px 24px rgba(225,29,72,0.24)',
                  }}
                >
                  <Heart size={16} fill="white" /> Open My Letter 💌
                </motion.button>
              </div>
            ) : (
              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.65, ease: [0.22,1,0.36,1], delay: 0.12 }}
                style={{
                  background: '#fffcf7',
                  margin: '18px 14px 0',
                  borderRadius: 16,
                  padding: '28px 24px 24px',
                  textAlign: 'left',
                  position: 'relative',
                  boxShadow: '0 8px 32px rgba(31,10,20,0.08)',
                  border: '1px solid #fde8d8',
                  backgroundImage:
                    'linear-gradient(rgba(225,29,72,0.04) 1px, transparent 1px)',
                  backgroundSize: '100% 28px',
                }}
              >
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close letter"
                  style={{ position: 'absolute', top: 10, right: 10, width: 32, height: 32, borderRadius: 999, border: '1px solid #ffe4e6', background: 'white', display: 'grid', placeItems: 'center' }}
                >
                  <X size={14} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                  <span style={{ width: 28, height: 28, borderRadius: 999, background: '#fff1f2', border: '1px solid #ffe4e6', display: 'grid', placeItems: 'center' }}><Heart size={14} fill="#e11d48" color="#e11d48" /></span>
                  <span className="font-handwritten" style={{ fontSize: 20, color: '#be123c', fontWeight: 700 }}>My dearest Mahal,</span>
                  <Sparkles size={14} color="#ec4899" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {data.content.map((para, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.07 }}
                      style={{
                        fontSize: i === 0 || para.startsWith('—') ? 18 : 15.2,
                        lineHeight: 1.85,
                        color: i === 0 ? '#be123c' : '#3f1a2a',
                        fontFamily: i === 0 ? 'Caveat, cursive' : 'Plus Jakarta Sans, sans-serif',
                        fontWeight: i === 0 ? 700 : 400,
                        fontStyle: para.startsWith('Always') ? 'italic' : 'normal',
                      }}
                    >
                      {para}
                    </motion.p>
                  ))}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="font-handwritten"
                    style={{ fontSize: 22, color: '#e11d48', marginTop: 4 }}
                  >
                    {data.signOff}
                  </motion.div>
                </div>

                <div style={{ position: 'absolute', top: -10, right: 32, width: 64, height: 18, background: 'rgba(255,255,255,0.9)', border: '1px solid #ffe4e6', transform: 'rotate(2deg)', boxShadow: '0 1px 6px rgba(0,0,0,0.06)' }} />
              </motion.div>
            )}

            {open && (
              <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 600px 300px at 50% 0%, rgba(225,29,72,0.06) 0%, transparent 70%)' }} />
            )}
          </motion.div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
              >
                {[...Array(6)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: -18 - i * 8, opacity: 0.5 }}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.8 }}
                    style={{ position: 'absolute', left: `${12 + i * 14}%`, top: -10, fontSize: 16 }}
                  >
                    💗
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
