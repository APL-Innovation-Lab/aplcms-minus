console.log('ahc_search');
(function($, jQuery) {
  $(document).ready(function() {
    replaceElementTag('#ahc-booklist', '<iframe />');

function replaceElementTag(targetSelector, newTagString) {
    $(targetSelector).each(function(){
        var newElem = $(newTagString, {html: $(this).html()});
        $.each(this.attributes, function() {
            newElem.attr(this.name, this.value);
        });
        $(this).replaceWith(newElem);
    });
}


    $("input[name='apl_search_opt']").change(function() {
		  var radio_opt = $("input[name='apl_search_opt']:checked").val();

      if (radio_opt == 'website') {
        $("#apl_search_input").attr("placeholder", "Search AHC Digital Collections");
      } else {
        $("#apl_search_input").attr('placeholder', 'Search AHC books');
      }
    });
    var ii_form2 = $('#apl_search');
	
ii_form2.submit(function( event ) {
	  event.preventDefault();
	  var radio_opt = $("input[name='apl_search_opt']:checked").val();
console.log('radio:' + radio_opt);
      var ii2 = $('#apl_search_input');
      var searchString2 = ii2.val();
      if (radio_opt == 'website') {
        document.location = 'https://ahc.access.preservica.com/?s=' + searchString2;
        return false;
      } else {
        document.location = "https://austin.bibliocommons.com/search?custom_query=anywhere%3A(" + searchString2 + ")+++collection%3A%22Austin+History+Center+-+Library+Use+Only%22&suppress=true&custom_edit=false";
        return false;
      }
    });
  });
})(jQuery);