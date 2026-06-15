import { useState, useEffect } from 'react'

const steps = [
  {
    icon: 'fa-microphone',
    label: 'Type, speak, or snap',
    sub: 'Message, voice note, or photo — any format works',
  },
  {
    icon: 'fa-wand-magic-sparkles',
    label: 'AI extracts every detail',
    sub: 'Dates, times, recurrence, locations — all pulled automatically',
  },
  {
    icon: 'fa-triangle-exclamation',
    label: 'Conflicts checked',
    sub: 'Synote verifies against your existing calendar before saving',
  },
  {
    icon: 'fa-calendar-check',
    label: 'Events land in your calendar',
    sub: 'One tap to confirm — done',
  },
]

const STEP_MS = 1800   // how long each step stays "active"
const PAUSE_MS = 2000  // pause on last step before restarting

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let timeout
    const advance = (current) => {
      const isLast = current === steps.length - 1
      const delay = isLast ? PAUSE_MS : STEP_MS
      timeout = setTimeout(() => {
        const next = isLast ? 0 : current + 1
        setActiveIndex(next)
        advance(next)
      }, delay)
    }
    advance(0)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section
      id="how-it-works"
      style={{
        padding: '7rem 2rem',
        background: 'linear-gradient(180deg, #F5F8FF 0%, #EEF2FF 100%)',
        borderTop: '1px solid rgba(37,99,235,0.08)',
        borderBottom: '1px solid rgba(37,99,235,0.08)',
      }}
    >
      <div style={{ maxWidth: 560, margin: '0 auto' }}>

        {/* Eyebrow */}
        <p style={{
          color: '#2563EB', fontFamily: 'Inter, sans-serif',
          fontWeight: 600, fontSize: '0.72rem',
          letterSpacing: '0.13em', textTransform: 'uppercase',
          marginBottom: '1rem', textAlign: 'center',
        }}>
          How it works
        </p>

        {/* Headline */}
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.03em',
          color: '#0F1B3D', marginBottom: '0.75rem', textAlign: 'center',
        }}>
          Three steps. Zero friction.
        </h2>

        {/* Subline */}
        <p style={{
          color: '#5B6E99', fontFamily: 'Inter, sans-serif',
          fontSize: '1rem', lineHeight: 1.7,
          textAlign: 'center', marginBottom: '3.5rem',
        }}>
          From your words to a fully organized calendar in seconds.
        </p>

        {/* Timeline card */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(37,99,235,0.10)',
          borderRadius: 20, padding: '1.5rem 1.75rem',
          boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
        }}>

          {/* Header */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 12,
            marginBottom: '1.5rem', paddingBottom: '1.25rem',
            borderBottom: '1px solid rgba(37,99,235,0.08)',
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(37,99,235,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2563EB', fontSize: 15, flexShrink: 0,
            }}>
              <i className="fa-solid fa-calendar-day" />
            </div>
            <div>
              <p style={{
                margin: 0, fontSize: 15, fontWeight: 600,
                color: '#0F1B3D', fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}>
                Synote is scheduling your events
              </p>
              <p style={{
                margin: 0, fontSize: 12, color: '#9BACC8',
                fontFamily: 'Inter, sans-serif',
              }}>
                Here's what happens behind the scenes
              </p>
            </div>
          </div>

          {/* Steps */}
          {steps.map((s, i) => {
            const isDone   = i < activeIndex
            const isActive = i === activeIndex
            const isPending = i > activeIndex

            const dotBg = isDone
              ? 'rgba(16,185,129,0.10)'
              : isActive
                ? 'rgba(37,99,235,0.10)'
                : 'rgba(37,99,235,0.04)'

            const dotBorder = isDone
              ? '1px solid rgba(16,185,129,0.35)'
              : isActive
                ? '1px solid rgba(37,99,235,0.30)'
                : '1px solid rgba(37,99,235,0.10)'

            const dotColor = isDone
              ? '#10B981'
              : isActive
                ? '#2563EB'
                : '#9BACC8'

            const lineBg = isDone
              ? 'rgba(16,185,129,0.25)'
              : 'rgba(37,99,235,0.07)'

            const isLast = i === steps.length - 1

            return (
              <div key={s.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>

                {/* Dot + line */}
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', alignSelf: 'stretch',
                }}>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Spinner ring */}
                    {isActive && (
                      <div style={{
                        position: 'absolute',
                        width: 34, height: 34, borderRadius: '50%',
                        border: '2px solid transparent',
                        borderTopColor: '#2563EB',
                        borderRightColor: '#2563EB',
                        animation: 'hiw-spin 0.8s linear infinite',
                        pointerEvents: 'none',
                      }} />
                    )}
                    <div style={{
                      width: 26, height: 26, borderRadius: '50%',
                      background: dotBg, border: dotBorder, color: dotColor,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, flexShrink: 0,
                      transition: 'background 0.4s ease, border-color 0.4s ease, color 0.4s ease',
                      animation: isActive ? 'hiw-pulse 1.4s ease-in-out infinite' : 'none',
                    }}>
                      {isDone
                        ? <i className="fa-solid fa-check" />
                        : <i className={`fa-solid ${s.icon}`} />
                      }
                    </div>
                  </div>

                  {/* Connector */}
                  {!isLast && (
                    <div style={{
                      width: 2, flex: 1, minHeight: 18,
                      background: lineBg,
                      transition: 'background 0.5s ease',
                    }} />
                  )}
                </div>

                {/* Text */}
                <div style={{ paddingBottom: isLast ? 0 : 20 }}>
                  <p style={{
                    margin: 0, fontSize: 14, fontWeight: 600,
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    color: isPending ? '#9BACC8' : '#0F1B3D',
                    transition: 'color 0.4s ease',
                  }}>
                    {s.label}
                  </p>
                  <p style={{
                    margin: '2px 0 0', fontSize: 12,
                    fontFamily: 'Inter, sans-serif',
                    color: isPending ? '#C4D0E3' : '#5B6E99',
                    lineHeight: 1.5,
                    transition: 'color 0.4s ease',
                  }}>
                    {s.sub}
                  </p>
                </div>
              </div>
            )
          })}

        </div>

        <style>{`
          @keyframes hiw-spin {
            to { transform: rotate(360deg); }
          }
          @keyframes hiw-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.25); }
            50%       { box-shadow: 0 0 0 5px rgba(37,99,235,0.00); }
          }
        `}</style>

      </div>
    </section>
  )
}
