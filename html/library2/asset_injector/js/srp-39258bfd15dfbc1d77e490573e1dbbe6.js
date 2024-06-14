(function($, jQuery) {
  $(document).ready(function() {

var k_slides = document.getElementsByClassName('views_slideshow_slide');
var m = 0;
var l = k_slides.length;
k_slides[m].classList.add('active');
	
$('.views_slideshow_controls_text_previous').click(function(e){
	k_slides[m].classList.remove('active');
	if(m > 0) {
		m--;
	} else {
		m = l - 1;
	}
	e.preventDefault();
	k_slides[m].classList.add('active');
	
});
	
$('.views_slideshow_controls_text_next').click(function(e){
	k_slides[m].classList.remove('active');
	if(m < (l - 1)) {
		m++;
	} else {
		m = 0;
	}
	e.preventDefault();
	k_slides[m].classList.add('active');
	
});
	
	
	
	
  });
})(jQuery);