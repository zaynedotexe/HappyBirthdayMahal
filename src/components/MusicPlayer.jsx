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

export default function MusicPlayer({ shouldPlay, onPlayingChange, onTimeUpdate }) {
  const audioRef = useRef(null)
  const ytContainerRef = useRef(null)
  const ytPlayerRef = useRef(null)
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
    if (!isYT || !cfg.enabled) return
    let cancelled = false
    let timeInterval = null

    function createPlayer() {
      if (cancelled) return
      if (!ytContainerRef.current) return
      if (!window.YT || !window.YT.Player) return
      if (ytPlayerRef.current) return
      ytPlayerRef.current = new window.YT.Player(ytContainerRef.current, {
        videoId: ytId,
        width: '1',
        height: '1',
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          loop: 1,
          playlist: ytId,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e) => {
            e.target.setVolume((cfg.volume ?? 0.35) * 100)
            if (shouldPlay) {
              e.target.playVideo()
              setIsPlaying(true)
            }
          },
          onStateChange: (e) => {
            if (e.data === window.YT.PlayerState.PLAYING) setIsPlaying(true)
            if (e.data === window.YT.PlayerState.PAUSED) setIsPlaying(false)
            if (e.data === window.YT.PlayerState.ENDED) {
              e.target.seekTo(0)
              e.target.playVideo()
            }
          },
        },
      })
      timeInterval = setInterval(() => {
        if (ytPlayerRef.current && ytPlayerRef.current.getCurrentTime) {
          try {
            const t = ytPlayerRef.current.getCurrentTime()
            if (typeof t === 'number' && !isNaN(t)) onTimeUpdate?.(t)
          } catch {}
        }
      }, 250)
    }

    if (!window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      window.onYouTubeIframeAPIReady = () => createPlayer()
      const check = setInterval(() => {
        if (window.YT && window.YT.Player) {
          clearInterval(check)
          createPlayer()
        }
      }, 300)
      return () => {
        cancelled = true
        clearInterval(check)
        if (timeInterval) clearInterval(timeInterval)
      }
    } else {
      createPlayer()
      return () => {
        cancelled = true
        if (timeInterval) clearInterval(timeInterval)
      }
    }
  }, [isYT, cfg.enabled, ytId, cfg.volume, shouldPlay, onTimeUpdate])

  useEffect(() => {
    if (!cfg.enabled) return
    if (isYT) {
      const p = ytPlayerRef.current
      if (!p || !p.playVideo) return
      if (shouldPlay) {
        const t = setTimeout(() => {
          try { p.playVideo(); setIsPlaying(true) } catch {}
        }, 400)
        return () => clearTimeout(t)
      } else {
        try { p.pauseVideo(); setIsPlaying(false) } catch {}
      }
      return
    }
    const audio = audioRef.current
    if (!audio) return
    if (!shouldPlay) {
      audio.pause()
      setIsPlaying(false)
      return
    }
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
  }, [shouldPlay, cfg.enabled, isYT])

  useEffect(() => {
    if (isYT || !cfg.enabled) return
    const audio = audioRef.current
    if (!audio) return
    const onTime = () => onTimeUpdate?.(audio.currentTime)
    audio.addEventListener('timeupdate', onTime)
    return () => audio.removeEventListener('timeupdate', onTime)
  }, [isYT, cfg.enabled, onTimeUpdate])

  const togglePlay = async () => {
    if (isYT) {
      const p = ytPlayerRef.current
      if (!p) return
      if (isPlaying) {
        try { p.pauseVideo(); setIsPlaying(false) } catch {}
      } else {
        try { p.playVideo(); setIsPlaying(true); setFailed(false) } catch { setFailed(true) }
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
      const p = ytPlayerRef.current
      if (!p) return
      if (isMuted) {
        try { p.unMute(); p.setVolume((cfg.volume ?? 0.35) * 100); setIsMuted(false) } catch {}
      } else {
        try { p.mute(); setIsMuted(true) } catch {}
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
        <div
          ref={ytContainerRef}
          style={{ position: 'fixed', width: 1, height: 1, left: -10, top: -10, opacity: 0, pointerEvents: 'none', overflow: 'hidden' }}
          aria-hidden
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
