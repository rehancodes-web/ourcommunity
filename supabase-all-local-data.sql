-- Run this in Supabase SQL Editor once.
-- It creates tables for the remaining local browser data:
-- suggested spots, custom groups, group membership, reviews, uploads, messages, follows, and roles.

create table if not exists public.community_spots (
  id text primary key,
  created_by uuid references auth.users(id) on delete set null,
  data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.meet_groups (
  id text primary key,
  spot_id text not null,
  created_by uuid references auth.users(id) on delete set null,
  data jsonb not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.group_members (
  group_id text not null references public.meet_groups(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (group_id, user_id)
);

create table if not exists public.meet_reviews (
  id uuid primary key default gen_random_uuid(),
  group_id text not null,
  user_id uuid references auth.users(id) on delete set null,
  data jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.meet_uploads (
  id uuid primary key default gen_random_uuid(),
  group_id text not null,
  user_id uuid references auth.users(id) on delete set null,
  photo text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.follows (
  follower_id uuid not null references auth.users(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  chat_key text not null,
  sender_id uuid not null references auth.users(id) on delete cascade,
  recipient_id uuid references public.profiles(id) on delete cascade,
  sender_name text not null,
  body text not null,
  created_at timestamptz not null default now()
);

create index if not exists meet_groups_spot_id_idx on public.meet_groups (spot_id);
create index if not exists group_members_user_id_idx on public.group_members (user_id);
create index if not exists meet_reviews_group_id_idx on public.meet_reviews (group_id);
create index if not exists meet_uploads_group_id_idx on public.meet_uploads (group_id);
create index if not exists messages_chat_key_created_at_idx on public.messages (chat_key, created_at);
create index if not exists messages_sender_id_idx on public.messages (sender_id);
create index if not exists messages_recipient_id_idx on public.messages (recipient_id);

alter table public.community_spots enable row level security;
alter table public.meet_groups enable row level security;
alter table public.group_members enable row level security;
alter table public.meet_reviews enable row level security;
alter table public.meet_uploads enable row level security;
alter table public.follows enable row level security;
alter table public.messages enable row level security;

drop policy if exists "Anyone can read community spots" on public.community_spots;
create policy "Anyone can read community spots" on public.community_spots for select using (true);
drop policy if exists "Signed in users can create community spots" on public.community_spots;
create policy "Signed in users can create community spots" on public.community_spots for insert with check (auth.uid() = created_by);
drop policy if exists "Creators can update community spots" on public.community_spots;
create policy "Creators can update community spots" on public.community_spots for update using (auth.uid() = created_by) with check (auth.uid() = created_by);

drop policy if exists "Anyone can read meet groups" on public.meet_groups;
create policy "Anyone can read meet groups" on public.meet_groups for select using (true);
drop policy if exists "Signed in users can create meet groups" on public.meet_groups;
create policy "Signed in users can create meet groups" on public.meet_groups for insert with check (auth.uid() = created_by);
drop policy if exists "Creators can update meet groups" on public.meet_groups;
create policy "Creators can update meet groups" on public.meet_groups for update using (auth.uid() = created_by) with check (auth.uid() = created_by);

drop policy if exists "Anyone can read group members" on public.group_members;
create policy "Anyone can read group members" on public.group_members for select using (true);
drop policy if exists "Users can join as themselves" on public.group_members;
create policy "Users can join as themselves" on public.group_members for insert with check (auth.uid() = user_id);
drop policy if exists "Users can leave as themselves" on public.group_members;
create policy "Users can leave as themselves" on public.group_members for delete using (auth.uid() = user_id);

drop policy if exists "Anyone can read meet reviews" on public.meet_reviews;
create policy "Anyone can read meet reviews" on public.meet_reviews for select using (true);
drop policy if exists "Signed in users can post reviews" on public.meet_reviews;
create policy "Signed in users can post reviews" on public.meet_reviews for insert with check (auth.uid() = user_id);

drop policy if exists "Anyone can read meet uploads" on public.meet_uploads;
create policy "Anyone can read meet uploads" on public.meet_uploads for select using (true);
drop policy if exists "Signed in users can upload meet photos" on public.meet_uploads;
create policy "Signed in users can upload meet photos" on public.meet_uploads for insert with check (auth.uid() = user_id);

drop policy if exists "Anyone can read follows" on public.follows;
create policy "Anyone can read follows" on public.follows for select using (true);
drop policy if exists "Users can follow as themselves" on public.follows;
create policy "Users can follow as themselves" on public.follows for insert with check (auth.uid() = follower_id);
drop policy if exists "Users can unfollow as themselves" on public.follows;
create policy "Users can unfollow as themselves" on public.follows for delete using (auth.uid() = follower_id);

drop policy if exists "Users can read their direct messages" on public.messages;
create policy "Users can read their direct messages" on public.messages for select using (
  sender_id = auth.uid()
  or recipient_id = auth.uid()
  or (recipient_id is null and auth.uid() is not null)
);
drop policy if exists "Users can send their own messages" on public.messages;
create policy "Users can send their own messages" on public.messages for insert with check (
  sender_id = auth.uid()
  and length(trim(body)) > 0
);

update public.profiles
set site_role = 'owner'
where lower(email) = 'rehanzn2007@gmail.com';

drop policy if exists "Owners can update profile roles" on public.profiles;
create policy "Owners can update profile roles" on public.profiles
for update
using (
  exists (
    select 1
    from public.profiles owner_profile
    where owner_profile.id = auth.uid()
      and (
        owner_profile.site_role = 'owner'
        or lower(owner_profile.email) = 'rehanzn2007@gmail.com'
      )
  )
)
with check (true);
