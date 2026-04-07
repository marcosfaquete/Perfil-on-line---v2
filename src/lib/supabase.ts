import { createClient } from '@supabase/supabase-js'

const isDev = process.env.NODE_ENV === 'development'

/** Em `next dev`, permite subir o site sem `.env` (contador/APIs falham com graciosidade). */
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ||
  (isDev ? 'http://127.0.0.1:54321' : '')

const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() ||
  (isDev ? 'dev-placeholder-anon-key' : '')

if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    'Defina NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY no ambiente de build/produção.'
  )
}

if (isDev && !process.env.NEXT_PUBLIC_SUPABASE_URL?.trim()) {
  console.warn(
    '[supabase] NEXT_PUBLIC_SUPABASE_URL ausente — usando http://127.0.0.1:54321. Crie .env.local com as chaves do projeto para dados reais.'
  )
}

export const supabase = createClient(supabaseUrl, supabaseKey)
