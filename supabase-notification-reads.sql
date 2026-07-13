-- Run this in Supabase SQL Editor once.
-- It stores which notifications a user has opened, so the badge can stay cleared across devices.

create table if not exists public.notification_reads (
  user_id uuid not null references auth.users(id) on delete cascade,
  notification_id text not null,
  seen_at timestamptz not null default now(),
  primary key (user_id, notification_id)
);

alter table public.notification_reads enable row level security;

drop policy if exists "Users can read their own notification reads" on public.notification_reads;
create policy "Users can read their own notification reads"
on public.notification_reads
for select
using (auth.uid() = user_id);

drop policy if exists "Users can mark their own notifications read" on public.notification_reads;
create policy "Users can mark their own notifications read"
on public.notification_reads
for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update their own notification reads" on public.notification_reads;
create policy "Users can update their own notification reads"
on public.notification_reads
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
