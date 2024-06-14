(function ($,jQuery) {
  $(document).ready(function(){
var whichOne = 'hi8';
var buttonCheck = '<a id="checkButton" href="#">' + whichOne + '</a>';
 
$( '#edit-field-custom-link-0-value' ).before( buttonCheck );


      $("#checkButton").click(function (e) {
          e.preventDefault();
          var mURL = 'https://api.bibliocommons.com/v1/titles?library=austin&search_type=custom&q=identifier%3A%289780393651485%29&api_key=ehqxke4ubaq3x2e2nm96vhv7';
//$.get( $( '#edit-field-custom-link-0-value' ).val(), function( data ) {
$.get( mURL, function( data ) {

console.log(data);

});

});

  });
})(jQuery);





