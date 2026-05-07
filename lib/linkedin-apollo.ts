/**
 * Apollo.io API client for prospect discovery.
 * Free tier: 50 export credits/month.
 * Docs: https://docs.apollo.io
 */

export interface Prospect {
  firstName: string
  lastName: string
  title: string
  company: string
  companySize: string
  industry: string
  linkedinUrl: string
  city: string
  state: string
  country: string
}

const APOLLO_BASE = 'https://api.apollo.io/api/v1'

const TARGET_TITLES = [
  'Marketing Manager',
  'Head of Marketing',
  'Marketing Director',
  'Business Owner',
  'Founder',
  'CEO',
  'Managing Director',
  'Digital Marketing Manager',
  'Growth Manager',
]

const TARGET_INDUSTRIES = [
  'Marketing and Advertising',
  'Financial Services',
  'Real Estate',
  'Health, Wellness and Fitness',
  'Professional Training & Coaching',
  'Management Consulting',
  'Law Practice',
  'Construction',
]

export async function searchProspects(
  apiKey: string,
  page = 1,
  perPage = 25
): Promise<Prospect[]> {
  const resp = await fetch(`${APOLLO_BASE}/mixed_people/search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      'X-Api-Key': apiKey,
    },
    body: JSON.stringify({
      page,
      per_page: perPage,
      person_titles: TARGET_TITLES,
      person_locations: ['Australia'],
      organization_num_employees_ranges: ['1,200'],
      organization_industry_tag_names: TARGET_INDUSTRIES,
    }),
  })

  if (!resp.ok) {
    const text = await resp.text()
    throw new Error(`Apollo API error ${resp.status}: ${text}`)
  }

  const data = await resp.json()
  const people: any[] = data.people || []

  return people
    .filter((p: any) => p.linkedin_url)
    .map((p: any) => {
      const org = p.organization || {}
      let linkedinUrl = p.linkedin_url || ''
      if (linkedinUrl && !linkedinUrl.startsWith('http')) {
        linkedinUrl = 'https://linkedin.com/in/' + linkedinUrl
      }
      return {
        firstName: p.first_name || '',
        lastName: p.last_name || '',
        title: p.title || '',
        company: org.name || '',
        companySize: String(org.num_employees || ''),
        industry: org.industry || '',
        linkedinUrl,
        city: p.city || '',
        state: p.state || '',
        country: p.country || 'Australia',
      }
    })
}
