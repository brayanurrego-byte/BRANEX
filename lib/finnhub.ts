/**
 * Get the Finnhub API key.
 * Priority: environment variable (platform-level) > profile key (user-level)
 */
export function getFinnhubApiKey(profileKey?: string): string {
  return process.env.NEXT_PUBLIC_FINNHUB_API_KEY || profileKey || ''
}
