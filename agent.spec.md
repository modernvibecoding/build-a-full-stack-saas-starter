# Build a Full-Stack SaaS App — Agent Specification

## What This Project Builds

A complete, production-ready SaaS application with authentication, a relational data model,
CRUD features, and subscription billing. Students start from the schema — not the UI.

## Stack

Next.js 15 (App Router) · TypeScript · Tailwind CSS v4 · Supabase · Drizzle ORM · Polar (billing)

## Student Prompt

Copy and paste this into your AI coding tool:

---

I am building a full-stack SaaS app using Next.js 15, Supabase, Drizzle ORM, and Polar for billing.
The schema file is at `supabase/schema.sql`. Help me build this step by step, starting with the schema.

**Step 1 — Design the schema:**
Before writing any UI, define the data model for my SaaS. My app idea is: [describe your app in one sentence].
Create a `supabase/schema.sql` file with these tables at minimum:
- `profiles` — linked to `auth.users` via trigger, stores: `id`, `display_name`, `plan` (free/pro), `created_at`
- `[your core entity]` — the main "thing" your app manages (e.g. `projects`, `tasks`, `invoices`)
- `subscriptions` — stores Polar subscription data: `user_id`, `polar_subscription_id`, `status`, `plan`

Enable Row Level Security on all tables. Apply the schema with `supabase db push`.

**Step 2 — Wire Supabase auth:**
Set up Supabase Auth with Google OAuth and email magic link. Use the server client in Server
Components and Server Actions. Create a sign-in modal at `?modal=auth` using Next.js intercepting routes.
On sign-up, create a `profiles` row via a Supabase database trigger.

**Step 3 — Build the core CRUD feature:**
Build the main feature of the app: create, read, update, delete for your core entity.
All mutations must use Server Actions in `app/actions/`. Data reads happen in Server Components.
No `useEffect` for fetching. Use Drizzle ORM for all queries.

**Step 4 — Connect billing (Polar):**
Install `@polar-sh/sdk`. Set up a Polar product for the "Pro" plan at $15/month.
Create a `/pricing` page with Free vs Pro tiers. Wire a `/api/webhooks/polar` route that
updates `subscriptions.status` and `profiles.plan` on `subscription.created` and `subscription.updated` events.

---

## Checklist

- [ ] Supabase project created
- [ ] Schema applied (`supabase/schema.sql`)
- [ ] Environment variables configured
- [ ] Auth wired and session persisting
- [ ] Billing connected (Polar)

## Key Files

- `app/page.tsx` — Setup checklist tracker
- `supabase/schema.sql` — Database schema (start here)
- `lib/db.ts` — Drizzle client (configure connection string)
- `app/actions/` — Server Actions directory
- `.env.example` — All required environment variables
