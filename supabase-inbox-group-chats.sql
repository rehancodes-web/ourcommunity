-- Run this in Supabase SQL Editor once.
-- It stores inbox-created group chats in Supabase so selected members can see them on every device.

create table if not exists public.inbox_group_chats (
  id text primary key,
  name text not null,
  created_by uuid not null references auth.users(id) on delete cascade,
  member_ids uuid[] not null,
  request_ids uuid[] not null default '{}'::uuid[],
  data jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (array_length(member_ids, 1) >= 1 and (array_length(member_ids, 1) + coalesce(array_length(request_ids, 1), 0)) >= 2)
);

alter table public.inbox_group_chats
add column if not exists request_ids uuid[] not null default '{}'::uuid[];

alter table public.inbox_group_chats
drop constraint if exists inbox_group_chats_member_ids_check;

alter table public.inbox_group_chats
drop constraint if exists inbox_group_chats_member_request_check;

alter table public.inbox_group_chats
add constraint inbox_group_chats_member_request_check
check (array_length(member_ids, 1) >= 1 and (array_length(member_ids, 1) + coalesce(array_length(request_ids, 1), 0)) >= 2);

create index if not exists inbox_group_chats_member_ids_idx
on public.inbox_group_chats using gin (member_ids);

create index if not exists inbox_group_chats_request_ids_idx
on public.inbox_group_chats using gin (request_ids);

alter table public.inbox_group_chats enable row level security;

drop policy if exists "Members can read inbox group chats" on public.inbox_group_chats;
create policy "Members can read inbox group chats"
on public.inbox_group_chats
for select
using (
  auth.uid() = any(member_ids)
  or auth.uid() = any(request_ids)
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
drop policy if exists "Creators and requested users can update inbox group chats" on public.inbox_group_chats;
create policy "Creators and requested users can update inbox group chats"
on public.inbox_group_chats
for update
using (
  auth.uid() = created_by
  or auth.uid() = any(request_ids)
)
with check (
  auth.uid() = created_by
  or auth.uid() = any(member_ids)
);
