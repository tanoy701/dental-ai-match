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
              <span className="eyebrow">Practice assessment</span>
              <h1>Tell us where your front desk is under pressure.</h1>
              <p>
                This intake is designed to surface the most relevant AI solution categories for dental practices.
                Start with your actual bottlenecks: missed calls, no-shows, slow lead response, repetitive patient questions,
                or administrative overload.
              </p>
              <div className="checklist">
                <div>Mobile friendly and quick to complete</div>
                <div>Submissions saved to Supabase</div>
                <div>Built for future shortlist and follow-up workflow</div>
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
