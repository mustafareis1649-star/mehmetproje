-- Run this once in your Supabase project: Dashboard → SQL Editor → New query
-- → paste this whole file → Run.

-- Tracks each user's subscription status. A row only exists once someone has
-- subscribed at least once; "no row" == not subscribed. Paddle webhooks
-- (added later, once Paddle is wired up) are what INSERT/UPDATE this table —
-- nothing in the frontend writes to it directly.
create table if not exists public.subscriptions (
  user_id uuid primary key references auth.users (id) on delete cascade,
  status text not null default 'inactive',        -- 'active' | 'canceled' | 'past_due' | 'inactive'
  plan text,                                        -- 'pro' | 'team'
  paddle_subscription_id text,
  paddle_customer_id text,
  current_period_end timestamptz,
  updated_at timestamptz not null default now()
);

-- Row Level Security: a user can only ever read their own row. Nothing can
-- INSERT/UPDATE from the browser — that will only happen via a trusted
-- server-side webhook handler using the service_role key (which bypasses RLS).
alter table public.subscriptions enable row level security;

create policy "Users can read their own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- No insert/update/delete policies are defined on purpose — the table is
-- read-only from the client. Only your Paddle webhook handler (using the
-- service_role key, server-side) can write to it.
