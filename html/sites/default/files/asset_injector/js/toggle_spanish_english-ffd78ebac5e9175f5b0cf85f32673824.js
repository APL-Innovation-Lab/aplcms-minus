(function($, jQuery) {
  $(document).ready(function() {
    $('#ahc-button-en').click(function(e) {
		      e.preventDefault();
			  console.log('english selected');

		$('#ahc-en').css('display','block');
		$('#ahc-es').css('display','none');
	});    
	$('#ahc-button-es').click(function(e) {
		      e.preventDefault();
			  console.log('spanish selected');

		$('#ahc-es').css('display','block');
		$('#ahc-en').css('display','none');
	});
	
});
})(jQuery);