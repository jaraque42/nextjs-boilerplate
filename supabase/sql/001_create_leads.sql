create extension if not exists pgcrypto;

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nombre text not null,
  email text not null,
  tipo_negocio text,
  paginas text,
  idioma text,
  objetivo text,
  plazo text,
  presupuesto text,
  source text,
  user_agent text,
  ip text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_email_idx on public.leads (email);

alter table public.leads enable row level security;

-- Sin autenticación, lo más seguro es NO exponer la tabla al cliente.
-- No creamos policies para anon; las inserciones se hacen desde el servidor con la Service Role Key.

