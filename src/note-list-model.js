(function(exports) {
  function NoteListApp() {
    this.notesArray = [];
    this.noteApp = null
  };

  NoteListApp.prototype.addNote = function(note) {
    this.notesArray.push(note)
  };

  NoteListApp.prototype.notes = function() {
    return this.notesArray;
  }

  NoteListApp.prototype.createSingleNote = function(note) {
    this.noteApp = new NoteApp(note);
  }

  exports.NoteListApp = NoteListApp;
})(this);

// class NoteListApp {
//    constructor() {
//      this.notesArray = [];
//    }
//
//    addNote(note) {
//      this.notesArray.push(note)
//    }
//
//    notes() {
//      return this.notesArray
//    };
// };
