document.addEventListener('DOMContentLoaded', function() {
    var createJsonLink = function() {
        // Get the current URL
        var currentUrl = window.location.href;

        // Remove the 'admin' part of the path and append '.json' before the parameters
        var baseUrl = currentUrl.replace('/admin/', '/');
        var jsonUrl = baseUrl.replace(/(aplapi-types|aplapi-taxonomies)(?=\?)/, '$1.json');

        // Create a new anchor element
        var link = document.createElement('a');
        link.href = jsonUrl;
        link.textContent = 'Access JSON File';

        // Find the first form with the class 'views-exposed-form'
        var form = document.querySelector('.views-exposed-form');

        // Check if the form exists
        if (form) {
            // Insert the link after the form
            form.parentNode.insertBefore(link, form.nextSibling);
        } else {
            console.warn('Form with class "views-exposed-form" not found.');
        }
    };

    // Call the function to create and insert the link
    createJsonLink();
});
