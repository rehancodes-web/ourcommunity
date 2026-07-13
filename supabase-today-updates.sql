-- Run this in Supabase SQL Editor for today's put1meet data-side updates.
-- UI changes such as header collapse, profile layout, and icons are website code
-- and still need a GitHub/Netlify deploy. This SQL covers the Supabase part.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  name text,
  age integer,
  gender text,
  email text,
  instagram text,
  bio text,
  places_visited integer not null default 0,
  preferred_vibe text,
  random_requests text,
  site_role text not null default 'member',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles add column if not exists username text;
alter table public.profiles add column if not exists name text;
alter table public.profiles add column if not exists age integer;
alter table public.profiles add column if not exists gender text;
alter table public.profiles add column if not exists email text;
alter table public.profiles add column if not exists instagram text;
alter table public.profiles add column if not exists bio text;
alter table public.profiles add column if not exists places_visited integer not null default 0;
alter table public.profiles add column if not exists preferred_vibe text;
alter table public.profiles add column if not exists random_requests text;
alter table public.profiles add column if not exists site_role text not null default 'member';
alter table public.profiles add column if not exists created_at timestamptz not null default now();
alter table public.profiles add column if not exists updated_at timestamptz not null default now();

create table if not exists public.follows (
  follower_id uuid not null references auth.users(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);

create table if not exists public.notification_reads (
  user_id uuid not null references auth.users(id) on delete cascade,
  notification_id text not null,
  seen_at timestamptz not null default now(),
  primary key (user_id, notification_id)
);

alter table public.profiles enable row level security;
alter table public.follows enable row level security;
alter table public.notification_reads enable row level security;

drop policy if exists "Anyone can read profiles" on public.profiles;
create policy "Anyone can read profiles" on public.profiles for select using (true);
drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile" on public.profiles for insert with check (auth.uid() = id);
drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile" on public.profiles for update using (auth.uid() = id) with check (auth.uid() = id);

drop policy if exists "Anyone can read follows" on public.follows;
create policy "Anyone can read follows" on public.follows for select using (true);
drop policy if exists "Users can follow as themselves" on public.follows;
create policy "Users can follow as themselves" on public.follows for insert with check (auth.uid() = follower_id);
drop policy if exists "Users can unfollow as themselves" on public.follows;
create policy "Users can unfollow as themselves" on public.follows for delete using (auth.uid() = follower_id);

drop policy if exists "Users can read their own notification reads" on public.notification_reads;
create policy "Users can read their own notification reads" on public.notification_reads for select using (auth.uid() = user_id);
drop policy if exists "Users can mark their own notifications read" on public.notification_reads;
create policy "Users can mark their own notifications read" on public.notification_reads for insert with check (auth.uid() = user_id);
drop policy if exists "Users can update their own notification reads" on public.notification_reads;
create policy "Users can update their own notification reads" on public.notification_reads for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

update public.profiles
set site_role = 'owner'
where lower(email) = 'rehanzn2007@gmail.com';

drop policy if exists "Owners can update profile roles" on public.profiles;
create policy "Owners can update profile roles"
on public.profiles
for update
using (
  auth.uid() = id
  or exists (
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
