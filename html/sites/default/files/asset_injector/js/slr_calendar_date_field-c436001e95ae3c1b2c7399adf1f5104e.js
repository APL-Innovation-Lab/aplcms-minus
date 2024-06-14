window.onload = function() {
    var dateField = document.querySelector('#edit-date');

    dateField.addEventListener('change', function() {
        var selectedDate = new Date(this.value);

        // Format the date into 'YYYY-MM-DD' format
        var year = selectedDate.getFullYear();
        var month = ('0' + (selectedDate.getMonth() + 1)).slice(-2);  // Months are 0-based in JavaScript
        var day = ('0' + (selectedDate.getDate() + 1)).slice(-2);

        var formattedDate = year + '-' + month + '-' + day;
				console.log(formattedDate);

        window.location = '/slr/calendar?date=' + formattedDate;
    });
};
