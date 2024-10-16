import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Note } from '../App';

interface ViewNoteProps {
  notes: Note[];
}

const ViewNote: React.FC<ViewNoteProps> = ({ notes }) => {
  const { id } = useParams<{ id: string }>();
  const note = notes.find(n => n.id === id);

  if (!note) {
    return <div>Note not found</div>;
  }

  return (
    <div className="view-note">
      <h1>{note.title}</h1>
      <p className="note-content">{note.content}</p>
      <div className="note-actions">
        <Link to={`/edit/${note.id}`} className="edit-btn">Edit</Link>
        <Link to="/" className="back-btn">Back to Notes</Link>
      </div>
    </div>
  );
}

export default ViewNote;