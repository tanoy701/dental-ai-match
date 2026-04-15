'use client'

import { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

const challengeOptions = [
  'Missed calls after hours',
  'Front desk overload',
  'New patient lead follow-up',
  'Too many no-shows',
  'Scheduling takes too much staff time',
  'Patients ask repetitive questions',
  'Reminders and recalls need improvement',
  'Admin work needs automation'
]

const goalOptions = [
  'Recover lost revenue',
  'Reduce missed calls',
  'Reduce no-shows',
  'Save staff time',
  'Respond faster to patients',
  'Improve patient experience'
]

const toolOptions = ['Dentrix', 'Open Dental', 'Eaglesoft', 'Weave', 'NexHealth', 'RevenueWell', 'Other']

function inferCategories(challenges = []) {
  const mapped = new Set()
  const joined = challenges.join(' | ').toLowerCase()

  if (joined.includes('missed calls') || joined.includes('repetitive questions')) mapped.add('AI Phone Answering')
  if (joined.includes('scheduling')) mapped.add('Appointment Scheduling')
  if (joined.includes('lead follow-up') || joined.includes('new patient')) mapped.add('Lead Follow-Up')
  if (joined.includes('no-shows') || joined.includes('reminders')) mapped.add('Patient Reminders')
  if (joined.includes('admin work') || joined.includes('front desk')) mapped.add('Front Desk Workflow Automation')

  if (!mapped.size) {
    mapped.add('Patient Communication Automation')
    mapped.add('Front Desk Workflow Automation')
  }

  return Array.from(mapped).slice(0, 3)
}

function inferPrimaryBottleneck(challenges = []) {
  const joined = challenges.join(' | ').toLowerCase()

  if (joined.includes('missed calls')) return 'Missed calls and lost new-patient opportunities'
  if (joined.includes('no-shows') || joined.includes('reminders')) return 'No-shows and weak reminder workflow'
  if (joined.includes('front desk') || joined.includes('admin work')) return 'Front desk overload and admin friction'
  if (joined.includes('lead follow-up') || joined.includes('new patient')) return 'Slow lead follow-up and delayed booking'
  if (joined.includes('repetitive questions')) return 'Repetitive patient questions draining staff time'

  return 'Front-desk friction and inconsistent patient communication'
}

function inferBudget(challenges = []) {
  const joined = challenges.join(' | ').toLowerCase()

  if (joined.includes('missed calls') || joined.includes('no-shows') || joined.includes('front desk')) {
    return '$300–$1,500/month depending on setup and support'
  }

  return '$300–$1,000/month for many focused tools'
}

export default function AssessmentForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    practiceName: '',
    website: '',
    contactName: '',
    contactRole: '',
    email: '',
    phone: '',
    practiceType: 'General dentistry',
    locations: '1 location',
    challenges: [],
    goals: [],
    budgetRange: 'Under $1,000/month',
    currentTools: [],
    timeline: 'Within 30 days',
    notes: ''
  })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const recommended = useMemo(() => inferCategories(form.challenges), [form.challenges])
  const bottleneck = useMemo(() => inferPrimaryBottleneck(form.challenges), [form.challenges])
  const budgetHint = useMemo(() => inferBudget(form.challenges), [form.challenges])

  function toggleSelection(field, value) {
    setForm((current) => {
      const exists = current[field].includes(value)
      return {
        ...current,
        [field]: exists
          ? current[field].filter((item) => item !== value)
          : [...current[field], value]
      }
    })
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recommendedCategories: recommended, primaryBottleneck: bottleneck })
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Something went wrong while submitting the form.')
      }

      const params = new URLSearchParams({
        name: form.practiceName,
        categories: recommended.join('|'),
        bottleneck,
        budgetHint
      })
      router.push(`/success?${params.toString()}`)
    } catch (submissionError) {
      setError(submissionError.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="assessment-form" onSubmit={handleSubmit}>
      <div className="form-grid two-col">
        <label>
          Practice name
          <input value={form.practiceName} onChange={(e) => updateField('practiceName', e.target.value)} required />
        </label>
        <label>
          Website
          <input value={form.website} onChange={(e) => updateField('website', e.target.value)} placeholder="Optional" />
        </label>
        <label>
          Contact name
          <input value={form.contactName} onChange={(e) => updateField('contactName', e.target.value)} required />
        </label>
        <label>
          Role
          <input value={form.contactRole} onChange={(e) => updateField('contactRole', e.target.value)} placeholder="Owner, office manager, etc." />
        </label>
        <label>
          Email
          <input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} required />
        </label>
        <label>
          Phone
          <input value={form.phone} onChange={(e) => updateField('phone', e.target.value)} />
        </label>
      </div>

      <div className="form-grid two-col">
        <label>
          Practice type
          <select value={form.practiceType} onChange={(e) => updateField('practiceType', e.target.value)}>
            <option>General dentistry</option>
            <option>Cosmetic dentistry</option>
            <option>Orthodontics</option>
            <option>Pediatric dentistry</option>
            <option>Oral surgery</option>
            <option>Multi-location practice</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          Locations
          <select value={form.locations} onChange={(e) => updateField('locations', e.target.value)}>
            <option>1 location</option>
            <option>2–3 locations</option>
            <option>4+ locations</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>What feels most costly right now?</legend>
        <div className="pill-grid">
          {challengeOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`pill ${form.challenges.includes(option) ? 'pill-active' : ''}`}
              onClick={() => toggleSelection('challenges', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset>
        <legend>What do you want most?</legend>
        <div className="pill-grid">
          {goalOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`pill ${form.goals.includes(option) ? 'pill-active' : ''}`}
              onClick={() => toggleSelection('goals', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="form-grid two-col">
        <label>
          Budget range
          <select value={form.budgetRange} onChange={(e) => updateField('budgetRange', e.target.value)}>
            <option>Under $1,000/month</option>
            <option>$1,000–$3,000/month</option>
            <option>$3,000+/month</option>
            <option>Not sure yet</option>
          </select>
        </label>
        <label>
          Timeline
          <select value={form.timeline} onChange={(e) => updateField('timeline', e.target.value)}>
            <option>Need help now</option>
            <option>Within 30 days</option>
            <option>Within 3 months</option>
            <option>Just exploring</option>
          </select>
        </label>
      </div>

      <fieldset>
        <legend>Current tools</legend>
        <div className="pill-grid">
          {toolOptions.map((option) => (
            <button
              key={option}
              type="button"
              className={`pill ${form.currentTools.includes(option) ? 'pill-active' : ''}`}
              onClick={() => toggleSelection('currentTools', option)}
            >
              {option}
            </button>
          ))}
        </div>
      </fieldset>

      <label>
        Anything else we should know?
        <textarea rows="5" value={form.notes} onChange={(e) => updateField('notes', e.target.value)} placeholder="Call volume, staffing pressure, software limitations, or other context." />
      </label>

      <div className="recommend-box">
        <span className="eyebrow">Based on your answers so far</span>
        <h3>⚠ {bottleneck}</h3>
        <p><strong>Fix categories to review:</strong> {recommended.join(' • ')}</p>
        <p><strong>Typical cost to fix:</strong> {budgetHint}</p>
        <p style={{marginTop: '10px', fontSize: '0.92rem', color: 'var(--muted)'}}>Submit below to get your full free snapshot. Then decide if you want a reviewed $149 Priority Review with a specific fix order for your practice.</p>
      </div>

      {error ? <p className="error-text">{error}</p> : null}

      <button className="button button-primary button-full" type="submit" disabled={submitting}>
        {submitting ? 'Analyzing your practice...' : 'Get my free Revenue Leak Snapshot →'}
      </button>
    </form>
  )
}
