import Link from 'next/link'

function formatCategories(raw) {
  if (!raw) return []
  return raw.split('|').filter(Boolean)
}

export default async function SuccessPage({ searchParams }) {
  const params = await searchParams
  const name = params?.name || 'Your practice'
  const bottleneck = params?.bottleneck || 'Front-desk friction and patient communication gaps'
  const budgetHint = params?.budgetHint || '$300–$1,000/month for many focused tools'
  const categories = formatCategories(params?.categories)

  return (
    <main className="success-shell">
      <div className="success-card success-card-wide">
        <span className="eyebrow">Your free Revenue Leak Snapshot</span>
        <h1>{name}, here is where to look first.</h1>
        <div className="result-stack">
          <div className="recommend-box">
            <h3>Top likely bottleneck</h3>
            <p>{bottleneck}</p>
          </div>

          <div className="recommend-box">
            <h3>Best-fit fix categories</h3>
            <ul className="result-list">
              {categories.map((category) => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          </div>

          <div className="recommend-box">
            <h3>Typical budget range</h3>
            <p>{budgetHint}</p>
          </div>

          <div className="recommend-box">
            <h3>Suggested next step</h3>
            <p>Fix the highest-friction communication issue first. For many practices, that means missed-call coverage or reminder workflow before anything else.</p>
          </div>
        </div>

        <section className="upsell-panel">
          <div className="upsell-copy">
            <span className="eyebrow">Want a reviewed recommendation?</span>
            <h2>Stop guessing what to fix first.</h2>
            <p>Upgrade from the free snapshot to a paid review when you want clearer guidance and stronger decision support.</p>
          </div>
          <div className="card-grid two-up">
            <article className="pricing-card pricing-card-highlight">
              <h3>Quick Priority Review</h3>
              <div className="price-tag">$149</div>
              <ul>
                <li>Reviewed diagnosis</li>
                <li>What to fix first</li>
                <li>Budget and next-step guidance</li>
              </ul>
              <a href="#" className="button button-primary button-full">Choose Quick Review</a>
            </article>

            <article className="pricing-card">
              <h3>Detailed Solution Review</h3>
              <div className="price-tag">$499</div>
              <ul>
                <li>2–3 best-fit solution paths</li>
                <li>Deeper buying guidance</li>
                <li>Upgrade later for only $350 more</li>
              </ul>
              <a href="#" className="button button-secondary button-full">Choose Detailed Review</a>
            </article>
          </div>
        </section>

        <div className="hero-actions">
          <Link href="/assessment" className="button button-secondary">Run another snapshot</Link>
          <Link href="/" className="button button-primary">Back to homepage</Link>
        </div>
      </div>
    </main>
  )
}
