// ImageAnalysisSection.jsx
// Place synote-embed-image.html in /public
// Add below <ShowcaseSection /> in App.jsx:
//   import ImageAnalysisSection from './components/ImageAnalysisSection'
//   <ImageAnalysisSection />

export default function ImageAnalysisSection() {
  const stats = [
    { icon: 'fa-camera',       label: 'Snap & scan',      desc: 'Any timetable or schedule' },
    { icon: 'fa-table-cells',  label: 'Grid reading',      desc: 'Days, times, columns' },
    { icon: 'fa-list-check',   label: 'Auto-extract',      desc: 'Every class & block' },
    { icon: 'fa-circle-check', label: 'Conflict check',    desc: 'Before saving anything' },
  ]

  return (
    <section
      id="image-analysis"
      style={{
        padding: '6rem 1.5rem 5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(37,99,235,0.08)',
        // subtle alternate background to visually separate from previous section
        background: 'linear-gradient(180deg, #EEF2FF 0%, #F5F8FF 100%)',
      }}
    >

      {/* ── background glow ── */}
      <div style={{
        position: 'absolute',
        bottom: '20%', left: '50%',
        transform: 'translate(-50%, 50%)',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%)',
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
        Photo intelligence
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
        Point. Snap.{' '}
        <span style={{
          background: 'linear-gradient(135deg, #2563EB, #3B82F6 60%, #60A5FA)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          Your whole schedule, done.
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
        Photograph any class timetable, work roster, or printed schedule.
        Synote reads every block, maps every time slot, and builds your
        recurring calendar events — automatically.
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

      {/* ── iframe embed ── */}
      <div style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '9 / 16',
        maxWidth: 420,
      }}>
        <iframe
          src="/synote-embed-image.html"
          title="Synote image analysis demo"
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
        Snap · Extract · Schedule
      </p>

    </section>
  )
}
