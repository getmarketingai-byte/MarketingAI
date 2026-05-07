/**
 * Centralised config/env var validation.
 * Returns typed config or throws with a helpful error.
 */

export interface PipelineConfig {
  apolloApiKey: string
  phantombusterApiKey: string
  linkedinSessionCookie: string
  connectionPhantomId: string
  dmPhantomId: string
  dailyConnectionLimit: number
  dailyDmLimit: number
  cronSecret: string
}

export function getConfig(): PipelineConfig {
  const missing: string[] = []

  function require(key: string): string {
    const val = process.env[key]
    if (!val) missing.push(key)
    return val || ''
  }

  const config = {
    apolloApiKey: process.env.APOLLO_API_KEY || '', // optional — falls back to PROSPECT_LIST_JSON
    phantombusterApiKey: require('PHANTOMBUSTER_API_KEY'),
    linkedinSessionCookie: require('LINKEDIN_LI_AT'),
    connectionPhantomId: require('PHANTOMBUSTER_CONNECTION_PHANTOM_ID'),
    dmPhantomId: require('PHANTOMBUSTER_DM_PHANTOM_ID'),
    dailyConnectionLimit: parseInt(process.env.DAILY_CONNECTION_LIMIT || '20'),
    dailyDmLimit: parseInt(process.env.DAILY_DM_LIMIT || '15'),
    cronSecret: process.env.CRON_SECRET || '',
  }

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}. ` +
        'See README.md for setup instructions.'
    )
  }

  return config
}
