window.onload = function() {
console.log('housecleaning..');
    var bodyContent = document.body.innerHTML;
    var newContent = bodyContent.replace(/ to 12:00 AM/g, '');
    document.body.innerHTML = newContent;
};
