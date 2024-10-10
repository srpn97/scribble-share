const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  try {
    // Create a new note
    const newNote = await prisma.note.create({
      data: {
        title: 'Test Note',
        content: 'This is a test note created with Prisma',
      },
    });
    console.log('Created new note:', newNote);

    // Fetch all notes
    const allNotes = await prisma.note.findMany();
    console.log('All notes:', allNotes);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();