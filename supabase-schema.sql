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
