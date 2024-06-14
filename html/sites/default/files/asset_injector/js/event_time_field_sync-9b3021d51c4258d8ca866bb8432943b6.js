(function ($,jQuery) {
  $(document).ready(function(){
console.log('hellloo1a');

$('#edit-field-slr-time-start-0-value-date').change(function() {

var n_date = $('#edit-field-slr-time-start-0-value-date').val();
var n_date2 = $('#edit-field-slr-time-end-0-value-date');
n_date2.val(n_date);	

});
      
$('#edit-field-slr-time-end-0-value-date').change(function() {

var n_date = $('#edit-field-slr-time-start-0-value-date');
var n_date2 = $('#edit-field-slr-time-end-0-value-date').val();
n_date.val(n_date2);	

});

});
})(jQuery);


