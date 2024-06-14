console.log('div_to_iframe');
// Function to convert divs to iframes
function convertDivsToIframes() {
  // Get all div elements with class 'biblio-list'
  var divs = document.querySelectorAll('div.biblio-list');

  // Loop through each div and convert it to an iframe
  divs.forEach(function(div) {
    // Create a new iframe element
    var iframe = document.createElement('iframe');

    // Copy all attributes from the div to the new iframe
    Array.from(div.attributes).forEach(function(attribute) {
      iframe.setAttribute(attribute.name, attribute.value);
    });

    // Set the class for iframe
    iframe.className = 'biblio-list';

    // Insert the iframe into the DOM where the div is
    div.parentNode.insertBefore(iframe, div);

    // Remove the original div from the DOM
    div.parentNode.removeChild(div);
  });
}

// Call the function to perform the conversion
convertDivsToIframes();
