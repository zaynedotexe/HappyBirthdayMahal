import { motion } from 'framer-motion'

export default function Timeline({ items }) {
  return (
    <section className="section" id="timeline" style={{ paddingTop: 20 }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <span className="section-label">Our Story ❤️</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, marginTop: 14, color: '#1f0a14' }}>How our story unfolded</h2>
        </motion.div>

        <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', paddingLeft: 36 }}>

          <div style={{ position: 'absolute', left: 15, top: 8, bottom: 8, width: 2, background: 'linear-gradient(180deg, #fecdd3, #f9a8d4, #e11d48)', borderRadius: 999, opacity: 0.9 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12, y: 8 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22,1,0.36,1] }}
                style={{
                  position: 'relative',
                  background: it.highlight ? 'linear-gradient(135deg, #e11d48 0%, #ec4899 100%)' : 'white',
                  color: it.highlight ? 'white' : '#1f0a14',
                  border: it.highlight ? 'none' : '1px solid #ffe4e6',
                  borderRadius: 20,
                  padding: '20px 20px 18px 22px',
                  boxShadow: it.highlight ? '0 16px 40px rgba(225,29,72,0.24)' : '0 10px 28px rgba(31,10,20,0.07)',
                }}
              >

                <span
                  style={{
                    position: 'absolute',
                    left: -36,
                    top: 22,
                    width: 20,
                    height: 20,
                    borderRadius: 999,
                    background: it.highlight ? '#e11d48' : 'white',
                    border: `3px solid ${it.highlight ? 'white' : '#e11d48'}`,
                    boxShadow: `0 0 0 6px ${it.highlight ? 'rgba(225,29,72,0.18)' : '#ffe4e6'}`,
                    display: 'grid',
                    placeItems: 'center',
                    fontSize: 10,
                  }}
                >
                  {it.highlight ? '❤️' : ''}
                </span>

                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span
                    style={{
                      background: it.highlight ? 'rgba(255,255,255,0.18)' : '#fff1f2',
                      color: it.highlight ? 'white' : '#be123c',
                      border: it.highlight ? '1px solid rgba(255,255,255,0.3)' : '1px solid #ffe4e6',
                      padding: '4px 10px',
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {it.year} {it.icon}
                  </span>
                  {it.highlight && <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.9 }}>Today</span>}
                </div>
                <h3 style={{ fontSize: 16.5, fontWeight: 800, lineHeight: 1.2, marginBottom: 6 }}>{it.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, opacity: it.highlight ? 0.92 : 1, color: it.highlight ? 'white' : '#6b3245' }}>{it.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
