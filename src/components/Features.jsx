const features = [
  {
    icon: '🧠',
    title: 'Learns how you think',
    desc: 'Synote adapts to your style over time — understanding context, tone, and patterns unique to you.',
  },
  {
    icon: '📝',
    title: 'Capture anything, instantly',
    desc: 'Voice notes, text, or quick ideas. Synote organises them automatically so you never lose a thought.',
  },
  {
    icon: '✅',
    title: 'Turns notes into actions',
    desc: 'Automatically extracts tasks, follow-ups, and reminders from your notes — so nothing slips through.',
  },
  {
    icon: '🔍',
    title: 'Find anything, fast',
    desc: 'Semantic search across all your content. Ask a question in plain language and get the right answer.',
  },
  {
    icon: '🔒',
    title: 'Private by design',
    desc: 'Your notes stay yours. End-to-end encryption and on-device processing keep your data private.',
  },
  {
    icon: '⚡',
    title: 'Works at the speed of thought',
    desc: 'Instant capture, instant recall. Designed to stay out of your way until you need it.',
  },
]

function FeatureCard({ icon, title, desc }) {
  return (
    <div style={{
      background: '#161B22', border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 16, padding: '1.75rem',
      transition: 'border-color 0.2s, transform 0.2s, background 0.2s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)'
      e.currentTarget.style.transform = 'translateY(-3px)'
      e.currentTarget.style.background = '#1C2330'
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
      e.currentTarget.style.transform = 'none'
      e.currentTarget.style.background = '#161B22'
    }}
    >
      <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{icon}</div>
      <h3 style={{
        fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700,
        fontSize: '1.05rem', marginBottom: '0.6rem', color: '#F0F4FF',
      }}>{title}</h3>
      <p style={{ color: '#8B92A5', fontSize: '0.9rem', fontFamily: 'Inter, sans-serif', lineHeight: 1.65 }}>{desc}</p>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" style={{ padding: '6rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <p style={{ color: '#6366F1', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          FEATURES
        </p>
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.025em',
          marginBottom: '1rem',
        }}>
          Built for the way you work
        </h2>
        <p style={{ color: '#8B92A5', fontFamily: 'Inter, sans-serif', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto' }}>
          Everything you need to capture, organise, and act on information — without the friction.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.25rem',
      }}>
        {features.map(f => <FeatureCard key={f.title} {...f} />)}
      </div>
    </section>
  )
}
