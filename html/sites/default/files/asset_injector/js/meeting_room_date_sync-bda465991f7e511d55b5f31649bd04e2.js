(function ($,jQuery) {
  $(document).ready(function(){
	  
	  
var b_date = $('#edit-field-date-0-value-date').val();
var b_start = $('#edit-field-slr-time-start-0-value-date');
var b_end = $('#edit-field-slr-time-end-0-value-date');

	b_start.val(b_date).css('display','none');		
	b_end.val(b_date).css('display','none');
	
document.querySelector('#edit-field-date-0-value-date').addEventListener('change', function(event) {
  var b_date = $('#edit-field-date-0-value-date').val();

	b_start.val(b_date);		
	b_end.val(b_date);		
});

});
})(jQuery);