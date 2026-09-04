import { motion } from 'framer-motion'

export default function FinalSection({ data }) {
  return (
    <section
      id="final"
      className="section"
      style={{
        background: 'linear-gradient(180deg, transparent 0%, #fff1f2 40%, #ffe4e6 100%)',
        paddingTop: 64,
        paddingBottom: 48,
        overflow: 'hidden',
        position: 'relative',
      }}
    >

      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: 999, background: 'radial-gradient(circle, rgba(225,29,72,0.06) 0%, transparent 70%)', top: -120, left: '10%' }} />
        <div style={{ position: 'absolute', width: 700, height: 500, borderRadius: 999, background: 'radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%)', bottom: -100, right: -80 }} />
      </div>

      <div className="container" style={{ textAlign: 'center', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: 640, margin: '0 auto' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'white', border: '1px solid #ffe4e6', padding: '6px 14px', borderRadius: 999, boxShadow: '0 8px 24px rgba(225,29,72,0.08)', marginBottom: 20 }}>
            <span style={{ fontSize: 12 }}>💌</span>
            <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#be123c' }}>Final words</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
            {data.lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22,1,0.36,1] }}
                style={{
                  fontSize: i === 0 ? 'clamp(22px, 4.5vw, 32px)' : 16,
                  fontWeight: i === 0 ? 700 : 500,
                  color: i === 0 ? '#1f0a14' : '#4a2a36',
                  fontFamily: i === 0 ? 'Playfair Display, serif' : 'Plus Jakarta Sans, sans-serif',
                  lineHeight: 1.5,
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.7, ease: [0.22,1,0.36,1] }}
            style={{ width: 80, height: 2, borderRadius: 999, background: 'linear-gradient(90deg, transparent, #e11d48, transparent)', margin: '0 auto 32px', transformOrigin: 'center' }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
            {data.coda.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.10, duration: 0.6 }}
                className={i <= 1 ? 'font-display' : 'font-handwritten'}
                style={{
                  fontSize: i === 0 ? 'clamp(20px, 4vw, 28px)' : i === 1 ? 'clamp(18px, 3.5vw, 22px)' : i === data.coda.length - 1 ? 24 : 19,
                  fontWeight: i === data.coda.length - 1 ? 700 : 600,
                  color: i === data.coda.length - 1 ? '#e11d48' : i <= 1 ? '#1f0a14' : '#7a2340',
                  lineHeight: 1.25,
                }}
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'white', border: '1px solid #ffe4e6', padding: '10px 16px', borderRadius: 999, boxShadow: '0 8px 24px rgba(225,29,72,0.08)', color: '#9a6a7a', fontSize: 12, fontWeight: 600 }}
          >
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#f43f5e', animation: 'pulseGlow 2s infinite' }} />
            Made with kabadingan, kakulitan, and so much love — always you. ❤️
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
            style={{ marginTop: 22, fontSize: 11, color: '#b08a96', letterSpacing: '0.06em' }}
          >
            © {new Date().getFullYear()} — For Mahal, with love. P.S. Bading ka pa rin 😭❤️
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
