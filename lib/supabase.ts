import { createClient } from '@supabase/supabase-js'

// Public/publishable keys - safe to include in client-side code
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://odseifzezcdrovduwiyl.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_sFXGxHoZMlMTEq9v4fq94g__NuFLI7T'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseAnonKey
}
