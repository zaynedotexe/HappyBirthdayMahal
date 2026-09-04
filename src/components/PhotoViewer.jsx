import { createPortal } from 'react-dom'
import { X, ChevronLeft, ChevronRight, Calendar, Heart } from 'lucide-react'
import { useEffect } from 'react'

export default function PhotoViewer({ photos, index, onClose, onNext, onPrev }) {
  const photo = photos[index]
  const isOpen = index !== null && photo

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen) return null

  const content = (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        onClick={onClose}
        style={{ position: 'absolute', inset: 0, background: 'rgba(18, 6, 14, 0.72)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
      />

      <div
        style={{
          position: 'relative',
          width: 'min(980px, 100%)',
          maxHeight: '88vh',
          background: 'white',
          borderRadius: 24,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          boxShadow: '0 24px 80px rgba(0,0,0,0.28)',
        }}
        className="photo-viewer-card"
        role="dialog"
        aria-modal="true"
        aria-label={photo.caption}
      >
        <button
          onClick={onClose}
          aria-label="Close photo viewer"
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            zIndex: 3,
            width: 38,
            height: 38,
            borderRadius: 999,
            border: '1px solid rgba(255,255,255,0.9)',
            background: 'rgba(255,255,255,0.92)',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
          }}
        >
          <X size={18} color="#3f1020" />
        </button>

        <button
          onClick={onPrev}
          aria-label="Previous photo"
          style={{
            position: 'absolute',
            left: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            width: 40,
            height: 40,
            borderRadius: 999,
            border: 'none',
            background: 'rgba(255,255,255,0.92)',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
          }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={onNext}
          aria-label="Next photo"
          style={{
            position: 'absolute',
            right: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            width: 40,
            height: 40,
            borderRadius: 999,
            border: 'none',
            background: 'rgba(255,255,255,0.92)',
            display: 'grid',
            placeItems: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.14)',
          }}
        >
          <ChevronRight size={20} />
        </button>

        <div style={{ background: '#fff1f2', position: 'relative', overflow: 'hidden', minHeight: 380 }}>
          <img src={photo.image} alt={photo.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 380, maxHeight: '88vh' }} />
        </div>

        <div style={{ padding: '28px 26px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14, overflow: 'auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#e11d48', fontSize: 12, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <Calendar size={14} /> {photo.date}
          </div>
          <h3 className="font-display" style={{ fontSize: 26, lineHeight: 1.15, color: '#1f0a14' }}>{photo.caption}</h3>
          <p style={{ color: '#6b3245', lineHeight: 1.7, fontSize: 15 }}>{photo.description}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 8, color: '#9a6a7a', fontSize: 13 }}>
            <Heart size={14} fill="#f43f5e" color="#f43f5e" /> Photo {index + 1} of {photos.length}
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button onClick={onPrev} style={{ flex: 1, padding: '10px', borderRadius: 999, border: '1px solid #ffe4e6', background: 'white', fontWeight: 700, fontSize: 13 }}>← Previous</button>
            <button onClick={onNext} style={{ flex: 1, padding: '10px', borderRadius: 999, border: 'none', background: 'linear-gradient(135deg, #e11d48, #ec4899)', color: 'white', fontWeight: 700, fontSize: 13 }}>Next →</button>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(content, document.body)
}
