(function($, jQuery) {
  $(document).ready(function() {
  
  
$( '#apl-we-recommend' ).click(function(e) {
  
	  e.preventDefault();
	  $( '#apl-virtual + .apl_submenus, #apl-about + .apl_submenus, #apl-events + .apl_submenus, #apl-locations + .apl_submenus, #apl-youth + .apl_submenus, #apl-ask-us + .apl_submenus, #apl-virtual, #apl-about, #apl-events, #apl-locations, #apl-youth, #apl-ask-us' ).removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
	  $(this).toggleClass('active');
	  
});
  
$( '#apl-virtual' ).click(function(e) {
	  e.preventDefault();
	  $( '#apl-we-recommend + .apl_submenus, #apl-about + .apl_submenus, #apl-events + .apl_submenus, #apl-locations + .apl_submenus, #apl-youth + .apl_submenus, #apl-ask-us + .apl_submenus,#apl-we-recommend, #apl-about, #apl-events,#apl-locations, #apl-youth, #apl-ask-us' ).removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
  	  $(this).toggleClass('active');

	  
});
  
$( '#apl-about' ).click(function(e) {
	  e.preventDefault();
	  $( '#apl-we-recommend + .apl_submenus, #apl-virtual + .apl_submenus, #apl-events + .apl_submenus, #apl-locations + .apl_submenus, #apl-youth + .apl_submenus, #apl-ask-us + .apl_submenus,#apl-we-recommend, #apl-virtual, #apl-events,#apl-locations, #apl-youth, #apl-ask-us ' ).removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
	  
});
  
$( '#apl-events' ).click(function(e) {
	  e.preventDefault();
	  $( '#apl-we-recommend + .apl_submenus, #apl-virtual + .apl_submenus, #apl-about + .apl_submenus, #apl-locations + .apl_submenus, #apl-youth + .apl_submenus, #apl-ask-us + .apl_submenus,#apl-we-recommend, #apl-virtual, #apl-about,#apl-locations, #apl-youth, #apl-ask-us' ).removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
  	  $(this).toggleClass('active');

	  
});
  
$( '#apl-locations' ).click(function(e) {
	  e.preventDefault();
	  $( '#apl-we-recommend + .apl_submenus, #apl-virtual + .apl_submenus, #apl-about + .apl_submenus, #apl-events + .apl_submenus, #apl-youth + .apl_submenus, #apl-ask-us + .apl_submenus,#apl-we-recommend, #apl-virtual, #apl-about,#apl-events, #apl-youth, #apl-ask-us' ).removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
	  $(this).toggleClass('active');

	  
});
  
$( '#apl-youth' ).click(function(e) {
	  e.preventDefault();
	  $( '#apl-we-recommend + .apl_submenus, #apl-virtual + .apl_submenus, #apl-about + .apl_submenus, #apl-events + .apl_submenus, #apl-locations + .apl_submenus, #apl-ask-us + .apl_submenus,#apl-we-recommend, #apl-virtual , #apl-about,#apl-events, #apl-locations , #apl-ask-us ').removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
	    	  $(this).toggleClass('active');
  
});
  
$( '#apl-ask-us' ).click(function(e) {
	  e.preventDefault();
	  $( '#apl-we-recommend + .apl_submenus, #apl-virtual + .apl_submenus, #apl-about + .apl_submenus, #apl-events + .apl_submenus, #apl-locations + .apl_submenus, #apl-youth + .apl_submenus,#apl-we-recommend, #apl-virtual, #apl-about,#apl-events , #apl-locations, #apl-youth' ).removeClass('active');
	  $(this).siblings( '.apl_submenus' ).toggleClass('active');
	    	  $(this).toggleClass('active');

	  
});

   
  });
})(jQuery);