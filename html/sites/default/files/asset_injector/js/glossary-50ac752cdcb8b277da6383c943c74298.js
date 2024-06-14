window.onload = function() {
  var selectElement = document.getElementById('edit-subject');
  var options = selectElement.options;

  for (var i = 0; i < options.length; i++) {
    if (options[i].value == 'All') {
      selectElement.remove(i);
      break;
    }
  }
}
