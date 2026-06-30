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
    <canvas ref={canvasRef} width={700} height={100}
      style={{ width: '100%', maxWidth: 500, height: 100, opacity: 0.7 }} />
  )
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '8rem 2rem 4rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Two-column wrapper */}
      <div className="hero-inner">

        {/* ── LEFT: Text + CTAs ── */}
        <div className="hero-text-col">

          {/* Headline */}
          <h1 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            color: '#0F1B3D',
          }}>
            Your AI scheduling assistant that{' '}
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
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            fontFamily: 'Inter, sans-serif', fontWeight: 400,
            maxWidth: 500, marginBottom: '2.5rem', lineHeight: 1.7,
          }}>
            Speak naturally or take a photo of your schedule,
            Synote organizes everything for you in seconds.           
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}>
            <a
              href="https://apps.apple.com/ca/app/synote/id6761725997"
              target="_blank"
              rel="noreferrer"
              style={{
                background: '#2563EB', color: '#fff', textDecoration: 'none',
                padding: '0.85rem 2rem', borderRadius: 12,
                fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '1rem',
                boxShadow: '0 0 40px rgba(37,99,235,0.30)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
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
              <i className="fa-brands fa-apple" style={{ fontSize: '1.1rem' }} />
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
          <PulseWave />
          <p style={{
            fontSize: '0.72rem', color: '#9BACC8',
            fontFamily: 'Inter, sans-serif',
            marginTop: '0.5rem', letterSpacing: '0.08em',
          }}>
            SPEAK · SNAP · SCHEDULE
          </p>

        </div>

        {/* ── RIGHT: Phone mockup ── */}
        <div className="hero-image-col">
          <img
            src="/SynoteCaptureCalendar.png"
            alt="Synote capturing a class schedule"
            style={{
              width: '100%',
              maxWidth: 340,
              height: 'auto',
              display: 'block',
              filter: 'drop-shadow(0 24px 48px rgba(37,99,235,0.18))',
            }}
          />
        </div>

      </div>

      <style>{`
        .hero-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4rem;
          max-width: 1100px;
          width: 100%;
          position: relative;
        }
        .hero-text-col {
          flex: 1 1 0;
          min-width: 0;
          text-align: left;
        }
        .hero-image-col {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
        }

        @media (max-width: 768px) {
          .hero-inner {
            flex-direction: column;
            gap: 2.5rem;
          }
          .hero-text-col {
            text-align: center;
            order: 1;
          }
          .hero-text-col > div {
            justify-content: center;
          }
          .hero-image-col {
            order: 2;
          }
          .hero-image-col img {
            max-width: 260px !important;
          }
        }
      `}</style>

    </section>
  )
}
