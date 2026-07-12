-- Run this in Supabase SQL Editor once.
-- It stores followers/following in Supabase instead of local browser storage.

create table if not exists public.follows (
  follower_id uuid not null references auth.users(id) on delete cascade,
  following_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (follower_id, following_id),
  check (follower_id <> following_id)
);

alter table public.follows enable row level security;

drop policy if exists "Anyone can read follows" on public.follows;
create policy "Anyone can read follows"
on public.follows
for select
using (true);

drop policy if exists "Users can follow as themselves" on public.follows;
create policy "Users can follow as themselves"
on public.follows
for insert
with check (auth.uid() = follower_id);

drop policy if exists "Users can unfollow as themselves" on public.follows;
create policy "Users can unfollow as themselves"
on public.follows
for delete
using (auth.uid() = follower_id);

update public.profiles
set site_role = 'owner'
where lower(email) = 'rehanzn2007@gmail.com';

drop policy if exists "Owners can update profile roles" on public.profiles;
create policy "Owners can update profile roles"
on public.profiles
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
