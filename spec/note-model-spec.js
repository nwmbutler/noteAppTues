// function testNoteAppStoresNote() {
// var noteapp = new Noteapp();
//   // it 'adds a new note to the note app'
//   noteapp.addNote('My favourite language is JavaScript')
//   expect(noteapp.text[0]).toBeEqual 'My favourite language is JavaScript'
// }
//

function testNoteAppStoresNote() {
  var noteApp = new NoteApp('My favourite language is JavaScript');
  assert.isTrue(noteApp.note() === 'My favourite language is JavaScript');
};

function testNoteListAppStoresNote() {
  var noteListApp = new NoteListApp();
  const expected_result = ["note 1", "note 2"];
  noteListApp.addNote("note 1")
  noteListApp.addNote("note 2")
  console.log(noteListApp.notes())
  assert.isTrue(noteListApp.notes().length === 2);
  assert.isTrue(noteListApp.notes()[0] === "note 1");
  assert.isTrue(noteListApp.notes()[1] === "note 2");
};

testNoteAppStoresNote();
testNoteListAppStoresNote();