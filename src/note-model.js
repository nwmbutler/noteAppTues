(function(exports) {
  function NoteApp(note) {
    this.text = note;
  };

  NoteApp.prototype.note = function() {
    return this.text;
  };

  exports.NoteApp = NoteApp;
})(this);
