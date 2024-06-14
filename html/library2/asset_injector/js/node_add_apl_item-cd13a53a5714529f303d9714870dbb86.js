(function ($,jQuery) {
  $(document).ready(function(){
  	
  	
  	var currentURL = window.location.protocol + "//" + window.location.host + window.location.pathname;    
      var currentURL2 = window.location.pathname;    
      var newURL = currentURL + '?destination=node/add/apl_item';   
      var newURL2 = currentURL2 + '?destination=node/add/apl_item';   
      console.log(newURL.toString()); 
      console.log(newURL2.toString()); 
      window.history.pushState({ path: newURL }, '', newURL);

      $('form.node-form').attr('action',newURL2.toString());
      

});
})(jQuery);