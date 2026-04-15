import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const painCards = [
  {
    title: 'Missed calls',
    text: 'Every missed call is a new patient who called a competitor next. Most practices have no idea how many they lose per month.'
  },
  {
    title: 'No-shows',
    text: 'An empty chair costs $150–$400 per slot. Weak reminders and no-follow-up turns that into a recurring monthly loss.'
  },
  {
    title: 'Front desk overload',
    text: 'Overloaded staff drop calls, delay responses, and make booking harder. Friction here costs you patients before they ever walk in.'
  },
  {
    title: 'Slow follow-up',
    text: 'New patient leads go cold in hours, not days. If your practice isn\'t responding same-day, you\'re losing bookings to whoever responds first.'
  }
]

const steps = [
  {
    title: 'See your leak in 5 minutes',
    text: 'Answer a short intake. Get an instant result showing your primary bottleneck, what it\'s likely costing you, and the fix categories worth reviewing.'
  },
  {
    title: 'Get a reviewed priority plan for $149',
    text: 'Stop guessing. A Quick Priority Review tells you exactly what to fix first — reviewed for your specific practice, not a generic list.'
  },
  {
    title: 'Go deeper only if you need it',
    text: 'Upgrade to a full roadmap and vendor path for $350 more. Only pay the difference — no double-charging.'
  }
]

const pricing = [
  {
    name: 'Free Revenue Leak Snapshot',
    price: 'Free',
    bullets: ['Immediate result', 'Top likely bottleneck', 'Best-fit fix categories']
  },
  {
    name: 'Quick Priority Review',
    price: '$149',
    bullets: ['Reviewed diagnosis', 'What to fix first', 'Budget and next-step guidance']
  },
  {
    name: 'Detailed Solution Review',
    price: '$499',
    bullets: ['Specific solution paths', '2–3 best-fit options', 'Upgrade later for $350 more']
  }
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero hero-strong">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">For dental practices</span>
              <h1>Your front desk is losing you money. Find out where.</h1>
              <p className="hero-copy">
                Missed calls, no-shows, slow follow-up, front desk overload — these feel like admin problems.
                They are revenue leaks. Match My Practice tells you which one is costing you the most and what to fix first.
              </p>
              <div className="hero-actions">
                <Link href="/assessment" className="button button-primary">Get my free snapshot</Link>
                <a href="#pricing" className="button button-secondary">See pricing</a>
              </div>
              <ul className="hero-proof compact-proof">
                <li>Know your #1 revenue leak in 5 minutes</li>
                <li>Get a reviewed fix plan for $149 — not a generic software list</li>
                <li>Recover lost revenue without adding headcount</li>
              </ul>
            </div>
            <div className="hero-card hero-card-strong">
              <div className="mini-card">
                <span className="eyebrow">What you get in minutes</span>
                <h3>Revenue Leak Snapshot</h3>
                <p>See your likely bottleneck, the fix categories most worth reviewing, and the next move that makes the most sense.</p>
              </div>
              <div className="stats-grid stats-grid-strong">
                <div>
                  <strong>1</strong>
                  <span>Primary bottleneck</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>Best-fit fix categories</span>
                </div>
                <div>
                  <strong>5 min</strong>
                  <span>Assessment time</span>
                </div>
                <div>
                  <strong>$149</strong>
                  <span>First paid review</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">Where practices leak money</span>
              <h2>These feel like normal problems. They are not. They are costing you money every week.</h2>
            </div>
            <div className="card-grid four-up" id="categories">
              {painCards.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">How it works</span>
              <h2>Free in 5 minutes. A clear fix plan for $149. A full roadmap for $499.</h2>
            </div>
            <div className="card-grid three-up">
              {steps.map((step) => (
                <article key={step.title} className="info-card info-card-compact">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section" id="pricing">
          <div className="container">
            <div className="section-heading narrow">
              <span className="eyebrow">Pricing</span>
              <h2>Start free. Most practices find the $149 review is all they need to get moving.</h2>
            </div>
            <div className="card-grid three-up">
              {pricing.map((item) => (
                <article key={item.name} className="pricing-card">
                  <h3>{item.name}</h3>
                  <div className="price-tag">{item.price}</div>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section accent-section">
          <div className="container cta-panel">
            <div>
              <span className="eyebrow">Don't guess. Find out.</span>
              <h2>Most practices are losing $3,000–$10,000/month to problems they think are normal.</h2>
              <p>The free snapshot takes 5 minutes. The $149 review tells you exactly what to fix first. No sales call required.</p>
            </div>
            <Link href="/assessment" className="button button-light">Get my free snapshot →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
