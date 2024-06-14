        // Function to make the CORS request
        function makeCorsRequest() {
            var url = 'https://dev-apl-cms.pantheonsite.io/jsonapi/asset_injector_css/asset_injector_css'; // Replace with your actual URL
            var xhr = new XMLHttpRequest();

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    console.log('Success:', xhr.responseText);
                } else {
                    console.error('Request failed. Returned status of ' + xhr.status);
                }
            };

            xhr.onerror = function() {
                console.error('There was an error making the request.');
            };

            try {
                xhr.open('GET', url, true);
                xhr.send();
            } catch (error) {
                console.error('Error during the request:', error);
            }
        }
