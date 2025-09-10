// Ensure this runs on Node (needed for fs/dev-local vectorstore)
export const runtime = 'nodejs';
// Optional: always compute on request (no cache)
export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { askKnowledgeBase, RagInputSchema } from '@/ai/flows/rag-flow';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { query } = RagInputSchema.parse(body); // validates shape
    const result = await askKnowledgeBase({ query });
    return NextResponse.json(result, { status: 200 });
  } catch (err: any) {
    console.error('[ask-knowledge-base] error:', err);
    const msg = err?.message ?? 'Bad request';
    return NextResponse.json({ error: msg }, { status: 400 });
  }
}

// (Optional) Handy for quick manual testing in the browser:
// /api/ai/ask-knowledge-base?query=hello
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') ?? '';
  if (!query) return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  const result = await askKnowledgeBase({ query });
  return NextResponse.json(result, { status: 200 });
}
