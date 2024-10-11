// app/api/notes/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const noteId = request.nextUrl.searchParams.get('id');

  if (!noteId) {
    return NextResponse.json({ success: false, error: 'Note ID is required' }, { status: 400 });
  }

  try {
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note) {
      return NextResponse.json({ success: false, error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      note: {
        id: note.id,
        content: note.content,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt
      }
    });
  } catch (error) {
    console.error('Failed to fetch note:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch note' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const { id, content } = await request.json();

  if (!id) {
    return NextResponse.json({ success: false, error: 'Note ID is required' }, { status: 400 });
  }

  try {
    const note = await prisma.note.upsert({
      where: { id },
      update: { content, updatedAt: new Date() },
      create: {
        id,
        content,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    return NextResponse.json({ 
      success: true, 
      note: {
        id: note.id,
        content: note.content,
        createdAt: note.createdAt,
        updatedAt: note.updatedAt
      }
    });
  } catch (error) {
    console.error('Failed to save note:', error);
    return NextResponse.json({ success: false, error: 'Failed to save note' }, { status: 500 });
  }
}