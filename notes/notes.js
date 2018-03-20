const fs = require('fs');

const fetchNotes = () => {
  try {
    const noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));

};

const addNote = (title, body) => {
  const notes = fetchNotes();
  const note = {
    title,
    body
  };

  const duplicateNotes = notes.filter(note => note.title === title);

  if (!duplicateNotes.length) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = (title) => {
  const notes = fetchNotes();
  const note = notes.filter(note => note.title === title);
  return note[0];
};

const removeNote = (title) => {
  const notes = fetchNotes();
  const newNotes = notes.filter(note => note.title !== title);
  saveNotes(newNotes);
  return notes.length === newNotes.length ? false : true;
};

const logNote = (note) => {
  console.log('--');
  console.log('Title: ', note.title);
  console.log('Body: ', note.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
 };
