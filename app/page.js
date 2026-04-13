import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const painCards = [
  {
    title: 'Missed calls',
    text: 'Missed inbound calls can quietly turn into lost new-patient revenue.'
  },
  {
    title: 'No-shows',
    text: 'Empty chair time is expensive when reminders and confirmations are weak.'
  },
  {
    title: 'Front desk overload',
    text: 'Admin friction slows response time, hurts consistency, and drains staff capacity.'
  },
  {
    title: 'Slow follow-up',
    text: 'New patient inquiries lose value fast when response and booking lag.'
  }
]

const steps = [
  {
    title: 'Get your free snapshot',
    text: 'Answer a short intake and see your top likely revenue leak and best-fit fix categories.'
  },
  {
    title: 'Upgrade for a reviewed recommendation',
    text: 'Use the Quick Priority Review to see what to fix first before wasting money on the wrong tool.'
  },
  {
    title: 'Upgrade again only if you need more',
    text: 'Move to a Detailed Solution Review later by paying only the difference.'
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
              <h1>Find the hidden front-desk problems costing your practice revenue.</h1>
              <p className="hero-copy">
                Match My Practice helps dental offices spot the biggest operational leak first,
                then get matched to the right solution path for missed calls, no-shows, scheduling friction,
                and front-desk overload.
              </p>
              <div className="hero-actions">
                <Link href="/assessment" className="button button-primary">Get my free snapshot</Link>
                <a href="#pricing" className="button button-secondary">See pricing</a>
              </div>
              <ul className="hero-proof compact-proof">
                <li>Recover lost revenue without adding staff</li>
                <li>Start with what to fix first, not random software lists</li>
                <li>Upgrade only when you want deeper review</li>
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
              <h2>Routine front-desk problems often show up as revenue loss, not just admin pain.</h2>
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
              <h2>Start free. Pay only when you want clearer guidance.</h2>
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
              <span className="eyebrow">Simple value ladder</span>
              <h2>Free insight first. Better clarity when you need it.</h2>
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
              <span className="eyebrow">Start now</span>
              <h2>See what is likely hurting your practice before you spend money on the wrong fix.</h2>
              <p>Get your free Revenue Leak Snapshot and decide whether you want a reviewed recommendation next.</p>
            </div>
            <Link href="/assessment" className="button button-light">Get my free snapshot</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
