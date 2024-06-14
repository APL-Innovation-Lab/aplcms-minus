(function($, jQuery) {
  $(document).ready(function() {
    function getSearchParams(k) {
      var p = {};
      location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(s, k, v) {
        p[k] = v
      })
      return k ? p[k] : p;
    }
    var my_zone = getSearchParams('zone');
	
	
    if (my_zone == 'virtual') {
      $('#edit-field-zone-1686').attr('checked', 'checked');
	}
	

  });
})(jQuery);