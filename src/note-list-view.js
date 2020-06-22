// Takes a note list model upon instantiation

(function(exports) {
  function ModelView(noteListApp) {
    this.noteListApp = noteListApp;
  };

  ModelView.prototype.displayView = function() {  
    if (this.noteListApp.noteApp == null) {
      return null;
    } else {
      var note = this.noteListApp.noteApp.note();
      return `<ul><li><div>${note}</div></li></ul>`;
    } 
  };

  exports.ModelView = ModelView;
})(this);