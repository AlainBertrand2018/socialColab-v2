// src/app/api/ai/reindex/route.ts
import { NextResponse } from 'next/server';
import { /* export this from rag-flow.ts */ indexKnowledgeBase } from '@/ai/flows/rag-flow';

export async function POST() {
  await indexKnowledgeBase();
  return NextResponse.json({ ok: true });
}
