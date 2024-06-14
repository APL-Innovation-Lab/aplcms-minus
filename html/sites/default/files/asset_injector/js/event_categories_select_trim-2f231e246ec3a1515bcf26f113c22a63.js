console.log('Event Categories select trim');
document.addEventListener('DOMContentLoaded', function() {
    var selectElement = document.getElementById('edit-field-event-category-tags-');

    // Check if the select element exists
    if (selectElement) {
        var options = selectElement.options;
        var removeAfterIndex = -1;

        // Loop through the options to find the index of "Writing"
        for (var i = 0; i < options.length; i++) {
            if (options[i].text.trim() === 'Writing') {
                removeAfterIndex = i;
                break;
            }
        }

        // Remove options after the "Writing" option
        if (removeAfterIndex !== -1) {
            for (var j = options.length - 1; j > removeAfterIndex; j--) {
                selectElement.remove(j);
            }
        }
    } else {
   //     console.warn('Select element not found on the page.');
    }
});
