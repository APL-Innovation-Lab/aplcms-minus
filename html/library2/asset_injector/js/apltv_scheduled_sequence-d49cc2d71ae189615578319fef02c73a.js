(function($, jQuery) {
  $(document).ready(function() {
    function getSearchParams(k) {
      var p = {};
      location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) {
        p[k] = v
      })
      return k ? p[k] : p;
    }
    var channel = getSearchParams('channel');
	if(channel) {
//		$('#edit-field-sch-seq-channel-' + channel).attr('checked','checked');
		
  	$('#edit-field-sch-seq-channel option[value="' + channel + '"]').prop("selected", true);
		$('#edit-field-sch-seq-channel option[value="_none"]').prop("selected", false);
		
	}
	
	
		  $('#edit-title-0-value').val('Scheduled Sequence ' + Date.now());
	  $('#edit-title-wrapper').css('display','none');
	  
  });
})(jQuery);