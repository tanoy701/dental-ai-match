import Link from 'next/link'

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams
  const name = params?.name || 'Your practice'
  const categories = params?.categories || 'Patient communication automation'

  return (
    <main className="success-shell">
      <div className="success-card">
        <span className="eyebrow">Assessment received</span>
        <h1>Thanks, {name}.</h1>
        <p>Your submission was saved successfully.</p>
        <div className="recommend-box">
          <h3>Suggested starting categories</h3>
          <p>{categories}</p>
        </div>
        <div className="hero-actions">
          <Link href="/" className="button button-primary">Back to homepage</Link>
          <Link href="/assessment" className="button button-secondary">Submit another practice</Link>
        </div>
      </div>
    </main>
  )
}
