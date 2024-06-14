
# Cross-Origin Resource Sharing (CORS) in Drupal

## Overview

Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers to prevent malicious websites from accessing resources and data from another domain without permission. CORS policies allow web applications to specify which domains can access resources on a server. In the context of Drupal, configuring CORS is essential for enabling web applications from different origins to interact with your site.

## Configuring CORS in Drupal

Drupal allows configuring CORS settings through the `services.yml` file. This file contains parameters that define which domains are allowed to access resources, which HTTP headers can be used, and which methods are allowed among other settings.

### Editing `services.yml`

1. Locate your `services.yml` file. For a typical Drupal installation, this is found in the `sites/default` folder.
2. Open `services.yml` and search for the `cors.config` parameters. If they don't exist, you may need to add them under the `parameters` section.

### Setting CORS Parameters

Here is our current development configuration for CORS in the `services.yml` file:

```yaml
parameters:
  cors.config:
    enabled: true
    # Specify allowed headers, like 'x-allowed-header'.
    allowedHeaders: ['*']
    # Specify allowed request methods, specify ['*'] to allow all possible ones.
    allowedMethods: ['*']
    # Configure requests allowed from specific origins.
    allowedOrigins: ['http://localhost:3000', 'https://dev-site.pantheon.io']
    # Sets the Access-Control-Expose-Headers header.
    exposedHeaders: false
    # Sets the Access-Control-Max-Age header.
    maxAge: 10000
    # Sets the Access-Control-Allow-Credentials header.
    supportsCredentials: false
```

Note: Previously, the config had "true" for the `exposedHeaders` parameter, but it needs to be either `false` or an array of values, and not a wildcard.

### Creating a Test Page

To verify CORS functionality, create a simple HTML page that makes a request to your Drupal site on Pantheon.

1. **Create HTML File**: Create a new file named `test-cors.html`.
2. **Add JavaScript**: Inside the HTML file, add JavaScript to make an AJAX request to a resource on your Drupal site.

Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>CORS Test</title>
</head>
<body>
    <script>
        fetch('https://dev-site.pantheon.io/api/resource', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
    </script>
</body>
</html>
```

Replace `https://dev-site.pantheon.io/api/resource` with the actual URL of the resource you want to test.

### Inspecting Headers Using Firefox Developer Tools

To inspect the HTTP headers and verify if CORS is configured properly:

1. **Open the Test Page**: Open your `test-cors.html` in Firefox.
2. **Open Developer Tools**: Press `F12` or right-click on the page and select "Inspect Element" to open the Developer Tools.
3. **Go to the Network Tab**: Click on the "Network" tab to view all network requests.
4. **Make the Request**: Reload the page to make the AJAX request.
5. **Inspect the Headers**: Click on the request to your Drupal site in the list. Look for the "Headers" tab on the right pane to inspect the request and response headers.

Look for headers like `Access-Control-Allow-Origin` in the response headers section. This confirms that CORS is properly configured and the browser is allowed to access the resource.
