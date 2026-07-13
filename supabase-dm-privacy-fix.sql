-- Run this in Supabase SQL Editor.
-- It removes old direct-message rows that did not have a receiver and tightens
-- the message read policy so DMs only show for the sender or receiver.

delete from public.messages
where chat_key like 'dm-%'
  and recipient_id is null;

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
