const steps = [
  { num: '01', title: 'Capture a thought', desc: 'Type or speak — Synote accepts voice notes, text, and quick captures from wherever you are.' },
  { num: '02', title: 'Synote organises it', desc: 'AI automatically tags, links, and files your note — placing it in context with related ideas you\'ve captured before.' },
  { num: '03', title: 'Act on what matters', desc: 'Tasks, reminders, and follow-ups are surfaced at the right time. Nothing gets lost, nothing requires manual sorting.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '6rem 2rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.04) 50%, transparent 100%)',
      borderTop: '1px solid rgba(255,255,255,0.05)',
      borderBottom: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#6366F1', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>
          HOW IT WORKS
        </p>
        <h2 style={{
          fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 2.75rem)', letterSpacing: '-0.025em',
          marginBottom: '4rem',
        }}>
          Three steps. Zero friction.
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', position: 'relative' }}>
          {/* Connector line */}
          <div style={{
            position: 'absolute', left: '50%', top: 60, bottom: 60,
            width: 1, background: 'linear-gradient(180deg, rgba(99,102,241,0.4), rgba(99,102,241,0.1))',
            transform: 'translateX(-50%)',
          }} />

          {steps.map((step, i) => (
            <div key={step.num} style={{
              display: 'flex', alignItems: 'center',
              gap: '3rem', marginBottom: i < steps.length - 1 ? '3rem' : 0,
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              textAlign: i % 2 === 0 ? 'right' : 'left',
            }}>
              <div style={{ flex: 1, padding: '0 1rem' }}>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                <p style={{ color: '#8B92A5', fontFamily: 'Inter, sans-serif', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>

              {/* Step number bubble */}
              <div style={{
                flexShrink: 0, width: 56, height: 56, borderRadius: '50%',
                background: 'linear-gradient(135deg, #6366F1, #818CF8)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: '0.85rem',
                color: '#fff', boxShadow: '0 0 30px rgba(99,102,241,0.4)',
                position: 'relative', zIndex: 1,
              }}>{step.num}</div>

              <div style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
