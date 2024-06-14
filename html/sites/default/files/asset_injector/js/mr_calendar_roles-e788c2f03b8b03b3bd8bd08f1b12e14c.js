(function($, jQuery) {
$(document).ready(function() {

var is_admin = 0;
$.getJSON("/roles.json?t=" + Date.now(), function(json9) {
  var my_roles = [];
  var k;
  for (k = 0; k < json9.length; k++) {
    j_roles = json9[k].roles;
    my_roles.push(j_roles);
    if ( j_roles.includes( 'meeting_rooms_administrator' )  || j_roles.includes( 'administrator' ) ) {
      var is_admin = 1;
      console.log('is admin');
			document.body.classList.add("is_admin");
		} else {
      console.log('not admin');
    }
  }
//console.log(j_roles);
});
});
})(jQuery);