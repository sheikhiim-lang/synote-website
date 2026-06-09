export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '2.5rem 2rem',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '1rem',
      maxWidth: 1100, margin: '0 auto',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: 26, height: 26, borderRadius: 6,
          background: 'linear-gradient(135deg, #6366F1, #818CF8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 13, fontWeight: 700, color: '#fff', fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>S</div>
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 600, fontSize: '0.95rem' }}>Synote</span>
        <span style={{ color: '#4B5263', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif', marginLeft: '0.5rem' }}>
          © {new Date().getFullYear()}
        </span>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {['Privacy', 'Terms', 'Contact'].map(link => (
          <a key={link} href="#" style={{
            color: '#4B5263', textDecoration: 'none',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#8B92A5'}
          onMouseLeave={e => e.target.style.color = '#4B5263'}
          >{link}</a>
        ))}
      </div>
    </footer>
  )
}
