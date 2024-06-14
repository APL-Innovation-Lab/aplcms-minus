(function($, jQuery) {
  $(document).ready(function() { 

var catalog_action = 'https://austin.bibliocommons.com/v2/search?query=';
var website_action = '/search-website?search=';


$( "#apl_search" ).submit(function( event ) {
  event.preventDefault();
	var radio_opt = $("input[name='apl_search_opt']:checked").val();
	var search_term = $('#apl_search_input').val();


  if(radio_opt == 'catalog') {
	which_search = catalog_action;
  } else {
	which_search = website_action;
  }
  window.location.href = which_search + search_term;
});
	
	
  });
})(jQuery);