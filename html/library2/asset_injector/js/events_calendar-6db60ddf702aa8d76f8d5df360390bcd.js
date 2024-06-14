(function($, jQuery) {
  $(document).ready(function() {
    
        currenthtml = $('.fc-event')[0];
		
		console.log('current html');
		

setInterval(function() {

        latesthtml = $('.fc-event')[0];


        if(currenthtml != latesthtml) {
			currenthtml = $('.fc-event')[0];

var container = $('.fc-scroller');
var element = $('.fc-event-container:first');

container.animate({
    scrollTop: container.scrollTop = container.scrollTop() + element.offset().top - container.offset().top - 60
}, {
    duration: 500,
    specialEasing: {
        width: 'linear',
        height: 'easeOutBounce'
    },
    complete: function (e) {
        console.log("animation completed");
    }
});
      

        } 
    }, 500);
    


	  
  });
})(jQuery);

	 

	  
	  
	  