import { motion } from 'framer-motion'
import { Heart, Quote } from 'lucide-react'

export default function BirthdayMessage({ data }) {
  return (
    <section className="section" style={{ paddingTop: 32 }} id="message">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <span className="section-label"><Heart size={12} fill="#e11d48" color="#e11d48" /> Birthday Message</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, marginTop: 16, color: '#1f0a14', letterSpacing: '-0.02em' }}>{data.title}</h2>
          <div style={{ width: 56, height: 3, borderRadius: 999, background: 'linear-gradient(90deg, #e11d48, #ec4899)', margin: '14px auto 0' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.99 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}
          className="glass"
          style={{ borderRadius: 28, padding: '36px 32px', maxWidth: 760, margin: '0 auto', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: -30, right: -20, fontSize: 120, opacity: 0.06, lineHeight: 1, pointerEvents: 'none' }}><Quote size={120} /></div>
          <Quote size={22} color="#f43f5e" style={{ marginBottom: 14, opacity: 0.9 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'relative' }}>
            {data.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.12 * i, duration: 0.6 }}
                style={{ fontSize: 16.5, lineHeight: 1.82, color: i === data.paragraphs.length - 1 ? '#be123c' : '#3f1a2a', fontWeight: i === data.paragraphs.length - 1 ? 600 : 400 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 22, paddingTop: 18, borderTop: '1px solid #ffe4e6' }}>
            <span style={{ fontFamily: 'Caveat, cursive', fontSize: 22, color: '#e11d48' }}>— for my favorite bading 😭❤️</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
