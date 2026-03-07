# Plan — Build a Full-Stack SaaS App

> Next.js 15 starter kit

---

## Project Goal

Build a working full-stack SaaS application: user authentication, a database-backed feature, a paywall or access tier, and a deployed production URL. The deliverable is a real SaaS skeleton that a paying customer could use.

---

## Current Phase

> Update this section as you progress through the course.

- [ ] **Phase 1 — Foundation**: Auth, DB schema, and environment variables configured
- [ ] **Phase 2 — Core Feature**: Primary SaaS feature built and wired to the database
- [ ] **Phase 3 — Access Control**: Auth guards, protected routes, and role checks in place
- [ ] **Phase 4 — Billing** *(optional)*: Subscription or payment flow integrated
- [ ] **Phase 5 — Ship**: Deployed to Vercel with production environment variables set

**Active phase:** Phase 1 — Foundation

---

## Todo List

### Foundation
- [ ] Configure Supabase project (URL + anon key in `.env.local`)
- [ ] Set up auth (email/password, OAuth, or magic link)
- [ ] Define and apply initial DB schema (tables, RLS policies)
- [ ] Confirm authenticated routes redirect unauthenticated users

### Core Feature
- [ ] Define the primary user action (create, read, update, delete)
- [ ] Build the UI for the core feature
- [ ] Wire up Supabase queries (read and write)
- [ ] Handle loading, error, and empty states

### Access Control
- [ ] Protect all `/app` routes behind auth check
- [ ] Apply Row Level Security (RLS) so users only see their own data
- [ ] Test: unauthenticated user cannot access protected pages or data

### Billing (optional)
- [ ] Integrate payment provider (e.g., Stripe, Polar)
- [ ] Gate premium feature behind subscription check
- [ ] Webhook handler for subscription events

### Ship
- [ ] Set all production environment variables in Vercel
- [ ] Deploy and verify auth + DB work in production
- [ ] Smoke-test the critical user flow end-to-end

---

## Notes

> Add decisions, blockers, or context here as you work.
