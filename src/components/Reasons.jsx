import { motion } from 'framer-motion'

export default function Reasons({ reasons }) {
  return (
    <section className="section" id="reasons">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <span className="section-label">Reasons ❤️</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, marginTop: 14, color: '#1f0a14' }}>Reasons Why I Love My Bading ❤️</h2>
          <p style={{ color: '#7a4a5a', marginTop: 8, fontSize: 15 }}>Just a few out of a million. ✨</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.05, duration: 0.55, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -5, scale: 1.015 }}
              style={{
                background: 'white',
                borderRadius: 22,
                padding: '22px 20px',
                border: '1px solid #ffe4e6',
                boxShadow: '0 10px 30px rgba(31,10,20,0.07)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -18, right: -18, width: 90, height: 90, borderRadius: 999, background: `${r.color}12`, pointerEvents: 'none' }} />
              <div style={{ width: 46, height: 46, borderRadius: 14, background: `${r.color}14`, border: `1px solid ${r.color}22`, display: 'grid', placeItems: 'center', fontSize: 20, marginBottom: 14 }}>{r.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1f0a14', marginBottom: 6, letterSpacing: '-0.01em' }}>{r.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: '#6b3245' }}>{r.description}</p>
              <div style={{ marginTop: 14, width: 36, height: 3, borderRadius: 999, background: r.color, opacity: 0.9 }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
