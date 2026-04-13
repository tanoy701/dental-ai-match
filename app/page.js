import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const categories = [
  {
    title: 'Missed calls',
    text: 'Find phone-answering and after-hours response tools that reduce lost new-patient opportunities.'
  },
  {
    title: 'Scheduling friction',
    text: 'Compare scheduling automation and reminder platforms that reduce front-desk time.'
  },
  {
    title: 'No-shows',
    text: 'See solutions for confirmation workflows, reminders, and recall campaigns.'
  },
  {
    title: 'Lead follow-up',
    text: 'Match with tools that respond faster to web leads and turn interest into booked visits.'
  }
]

const steps = [
  'Share your practice details and top front-desk problems.',
  'See the solution categories that best fit your workflow.',
  'Use your submission to guide the shortlist and next step.'
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">For dental practices</span>
              <h1>Find the right AI solution without wasting weeks comparing tools.</h1>
              <p className="hero-copy">
                Match My Practice helps dental offices identify the highest-impact AI opportunities for patient communication,
                scheduling, and front-desk efficiency.
              </p>
              <div className="hero-actions">
                <Link href="/assessment" className="button button-primary">Start the assessment</Link>
                <a href="#how-it-works" className="button button-secondary">How it works</a>
              </div>
              <ul className="hero-proof">
                <li>Built for mobile-first traffic from ads and referrals</li>
                <li>Focused on measurable workflow outcomes</li>
                <li>Clear next step instead of generic software lists</li>
              </ul>
            </div>
            <div className="hero-card">
              <div className="mini-card">
                <span className="eyebrow">Common starting point</span>
                <h3>Front-desk bottlenecks</h3>
                <p>Missed calls, repetitive questions, no-shows, and delayed follow-up often point to just a few high-impact automation categories.</p>
              </div>
              <div className="stats-grid">
                <div>
                  <strong>3</strong>
                  <span>Recommended solution categories</span>
                </div>
                <div>
                  <strong>5 min</strong>
                  <span>Assessment time</span>
                </div>
                <div>
                  <strong>Mobile</strong>
                  <span>Optimized experience</span>
                </div>
                <div>
                  <strong>Focused</strong>
                  <span>Dental workflow language</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">What this helps solve</span>
              <h2>Built around the pain points dental teams actually feel every day.</h2>
            </div>
            <div className="card-grid four-up" id="categories">
              {categories.map((item) => (
                <article key={item.title} className="info-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="how-it-works">
          <div className="container split-section">
            <div>
              <span className="eyebrow">How it works</span>
              <h2>A clearer path from “we know something is broken” to “here is where to start.”</h2>
            </div>
            <ol className="steps-list">
              {steps.map((step, index) => (
                <li key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section accent-section">
          <div className="container cta-panel">
            <div>
              <span className="eyebrow">Ready to start?</span>
              <h2>Get recommended solution categories based on your practice, budget, and workflow priorities.</h2>
              <p>No long demo request. No generic software list. Just a focused intake built for dental practices.</p>
            </div>
            <Link href="/assessment" className="button button-light">Go to assessment</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
