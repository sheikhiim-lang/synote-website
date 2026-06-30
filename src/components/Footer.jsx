import { Link } from 'react-router-dom'

const socials = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@synoteai?is_from_webapp=1&sender_device=pc',
    icon: 'fa-tiktok',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@synote_ai?si=hgiyeFRBf8HhLp7P',
    icon: 'fa-youtube',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/synote_ai/',
    icon: 'fa-instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590580415868',
    icon: 'fa-facebook',
  },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(37,99,235,0.08)',
      padding: '2.5rem 2rem',
      maxWidth: 1100, margin: '0 auto',
    }}>

      {/* Main row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem',
      }}>

        {/* Logo + copyright */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src="/Synotelogo.png"
            alt="Synote"
            style={{ height: 26, width: 'auto', display: 'block' }}
          />
          <span style={{
            color: '#9BACC8', fontSize: '0.85rem',
            fontFamily: 'Inter, sans-serif', marginLeft: '0.25rem',
          }}>
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* Nav links + socials */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/privacy" style={{
            color: '#9BACC8', textDecoration: 'none',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
          onMouseLeave={e => e.currentTarget.style.color = '#9BACC8'}
          >
            Privacy
          </Link>
          <Link to="/privacy" style={{
            color: '#9BACC8', textDecoration: 'none',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
          onMouseLeave={e => e.currentTarget.style.color = '#9BACC8'}
          >
            Terms
          </Link>
          <Link to="/account-deletion" style={{
            color: '#9BACC8', textDecoration: 'none',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
          onMouseLeave={e => e.currentTarget.style.color = '#9BACC8'}
          >
            Delete Account
          </Link>
          <a href="mailto:support@synote.ca" style={{
            color: '#9BACC8', textDecoration: 'none',
            fontFamily: 'Inter, sans-serif', fontSize: '0.875rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
          onMouseLeave={e => e.currentTarget.style.color = '#9BACC8'}
          >
            Contact
          </a>

          {/* Divider */}
          <div style={{ width: 1, height: 16, background: 'rgba(37,99,235,0.12)' }} />

          {/* Social icons */}
          {socials.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                color: '#9BACC8', textDecoration: 'none',
                fontSize: '1rem',
                transition: 'color 0.2s, transform 0.2s',
                display: 'flex', alignItems: 'center',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = '#2563EB'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = '#9BACC8'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <i className={`fa-brands ${icon}`} />
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid rgba(37,99,235,0.07)', paddingTop: '1.25rem' }}>
        <p style={{
          textAlign: 'center',
          fontFamily: 'Inter, sans-serif',
          fontSize: '0.78rem',
          color: '#C4D0E3',
          letterSpacing: '0.02em',
        }}>
          Powered by{' '}
          <a
            href="https://zenithsoftware.ca/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#2563EB', textDecoration: 'none', fontWeight: 600,
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Zenith Software Corp
          </a>
        </p>
      </div>

    </footer>
  )
}
