'use client';

import React, { useState, useEffect, useCallback } from 'react';
import RichTextEditor from '../RichTextEditor/RichTextEditor';
import { debounce } from 'lodash';

interface NoteEditorProps {
  noteId: string;
}

const NoteEditor: React.FC<NoteEditorProps> = ({ noteId }) => {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await fetch(`/api/notes/${noteId}`);
        if (response.ok) {
          const note = await response.json();
          setContent(note.content);
        } else {
          console.error('Failed to fetch note');
          setContent(''); // Set empty content if note not found
        }
      } catch (error) {
        console.error('Error fetching note:', error);
        setContent(''); // Set empty content on error
      }
    };

    fetchNote();
  }, [noteId]);

  const saveNote = useCallback(async (contentToSave: string) => {
    try {
      const response = await fetch(`/api/notes/${noteId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: contentToSave }),
      });

      if (!response.ok) {
        console.error('Failed to save note');
      }
    } catch (error) {
      console.error('Error saving note:', error);
    }
  }, [noteId]);

  const debouncedSave = useCallback(debounce(saveNote, 1000), [saveNote]);

  const handleChange = (newContent: string) => {
    setContent(newContent);
    debouncedSave(newContent);
  };

  if (content === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-lg">
        <RichTextEditor content={content} onChange={handleChange} />
      </div>
    </div>
  );
};

export default NoteEditor;