window.onload = function() {
      try {
        var url_string = (window.location.href).toLowerCase();
        var url = new URL(url_string);
        var staff = url.searchParams.get("staff");
        
        console.log(staff);
          
          if(staff != 'apl') {
              var elem = document.querySelector('#webform-submission-contact-acquisitions-cataloging-add-form');

// Get HTML content
var html = elem.innerHTML;

// Set HTML content
elem.innerHTML = 'This page is for APL staff only.';
          }
          
          
      } catch (err) {
        console.log("Issues with Parsing URL Parameter's - " + err);
      }
}

