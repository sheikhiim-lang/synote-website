import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const steps = [
  'Log in to your Synote account',
  'Navigate to your profile section',
  'Select "Delete Account"',
  'Confirm your request when prompted',
]

const afterDeletion = [
  {
    icon: 'fa-trash-can',
    text: 'All your data — including notes, images, and account information — will be permanently deleted.',
  },
  {
    icon: 'fa-ban',
    text: 'Your data cannot be recovered after deletion.',
  },
  {
    icon: 'fa-clock-rotate-left',
    text: 'The deletion request date and time will be recorded for auditing purposes.',
  },
]

export default function AccountDeletion() {
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
          <img src="/Synotelogo.png" alt="Synote" style={{ height: 30, width: 'auto' }} />
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
          <i className="fa-solid fa-user-xmark" style={{ fontSize: 22, color: '#fff' }} />
        </div>

        <h1 style={{
          position: 'relative',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 800, fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          letterSpacing: '-0.03em', color: '#fff',
          marginBottom: '0.75rem',
        }}>
          Account Deletion Policy
        </h1>

        <p style={{
          position: 'relative',
          color: 'rgba(255,255,255,0.70)', fontSize: '0.9rem',
          maxWidth: 480, margin: '0 auto', lineHeight: 1.6,
        }}>
          This page explains how users of Synote can request deletion of their
          account and associated data.
        </p>
      </div>

      {/* ── Content ── */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3.5rem 1.5rem 6rem' }}>

        {/* How to delete */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(37,99,235,0.10)',
          borderRadius: 20, padding: '2rem',
          boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
          marginBottom: '1.25rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(37,99,235,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2563EB', fontSize: '0.95rem',
            }}>
              <i className="fa-solid fa-list-check" />
            </div>
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700, fontSize: '1.1rem', color: '#0F1B3D',
              letterSpacing: '-0.01em',
            }}>
              How to delete your account
            </h2>
          </div>

          <p style={{ color: '#5B6E99', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            You can delete your account directly inside the Synote application by
            following these steps:
          </p>

          {/* Numbered steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.9rem',
                background: 'rgba(37,99,235,0.04)',
                border: '1px solid rgba(37,99,235,0.08)',
                borderRadius: 12, padding: '0.85rem 1rem',
              }}>
                <span style={{
                  width: 26, height: 26, borderRadius: '50%', flexShrink: 0,
                  background: '#2563EB', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.78rem', fontWeight: 700,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}>
                  {i + 1}
                </span>
                <span style={{ fontSize: '0.9rem', color: '#0F1B3D', fontWeight: 500 }}>
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Confirm note */}
          <div style={{
            marginTop: '1.25rem',
            display: 'flex', alignItems: 'flex-start', gap: '0.6rem',
            background: 'rgba(245,158,11,0.08)',
            border: '1px solid rgba(245,158,11,0.2)',
            borderRadius: 12, padding: '0.85rem 1rem',
          }}>
            <i className="fa-solid fa-circle-info" style={{ color: '#D97706', fontSize: '0.85rem', marginTop: '0.15rem' }} />
            <span style={{ fontSize: '0.85rem', color: '#92651A', lineHeight: 1.6 }}>
              You will be asked to confirm your decision <strong>twice</strong> before
              the deletion is processed.
            </span>
          </div>
        </div>

        {/* What happens after */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(37,99,235,0.10)',
          borderRadius: 20, padding: '2rem',
          boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
          marginBottom: '1.25rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(239,68,68,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#EF4444', fontSize: '0.95rem',
            }}>
              <i className="fa-solid fa-triangle-exclamation" />
            </div>
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700, fontSize: '1.1rem', color: '#0F1B3D',
              letterSpacing: '-0.01em',
            }}>
              What happens after deletion
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {afterDeletion.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 9, flexShrink: 0,
                  background: 'rgba(37,99,235,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#2563EB', fontSize: '0.8rem',
                }}>
                  <i className={`fa-solid ${item.icon}`} />
                </div>
                <p style={{
                  fontSize: '0.9rem', color: '#5B6E99', lineHeight: 1.7,
                  margin: 0, paddingTop: '0.25rem',
                }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Data retention */}
        <div style={{
          background: '#FFFFFF',
          border: '1px solid rgba(37,99,235,0.10)',
          borderRadius: 20, padding: '2rem',
          boxShadow: '0 4px 24px rgba(37,99,235,0.07)',
          marginBottom: '2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'rgba(37,99,235,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#2563EB', fontSize: '0.95rem',
            }}>
              <i className="fa-solid fa-database" />
            </div>
            <h2 style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontWeight: 700, fontSize: '1.1rem', color: '#0F1B3D',
              letterSpacing: '-0.01em',
            }}>
              Data retention
            </h2>
          </div>
          <p style={{ color: '#5B6E99', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>
            Once the deletion process is completed, your data is removed from our
            database and is no longer accessible.
          </p>
        </div>

        {/* Contact card */}
        <div style={{
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
            Questions about deletion?
          </h3>
          <p style={{ color: '#5B6E99', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            If you have any questions regarding account deletion, please contact us.
          </p>
          <a href="mailto:iman@zenithsoftware.ca" style={{
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
            iman@zenithsoftware.ca
          </a>
        </div>

        {/* Footer note */}
        <p style={{
          textAlign: 'center', marginTop: '2.5rem',
          fontSize: '0.78rem', color: '#C4D0E3',
          fontFamily: 'Inter, sans-serif',
        }}>
          © 2026 Zenith Software Corp. All rights reserved.
        </p>

      </div>
    </div>
  )
}
