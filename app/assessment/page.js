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
              <h1>Answer a few questions and see what to fix first.</h1>
              <p>
                This short intake is built to surface the front-desk problems most likely to be hurting
                response time, patient communication, and booked revenue.
              </p>
              <div className="checklist">
                <div>Fast enough for mobile</div>
                <div>Immediate result after submission</div>
                <div>Upgrade later only if you want reviewed guidance</div>
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
