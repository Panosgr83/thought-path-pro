
drop policy if exists "Anyone can submit an inquiry" on public.inquiries;

create policy "Anyone can submit a valid inquiry"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (
    char_length(name)  between 1 and 120
    and char_length(phone) between 4 and 40
    and char_length(email) between 5 and 200
    and email like '%@%.%'
    and (topic is null or char_length(topic) <= 80)
    and (preferred_time is null or char_length(preferred_time) <= 80)
    and (message is null or char_length(message) <= 4000)
  );
