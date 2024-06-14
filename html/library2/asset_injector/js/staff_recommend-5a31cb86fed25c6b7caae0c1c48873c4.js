


// Select the <ul> element by its data-drupal-facet-id attribute
const ul = document.querySelector('ul[data-drupal-facet-id="audience"]');

// Create a new <li> element
const li = document.createElement('li');
li.className = 'facet-item reset';

// Get the current URL without parameters (query string) or hash
const currentUrl = window.location.href.split('?')[0].split('#')[0];

// Set the inner HTML of the <li> element to use the current page's base URL
li.innerHTML = `<a href="${currentUrl}?f[2]=0"><span class="facet-item__value reset">Reset</span></a>`;

// Append the new <li> element to the <ul>
ul.appendChild(li);


// Function to check if URL contains any 'f' parameter
function checkForParameterAndScroll() {
    // Parse the URL query string
    const queryParams = new URLSearchParams(window.location.search);

    // Create a flag to check if any 'f' parameter is present
    let fParamFound = false;
    // Iterate over all parameters to check for any 'f' parameter
    for (let param of queryParams.keys()) {
        if (param.startsWith('f[')) {
            fParamFound = true;
            break;
        }
    }

    // If any 'f' parameter is found, scroll to the <ul> element
    if (fParamFound) {
        // Select the <ul> element by its data-drupal-facet-id attribute
        const ul = document.querySelector('ul[data-drupal-facet-id="audience"]');
        
        // Scroll to the <ul> element
        ul.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Call the function on page load
document.addEventListener('DOMContentLoaded', checkForParameterAndScroll);
