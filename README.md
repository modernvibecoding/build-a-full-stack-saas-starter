# build-a-full-stack-saas-starter

A Next.js starter for building a full-stack SaaS application with auth, database, and optional billing.

## Tech Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- [Supabase](https://supabase.com) (auth + database)

## Getting Started

```bash
npm install
cp .env.example .env.local   # fill in your Supabase credentials
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key |

## Database Setup

```bash
supabase link --project-ref <your-project-ref>
supabase db push
```

Schema: `supabase/schema.sql`

## What to Build

- Wire up Supabase auth (email, OAuth, or magic link)
- Build one complete CRUD feature with RLS policies
- Add a protected route that redirects unauthenticated users
- Deploy to Vercel with production environment variables set
