// ShowcaseSection.jsx
// Place synote-embed.html in /public
// Font Awesome required in index.html:
// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

export default function ShowcaseSection() {
  const stats = [
    { icon: 'fa-rotate',        label: 'Recurring events',  desc: 'Daily, weekly, monthly' },
    { icon: 'fa-calendar-days', label: 'Multi-event',       desc: 'One message, many events' },
    { icon: 'fa-bolt',          label: 'Instant',           desc: 'Under 2 seconds' },
    { icon: 'fa-microphone',    label: 'Natural language',  desc: 'Just speak normally' },
  ]

  return (
    <section
      id="showcase"
      style={{
        padding: '6rem 1.5rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(37,99,235,0.08)',
      }}
    >

      {/* ── background glow ── */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* ── eyebrow ── */}
      <p style={{
        fontSize: '0.72rem',
        fontWeight: 600,
        letterSpacing: '0.13em',
        color: '#2563EB',
        fontFamily: 'Inter, sans-serif',
        textTransform: 'uppercase',
        marginBottom: '1rem',
        position: 'relative',
      }}>
        See it in action
      </p>

      {/* ── headline ── */}
      <h2 style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 800,
        fontSize: 'clamp(2rem, 5vw, 3.2rem)',
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        textAlign: 'center',
        maxWidth: 680,
        marginBottom: '1.25rem',
        color: '#0F1B3D',
        position: 'relative',
      }}>
        Just say it.{' '}
        <span style={{
          background: 'linear-gradient(135deg, #2563EB, #3B82F6 60%, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Synote figures out the rest.
        </span>
      </h2>

      {/* ── subline ── */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
        color: '#5B6E99',
        lineHeight: 1.75,
        maxWidth: 500,
        textAlign: 'center',
        marginBottom: '2.5rem',
        position: 'relative',
      }}>
        One message. Multiple events. Recurring schedules. Synote understands
        natural language and builds your entire calendar — no forms, no tapping.
      </p>

      {/* ── stat grid ── */}
      <div style={{
        display: 'flex',
        marginBottom: '4rem',
        background: '#FFFFFF',
        border: '1px solid rgba(37,99,235,0.10)',
        borderRadius: 20,
        overflow: 'hidden',
        maxWidth: 640,
        width: '100%',
        position: 'relative',
        boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
      }}>
        {stats.map(({ icon, label, desc }, i) => (
          <div
            key={label}
            style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '1.4rem 0.5rem',
              borderRight: i < stats.length - 1 ? '1px solid rgba(37,99,235,0.08)' : 'none',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.04)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <div style={{
              width: 36, height: 36,
              borderRadius: 10,
              background: 'rgba(37,99,235,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '0.25rem',
            }}>
              <i className={`fa-solid ${icon}`} style={{ fontSize: '0.9rem', color: '#2563EB' }} />
            </div>
            <span style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700,
              fontSize: '0.8rem',
              color: '#0F1B3D',
              letterSpacing: '-0.01em',
              textAlign: 'center',
            }}>
              {label}
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '0.68rem',
              color: '#9BACC8',
              textAlign: 'center',
              lineHeight: 1.4,
            }}>
              {desc}
            </span>
          </div>
        ))}
      </div>

      {/* ── iframe — let the embed's own JS handle scaling ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '9 / 16',
        maxWidth: 420,
      }}>
        <iframe
          src="/synote-embed.html"
          title="Synote scheduling demo"
          scrolling="no"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            border: 'none',
            display: 'block',
            background: 'transparent',
          }}
          allowTransparency="true"
        />
      </div>

      {/* ── bottom caption ── */}
      <p style={{
        marginTop: '1.5rem',
        fontSize: '0.7rem',
        color: '#9BACC8',
        fontFamily: 'Inter, sans-serif',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        Tap · Speak · Schedule
      </p>

    </section>
  )
}
