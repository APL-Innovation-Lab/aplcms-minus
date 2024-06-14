(function($, jQuery) {
  $(document).ready(function() {
  
  var pathArray = window.location.pathname.split('/');
  var node_id = pathArray[3];
    if(!Number.isInteger(node_id)) {
		node_id = pathArray[2];
	}
	console.log('node_id: ' + node_id);
	$('.apltv-iffy').addClass('node-' + node_id); 
	  

    $.getJSON('/apltv/sequence/' + node_id + '/feed3.json', function(json) {
      console.log('title: ' + json[0].title);
      console.log('sequence: ' + json[0].sequence);
 

var items = json[0].sequence.split(',');
  
var i = 0;

function playa() {
	if(i >= items.length) {
		i = 0;
	}	
	var i_nid = '/apltv/fullscreen/' + items[i];

	$('.apltv-iffy.node-' + node_id).velocity(
		'fadeOut', {
			delay: 500,
			duration: 2000,
			complete: function(elements) { 
				$('.apltv-iffy.node-' + node_id).attr('src',i_nid); 
				$('.apltv-iffy.node-' + node_id).velocity('fadeIn', {
					delay: 500,
					duration: 12000
				});
			}
		}
				
	);
	
		i++;

	setTimeout(playa, 60000);
}

playa();
   });

})})(jQuery);