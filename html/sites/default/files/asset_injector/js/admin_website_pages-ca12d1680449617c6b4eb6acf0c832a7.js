const params = new URLSearchParams(window.location.search)
var header = document.getElementsByClassName('view-header');
    header[0].innerHTML = '<a class="usa-button" href="/admin/website-pages.csv?' + params + '">Export to .csv</a>' + header[0].innerHTML;

