import { useEffect, useRef, useState } from 'react'
import { Music, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import siteConfig from '../config/siteConfig'

function getYouTubeId(url) {
  if (!url) return null
  if (url.includes('youtu.be/')) return url.split('youtu.be/')[1].split(/[?&#]/)[0]
  if (url.includes('youtube.com/watch')) {
    try { return new URL(url).searchParams.get('v') } catch { return null }
  }
  if (url.includes('youtube.com/embed/')) return url.split('embed/')[1].split(/[?&#]/)[0]
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url
  return null
}

export default function MusicPlayer({ shouldPlay, onPlayingChange }) {
  const audioRef = useRef(null)
  const ytRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => { onPlayingChange?.(isPlaying) }, [isPlaying, onPlayingChange])
  const cfg = siteConfig.music
  const ytId = cfg.youtubeId || getYouTubeId(cfg.source)
  const isYT = !!ytId && (cfg.source?.includes('youtu') || cfg.youtubeId)

  useEffect(() => {
    if (!cfg.enabled) return
    if (isYT) return
    const audio = audioRef.current
    if (!audio) return
    audio.volume = cfg.volume ?? 0.35
    audio.loop = true
  }, [cfg.volume, cfg.enabled, isYT])

  useEffect(() => {
    if (!cfg.enabled || !shouldPlay) return
    if (isYT) {
      const t = setTimeout(() => {
        sendYT('playVideo')
        sendYT('setVolume', [(cfg.volume ?? 0.35) * 100])
        if (isMuted) sendYT('mute')
        else sendYT('unMute')
        setIsPlaying(true)
      }, 800)
      return () => clearTimeout(t)
    }
    const audio = audioRef.current
    if (!audio) return
    const tryPlay = async () => {
      try {
        await audio.play()
        setIsPlaying(true)
        setFailed(false)
      } catch {
        setFailed(true)
      }
    }
    tryPlay()
  }, [shouldPlay, cfg.enabled, isYT, cfg.volume, isMuted])

  function sendYT(func, args = []) {
    const iframe = ytRef.current
    if (!iframe || !iframe.contentWindow) return
    iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', func, args }), '*')
  }

  const togglePlay = async () => {
    if (isYT) {
      if (isPlaying) {
        sendYT('pauseVideo')
        setIsPlaying(false)
      } else {
        sendYT('playVideo')
        setIsPlaying(true)
        setFailed(false)
      }
      return
    }
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
        setFailed(false)
      } catch {
        setFailed(true)
      }
    }
  }

  const toggleMute = () => {
    if (isYT) {
      if (isMuted) {
        sendYT('unMute')
        setIsMuted(false)
      } else {
        sendYT('mute')
        setIsMuted(true)
      }
      return
    }
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !isMuted
    setIsMuted(!isMuted)
  }

  if (!cfg.enabled) return null

  return (
    <>
      {isYT ? (
        <iframe
          ref={ytRef}
          title="YouTube music player"
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/${ytId}?enablejsapi=1&autoplay=0&loop=1&playlist=${ytId}&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{ position: 'fixed', width: 1, height: 1, left: -10, top: -10, opacity: 0, pointerEvents: 'none', border: 0 }}
          onLoad={() => {
            if (shouldPlay) {
              setTimeout(() => {
                sendYT('setVolume', [(cfg.volume ?? 0.35) * 100])
                sendYT('playVideo')
                setIsPlaying(true)
              }, 500)
            }
          }}
        />
      ) : (
        <audio
          ref={audioRef}
          src={cfg.source}
          preload="none"
          onError={() => {
            if (audioRef.current && cfg.fallback && audioRef.current.src !== cfg.fallback) {
              audioRef.current.src = cfg.fallback
              audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setFailed(true))
            } else {
              setFailed(true)
            }
          }}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      )}

      <div
        style={{
          position: 'fixed',
          bottom: 18,
          right: 18,
          zIndex: 60,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid #ffe4e6',
          borderRadius: 999,
          padding: '8px 10px 8px 14px',
          boxShadow: '0 10px 36px rgba(31,10,20,0.14)',
        }}
      >
        <Music size={14} color="#e11d48" />
        <span style={{ fontSize: 12, fontWeight: 800, color: '#4a1020', letterSpacing: '0.02em', maxWidth: 110, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {cfg.title}
        </span>
        <span style={{ width: 1, height: 18, background: '#ffe4e6' }} />
        <button
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            border: 'none',
            background: isPlaying ? 'linear-gradient(135deg, #e11d48, #ec4899)' : 'white',
            color: isPlaying ? 'white' : '#e11d48',
            borderWidth: isPlaying ? 0 : '1px',
            borderStyle: 'solid',
            borderColor: '#ffe4e6',
            display: 'grid',
            placeItems: 'center',
            boxShadow: isPlaying ? '0 4px 14px rgba(225,29,72,0.22)' : 'none',
          }}
        >
          {isPlaying ? <Pause size={14} fill="white" /> : <Play size={14} fill="#e11d48" style={{ marginLeft: 1 }} />}
        </button>
        <button
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute' : 'Mute'}
          style={{
            width: 32,
            height: 32,
            borderRadius: 999,
            border: '1px solid #ffe4e6',
            background: 'white',
            display: 'grid',
            placeItems: 'center',
            color: '#7a4a5a',
          }}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>

      {failed && !isPlaying && shouldPlay && !isYT && (
        <div
          style={{
            position: 'fixed',
            bottom: 76,
            right: 18,
            zIndex: 60,
            background: 'white',
            border: '1px solid #ffe4e6',
            borderRadius: 12,
            padding: '8px 12px',
            fontSize: 12,
            color: '#7a4a5a',
            boxShadow: '0 8px 24px rgba(31,10,20,0.10)',
            maxWidth: 220,
          }}
        >
          Tap play to start music 🎵 <br />
          <span style={{ fontSize: 11, opacity: 0.8 }}>Add your song to <code>/public/music/birthday-song.mp3</code></span>
        </div>
      )}
    </>
  )
}
