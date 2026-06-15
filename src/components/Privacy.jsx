import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Service Description',
    num: '01',
    icon: 'fa-cloud',
    content: 'Synote is a cloud-based application hosted on Microsoft Azure that allows users to create, store, and manage notes including text, images, audio, and AI-enhanced content.',
  },
  {
    title: 'User Accounts',
    num: '02',
    icon: 'fa-user-shield',
    content: 'You are responsible for maintaining the confidentiality of your account and password.',
  },
  {
    title: 'User Content',
    num: '03',
    icon: 'fa-file-lines',
    content: 'You retain ownership of your data. We store and process it only to provide the service.',
  },
  {
    title: 'Acceptable Use',
    num: '04',
    icon: 'fa-circle-check',
    content: 'You agree not to use the service for illegal or harmful purposes or to interfere with the system.',
  },
  {
    title: 'AI Disclaimer',
    num: '05',
    icon: 'fa-wand-magic-sparkles',
    content: 'AI features may not always be accurate. Users should verify important information independently.',
  },
  {
    title: 'Service Availability',
    num: '06',
    icon: 'fa-server',
    content: 'We do not guarantee uninterrupted or error-free service.',
  },
  {
    title: 'Limitation of Liability',
    num: '07',
    icon: 'fa-scale-balanced',
    content: 'Zenith Software Corp is not liable for any data loss or damages arising from use of the service. To the maximum extent permitted by law, total liability shall not exceed the amount paid by the user, if any.',
  },
  {
    title: 'Information We Collect',
    num: '08',
    icon: 'fa-database',
    content: 'We may collect your email, name, notes, images, audio recordings, and related data created within the application.',
  },
  {
    title: 'How We Use Data',
    num: '09',
    icon: 'fa-gears',
    content: 'Data is used to operate the application, enable AI features, and improve user experience.',
  },
  {
    title: 'Cloud Storage',
    num: '10',
    icon: 'fa-cloud-arrow-up',
    content: 'All data is stored on Microsoft Azure cloud infrastructure.',
  },
  {
    title: 'AI Processing',
    num: '11',
    icon: 'fa-microchip',
    content: 'Some features process data using third-party AI services to provide smart functionality. Data is used only to process user requests and is not stored by these services except as required for functionality. By using these features, you acknowledge and consent to such processing.',
  },
  {
    title: 'Data Sharing',
    num: '12',
    icon: 'fa-share-nodes',
    content: 'We do not sell your data. Data may be shared with service providers or as required by law.',
  },
  {
    title: 'Data Retention',
    num: '13',
    icon: 'fa-clock-rotate-left',
    content: 'Data is retained while your account is active and removed after account deletion.',
  },
  {
    title: 'Security',
    num: '14',
    icon: 'fa-shield-halved',
    content: 'We use industry-standard security measures, but no system is completely secure.',
  },
  {
    title: 'Your Rights',
    num: '15',
    icon: 'fa-hand',
    content: 'You may request access, update, or deletion of your data at any time by contacting us.',
  },
  {
    title: 'No Warranty',
    num: '16',
    icon: 'fa-triangle-exclamation',
    content: 'The service is provided "as is" and "as available" without warranties of any kind.',
  },
  {
    title: 'Termination',
    num: '17',
    icon: 'fa-ban',
    content: 'We reserve the right to suspend or terminate accounts that violate these terms or misuse the service.',
  },
  {
    title: 'Governing Law',
    num: '18',
    icon: 'fa-landmark',
    content: 'These terms are governed by the laws of British Columbia, Canada.',
  },
  {
    title: 'Children',
    num: '19',
    icon: 'fa-child',
    content: 'This service is not intended for users under the age of 13.',
  },
  {
    title: 'Pricing & Subscriptions',
    num: '20',
    icon: 'fa-credit-card',
    content: 'The service is currently provided free of charge. However, Zenith Software Corp reserves the right to introduce fees or subscription plans at any time in the future. Users will be notified of any pricing changes in advance. Continued use of the service after such changes may require payment or subscription. We reserve the right to modify, introduce, or remove features, including converting free features into paid features.',
  },
  {
    title: 'Device Permissions',
    num: '21',
    icon: 'fa-mobile-screen',
    content: 'The application may request access to your device features such as camera, microphone, and photo library to enable core functionality including image capture, audio recording, and content analysis. These permissions are used solely to provide the intended features of the application and are not used for unauthorized purposes.',
  },
  {
    title: 'Changes to Terms',
    num: '22',
    icon: 'fa-pen-to-square',
    content: 'We may update these terms from time to time. Continued use of the service indicates acceptance of the updated terms.',
  },
]

export default function Privacy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#EEF2FF',
      fontFamily: 'Inter, sans-serif',
    }}>

      {/* ── Navbar strip ── */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(37,99,235,0.10)',
        padding: '0 2rem', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/public/Synotelogo.png" alt="Synote" style={{ height: 30, width: 'auto' }} />
        </Link>
        <Link to="/" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
          color: '#5B6E99', textDecoration: 'none', fontSize: '0.88rem',
          fontFamily: 'Inter, sans-serif', fontWeight: 500,
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = '#2563EB'}
        onMouseLeave={e => e.currentTarget.style.color = '#5B6E99'}
        >
          <i className="fa-solid fa-arrow-left" style={{ fontSize: '0.75rem' }} />
          Back to home
        </Link>
      </div>

      {/* ── Hero ── */}
      <div style={{
        background: 'linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background dots */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'relative',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 56, height: 56, borderRadius: 16,
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.25)',
          marginBottom: '1.25rem',
        }}>
          <i className="fa-solid fa-shield-halved" style={{ fontSize: 22, color: '#fff' }} />
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          letterSpacing: '-0.03em', color: '#fff',
          marginBottom: '0.75rem',
        }}>
          Terms of Service & Privacy Policy
        </h1>

        <p style={{
          position: 'relative',
          color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem',
          marginBottom: '0.25rem',
        }}>
          Effective date: April 4, 2026
        </p>
        <p style={{
          position: 'relative',
          color: 'rgba(255,255,255,0.60)', fontSize: '0.82rem',
        }}>
          This document governs your use of Synote, a product of Zenith Software Corp.
          By using this application, you agree to these terms.
        </p>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3.5rem 1.5rem 6rem' }}>

        {/* Section cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {sections.map((s) => (
            <div key={s.num} style={{
              background: '#FFFFFF',
              border: '1px solid rgba(37,99,235,0.09)',
              borderRadius: 16,
              padding: '1.4rem 1.6rem',
              boxShadow: '0 2px 10px rgba(37,99,235,0.05)',
              display: 'flex', gap: '1rem', alignItems: 'flex-start',
              transition: 'box-shadow 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.10)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.18)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 2px 10px rgba(37,99,235,0.05)'
              e.currentTarget.style.borderColor = 'rgba(37,99,235,0.09)'
            }}
            >
              {/* Icon */}
              <div style={{
                width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                background: 'rgba(37,99,235,0.07)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#2563EB', fontSize: '0.9rem',
                marginTop: '0.1rem',
              }}>
                <i className={`fa-solid ${s.icon}`} />
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                  <span style={{
                    fontSize: '0.65rem', fontWeight: 700,
                    color: '#2563EB', letterSpacing: '0.08em',
                    fontFamily: 'Inter, sans-serif',
                    background: 'rgba(37,99,235,0.08)',
                    padding: '0.15rem 0.5rem', borderRadius: 6,
                  }}>
                    {s.num}
                  </span>
                  <h3 style={{
                    margin: 0,
                    fontFamily: 'Plus Jakarta Sans, sans-serif',
                    fontWeight: 700, fontSize: '0.95rem',
                    color: '#0F1B3D', letterSpacing: '-0.01em',
                  }}>
                    {s.title}
                  </h3>
                </div>
                <p style={{
                  margin: 0, fontSize: '0.88rem',
                  color: '#5B6E99', lineHeight: 1.7,
                  fontFamily: 'Inter, sans-serif',
                }}>
                  {s.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Contact card ── */}
        <div style={{
          marginTop: '2rem',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.06), rgba(59,130,246,0.04))',
          border: '1px solid rgba(37,99,235,0.14)',
          borderRadius: 20, padding: '2rem',
          textAlign: 'center',
        }}>
          <div style={{
            width: 44, height: 44, borderRadius: 12,
            background: 'rgba(37,99,235,0.10)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 1rem', color: '#2563EB', fontSize: '1.1rem',
          }}>
            <i className="fa-solid fa-envelope" />
          </div>
          <h3 style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontWeight: 700, fontSize: '1.05rem',
            color: '#0F1B3D', marginBottom: '0.5rem',
          }}>
            Contact Us
          </h3>
          <p style={{ color: '#5B6E99', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Zenith Software Corp<br />
            201‑1017 Fort St, Victoria, BC V8V 3K5, Canada
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@synote.ca" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              background: '#2563EB', color: '#fff', textDecoration: 'none',
              padding: '0.6rem 1.25rem', borderRadius: 10,
              fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
              boxShadow: '0 4px 14px rgba(37,99,235,0.25)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              <i className="fa-solid fa-envelope" style={{ fontSize: '0.8rem' }} />
              support@synote.ca
            </a>
            <a href="https://synote.ca" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.45rem',
              background: 'rgba(37,99,235,0.08)', color: '#2563EB', textDecoration: 'none',
              padding: '0.6rem 1.25rem', borderRadius: 10,
              fontSize: '0.875rem', fontWeight: 600, fontFamily: 'Inter, sans-serif',
              border: '1px solid rgba(37,99,235,0.15)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,99,235,0.13)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,99,235,0.08)'}
            >
              <i className="fa-solid fa-globe" style={{ fontSize: '0.8rem' }} />
              synote.ca
            </a>
          </div>
        </div>

        {/* ── Footer note ── */}
        <p style={{
          textAlign: 'center', marginTop: '2.5rem',
          fontSize: '0.78rem', color: '#C4D0E3',
          fontFamily: 'Inter, sans-serif',
        }}>
          © {new Date().getFullYear()} Zenith Software Corp. All rights reserved.
        </p>

      </div>

      {/* Keyframes for FA */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');
      `}</style>
    </div>
  )
}
