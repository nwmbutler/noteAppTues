// function testNoteAppStoresNote() {
// var noteapp = new Noteapp();
//   // it 'adds a new note to the note app'
//   noteapp.addNote('My favourite language is JavaScript')
//   expect(noteapp.text[0]).toBeEqual 'My favourite language is JavaScript'
// }
//

function testNoteAppStoresNote() {
  var noteApp = new NoteApp();
  noteApp.addNote('My favourite language is JavaScript')
  assert.isTrue(noteApp.text === 'My favourite language is JavaScript');
};

testNoteAppStoresNote();
