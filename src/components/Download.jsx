export default function Download() {
  return (
    <section
      id="download"
      style={{ padding: '7rem 2rem', textAlign: 'center' }}
    >
      <div style={{
        maxWidth: 680, margin: '0 auto',
        background: '#FFFFFF',
        border: '1px solid rgba(37,99,235,0.12)',
        borderRadius: 28, padding: '4rem 3rem',
        boxShadow: '0 8px 40px rgba(37,99,235,0.08), 0 1px 0 rgba(37,99,235,0.06)',
        position: 'relative', overflow: 'hidden',
      }}>

        {/* Top blue glow */}
        <div style={{
          position: 'absolute', top: -80, left: '50%',
          transform: 'translateX(-50%)',
          width: 400, height: 260, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(37,99,235,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Subtle grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
          opacity: 0.8,
        }} />

        {/* Icon */}
        <div style={{
          position: 'relative',
          width: 64, height: 64, borderRadius: 18,
          background: 'linear-gradient(135deg, #2563EB, #3B82F6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 1.75rem',
          boxShadow: '0 12px 30px rgba(37,99,235,0.25)',
        }}>
          <i className="fa-brands fa-apple" style={{ fontSize: 28, color: '#fff' }} />
        </div>

        {/* Headline */}
        <h2 style={{
          position: 'relative',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          letterSpacing: '-0.03em',
          color: '#0F1B3D',
          marginBottom: '1rem',
        }}>
          Ready to never miss anything?
        </h2>

        {/* Subline */}
        <p style={{
          position: 'relative',
          color: '#5B6E99',
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.05rem',
          lineHeight: 1.7,
          maxWidth: 420,
          margin: '0 auto 2.5rem',
        }}>
          Free to download. Available now on iOS — schedule your first
          week in under a minute.
        </p>

        {/* Buttons */}
        <div style={{
          position: 'relative',
          display: 'flex', gap: '0.85rem',
          justifyContent: 'center', flexWrap: 'wrap',
          marginBottom: '2rem',
        }}>
          <a
            href="https://apps.apple.com/app/synote/id6761725997"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: '#2563EB', color: '#fff', textDecoration: 'none',
              padding: '0.9rem 1.75rem', borderRadius: 12,
              fontWeight: 700, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
              boxShadow: '0 4px 20px rgba(37,99,235,0.30)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.40)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,99,235,0.30)'
            }}
          >
            <i className="fa-brands fa-apple" style={{ fontSize: '1.1rem' }} />
            Download for iOS
          </a>

          <a
            href="#"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              background: 'rgba(37,99,235,0.06)',
              color: '#2563EB', textDecoration: 'none',
              padding: '0.9rem 1.75rem', borderRadius: 12,
              fontWeight: 600, fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
              border: '1px solid rgba(37,99,235,0.15)',
              transition: 'background 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(37,99,235,0.10)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(37,99,235,0.06)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.15)'
            }}
          >
            <i className="fa-brands fa-android" style={{ fontSize: '1.1rem' }} />
            Notify me on Android
          </a>
        </div>

        {/* Trust line */}
        <div style={{
          position: 'relative',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '1.5rem',
          flexWrap: 'wrap',
        }}>
          {[
            { icon: 'fa-lock', text: 'Private by design' },
            { icon: 'fa-star', text: 'Free to start' },
            { icon: 'fa-bolt', text: 'Set up in 60 seconds' },
          ].map(({ icon, text }) => (
            <div key={text} style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.78rem', color: '#9BACC8',
              fontFamily: 'Inter, sans-serif',
            }}>
              <i className={`fa-solid ${icon}`} style={{ fontSize: '0.7rem', color: '#2563EB' }} />
              {text}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
