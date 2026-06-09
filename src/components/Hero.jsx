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
        const alpha = [0.18, 0.1, 0.06][l]
        const amp = [28, 18, 10][l]
        const freq = [0.018, 0.025, 0.013][l]
        const speed = [0.03, 0.05, 0.02][l]
        const yOff = H / 2 + (l - 1) * 20

        ctx.strokeStyle = `rgba(99,102,241,${alpha})`
        ctx.lineWidth = l === 0 ? 2 : 1

        for (let x = 0; x <= W; x += 2) {
          const y = yOff + Math.sin(x * freq + frame * speed + l * 1.2) * amp
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
      style={{ width: '100%', maxWidth: 700, height: 120, opacity: 0.9 }} />
  )
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      textAlign: 'center', position: 'relative', overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 600, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.3)',
        borderRadius: 100, padding: '0.35rem 1rem', marginBottom: '2rem',
      }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34D399', display: 'inline-block' }} />
        <span style={{ fontSize: '0.8rem', fontWeight: 500, color: '#818CF8', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
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
      }}>
        Your AI assistant that{' '}
        <span style={{
          background: 'linear-gradient(135deg, #6366F1, #818CF8 60%, #A5B4FC)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>actually gets you</span>
      </h1>

      {/* Sub */}
      <p style={{
        color: '#8B92A5', fontSize: 'clamp(1rem, 2vw, 1.2rem)',
        fontFamily: 'Inter, sans-serif', fontWeight: 400,
        maxWidth: 540, marginBottom: '3rem', lineHeight: 1.7,
      }}>
        Synote learns how you think, captures what matters, and helps you stay effortlessly organised — across your notes, tasks, and ideas.
      </p>

      {/* CTA buttons */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}>
        <a href="#download" style={{
          background: '#6366F1', color: '#fff', textDecoration: 'none',
          padding: '0.85rem 2rem', borderRadius: 12, fontWeight: 600,
          fontFamily: 'Inter, sans-serif', fontSize: '1rem',
          boxShadow: '0 0 40px rgba(99,102,241,0.35)',
          transition: 'transform 0.2s, box-shadow 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(99,102,241,0.5)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.35)' }}
        >
          Download for iOS
        </a>
        <a href="#how-it-works" style={{
          background: 'rgba(255,255,255,0.06)', color: '#F0F4FF', textDecoration: 'none',
          padding: '0.85rem 2rem', borderRadius: 12, fontWeight: 500,
          fontFamily: 'Inter, sans-serif', fontSize: '1rem',
          border: '1px solid rgba(255,255,255,0.1)',
          transition: 'background 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
        >
          See how it works
        </a>
      </div>

      {/* Waveform signature element */}
      <div style={{ width: '100%', maxWidth: 700 }}>
        <PulseWave />
        <p style={{ fontSize: '0.75rem', color: '#4B5263', fontFamily: 'Inter, sans-serif', marginTop: '0.5rem', letterSpacing: '0.06em' }}>
          LISTENING · LEARNING · REMEMBERING
        </p>
      </div>
    </section>
  )
}
