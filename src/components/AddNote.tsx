import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AddNoteProps {
  addNote: (title: string, content: string) => void;
}

const AddNote: React.FC<AddNoteProps> = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNote(title, content);
    navigate('/');
  };

  return (
    <div>
      <h1>Add Note</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}

export default AddNote;