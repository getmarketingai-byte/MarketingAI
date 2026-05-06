import Anthropic from '@anthropic-ai/sdk';

export interface ClientData {
  email: string;
  name: string;
  company?: string;
  industry?: string;
  challenge?: string;
}

export interface MarketingSystems {
  contentCalendar: string;
  outreachSequence: string;
  emailNurture: string;
}

function buildContext(client: ClientData): string {
  const lines = [
    `Client: ${client.name}`,
    `Business: ${client.company || client.name}`,
  ];
  if (client.industry) lines.push(`Industry: ${client.industry}`);
  if (client.challenge) lines.push(`Main marketing challenge: ${client.challenge}`);
  return lines.join('\n');
}

async function generateContentCalendar(anthropic: Anthropic, context: string): Promise<string> {
  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: `${context}

Create a 30-day LinkedIn content calendar with 10 posts across 4 themes. The content should help this business attract their ideal clients on LinkedIn.

Format exactly as:
**Theme 1: [Name]**
- Day 1: [Post hook/title] — [Brief description of what to write about, 1-2 sentences]
- Day 8: [Post hook/title] — [Brief description]

**Theme 2: [Name]**
- Day 2: ...
- Day 9: ...

...and so on, 10 posts total spread across 30 days.

Keep it practical and specific to their industry. Each post hook should be compelling and scroll-stopping.`
    }],
  });
  return response.content[0].type === 'text' ? response.content[0].text : '';
}

async function generateOutreachSequence(anthropic: Anthropic, context: string): Promise<string> {
  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 800,
    messages: [{
      role: 'user',
      content: `${context}

Write a LinkedIn outreach sequence for this business to connect with potential clients. Create 3 messages:

1. **Connection Request** (max 300 characters): A short personalised note to send when requesting to connect. Must feel genuine, not salesy.

2. **First DM** (after connection accepted, max 500 characters): A value-first message that starts a conversation. No pitch yet.

3. **Follow-up DM** (3 days later if no reply, max 400 characters): A gentle follow-up that offers something useful.

Format each clearly with the label, character count, and the message text.`
    }],
  });
  return response.content[0].type === 'text' ? response.content[0].text : '';
}

async function generateEmailNurture(anthropic: Anthropic, context: string): Promise<string> {
  const response = await anthropic.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1500,
    messages: [{
      role: 'user',
      content: `${context}

Write a 3-email nurture sequence for this business to convert leads into clients.

**Email 1 — Welcome/Introduction** (sent immediately when someone joins their list):
Subject line + full email body

**Email 2 — Value Delivery** (sent 3 days later):
Subject line + full email body

**Email 3 — CTA/Offer** (sent 7 days later):
Subject line + full email body

Keep each email conversational, under 300 words, and specific to their industry and challenge. End with a clear next step.`
    }],
  });
  return response.content[0].type === 'text' ? response.content[0].text : '';
}

export async function generateMarketingSystems(client: ClientData): Promise<MarketingSystems> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY environment variable is not set');
  }

  const anthropic = new Anthropic({ apiKey });
  const context = buildContext(client);

  // Generate all 3 systems in parallel for speed
  const [contentCalendar, outreachSequence, emailNurture] = await Promise.all([
    generateContentCalendar(anthropic, context),
    generateOutreachSequence(anthropic, context),
    generateEmailNurture(anthropic, context),
  ]);

  return { contentCalendar, outreachSequence, emailNurture };
}
