-- ============================================
-- BRANEX - Schema para Supabase
-- Ejecuta este SQL en el SQL Editor de Supabase
-- ============================================

-- Tabla de portafolios
create table if not exists portfolios (
  id text primary key,
  name text not null,
  password_hash text,
  data jsonb not null default '{}',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Habilitar Row Level Security
alter table portfolios enable row level security;

-- Politica para permitir acceso anonimo completo
-- (ya que no usamos autenticacion, solo contraseña por portafolio)
create policy "Allow anonymous read" on portfolios
  for select using (true);

create policy "Allow anonymous insert" on portfolios
  for insert with check (true);

create policy "Allow anonymous update" on portfolios
  for update using (true) with check (true);

create policy "Allow anonymous delete" on portfolios
  for delete using (true);

-- Indice para busquedas rapidas
create index if not exists idx_portfolios_updated_at on portfolios (updated_at desc);
