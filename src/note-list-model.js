(function(exports) {
  function NoteListApp() {
    this.notesArray = [];
  };

  NoteListApp.prototype.addNote = function(note) {
    this.notesArray.push(note)
  };

  NoteListApp.prototype.notes = function() {
    return this.notesArray;
  }

  exports.NoteListApp = NoteListApp;
})(this);
