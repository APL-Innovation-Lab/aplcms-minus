(function($, jQuery) {
  $(document).ready(function() {
  
  var pathArray = window.location.pathname.split('/');
  var node_id = pathArray[3];
    if(!Number.isInteger(node_id)) {
		node_id = pathArray[2];
	}
	console.log('node_id: ' + node_id);
	$('.apltv-iffy').addClass('node-' + node_id); 
	  
var items = [];
var item_types = [];
var item_urls = [];

    $.getJSON('/apltv/sequence/' + node_id + '/feed2.json', function(json7) {
		
           for (var k = 0; k < json7.length; k++) {
			console.log('title: ' + json7[k].title);
	  
			console.log('nid: ' + json7[k].nid);
			console.log('type: ' + json7[k].type);
			console.log('url: ' + json7[k].url);
			str = json7[k].url.replace(/\\/g, '');
			console.log('url2: ' + str);
			items.push(json7[k].nid);
			item_types.push(json7[k].type);
			item_urls.push(str);

		   }

  
var i = 0;

function playa() {
	if(i >= items.length) {
		i = 0;
	}	
	var i_nid = item_urls[i];

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