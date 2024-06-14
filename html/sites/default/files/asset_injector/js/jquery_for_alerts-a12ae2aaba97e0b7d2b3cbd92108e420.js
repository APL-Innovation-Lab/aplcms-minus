(function($, jQuery) {
  $(document).ready(function() {

//console.log('jquery for alerts loaded.');

$('li a').click(function(){
  var hash4 = this.hash;
  $(hash4).attr('open','open');
  $(hash4 + ' h2').addClass('active');
    console.log(hash4);

});


function get_hash() {
	var hash3 = window.location.hash;
    $(hash3).attr('open','open');
}
get_hash();



 $('.apl-expand').click(function(e) {
	console.log('clicked');
		$(this).toggleClass('active');

}); 
 $('.apl-alert-row').click(function(e) {
	console.log('clicked');
		$(this).toggleClass('active');

}); 


    
  });
})(jQuery);