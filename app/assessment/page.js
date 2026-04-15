import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AssessmentForm from '@/components/AssessmentForm'

export const metadata = {
  title: 'Assessment | Match My Practice'
}

export default function AssessmentPage() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="section">
          <div className="container page-grid">
            <div className="sticky-copy">
              <span className="eyebrow">Free Revenue Leak Snapshot</span>
              <h1>Find out where your practice is losing money right now.</h1>
              <p>
                Takes 5 minutes. You\'ll see your primary revenue bottleneck, which fix categories fit your situation,
                and what to address before spending anything on software.
              </p>
              <div className="checklist">
                <div>Instant result — no waiting, no sales call</div>
                <div>Specific to your practice, not a generic checklist</div>
                <div>Most practices spot $3k–$10k/month in recoverable leaks</div>
                <div>Upgrade to a full reviewed plan for $149 after</div>
              </div>
            </div>
            <AssessmentForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
