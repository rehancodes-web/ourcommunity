-- Run this in Supabase SQL Editor once.
-- It stores DMs and group chat messages in Supabase so other devices can see them.

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  chat_key text not null,
  sender_id uuid not null references auth.users(id) on delete cascade,
  recipient_id uuid references public.profiles(id) on delete cascade,
  sender_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists messages_chat_key_created_at_idx
on public.messages (chat_key, created_at);

create index if not exists messages_sender_id_idx
on public.messages (sender_id);

create index if not exists messages_recipient_id_idx
on public.messages (recipient_id);

alter table public.messages enable row level security;

drop policy if exists "Users can read their direct messages" on public.messages;
create policy "Users can read their direct messages"
on public.messages
for select
using (
  sender_id = auth.uid()
  or recipient_id = auth.uid()
  or (
    recipient_id is null
    and chat_key like 'custom-group-%'
    and auth.uid() is not null
  )
);

drop policy if exists "Users can send their own messages" on public.messages;
create policy "Users can send their own messages"
on public.messages
for insert
with check (
  sender_id = auth.uid()
  and length(trim(body)) > 0
);
