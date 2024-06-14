(function ($,jQuery) {
  $(document).ready(function(){


var idUrl = 'https://api.bibliocommons.com/v1/titles/1017529067?api_key=ehqxke4ubaq3x2e2nm96vhv7';

console.log(idUrl);

$.get(idUrl, function(html) { 
	console.log(html); 
});

});
})(jQuery);


