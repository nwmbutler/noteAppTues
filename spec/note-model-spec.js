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
  noteListApp.addNote("note 1")
  noteListApp.addNote("note 2")
  assert.isTrue(noteListApp.notes()[0] === "note 1");
  assert.isTrue(noteListApp.notes()[1] === "note 2");
};

function testNoteListAppStoresNoteListModel() {
  var noteListApp = new NoteListApp();
  noteListApp.createSingleNote("Favourite drink: seltzer")

  assert.isTrue(noteListApp.noteApp.note() === "Favourite drink: seltzer")
}

function testModelViewOutputsHTML() {
  var noteListApp = new NoteListApp();
  var modelView = new ModelView(noteListApp);
  noteListApp.createSingleNote("Favourite drink: seltzer")
  assert.isTrue(modelView.displayView() === '<ul><li><div>Favourite drink: seltzer</div></li></ul>')
}

testNoteAppStoresNote();
testNoteListAppStoresNote();
testNoteListAppStoresNoteListModel();
testModelViewOutputsHTML();
