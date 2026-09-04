import { motion } from 'framer-motion'
import { Heart, Sparkles, ArrowDown } from 'lucide-react'

export default function Hero({ config }) {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '88vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '56px 0 40px',
        overflow: 'visible',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid #ffe4e6', padding: '7px 16px', borderRadius: 999, boxShadow: '0 8px 24px rgba(225,29,72,0.08)', marginBottom: 18 }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 999, background: '#f43f5e', boxShadow: '0 0 0 6px #ffe4e6' }} />
          <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#be123c' }}>Today is your day</span>
          <Heart size={14} fill="#f43f5e" color="#f43f5e" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-handwritten"
          style={{ fontSize: 'clamp(18px, 3vw, 24px)', color: '#be123c', marginBottom: 10 }}
        >
          {config.birthday.heroTitle}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.75, ease: [0.22,1,0.36,1] }}
          className="font-display"
          style={{ fontSize: 'clamp(44px, 8vw, 78px)', fontWeight: 700, lineHeight: 0.95, letterSpacing: '-0.03em', color: '#1f0a14', marginBottom: 18 }}
        >
          Happy <span className="gradient-text">Birthday!</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.28, duration: 0.7 }}
          className="glass"
          style={{
            maxWidth: 640,
            margin: '0 auto',
            borderRadius: 24,
            padding: '22px 24px',
            textAlign: 'left',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg, #e11d48, #ec4899, #a855f7)', opacity: 0.9 }} />
          <p style={{ color: '#4a2a36', fontSize: 'clamp(14.5px, 2.2vw, 16px)', lineHeight: 1.75 }}>{config.birthday.heroParagraph}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16, paddingTop: 16, borderTop: '1px solid #ffe4e6' }}>
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=100&auto=format&fit=crop&q=60" alt="" style={{ width: 36, height: 36, borderRadius: 999, objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }} />
            <div style={{ fontSize: 12.5, lineHeight: 1.3 }}>
              <div style={{ fontWeight: 800, color: '#1f0a14' }}>From Mahal ❤️</div>
              <div style={{ color: '#9a6a7a', display: 'flex', alignItems: 'center', gap: 4 }}><Sparkles size={12} /> Always you, always us</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          style={{ marginTop: 26, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#9a6a7a', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
        >
          Scroll to unwrap your gift
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }} style={{ width: 32, height: 32, borderRadius: 999, background: 'white', border: '1px solid #ffe4e6', display: 'grid', placeItems: 'center', boxShadow: '0 6px 16px rgba(225,29,72,0.08)' }}>
            <ArrowDown size={16} color="#e11d48" />
          </motion.span>
        </motion.div>
      </div>
    </section>
  )
}
