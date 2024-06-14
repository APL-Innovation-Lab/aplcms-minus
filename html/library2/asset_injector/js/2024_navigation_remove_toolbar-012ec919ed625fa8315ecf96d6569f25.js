window.onload = function() {
	  console.log('removing toolbar');
    var body = document.body;
    
    if (body.classList.contains('toolbar-fixed')) {
        body.classList.remove('toolbar-fixed');
    }
    
    if (body.classList.contains('toolbar-vertical')) {
        body.classList.remove('toolbar-vertical');
    }
}
