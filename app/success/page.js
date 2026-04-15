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
        <h1>{name} — here is what is likely costing you the most right now.</h1>
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
            <h3>What to do next</h3>
            <p>Fix the highest-friction issue first — before buying any software. For most practices, that means missed-call coverage or reminder workflow. The $149 Priority Review tells you exactly which one, in what order, and what it should cost.</p>
          </div>
        </div>

        <section className="upsell-panel">
          <div className="upsell-copy">
            <span className="eyebrow">This snapshot is a starting point — not a plan</span>
            <h2>Know exactly what to fix, in what order, before you spend a dollar on software.</h2>
            <p>The Quick Priority Review is reviewed for your specific practice. You get a clear priority order, the right solution categories, budget guidance, and one concrete next step. Most practices recover the $149 in the first week of fixing the right thing.</p>
          </div>
          <div className="card-grid two-up">
            <article className="pricing-card pricing-card-highlight">
              <h3>Quick Priority Review</h3>
              <div className="price-tag">$149</div>
              <ul>
                <li>Reviewed for your specific practice</li>
                <li>Priority 1–2–3 fix order</li>
                <li>Right solution categories for your situation</li>
                <li>Budget guidance + concrete next step</li>
                <li>Upgrade later for just $350 more</li>
              </ul>
              <a href="#" className="button button-primary button-full">→ Get my Priority Review — $149</a>
            </article>

            <article className="pricing-card">
              <h3>Detailed Solution Review</h3>
              <div className="price-tag">$499</div>
              <ul>
                <li>Full roadmap for your practice</li>
                <li>Specific vendor & solution categories</li>
                <li>What to ask before buying anything</li>
                <li>Implementation guidance</li>
              </ul>
              <a href="#" className="button button-secondary button-full">Get the Full Roadmap — $499</a>
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
