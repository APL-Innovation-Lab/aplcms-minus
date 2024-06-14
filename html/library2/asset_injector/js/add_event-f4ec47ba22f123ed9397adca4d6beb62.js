(function ($,jQuery) {
  $(document).ready(function(){
console.log('hi');
$('#edit-group-movie').css('display','none');
$('#edit-field-central-event-location-wrapper').css('display','none');
$('#edit-field-event-loc').change(function() {
  if($( this ).val() == '3939') {
    $('#edit-field-central-event-location-wrapper').css('display','block');
  } else {
    $('#edit-field-central-event-location-wrapper').css('display','none');
  }
});
$('#edit-field-event-category-tags-').change(function() {
  if($( this ).val() == '1993' || $( this ).val() == '2126') {
    $('#edit-group-movie').css('display','block');
  } else {
    $('#edit-group-movie').css('display','none');
  }
});
$( '.node-form' ).submit(function(e) {
	  var titlee = $('#edit-title-0-value').val();

if(document.getElementById('edit-field-canceled-value').checked) {
  console.log('checked');
  console.log(titlee);
  titlee = titlee.replace("Canceled - ", "");
  console.log(titlee);
  titlee = 'Canceled - ' + titlee;
  console.log(titlee);
  $('#edit-title-0-value').val(titlee);

} else {
  console.log('not checked'); 
  console.log(titlee);
  titlee = titlee.replace("Canceled - ", "");
  console.log(titlee);
  $('#edit-title-0-value').val(titlee);
}

  if($('#edit-field-event-loc').val() == '_none') {
  	if(!$('#edit-field-remote-location-0-target-id').val()){
 	 	alert('Please select a Location or add a Remote Location');
 	 	e.preventDefault();
  	}
  } else {
	  	return;
  }
});
/*
$.getJSON( "/event-categories.json", function( data ) {

    $.each(data, function(key, val) { 
    //console.log(val.tid); 
	$('#edit-field-event-category-tags- option[value=' + val.tid + ']').css('display','none');
    })

});
*/
});
})(jQuery);

