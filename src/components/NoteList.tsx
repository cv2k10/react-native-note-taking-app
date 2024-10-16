import React from 'react';
import { Link } from 'react-router-dom';
import { Note } from '../App';

interface NoteListProps {
  notes: Note[];
  deleteNote: (id: string) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, deleteNote }) => {
  return (
    <div>
      <h1>Notes</h1>
      {notes.length === 0 ? (
        <p>No notes found. Add a new note to get started!</p>
      ) : (
        <ul className="note-list">
          {notes.map(note => (
            <li key={note.id} className="note-item">
              <Link to={`/view/${note.id}`}>
                <h3>{note.title}</h3>
                <p className="note-content">{note.content.substring(0, 100)}...</p>
              </Link>
              <div className="note-actions">
                <Link to={`/edit/${note.id}`} className="edit-btn">Edit</Link>
                <button onClick={() => deleteNote(note.id)} className="delete-btn">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add" className="add-note-btn">Add Note</Link>
    </div>
  );
}

export default NoteList;