-- Run this in Supabase SQL Editor once.
-- It stores inbox-created group chats in Supabase so selected members can see them on every device.

create table if not exists public.inbox_group_chats (
  id text primary key,
  name text not null,
  created_by uuid not null references auth.users(id) on delete cascade,
  member_ids uuid[] not null,
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (array_length(member_ids, 1) >= 2)
);

create index if not exists inbox_group_chats_member_ids_idx
on public.inbox_group_chats using gin (member_ids);

alter table public.inbox_group_chats enable row level security;

drop policy if exists "Members can read inbox group chats" on public.inbox_group_chats;
create policy "Members can read inbox group chats"
on public.inbox_group_chats
for select
using (
  auth.uid() = any(member_ids)
);

drop policy if exists "Users can create inbox group chats" on public.inbox_group_chats;
create policy "Users can create inbox group chats"
on public.inbox_group_chats
for insert
with check (
  auth.uid() = created_by
  and auth.uid() = any(member_ids)
);

drop policy if exists "Creators can update inbox group chats" on public.inbox_group_chats;
create policy "Creators can update inbox group chats"
on public.inbox_group_chats
for update
using (
  auth.uid() = created_by
)
with check (
  auth.uid() = created_by
  and auth.uid() = any(member_ids)
);
