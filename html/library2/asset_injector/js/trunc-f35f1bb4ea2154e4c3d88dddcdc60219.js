function trunc(selector, maxLength) {
  var elements = document.querySelectorAll(selector);
  elements.forEach(function(element) {
    for (let child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE || child.nodeType === Node.ELEMENT_NODE) {
        var textContent = child.textContent || child.innerText;
        if (textContent.length > maxLength) {
          var truncated = textContent.substr(0, maxLength);
          truncated = truncated.substr(0, Math.min(truncated.length, truncated.lastIndexOf(" "))) + '...';
          if (child.nodeType === Node.TEXT_NODE) {
            child.textContent = truncated;
          } else {
            child.innerText = truncated;
          }
        }
      }
    }
  });
}
var myTrunc = 32;
console.log('trunc: ' + myTrunc);
trunc('.breadcrumbs', myTrunc);