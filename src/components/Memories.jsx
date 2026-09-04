import { motion } from 'framer-motion'

export default function Memories({ memories, onSelectPhoto }) {
  return (
    <section className="section" id="memories">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: 28 }}
        >
          <span className="section-label">📸 Our Memories</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, marginTop: 14, color: '#1f0a14' }}>Our Little Memories 📸❤️</h2>
          <p style={{ color: '#7a4a5a', marginTop: 8, maxWidth: 560, marginInline: 'auto', fontSize: 15 }}>Every photo has a story — and every story has you. Tap any memory to see it bigger.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 18 }}>
          {memories.map((m, i) => (
            <motion.article
              key={m.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => onSelectPhoto?.(i)}
              style={{
                background: 'white',
                borderRadius: 22,
                overflow: 'hidden',
                border: '1px solid #ffe4e6',
                boxShadow: '0 10px 36px rgba(31,10,20,0.08)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: 210, overflow: 'hidden', background: '#fff1f2' }}>
                <img src={m.image} alt={m.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 45%, rgba(31,10,20,0.42) 100%)' }} />
                <span style={{ position: 'absolute', bottom: 12, left: 14, right: 14, color: 'white', fontFamily: 'Caveat, cursive', fontSize: 16, fontWeight: 700, textShadow: '0 1px 10px rgba(0,0,0,0.35)', lineHeight: 1.1 }}>{m.title}</span>
                <span style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(255,255,255,0.92)', padding: '5px 10px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#be123c', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' }}>{m.date}</span>
              </div>
              <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 10 }}>
                <p style={{ color: '#4a2a36', fontSize: 14.3, lineHeight: 1.65 }}>{m.description}</p>
                <div style={{ marginTop: 'auto', background: '#fff1f2', border: '1px dashed #fecdd3', borderRadius: 12, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 13 }}>💬</span>
                  <span style={{ fontFamily: 'Caveat, cursive', fontSize: 15, color: '#7a2340', fontWeight: 600 }}>{m.funnyCaption}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
