import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import SearchBar from './components/SearchBar';

export interface Note {
  id: string;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setNotes(JSON.parse(savedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (title: string, content: string) => {
    const newNote: Note = {
      id: Date.now().toString(),
      title,
      content,
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const editNote = (id: string, title: string, content: string) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, title, content } : note
    ));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Router>
      <div className="app">
        <nav>
          <ul>
            <li><Link to="/">Notes</Link></li>
            <li><Link to="/add">Add Note</Link></li>
          </ul>
        </nav>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <Routes>
          <Route path="/" element={<NoteList notes={filteredNotes} deleteNote={deleteNote} />} />
          <Route path="/add" element={<AddNote addNote={addNote} />} />
          <Route path="/view/:id" element={<ViewNote notes={notes} />} />
          <Route path="/edit/:id" element={<EditNote notes={notes} editNote={editNote} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;