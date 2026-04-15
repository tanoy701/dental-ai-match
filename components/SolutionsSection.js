'use client'

import { useState } from 'react'
import Link from 'next/link'

const solutions = [
  {
    id: 'missed-calls',
    label: 'Missed Calls',
    headline: 'Every missed call is a patient calling your competitor next.',
    body: 'Most dental practices miss 20–40% of inbound calls — especially after hours, during lunch, and when the front desk is with a patient. Each missed call is a potential new patient worth $1,500–$5,000+ in lifetime value walking out the door.',
    impact: 'Typical revenue at risk: $3,000–$15,000/month for a busy single-location practice.',
    fixes: [
      'AI phone answering that books appointments 24/7',
      'Call routing and overflow coverage',
      'Missed call text-back automation',
      'After-hours scheduling without staff'
    ],
    urgency: 'High'
  },
  {
    id: 'no-shows',
    label: 'No-Shows',
    headline: 'An empty chair costs $150–$400 per slot. It compounds every week.',
    body: 'No-shows aren't random — they're a symptom of a weak reminder and confirmation system. Practices with manual reminder workflows typically see 8–15% no-show rates. Automated, multi-touch reminder systems routinely cut that in half.',
    impact: 'A practice with 5 no-shows/week at $200 average is losing $52,000/year in chair time.',
    fixes: [
      'Automated SMS + email reminder sequences',
      'Confirmation requests with easy rebooking',
      'Recall and reactivation workflows',
      'Waitlist management to fill last-minute gaps'
    ],
    urgency: 'High'
  },
  {
    id: 'slow-followup',
    label: 'Slow Follow-Up',
    headline: 'New patient leads go cold in hours, not days.',
    body: 'Studies show response time under 5 minutes increases conversion by 9x versus responding after 30 minutes. Most dental practices follow up in hours — or never. That gap is where leads become someone else\'s patients.',
    impact: 'If your practice gets 30 new-patient inquiries/month and converts 40%, fixing follow-up speed to 80% adds ~12 new patients/month.',
    fixes: [
      'Immediate auto-response to web and form inquiries',
      'AI-assisted lead follow-up sequences',
      'Same-day call-back workflows',
      'Text-first outreach for faster engagement'
    ],
    urgency: 'High'
  },
  {
    id: 'front-desk',
    label: 'Front Desk Overload',
    headline: 'Overloaded staff drop calls, miss leads, and make booking harder.',
    body: 'When your front desk is managing check-ins, phone calls, insurance questions, and appointment reminders simultaneously — something always gets dropped. The dropped thing is usually the new patient trying to book. Overload creates friction that costs you revenue before patients ever walk in.',
    impact: 'Practices that automate front-desk repetition typically recover 8–15 hours/week of staff time and measurably improve new-patient conversion.',
    fixes: [
      'Automated answers to repetitive patient questions',
      'Online scheduling to reduce inbound call volume',
      'AI chat for off-hours and overflow',
      'Workflow automation for intake and confirmations'
    ],
    urgency: 'Medium-High'
  },
  {
    id: 'scheduling',
    label: 'Scheduling Friction',
    headline: 'If booking feels like work, patients don\'t book.',
    body: 'Phone-only booking is a conversion killer. Patients who can\'t book at 9pm when they\'re thinking about it often don\'t call back during business hours. Scheduling friction is particularly acute for new patients who have no established relationship with your practice.',
    impact: 'Practices that add online self-scheduling typically see 15–30% of bookings happen outside business hours — revenue that was previously lost.',
    fixes: [
      '24/7 online self-scheduling',
      'AI-assisted booking via text or chat',
      'Scheduling integrated with your practice management system',
      'New patient intake automation before the appointment'
    ],
    urgency: 'Medium'
  }
]

const urgencyColor = {
  'High': '#dc2626',
  'Medium-High': '#d97706',
  'Medium': '#2563eb'
}

export default function SolutionsSection() {
  const [active, setActive] = useState('missed-calls')
  const current = solutions.find((s) => s.id === active)

  return (
    <section className="section" id="categories">
      <div className="container">
        <div className="section-heading narrow">
          <span className="eyebrow">Where practices leak money</span>
          <h2>Pick the problem that sounds most familiar.</h2>
          <p className="section-subhead">Each one is a revenue leak. Most practices have more than one.</p>
        </div>

        <div className="solutions-tabs">
          {solutions.map((s) => (
            <button
              key={s.id}
              className={`solutions-tab ${active === s.id ? 'solutions-tab-active' : ''}`}
              onClick={() => setActive(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div className="solution-panel">
          <div className="solution-panel-left">
            <div className="urgency-badge" style={{ '--uc': urgencyColor[current.urgency] }}>
              {current.urgency} urgency
            </div>
            <h3>{current.headline}</h3>
            <p>{current.body}</p>
            <div className="impact-box">
              <strong>Revenue impact</strong>
              <p>{current.impact}</p>
            </div>
          </div>
          <div className="solution-panel-right">
            <p className="fixes-label">What solves this</p>
            <ul className="fixes-list">
              {current.fixes.map((fix) => (
                <li key={fix}>{fix}</li>
              ))}
            </ul>
            <div className="solution-cta">
              <p>Not sure which of these applies most to your practice?</p>
              <Link href="/assessment" className="button button-primary">
                Get my free snapshot → see my top fix
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
