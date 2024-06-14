(function($, jQuery) {
  $(document).ready(function() {
    
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};    
var id = getUrlParameter('id');
var ac = getUrlParameter('ac');

	  $.getJSON(encodeURI('/slr/indy?id=' + id + '&ac=' + ac), function(json3) {
	 
	 if(json3.length > 0) {
		$('#edit-actions').prepend('<div style="width:100%" id="rez_deets"><h1>'+ json3[0].name + '</h1><div class="start-time">'+ json3[0].start + ' to '+ json3[0].end + '</div></div><br>');
	 } else {
		  $('.form-submit').css('display','none');
		  alert('Your reservation was not found or it has expired.');
	 }
	});


$('.form-submit').val('Confirm reservation');
$('#edit-plugin-fetcher-source').val('http://library.austintexas.gov/slr-con/' + id + '/' + ac);
$('html').css('opacity','1');

  });
})(jQuery);