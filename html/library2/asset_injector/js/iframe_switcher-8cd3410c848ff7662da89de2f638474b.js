(function ($,jQuery) {
  $(document).ready(function(){
  console.log('loaded');
$( '.switchy' ).each(function() {
   	var mysrc = $( this ).attr('realsrc');
	  console.log(mysrc);

  $( this ).parent().append( '<iframe class="iffy-frame" src="' + mysrc + '"></iframe>');
});

});
})(jQuery);