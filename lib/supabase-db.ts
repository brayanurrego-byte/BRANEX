import { supabase, isSupabaseConfigured } from './supabase'
import type { Portfolio } from './branex-types'

// Summary info for listing portfolios (without full data)
export interface PortfolioSummary {
  id: string
  name: string
  password_hash: string | null
  created_at: string
  updated_at: string
  holdings_count: number
  total_value: number
}

// Fetch all portfolios (summary only for the selection screen)
export async function fetchPortfolios(): Promise<PortfolioSummary[]> {
  if (!isSupabaseConfigured()) return []

  const { data, error } = await supabase
    .from('portfolios')
    .select('id, name, password_hash, created_at, updated_at, data')
    .order('updated_at', { ascending: false })

  if (error) {
    console.error('Error fetching portfolios:', error)
    return []
  }

  return (data || []).map(row => {
    const portfolioData = row.data as Portfolio | null
    const holdings = portfolioData?.holdings || []
    const totalValue = holdings.reduce(
      (sum: number, h: { currentPrice: number; quantity: number }) => sum + h.currentPrice * h.quantity, 0
    )
    return {
      id: row.id,
      name: row.name,
      password_hash: row.password_hash,
      created_at: row.created_at,
      updated_at: row.updated_at,
      holdings_count: holdings.length,
      total_value: totalValue,
    }
  })
}

// Fetch a single portfolio with full data
export async function fetchPortfolioData(id: string): Promise<Portfolio | null> {
  if (!isSupabaseConfigured()) return null

  const { data, error } = await supabase
    .from('portfolios')
    .select('data')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching portfolio data:', error)
    return null
  }

  return (data?.data as Portfolio) || null
}

// Save portfolio to Supabase (upsert)
export async function savePortfolio(portfolio: Portfolio, passwordHash?: string | null): Promise<boolean> {
  if (!isSupabaseConfigured()) return false

  const { error } = await supabase
    .from('portfolios')
    .upsert({
      id: portfolio.id,
      name: portfolio.name,
      password_hash: passwordHash !== undefined ? passwordHash : null,
      data: portfolio,
      updated_at: new Date().toISOString(),
    }, { onConflict: 'id' })

  if (error) {
    console.error('Error saving portfolio:', error)
    return false
  }
  return true
}

// Create a new portfolio in Supabase
export async function createPortfolioInDB(portfolio: Portfolio, passwordHash: string | null): Promise<boolean> {
  if (!isSupabaseConfigured()) return false

  const { error } = await supabase
    .from('portfolios')
    .insert({
      id: portfolio.id,
      name: portfolio.name,
      password_hash: passwordHash,
      data: portfolio,
      created_at: portfolio.createdAt,
      updated_at: new Date().toISOString(),
    })

  if (error) {
    console.error('Error creating portfolio:', error)
    return false
  }
  return true
}

// Delete a portfolio from Supabase
export async function deletePortfolioFromDB(id: string): Promise<boolean> {
  if (!isSupabaseConfigured()) return false

  const { error } = await supabase
    .from('portfolios')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting portfolio:', error)
    return false
  }
  return true
}

// Get the password hash for a portfolio
export async function getPortfolioPasswordHash(id: string): Promise<string | null> {
  if (!isSupabaseConfigured()) return null

  const { data, error } = await supabase
    .from('portfolios')
    .select('password_hash')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching password hash:', error)
    return null
  }

  return data?.password_hash || null
}
