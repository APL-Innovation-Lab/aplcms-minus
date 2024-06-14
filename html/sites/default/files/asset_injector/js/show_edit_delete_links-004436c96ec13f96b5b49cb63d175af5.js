(function($, jQuery) {
  $(document).ready(function() {
		$.getJSON("/roles.json?t="+ Date.now(), function(json9) {
		  var is_admin = 0;
          for (var k = 0; k < json9.length; k++) {
            j_roles = json9[k].roles;
			if (j_roles.includes('item_editor')) {
				is_admin = 1;
				$('.apl-links').css('display','block');
			}
          }
		});
    });
})(jQuery);