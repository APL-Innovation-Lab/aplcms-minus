


(function($, jQuery) {
      $(document).ready(function() {
          

          $('#apl_video').prepend('<iframe class="apltv-iffy" allow="autoplay" allowfullscreen></iframe>')

          var my_video = $('#apl_video').attr('data-url');
        //  var my_video = "https://www.youtube.com/embed/" + my_video + "?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
          var my_video = "https://www.youtube.com/embed/" + my_video + "?rel=0&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1"
         $('.apltv-iffy').attr('src', my_video);

      });
    })(jQuery);

