(function($, jQuery) {
  $(document).ready(function() {
	  
	/* how to get URL parameters */
    function getSearchParams(k) {
      var p = {};
      location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) {
        p[k] = v
      })
      return k ? p[k] : p;
    }
    var channel = getSearchParams('channel');
	if(channel) {
		console.log('The channel is: ' + channel);
	}
	/* how to set a checkbox based on a URL parameter */
	if(channel) {
		$('#edit-field-sch-seq-channel-' + channel).attr('checked','checked');
	}
	
	/* how to set the page Title */
	document.title = 'Styleguide | Austin Public Library';
	
	/* how to set the Title field automatically and hide it */
	$('#edit-title-0-value').val('Scheduled Sequence ' + Date.now());
	$('#edit-title-wrapper').css('display','none');
	  
  });
})(jQuery);