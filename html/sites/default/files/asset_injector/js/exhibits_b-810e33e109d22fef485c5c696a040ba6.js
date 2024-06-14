(function($, jQuery) {
  $(document).ready(function() {

      var path = location.pathname;
      if(path.includes('future')) {
        $('#apl-current').removeClass('active');
      $('#apl-future').addClass('active');
      } else if(path.includes('past')) {

        $('#apl-current').removeClass('active');
      $('#apl-past').addClass('active');
      }
      
    $('a.more').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings().toggleClass('active');
    });
});
})(jQuery);