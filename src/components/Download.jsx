export default function Download() {
  return (
    <section id="download" style={{ padding: '7rem 2rem', textAlign: 'center' }}>
      <div style={{
        maxWidth: 680, margin: '0 auto',
        background: '#161B22',
        border: '1px solid rgba(99,102,241,0.2)',
        borderRadius: 24, padding: '4rem 3rem',
        boxShadow: '0 0 80px rgba(99,102,241,0.1)',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Glow */}
        <div style={{
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          width: 300, height: 200, borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(99,102,241,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>✨</div>
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', letterSpacing: '-0.025em',
          marginBottom: '1rem',
        }}>
          Ready to think clearer?
        </h2>
        <p style={{
          color: '#8B92A5', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem',
          lineHeight: 1.7, marginBottom: '2.5rem', maxWidth: 440, margin: '0 auto 2.5rem',
        }}>
          Join the Synote beta. Free to try — available now on iOS.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            background: '#6366F1', color: '#fff', textDecoration: 'none',
            padding: '0.9rem 1.75rem', borderRadius: 12, fontWeight: 600,
            fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
            boxShadow: '0 0 40px rgba(99,102,241,0.3)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(99,102,241,0.5)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 0 40px rgba(99,102,241,0.3)' }}
          >
            <span style={{ fontSize: '1.2rem' }}>⬇</span> Download for iOS
          </a>
          <a href="#" style={{
            background: 'rgba(255,255,255,0.06)', color: '#F0F4FF', textDecoration: 'none',
            padding: '0.9rem 1.75rem', borderRadius: 12, fontWeight: 500,
            fontFamily: 'Inter, sans-serif', fontSize: '0.95rem',
            border: '1px solid rgba(255,255,255,0.1)',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.06)'}
          >
            Notify me on Android
          </a>
        </div>
      </div>
    </section>
  )
}
