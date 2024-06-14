console.log('link fixer');

document.addEventListener('DOMContentLoaded', (event) => {
    if (window.location.hash && window.location.hash.includes(':~:text=')) {
        // Use history.replaceState to manipulate the URL without reloading the page
        const newUrl = window.location.href.split('#')[0];
        window.history.replaceState({}, '', newUrl);
    }
});

