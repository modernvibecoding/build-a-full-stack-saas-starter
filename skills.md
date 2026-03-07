# Skills & Context — Build a Full-Stack SaaS App

> Next.js 15 starter kit

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 15.2.4 |
| Language | TypeScript | 5 |
| Styling | Tailwind CSS | v4 |
| Runtime | React | 19 |
| Database & Auth | Supabase | — |
| Deployment | Vercel | — |

**Key constraint:** Supabase handles both auth and the database. Do not introduce a second database or a separate auth library.

---

## Coding Standards

### File & Folder Structure
- `app/(auth)/` — login, signup, callback routes
- `app/(app)/` — protected routes requiring authentication
- `components/` — shared UI components
- `lib/supabase/` — Supabase client utilities (`client.ts`, `server.ts`)
- `supabase/` — migrations and seed files

### Naming Conventions
- Components: `PascalCase`
- DB query functions: `get*`, `create*`, `update*`, `delete*` prefix (e.g., `getUserProjects`)
- Route handlers: `GET`, `POST` named exports in `app/api/*/route.ts`
- Environment variables: `NEXT_PUBLIC_*` for client-accessible, unprefixed for server-only

### Auth Patterns
- Use the Supabase server client (`createServerClient`) in Server Components and Route Handlers
- Use the Supabase browser client (`createBrowserClient`) in Client Components only
- Never expose the `service_role` key to the client
- Always redirect unauthenticated users in `middleware.ts` (or `proxy.ts` for Next.js 16)

### Database Rules
- All tables must have Row Level Security (RLS) enabled
- Every RLS policy must be intentional — do not disable RLS to "make it work faster"
- Use `select` with explicit column lists — avoid `select *` in production queries
- Always run independent queries with `Promise.all()`

### Error Handling
- Check for `error` returned by Supabase queries before using `data`
- Display user-facing error messages — never swallow errors silently
- Loading states are required for all async operations

---

## AI Instructions

When generating or refactoring code in this project, follow these rules:

1. **Security first** — Never disable RLS. Never log or expose secrets. Always validate input server-side.
2. **Server vs. client boundary** — Data fetching belongs in Server Components or Route Handlers, not `useEffect`. Use `"use client"` only for interactivity.
3. **Typed queries** — All Supabase query results should be typed. Use the generated types from `supabase/` when available.
4. **No `any`** — Strict TypeScript. Use `unknown` + type guards if the shape is uncertain.
5. **No new packages** — Do not install additional libraries without explicit instruction.
6. **Preserve RLS** — Do not generate SQL that disables or bypasses Row Level Security policies.
7. **Explain schema changes** — Before generating any `ALTER TABLE` or new migration SQL, describe what it does and why.
8. **One concern per function** — DB query functions should only query. Business logic goes in a separate layer.
