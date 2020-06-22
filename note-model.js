(function(exports) {
  function NoteApp() {
    this.text = '';
  };

  NoteApp.prototype.addNote = function(note) {
  this.text = note;
};

  exports.NoteApp = NoteApp;
})(this);
