const { PrismaClient } = require('@prisma/client');
const { createId } = require('@paralleldrive/cuid2');

const prisma = new PrismaClient();

async function main() {
  try {
    // Attempt to connect to the database
    await prisma.$connect();
    console.log('Successfully connected to the database');

    // Create a new note
    const newNote = await prisma.note.create({
      data: {
        id: createId(),
        content: 'This is a test note created with Prisma',
      },
    });
    console.log('Created new note:', newNote);

    // Fetch all notes
    const allNotes = await prisma.note.findMany();
    console.log('All notes:', allNotes);

    // Update the note
    const updatedNote = await prisma.note.update({
      where: { id: newNote.id },
      data: { content: 'This note has been updated' },
    });
    console.log('Updated note:', updatedNote);

    // Delete the note
    const deletedNote = await prisma.note.delete({
      where: { id: newNote.id },
    });
    console.log('Deleted note:', deletedNote);

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();