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
