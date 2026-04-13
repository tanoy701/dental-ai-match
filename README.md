# Match My Practice v3

A redesigned mobile-first homepage and a Supabase-connected assessment form for dental practices.

## What changed
- New homepage focused on trust, conversion, and mobile readability
- Streamlined assessment form with clearer dental workflows
- API route that writes assessment submissions to Supabase
- Success page after submission

## Local setup
1. Open the project folder.
2. Install dependencies:
   npm install
3. Copy `.env.example` to `.env.local`
4. Add your Supabase values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
5. Start local dev:
   npm run dev

## Deploy on Vercel
Add the same environment variables in Vercel Project Settings.

## Supabase setup
1. Create a new table using `supabase-schema.sql`.
2. In Supabase, go to SQL Editor and run that file.
3. Confirm inserts work from the site.

## How submission works
- The form posts to `/api/assessment`.
- The route validates core fields.
- The server uses `@supabase/supabase-js` to insert into `practice_assessments`.
- On success the browser redirects to `/success`.

## Notes
- This version uses the Supabase service role key on the server only. Do not expose it in browser code.
- If Supabase env vars are missing, the API returns a configuration error.
