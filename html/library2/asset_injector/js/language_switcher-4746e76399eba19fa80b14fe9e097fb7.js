(function($, jQuery) {
  $(document).ready(function() {
  

var h_lang = $(".block-language-blocklanguage-interface");
console.log(h_lang);
h_lang.hide();

var new_lang = $('#new_lang');

h_lang.css('display','none');

var h_lang_contents = h_lang.html();
new_lang.html(h_lang_contents);


})})(jQuery);