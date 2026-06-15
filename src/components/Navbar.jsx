import { useState, useEffect } from 'react'

const links = [
  { label: 'Features',     href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Download',     href: '#download' },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [menuOpen,   setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const navBg = scrolled || menuOpen
    ? 'rgba(255,255,255,0.95)'
    : 'transparent'

  const navBorder = scrolled || menuOpen
    ? '1px solid rgba(37,99,235,0.10)'
    : '1px solid transparent'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 1.5rem',
        background: navBg,
        backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        borderBottom: navBorder,
        transition: 'background 0.3s, border-color 0.3s',
      }}>

        {/* ── Logo ── */}
        <a href="#" onClick={close} style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          textDecoration: 'none', flexShrink: 0,
        }}>
          <img
            src="/Synotelogo.png"
            alt="Synote"
            style={{ height: 34, width: 'auto', display: 'block' }}
          />
        </a>

        {/* ── Desktop links ── */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '2rem',
          // hide on mobile via inline media — we use a class trick below
        }} className="nav-desktop-links">
          {links.map(({ label, href }) => (
            <a key={label} href={href} style={{
              color: '#5B6E99', textDecoration: 'none',
              fontSize: '0.9rem', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#0F1B3D'}
            onMouseLeave={e => e.currentTarget.style.color = '#5B6E99'}
            >
              {label}
            </a>
          ))}
          <a href="#download" style={{
            background: '#2563EB', color: '#fff', textDecoration: 'none',
            padding: '0.45rem 1.15rem', borderRadius: 8,
            fontSize: '0.875rem', fontWeight: 700,
            fontFamily: 'Inter, sans-serif',
            boxShadow: '0 4px 12px rgba(37,99,235,0.25)',
            transition: 'opacity 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.opacity = '0.9'
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.35)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.opacity = '1'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(37,99,235,0.25)'
          }}
          >
            Get the app
          </a>
        </div>

        {/* ── Hamburger (mobile only) ── */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '0.5rem', borderRadius: 8,
            display: 'flex', flexDirection: 'column',
            gap: 5, alignItems: 'flex-end',
          }}
        >
          <span style={{
            display: 'block', height: 2, borderRadius: 2,
            background: '#0F1B3D',
            width: menuOpen ? 22 : 22,
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
            transition: 'transform 0.25s',
          }} />
          <span style={{
            display: 'block', height: 2, borderRadius: 2,
            background: '#0F1B3D', width: 16,
            opacity: menuOpen ? 0 : 1,
            transition: 'opacity 0.2s',
          }} />
          <span style={{
            display: 'block', height: 2, borderRadius: 2,
            background: '#0F1B3D', width: 22,
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
            transition: 'transform 0.25s',
          }} />
        </button>

      </nav>

      {/* ── Mobile drawer ── */}
      <div
        className="nav-mobile-drawer"
        style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 199,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(37,99,235,0.10)',
          padding: '1.5rem',
          display: 'flex', flexDirection: 'column', gap: '0.25rem',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          opacity: menuOpen ? 1 : 0,
          transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.25s',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        {links.map(({ label, href }) => (
          <a key={label} href={href} onClick={close} style={{
            color: '#0F1B3D', textDecoration: 'none',
            fontSize: '1.1rem', fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 600, padding: '0.85rem 0.5rem',
            borderBottom: '1px solid rgba(37,99,235,0.07)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
          onMouseLeave={e => e.currentTarget.style.color = '#0F1B3D'}
          >
            {label}
          </a>
        ))}

        <a href="#download" onClick={close} style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '0.5rem',
          background: '#2563EB', color: '#fff', textDecoration: 'none',
          padding: '0.9rem', borderRadius: 12,
          fontSize: '1rem', fontWeight: 700,
          fontFamily: 'Inter, sans-serif',
          marginTop: '1rem',
          boxShadow: '0 4px 16px rgba(37,99,235,0.28)',
        }}>
          <i className="fa-brands fa-apple" />
          Get the app
        </a>
      </div>

      {/* ── Responsive styles ── */}
      <style>{`
        .nav-desktop-links { display: flex; }
        .nav-hamburger      { display: none; }
        .nav-mobile-drawer  { display: flex; }

        @media (max-width: 680px) {
          .nav-desktop-links { display: none !important; }
          .nav-hamburger      { display: flex !important; }
        }
        @media (min-width: 681px) {
          .nav-mobile-drawer  { display: none !important; }
        }
      `}</style>
    </>
  )
}
