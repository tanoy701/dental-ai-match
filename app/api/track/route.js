import { NextResponse } from 'next/server'
import { createSupabaseServerClient } from '@/lib/supabase/server'

export async function POST(request) {
  try {
    const body = await request.json()

    // Basic validation
    if (!body.event || !body.page) {
      return NextResponse.json({ ok: false }, { status: 400 })
    }

    const supabase = createSupabaseServerClient()

    const payload = {
      event: body.event,
      page: body.page,
      ts: body.ts ? new Date(body.ts).toISOString() : new Date().toISOString(),
      data: {
        depth: body.depth,
        section: body.section,
        target: body.target,
        source: body.source,
        label: body.label,
        time_ms: body.time_ms,
        max_scroll_pct: body.max_scroll_pct,
        form_started: body.form_started,
        form_submitted: body.form_submitted,
        sections_viewed: body.sections_viewed
      }
    }

    await supabase.from('page_events').insert(payload)

    return NextResponse.json({ ok: true })
  } catch {
    // Never error loudly — tracking must never break the site
    return NextResponse.json({ ok: false }, { status: 200 })
  }
}
