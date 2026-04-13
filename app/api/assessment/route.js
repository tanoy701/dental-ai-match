import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'

function normalizeUrl(url = '') {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `https://${url}`
}

export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.practiceName || !body.contactName || !body.email) {
      return NextResponse.json({ error: 'Practice name, contact name, and email are required.' }, { status: 400 })
    }

    const supabase = createSupabaseServerClient()

    const payload = {
      practice_name: body.practiceName,
      website: normalizeUrl(body.website),
      contact_name: body.contactName,
      contact_role: body.contactRole || null,
      email: body.email,
      phone: body.phone || null,
      practice_type: body.practiceType || null,
      locations: body.locations || null,
      challenges: Array.isArray(body.challenges) ? body.challenges : [],
      goals: Array.isArray(body.goals) ? body.goals : [],
      budget_range: body.budgetRange || null,
      current_tools: Array.isArray(body.currentTools) ? body.currentTools : [],
      timeline: body.timeline || null,
      notes: body.notes || null,
      recommended_categories: Array.isArray(body.recommendedCategories) ? body.recommendedCategories : [],
      source: 'website_assessment'
    }

    const { data, error } = await supabase
      .from('practice_assessments')
      .insert(payload)
      .select('id')
      .single()

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ ok: true, id: data.id })
  } catch (error) {
    return NextResponse.json({ error: error.message || 'Unexpected server error.' }, { status: 500 })
  }
}
