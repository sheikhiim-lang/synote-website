import { useEffect, useRef } from 'react'

function PulseWave() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let frame = 0
    let raf

    const draw = () => {
      const W = canvas.width, H = canvas.height
      ctx.clearRect(0, 0, W, H)

      const lines = 3
      for (let l = 0; l < lines; l++) {
        ctx.beginPath()
        const alpha = [0.18, 0.10, 0.06][l]
        const amp   = [28, 18, 10][l]
        const freq  = [0.018, 0.025, 0.013][l]
        const speed = [0.03, 0.05, 0.02][l]
        const yOff  = H / 2 + (l - 1) * 20

        ctx.strokeStyle = `rgba(37,99,235,${alpha})`
        ctx.lineWidth = l === 0 ? 2 : 1

        for (let x = 0; x <= W; x += 2) {
          const y = yOff
            + Math.sin(x * freq + frame * speed + l * 1.2) * amp
            + Math.sin(x * freq * 2.3 - frame * speed * 0.7) * (amp * 0.4)
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      frame++
      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <canvas ref={canvasRef} width={700} height={120}
      style={{ width: '100%', maxWidth: 700, height: 120, opacity: 0.8 }} />
  )
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 500, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: 'rgba(37,99,235,0.08)',
        border: '1px solid rgba(37,99,235,0.20)',
        borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '2rem',
      }}>
        <span style={{
          width: 7, height: 7, borderRadius: '50%',
          background: '#10B981', display: 'inline-block',
          boxShadow: '0 0 6px rgba(16,185,129,0.6)',
        }} />
        <span style={{
          fontSize: '0.8rem', fontWeight: 600,
          color: '#2563EB',
          fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em',
        }}>
          NOW IN BETA
        </span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontSize: 'clamp(2.6rem, 6vw, 4.5rem)',
        fontWeight: 800, lineHeight: 1.1,
        letterSpacing: '-0.03em',
        marginBottom: '1.5rem',
        maxWidth: 800,
        color: '#0F1B3D',
      }}>
        Your AI assistant that{' '}
        <span style={{
          background: 'linear-gradient(135deg, #2563EB, #3B82F6 60%, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          actually gets you
        </span>
      </h1>

      {/* Subline */}
      <p style={{
        color: '#5B6E99',
        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        fontFamily: 'Inter, sans-serif', fontWeight: 400,
        maxWidth: 540, marginBottom: '3rem', lineHeight: 1.7,
      }}>
        Synote learns how you think, captures what matters, and helps you stay
        effortlessly organised — across your notes, tasks, and ideas.
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: '1rem',
        flexWrap: 'wrap', justifyContent: 'center',
        marginBottom: '3.5rem',
      }}>
        <a href="#download" style={{
          background: '#2563EB', color: '#fff', textDecoration: 'none',
          padding: '0.85rem 2rem', borderRadius: 12,
          fontWeight: 600, fontFamily: 'Inter, sans-serif', fontSize: '1rem',
          boxShadow: '0 0 40px rgba(37,99,235,0.30)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 0 60px rgba(37,99,235,0.45)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'none'
          e.currentTarget.style.boxShadow = '0 0 40px rgba(37,99,235,0.30)'
        }}
        >
          Download for iOS
        </a>
        <a href="#how-it-works" style={{
          background: 'rgba(37,99,235,0.07)',
          color: '#0F1B3D', textDecoration: 'none',
          padding: '0.85rem 2rem', borderRadius: 12,
          fontWeight: 500, fontFamily: 'Inter, sans-serif', fontSize: '1rem',
          border: '1px solid rgba(37,99,235,0.15)',
          transition: 'background 0.2s, border-color 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = 'rgba(37,99,235,0.12)'
          e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = 'rgba(37,99,235,0.07)'
          e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)'
        }}
        >
          See how it works
        </a>
      </div>

      {/* Waveform */}
      <div style={{ width: '100%', maxWidth: 700 }}>
        <PulseWave />
        <p style={{
          fontSize: '0.75rem', color: '#9BACC8',
          fontFamily: 'Inter, sans-serif',
          marginTop: '0.5rem', letterSpacing: '0.08em',
        }}>
          LISTENING · LEARNING · REMEMBERING
        </p>
      </div>

    </section>
  )
}
