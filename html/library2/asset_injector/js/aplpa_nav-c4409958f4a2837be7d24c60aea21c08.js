// Detect if the page is in Spanish
var isSpanish = window.location.href.includes('/es/');
console.log('isSpanish?' + isSpanish);

// Select all elements with the class nav-button
let links = document.querySelectorAll('.nav-button');

// Change the placeholder text, change the form action when radio button changes
var radioEverything = document.getElementById('searchCat');
var radioWebsite = document.getElementById('searchWeb');
var searchInput = document.getElementById('searchText');
var form = document.getElementById('catalog_search');
searchInput.focus();

// Set default checked radio button
radioEverything.checked = true;

radioEverything.addEventListener('change', function() {
    if (this.checked) {
        searchInput.placeholder = isSpanish ? "Busque en el catálogo de la biblioteca" : "Search the APL Catalog";
        searchInput.focus();
    }
});

radioWebsite.addEventListener('change', function() {
    if (this.checked) {
        searchInput.placeholder = isSpanish ? "Busque en el sitio web de la biblioteca" : "Search the APL Website";
        searchInput.focus();
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    var searchQuery = encodeURIComponent(searchInput.value);
    var url;

    if (radioWebsite.checked) {
        url = '/search-website?search=' + searchQuery;
    } else {
        url = 'https://austin.bibliocommons.com/v2/search?query=' + searchQuery;
    }

    window.location.href = url;
});

(function ($, jQuery) {
  $(document).ready(function() {
    console.log('hhh')
    var hash = window.location.hash;
    if (hash) {
      $(hash + ' h2').addClass('active')
      $(hash + ' h3').addClass('active')
      $(hash + ' h4').addClass('active')
    }

    $('h2').click(function() {
        $(this).toggleClass('active');
    });
    $('h3').click(function() {
        $(this).toggleClass('active');
    });

    $('.jobportal-menu a, .accordion a').click(function() {
      var hash2 = $(this).attr('href');
      console.log(hash2 + ' is my hash2');

      var dd = hash2 + ' h2';
      var dd1 = hash2 + ' h3';
      var dd2 = hash2 + ' h4';
      console.log(dd);
      $(dd).addClass('active');
      $(dd1).addClass('active');
      $(dd2).addClass('active');
    });
  });
})(jQuery);

// Function to deactivate all active elements
function deactivateAll() {
    console.log('deactivate');
    let activeLinks = document.querySelectorAll('.active');
    for (let i = 0; i < activeLinks.length; i++) {
        activeLinks[i].classList.remove('active');
    }
}

// Loop through each link
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
        event.preventDefault();

        let wasActive = this.classList.contains('active');

        if (!wasActive) {
            deactivateAll();
            this.classList.add('active');

            let submenu = document.getElementById('sub-' + this.id);
            if (submenu) {
                submenu.classList.add('active');
                searchInput.focus();
            }
        } else {
            this.classList.remove('active');

            let submenu = document.getElementById('sub-' + this.id);
            if (submenu) {
                submenu.classList.remove('active');
            }
        }
    });
}

// Function to check if the clicked target is outside the "apl-submenu" and "active" areas
function handleClickOutside(event) {
    const clickedElement = event.target;

    if (
        !clickedElement.classList.contains('apl-submenu') &&
        !clickedElement.classList.contains('active') &&
        !clickedElement.closest('.apl-submenu') &&
        !clickedElement.closest('.active')
    ) {
        deactivateAll();
    }
}

// Add the event listener to the document
document.addEventListener('click', handleClickOutside);
