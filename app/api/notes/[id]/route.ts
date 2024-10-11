import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/app/lib/prisma'; // Assuming you have a shared Prisma instance

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const noteId = params.id;

  try {
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json(note);
  } catch (error) {
    console.error('Failed to fetch note:', error);
    return NextResponse.json({ error: 'Failed to fetch note' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const noteId = params.id;
  const { content } = await request.json();

  try {
    const note = await prisma.note.upsert({
      where: { id: noteId },
      update: { content },
      create: {
        id: noteId,
        content,
      },
    });

    return NextResponse.json(note);
  } catch (error) {
    console.error('Failed to save note:', error);
    return NextResponse.json({ error: 'Failed to save note' }, { status: 500 });
  }
}