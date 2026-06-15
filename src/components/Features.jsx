const features = [
  {
    icon: 'fa-brain',
    title: 'Learns how you think',
    desc: 'Synote adapts to your style over time — understanding context, tone, and patterns unique to you.',
  },
  {
    icon: 'fa-microphone-lines',
    title: 'Capture anything, instantly',
    desc: 'Voice notes, text, or quick ideas. Synote organises them automatically so you never lose a thought.',
  },
  {
    icon: 'fa-calendar-check',
    title: 'Turns notes into actions',
    desc: 'Automatically extracts tasks, follow-ups, and reminders from your notes — so nothing slips through.',
  },
  {
    icon: 'fa-magnifying-glass',
    title: 'Find anything, fast',
    desc: 'Semantic search across all your content. Ask a question in plain language and get the right answer.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Private by design',
    desc: 'Your notes stay yours. End-to-end encryption and on-device processing keep your data private.',
  },
  {
    icon: 'fa-bolt',
    title: 'Works at the speed of thought',
    desc: 'Instant capture, instant recall. Designed to stay out of your way until you need it.',
  },
]

function FeatureCard({ icon, title, desc }) {
  return (
    <div
      style={{
        background: '#FFFFFF',
        border: '1px solid rgba(37,99,235,0.10)',
        borderRadius: 18,
        padding: '1.75rem',
        transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
        cursor: 'default',
        boxShadow: '0 2px 12px rgba(37,99,235,0.05)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.25)'
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,99,235,0.10)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(37,99,235,0.10)'
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = '0 2px 12px rgba(37,99,235,0.05)'
      }}
    >
      {/* Icon box */}
      <div style={{
        width: 44, height: 44,
        borderRadius: 12,
        background: 'rgba(37,99,235,0.08)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.1rem',
      }}>
        <i className={`fa-solid ${icon}`} style={{ fontSize: '1rem', color: '#2563EB' }} />
      </div>

      <h3 style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif',
        fontWeight: 700,
        fontSize: '1rem',
        marginBottom: '0.5rem',
        color: '#0F1B3D',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h3>

      <p style={{
        color: '#5B6E99',
        fontSize: '0.88rem',
        fontFamily: 'Inter, sans-serif',
        lineHeight: 1.65,
      }}>
        {desc}
      </p>
    </div>
  )
}

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: '7rem 2rem',
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{
          color: '#2563EB',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '0.72rem',
          letterSpacing: '0.13em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Features
        </p>
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          letterSpacing: '-0.03em',
          marginBottom: '1rem',
          color: '#0F1B3D',
        }}>
          Built for the way you work
        </h2>
        <p style={{
          color: '#5B6E99',
          fontFamily: 'Inter, sans-serif',
          fontSize: '1.05rem',
          maxWidth: 480,
          margin: '0 auto',
          lineHeight: 1.7,
        }}>
          Everything you need to capture, organise, and act on
          information — without the friction.
        </p>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
      }}>
        {features.map(f => <FeatureCard key={f.title} {...f} />)}
      </div>
    </section>
  )
}
