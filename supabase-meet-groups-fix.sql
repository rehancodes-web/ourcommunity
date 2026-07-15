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

alter table public.meet_groups enable row level security;
alter table public.group_members enable row level security;

drop policy if exists "Anyone can read meet groups" on public.meet_groups;
create policy "Anyone can read meet groups"
on public.meet_groups for select
using (true);

drop policy if exists "Signed in users can create meet groups" on public.meet_groups;
create policy "Signed in users can create meet groups"
on public.meet_groups for insert
with check (auth.uid() = created_by);

drop policy if exists "Creators can update meet groups" on public.meet_groups;
create policy "Creators can update meet groups"
on public.meet_groups for update
using (auth.uid() = created_by)
with check (auth.uid() = created_by);

drop policy if exists "Anyone can read group members" on public.group_members;
create policy "Anyone can read group members"
on public.group_members for select
using (true);

drop policy if exists "Users can join as themselves" on public.group_members;
create policy "Users can join as themselves"
on public.group_members for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can leave as themselves" on public.group_members;
create policy "Users can leave as themselves"
on public.group_members for delete
using (auth.uid() = user_id);
