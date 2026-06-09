import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      height: '64px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(13,17,23,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: 32, height: 32, borderRadius: 8,
          background: 'linear-gradient(135deg, #6366F1, #818CF8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 16, fontWeight: 700, color: '#fff',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
        }}>S</div>
        <span style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.02em' }}>
          Synote
        </span>
      </div>

      {/* Nav links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
        {['Features', 'How it works', 'Download'].map(link => (
          <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} style={{
            color: '#8B92A5', textDecoration: 'none', fontSize: '0.9rem',
            fontFamily: 'Inter, sans-serif', fontWeight: 500,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = '#F0F4FF'}
          onMouseLeave={e => e.target.style.color = '#8B92A5'}
          >{link}</a>
        ))}
        <a href="#download" style={{
          background: 'var(--accent)', color: '#fff', textDecoration: 'none',
          padding: '0.45rem 1.1rem', borderRadius: 8,
          fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={e => e.target.style.opacity = '0.85'}
        onMouseLeave={e => e.target.style.opacity = '1'}
        >Get the app</a>
      </div>
    </nav>
  )
}
