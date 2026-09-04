import { motion } from 'framer-motion'
import { Gift, Heart, Sparkles } from 'lucide-react'

export default function OpeningScreen({ config, onOpen, isOpen }) {
  if (isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflow: 'hidden',
        background:
          'radial-gradient(ellipse 900px 700px at 20% 0%, #ffe4e6 0%, transparent 60%), radial-gradient(ellipse 800px 600px at 85% 10%, #fce7f3 0%, transparent 62%), radial-gradient(ellipse 700px 500px at 50% 100%, #fff1f2 0%, transparent 60%), linear-gradient(180deg, #fffafb 0%, #fff1f2 55%, #ffe4e6 100%)',
      }}
    >

      <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(14)].map((_, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              left: `${6 + i * 7}%`,
              bottom: `-40px`,
              fontSize: `${14 + (i % 4) * 6}px`,
              opacity: 0.18 - (i % 3) * 0.03,
              animation: `heartFloat ${9 + i * 0.7}s linear infinite`,
              animationDelay: `${i * 0.65}s`,
            }}
          >
            {['💗','💖','💝','🌸'][i % 4]}
          </span>
        ))}

        <div style={{ position: 'absolute', width: 520, height: 520, borderRadius: 999, background: 'radial-gradient(circle, rgba(225,29,72,0.08) 0%, transparent 70%)', top: -120, left: -80 }} />
        <div style={{ position: 'absolute', width: 640, height: 640, borderRadius: 999, background: 'radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)', bottom: -200, right: -120 }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          width: 'min(560px, 100%)',
          textAlign: 'center',
        }}
      >

        <div
          className="glass"
          style={{
            borderRadius: 32,
            padding: '44px 32px 36px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 140, height: 3, background: 'linear-gradient(90deg, transparent, #f43f5e, transparent)', borderRadius: 999, opacity: 0.6 }} />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6, type: 'spring', stiffness: 260 }}
            style={{
              width: 72,
              height: 72,
              margin: '0 auto 20px',
              borderRadius: 20,
              background: 'linear-gradient(135deg, #e11d48, #ec4899)',
              display: 'grid',
              placeItems: 'center',
              boxShadow: '0 12px 28px rgba(225,29,72,0.28), 0 4px 12px rgba(225,29,72,0.18)',
            }}
          >
            <Gift size={32} color="white" strokeWidth={1.9} />
          </motion.div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ width: 22, height: 1, background: '#fecdd3', borderRadius: 999 }} />
            <span style={{ fontSize: 11, letterSpacing: '0.18em', fontWeight: 800, color: '#e11d48', textTransform: 'uppercase' }}>A little world, just for you</span>
            <span style={{ width: 22, height: 1, background: '#fecdd3', borderRadius: 999 }} />
          </div>

          <h1
            className="font-display"
            style={{
              fontSize: 'clamp(32px, 6vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#1f0a14',
              marginBottom: 12,
              letterSpacing: '-0.02em',
            }}
          >
            {config.birthday.greeting}
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 2.8vw, 18px)',
              fontWeight: 600,
              color: '#be123c',
              marginBottom: 10,
            }}
          >
            {config.birthday.subtitle}
          </p>

          <p
            className="font-serif"
            style={{
              fontSize: 17,
              fontStyle: 'italic',
              color: '#7a4a5a',
              marginBottom: 28,
            }}
          >
            {config.birthday.openingMessage}
          </p>

          <motion.button
            onClick={onOpen}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'linear-gradient(135deg, #e11d48 0%, #ec4899 100%)',
              color: 'white',
              border: 'none',
              borderRadius: 999,
              padding: '16px 30px',
              fontSize: 15.5,
              fontWeight: 700,
              letterSpacing: '0.01em',
              boxShadow: '0 10px 28px rgba(225,29,72,0.30), 0 4px 12px rgba(225,29,72,0.16)',
              cursor: 'pointer',
            }}
            aria-label="Open birthday surprise"
          >
            <Sparkles size={18} />
            Open Your Birthday Surprise 🎁
          </motion.button>

          <p style={{ marginTop: 16, fontSize: 12.5, color: '#9a6a7a', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <Heart size={12} fill="#f43f5e" color="#f43f5e" /> made with all my kabadingan & love
          </p>

          <div style={{ position: 'absolute', bottom: -40, left: '50%', transform: 'translateX(-50%)', width: 320, height: 120, background: 'radial-gradient(ellipse, rgba(225,29,72,0.09) 0%, transparent 70%)', pointerEvents: 'none' }} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          style={{ marginTop: 18, fontSize: 12, color: '#9a6a7a', letterSpacing: '0.04em' }}
        >
          Tip: use headphones for the best experience 🎧
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
