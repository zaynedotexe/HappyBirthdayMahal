import { useEffect, useRef } from 'react'

export default function FloatingPhotos({ photos, onSelect, desktopOnly = false }) {
  const containerRef = useRef(null)

  // subtle parallax on mouse move (desktop)
  useEffect(() => {
    const el = containerRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    if (isCoarse) return

    let raf = 0
    const handleMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const cx = (e.clientX - rect.left - rect.width / 2) / rect.width
        const cy = (e.clientY - rect.top - rect.height / 2) / rect.height
        el.querySelectorAll('.floating-photo').forEach((card, i) => {
          const depth = 0.6 + (i % 3) * 0.35
          const x = cx * 14 * depth
          const y = cy * 10 * depth
          card.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(var(--rot))`
        })
      })
    }
    const handleLeave = () => {
      el.querySelectorAll('.floating-photo').forEach((card) => {
        card.style.transform = ``
      })
    }
    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  return (
    <>
      {/* Desktop floating layer */}
      <div
        ref={containerRef}
        aria-hidden="false"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'visible',
          zIndex: 2,
        }}
      >
        {photos.map((p, idx) => (
          <div
            key={p.id}
            className={`floating-photo ${p.polaroid ? 'polaroid' : ''}`}
            onClick={() => onSelect?.(idx)}
            role="button"
            tabIndex={0}
            aria-label={`${p.caption} - ${p.date}`}
            onKeyDown={(e) => e.key === 'Enter' && onSelect?.(idx)}
            style={{
              left: p.x,
              top: p.y,
              width: p.width,
              height: p.height || 'auto',
              '--rot': p.rotation || '0deg',
              '--dur': p.animationDuration || '7s',
              '--delay': p.animationDelay || '0s',
              borderRadius: p.borderRadius || '16px',
              zIndex: p.zIndex || 2 + (idx % 3),
              pointerEvents: 'auto',
            }}
          >
            {p.tape !== false && !p.polaroid && <div className="tape" />}
            <div style={{ position: 'relative', width: '100%', height: p.polaroid ? 'calc(100% - 36px)' : '100%', overflow: 'hidden', borderRadius: p.polaroid ? '4px' : p.borderRadius || '16px' }}>
              <img
                src={p.image}
                alt={p.caption}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  aspectRatio: p.polaroid ? undefined : '4/5',
                }}
                onError={(e) => { e.currentTarget.src = `https://picsum.photos/seed/${p.id}birthday/400/500` }}
              />
              {!p.polaroid && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 56%, rgba(31,10,20,0.52) 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '14px 14px 12px',
                    color: 'white',
                  }}
                >
                  <span style={{ fontFamily: 'Caveat, cursive', fontSize: 14.5, lineHeight: 1.1, fontWeight: 700, textShadow: '0 1px 8px rgba(0,0,0,0.35)' }}>{p.caption}</span>
                  {p.date && <span style={{ fontSize: 10.5, opacity: 0.88, letterSpacing: '0.06em', fontWeight: 600, textTransform: 'uppercase', marginTop: 2 }}>{p.date}</span>}
                </div>
              )}
              {/* heart deco */}
              <span
                style={{
                  position: 'absolute',
                  top: 10,
                  right: 10,
                  width: 26,
                  height: 26,
                  borderRadius: 999,
                  background: 'rgba(255,255,255,0.92)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 13,
                  boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
                }}
              >
                ❤️
              </span>
            </div>
            {p.polaroid && <div className="photo-caption">{p.caption}</div>}
          </div>
        ))}
      </div>

      {/* Mobile horizontal scroll strip - only when not desktopOnly */}
      {!desktopOnly && (
        <div
          className="floating-photo-mobile"
          style={{
            display: 'none',
            marginTop: 18,
            marginBottom: 8,
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 14,
              overflowX: 'auto',
              padding: '10px 4px 16px',
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
            }}
          >
            {photos.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => onSelect?.(idx)}
                style={{
                  flex: '0 0 168px',
                  scrollSnapAlign: 'center',
                  background: 'white',
                  borderRadius: 16,
                  overflow: 'hidden',
                  border: '1px solid #ffe4e6',
                  boxShadow: '0 8px 24px rgba(31,10,20,0.10)',
                  textAlign: 'left',
                  padding: 0,
                }}
                aria-label={p.caption}
              >
                <div style={{ height: 170, overflow: 'hidden', position: 'relative' }}>
                  <img src={p.image} alt={p.caption} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  <span style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(255,255,255,0.92)', borderRadius: 999, width: 24, height: 24, display: 'grid', placeItems: 'center', fontSize: 12 }}>❤️</span>
                </div>
                <div style={{ padding: '10px 12px 12px' }}>
                  <div style={{ fontFamily: 'Caveat, cursive', fontSize: 14, fontWeight: 700, color: '#4a1020', lineHeight: 1.2 }}>{p.caption}</div>
                  <div style={{ fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#9a6a7a', fontWeight: 700, marginTop: 2 }}>{p.date}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
