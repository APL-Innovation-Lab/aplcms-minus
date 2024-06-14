document.addEventListener('DOMContentLoaded', function() {
  var selectField = document.querySelector('#edit-cat');

  if (selectField) {
    selectField.addEventListener('change', function() {
      var path = this.value;
      if (path) {
        window.location.href = '/taxonomy/term/' + path;
      }
    });
  }
});
