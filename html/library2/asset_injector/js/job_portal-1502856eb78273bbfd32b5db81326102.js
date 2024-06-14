(function ($,jQuery) {
  $(document).ready(function(){
console.log('hhh')
var hash = window.location.hash;
if(hash) {
$(hash + ' h2').addClass('active')
$(hash + ' h4').addClass('active')
}

$('h2').click(function() {
    $( this ).toggleClass('active');
});

$('h4').click(function() {
    $( this ).toggleClass('active');
});

$('.jobportal-menu a').click(function() {
    
var hash2 = (this).attr(href);
console.log(hash2 + ' is my hash2');

var dd = hash2 + ' h2';
var dd2 = hash2 + ' h4';
console.log(dd);
$(dd).addClass('active');
$(dd2).addClass('active');
});

});
})(jQuery);