create extension if not exists pgcrypto;

create table if not exists public.practice_assessments (
  id uuid primary key default gen_random_uuid(),
  practice_name text not null,
  website text,
  contact_name text not null,
  contact_role text,
  email text not null,
  phone text,
  practice_type text,
  locations text,
  challenges text[] default '{}',
  goals text[] default '{}',
  budget_range text,
  current_tools text[] default '{}',
  timeline text,
  notes text,
  recommended_categories text[] default '{}',
  source text default 'website_assessment',
  created_at timestamptz not null default now()
);

create index if not exists practice_assessments_created_at_idx
  on public.practice_assessments (created_at desc);

-- Behavioral tracking events
create table if not exists public.page_events (
  id uuid primary key default gen_random_uuid(),
  event text not null,
  page text not null,
  ts timestamptz not null default now(),
  data jsonb default '{}',
  created_at timestamptz not null default now()
);

create index if not exists page_events_event_idx on public.page_events (event);
create index if not exists page_events_page_idx on public.page_events (page);
create index if not exists page_events_created_at_idx on public.page_events (created_at desc);

-- View: funnel drop-off summary (run in Supabase SQL editor)
-- select
--   page,
--   count(*) filter (where event = 'page_view') as views,
--   count(*) filter (where event = 'form_start') as form_starts,
--   count(*) filter (where event = 'form_submit') as form_submits,
--   count(*) filter (where event = 'upsell_click') as upsell_clicks,
--   round(count(*) filter (where event = 'form_start')::numeric /
--     nullif(count(*) filter (where event = 'page_view'), 0) * 100, 1) as start_rate_pct
-- from public.page_events
-- group by page
-- order by views desc;
