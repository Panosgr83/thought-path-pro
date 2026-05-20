
create table public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  topic text,
  preferred_time text,
  message text,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

-- Allow anyone (anonymous visitors) to submit the form
create policy "Anyone can submit an inquiry"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

-- No SELECT policy = no public reads (admins use service role / dashboard)
