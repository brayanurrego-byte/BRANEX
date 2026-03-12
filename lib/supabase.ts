import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

let _supabase: SupabaseClient | null = null

export const supabase = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    if (!_supabase) {
      if (!supabaseUrl || !supabaseAnonKey) {
        throw new Error('Supabase is not configured')
      }
      _supabase = createClient(supabaseUrl, supabaseAnonKey)
    }
    return (_supabase as unknown as Record<string, unknown>)[prop as string]
  },
})

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey
}
