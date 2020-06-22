// Takes a note list model upon instantiation

(function(exports) {
  function ModelView(noteListApp) {
    this.noteListApp = noteListApp
  };

  ModelView.prototype.displayView = function() {
    this.noteListApp.noteApp.note()
  };


  exports.ModelView = ModelView;
})(this);
