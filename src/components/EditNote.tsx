import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Note } from '../App';

interface EditNoteProps {
  notes: Note[];
  editNote: (id: string, title: string, content: string) => void;
}

const EditNote: React.FC<EditNoteProps> = ({ notes, editNote }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const note = notes.find(n => n.id === id);
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [id, notes]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      editNote(id, title, content);
      navigate('/');
    }
  };

  return (
    <div className="edit-note">
      <h1>Edit Note</h1>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditNote;