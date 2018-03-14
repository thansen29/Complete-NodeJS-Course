const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('Note created');
    notes.logNote(note);
  } else {
    console.log("You already have a note with this title!");
  }
} else if (command === 'list') {
  console.log(notes.getAll());
} else if (command === 'read') {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('Note found');
    notes.logNote(note);
  } else {
    console.log('note not found');
  }
} else if (command === 'remove') {
  const removed = notes.removeNote(argv.title);
  console.log(removed ? 'Note Removed' : 'Note doesnt exist' );
} else {
  console.log('Command not recognized');
}
