import { useEffect, useRef } from 'react'

export default function Synthesizer({ shouldPlay, isPlaying, currentTime }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!shouldPlay || !isPlaying) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
      return
    }
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1

    function resize() {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const bars = 32
    const barGap = 8

    let start = performance.now()

    function draw(now) {
      const elapsed = (now - start) / 1000
      const t = currentTime != null && currentTime > 1 ? currentTime : elapsed
      const rect = canvas.getBoundingClientRect()
      const w = rect.width
      const h = rect.height
      ctx.clearRect(0, 0, w, h)

      const centerY = h * 0.5
      const barW = (w - (bars - 1) * barGap) / bars

      for (let i = 0; i < bars; i++) {
        const norm = i / (bars - 1)
        const distFromCenter = Math.abs(norm - 0.5) * 2
        const base = 14 + (1 - distFromCenter) * 22
        const wave1 = Math.sin(t * 2.2 + i * 0.45) * 18
        const wave2 = Math.sin(t * 3.1 + i * 0.7) * 10
        const wave3 = Math.cos(t * 1.6 + i * 0.3) * 8
        const beat = Math.sin(t * 4.5) > 0.85 ? 12 : 0
        let bh = base + wave1 + wave2 + wave3 + beat * (1 - distFromCenter * 0.5)
        bh = Math.max(6, Math.min(h * 0.85, bh))

        const x = i * (barW + barGap)
        const y = centerY - bh / 2
        const hue = 340 + norm * 30 + Math.sin(t + i) * 6
        const alpha = 0.18 + (1 - distFromCenter) * 0.32 + Math.abs(wave1) * 0.012

        ctx.fillStyle = `hsla(${hue}, 92%, 62%, ${alpha})`
        ctx.shadowColor = `hsla(${hue}, 90%, 60%, 0.35)`
        ctx.shadowBlur = 10
        if (ctx.roundRect) {
          ctx.beginPath()
          ctx.roundRect(x, y, barW, bh, 999)
          ctx.fill()
        } else {
          ctx.fillRect(x, y, barW, bh)
        }
        ctx.shadowBlur = 0

        const dotY = centerY + Math.sin(t * 1.8 + i * 0.4) * (h * 0.18)
        ctx.fillStyle = `hsla(${hue}, 85%, 70%, 0.14)`
        ctx.beginPath()
        ctx.arc(x + barW / 2, dotY, 2, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.fillStyle = 'rgba(255, 90, 120, 0.06)'
      ctx.beginPath()
      ctx.ellipse(w / 2, h * 0.5, w * 0.42, h * 0.38, 0, 0, Math.PI * 2)
      ctx.fill()

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [shouldPlay, isPlaying, currentTime])

  if (!shouldPlay) return null

  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: isPlaying ? 1 : 0.35,
        transition: 'opacity 0.7s ease',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 900px 600px at 50% 52%, rgba(255,255,255,0.58) 0%, transparent 72%)',
        }}
      />
      <div style={{ position: 'relative', width: 'min(920px, 92vw)', height: 180, padding: '0 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontFamily: 'Caveat, cursive', fontSize: 13, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(190,18,60,0.22)', marginBottom: 8 }}>
          Marilag • Dionela ♡ — Live Synthesizer
        </div>
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: 110, display: 'block', filter: isPlaying ? 'none' : 'grayscale(0.3) opacity(0.6)' }}
        />
        <div style={{ marginTop: 8, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 700, color: 'rgba(31,10,20,0.18)' }}>
          {isPlaying ? '♪ Synced to the beat ♪' : 'Paused — tap play to resume'}
        </div>
      </div>
    </div>
  )
}
