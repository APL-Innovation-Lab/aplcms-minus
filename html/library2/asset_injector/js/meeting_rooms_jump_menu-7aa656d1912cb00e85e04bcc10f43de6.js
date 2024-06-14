document.addEventListener('DOMContentLoaded', function() {
 
	// Create the input element for date
	var dateInput = document.createElement('input');
	dateInput.className = 'form-date';
	dateInput.setAttribute('data-drupal-date-format', 'Y-m-d');
	dateInput.setAttribute('data-drupal-selector', 'edit-date');
	dateInput.setAttribute('data-form-type', 'date');
	dateInput.id = 'edit-date';
	dateInput.name = 'date';
	dateInput.type = 'date';

	// Append the label and input elements to the target div
	var dateDiv = document.getElementById('meeting-rooms-date');
	if (dateDiv) {
		dateDiv.appendChild(dateInput);
	}
   // Function to get the value of a query parameter by name
   function getQueryParam(name) {
	   var queryParams = new URLSearchParams(window.location.search);
	   return queryParams.get(name);
   }
   function createNavigationButtons() {
	   // Function to get the value of a query parameter by name
	   function getQueryParam(name) {
		   var queryParams = new URLSearchParams(window.location.search);
		   return queryParams.get(name);
	   }
   
	   // Get 'date' parameter from the URL or use today's date
	   var selectedDate = getQueryParam('date') || new Date().toISOString().split('T')[0];
   
	   // Convert selectedDate to a Date object
	   var dateObj = new Date(selectedDate);
   
	   // Calculate previous and next dates
	   var prevDate = new Date(dateObj);
	   prevDate.setDate(prevDate.getDate() - 1);
	   var nextDate = new Date(dateObj);
	   nextDate.setDate(nextDate.getDate() + 1);
   
	   // Convert dates to YYYY-MM-DD format
	   var prevDateStr = prevDate.toISOString().split('T')[0];
	   var nextDateStr = nextDate.toISOString().split('T')[0];
   
	   // Create the Previous button
	   var prevButton = document.createElement('a');
	   prevButton.className = 'usa-button usa-button-outline';
	   prevButton.id = 'prev-date';
	   prevButton.href = '/meeting-rooms/calendar?date=' + prevDateStr;
	   prevButton.textContent = 'Previous';
   
	   // Create the Next button
	   var nextButton = document.createElement('a');
	   nextButton.className = 'usa-button usa-button-outline';
	   nextButton.id = 'next-date';
	   nextButton.href = '/meeting-rooms/calendar?date=' + nextDateStr;
	   nextButton.textContent = 'Next';
   
	   // Create a container for the buttons
	   var container = document.createElement('p');
	   container.appendChild(prevButton);
	   container.appendChild(document.createTextNode(' ')); // Add space between buttons
	   container.appendChild(nextButton);
   
	   // Append the container to the target div
	   var targetDiv = document.getElementById('meeting-rooms-date');
	   if (targetDiv) {
		   targetDiv.appendChild(container);
	   }
   }
   
   createNavigationButtons();
   
   // Get 'loc' parameter from the URL
   var selectedLoc = getQueryParam('loc');

   // Create the select element
   var select = document.createElement('select');
   select.className = 'webform-entity-select form-select usa-select';
   select.id = 'loc';

   // Add options to the select element
   var options = [
	   { value: '', text: '- Select -' },
	   { value: '183', text: 'Austin History Center (Capacity: 62)' },
	   { value: '194', text: 'Carver Branch (Capacity: 100)' },
	   { value: '186', text: 'Cepeda Branch (Capacities: 30, 30, 60)' },
	   { value: '195', text: 'Hampton Branch at Oak Hill (Capacity: 70)' },
	   { value: '196', text: 'Howson Branch (Capacity: 40)' },
	   { value: '197', text: 'Little Walnut Creek Branch (Capacity: 50)' },
	   { value: '198', text: 'Manchaca Road Branch (Capacity: 75)' },
	   { value: '199', text: 'Milwood Branch (Capacity: 50)' },
	   { value: '200', text: 'North Village Branch (Capacity: 52)' },
	   { value: '202', text: 'Old Quarry Branch (Capacity: 60)' },
	   { value: '203', text: 'Pleasant Hill Branch (Capacities: 20, 50)' },
	   { value: '205', text: 'Ruiz Branch (Capacities: 39, 39, 78)' },
	   { value: '207', text: 'Southeast Branch (Capacities: 28, 40, 68)' },
	   { value: '208', text: 'Spicewood Springs Branch (Capacity: 65)' },
	   { value: '209', text: 'Terrazas Branch (Capacities: 25, 25, 50)' },
	   { value: '210', text: 'Twin Oaks Branch (Capacities: 20, 20, 40)' },
	   { value: '185', text: 'University Hills Branch (Capacities: 40, 40, 80)' },
	   { value: '201', text: 'Willie Mae Kirk Branch (Capacity: 40)' },
	   { value: '184', text: 'Windsor Park Branch (Capacities: 32, 33, 65)' },
	   { value: '211', text: 'Yarborough Branch (Capacity: 50)' }
   ];

   options.forEach(function(option) {
	   var opt = document.createElement('option');
	   opt.value = option.value;
	   opt.textContent = option.text;
	   if (option.value === selectedLoc) {
		   opt.selected = true;
	   }
	   select.appendChild(opt);
   });

   // Add event listener for change event
   select.addEventListener('change', function() {
	   var value = this.value;
	   if (value) {
		   window.location.href = '/meeting-rooms/calendar?loc=' + value;
	   }
   });

   // Append the select element to the target div
   var targetDiv = document.getElementById('meeting-rooms-jump-menu');
   if (targetDiv) {
	   targetDiv.appendChild(select);
   }


   async function loadNames() {
	   const queryString = window.location.search;
	   var pathArray = window.location.pathname.split('/');
	   const urlParams = new URLSearchParams(queryString);
		var date_field = document.querySelector('#edit-date');

	   if(urlParams.get('date')) {
		   var mdate = urlParams.get('date');
		   var this_dayjs = dayjs(mdate);
			   date_field.value = urlParams.get('date');

	   } else {
		   var mdate = ' ';
			  var this_dayjs = dayjs();
	 date_field.value = this_dayjs.format('YYYY-MM-DD');

	   }
		 
			
		 
		 var day_min = this_dayjs.format('YYYY-MM-DD');
		 var day_max = this_dayjs.format('YYYY-MM-DD');
		 var calendar_url = '/meeting-rooms/calendar?date=';
		 var prev_link = calendar_url + this_dayjs.subtract(1,'day').format('YYYY-MM-DD');
		 var request_url = '/meeting-rooms/request?date=';
		 var day_link = request_url + this_dayjs.format('YYYY-MM-DD');
		 console.log('my day_link')
		 console.log(day_link)
		 var next_link = calendar_url + this_dayjs.add(1,'day').format('YYYY-MM-DD');

		 var fetch_this = 'https://library.austintexas.gov/en/mr_day.json?date[min]=' + day_min + '&date[max]=' + day_max;
console.log(fetch_this);
			 var footer_extra = document.querySelectorAll(".view-footer a");

	   if(urlParams.get('room')) {
		   fetch_this += '&room=' + urlParams.get('room');
		   prev_link  += '&room=' + urlParams.get('room');
		   next_link  += '&room=' + urlParams.get('room');
		   day_link   += '&room=' + urlParams.get('room');

	   }
		 if(urlParams.get('loc')) {
			 var events_half = document.getElementById('events');
			 events_half.classList.add('half-width');

		   fetch_this += '&loc=' + urlParams.get('loc');
			 
		   prev_link  += '&loc=' + urlParams.get('loc');
		   next_link  += '&loc=' + urlParams.get('loc');
		   day_link   += '&location=' + urlParams.get('loc');
		   
		   
		   
var dnd = document.querySelector('#loc');

dnd.value = urlParams.get('loc');


	   }



		 document.getElementById('prev-date').setAttribute('href', prev_link); 
		 document.getElementById('next-date').setAttribute('href', next_link); 
		 document.getElementById('new-request').setAttribute('href', day_link); 
		 document.getElementById('today-date').innerHTML = this_dayjs.format('dddd, MMMM D, YYYY');
		 console.log('about to load: ' + fetch_this);
	   const response = await fetch(fetch_this);
	   const names = await response.text();
	   events2 = JSON.parse(names);
	   var len = events2.length,
		 i;
	   for (i = 0; i < len; i += 1) {
		 var openHour = 9;
		 var openOffset = dayjs('2022-01-01 - ' + openHour + ':00');
		 var hours3 = parseInt(openOffset.format('H'));
		 var minutes3 = parseInt(openOffset.format('m'));
		 var total3 = (hours3 * 60) + minutes3;
		 var newStart = dayjs('2022-01-01 - ' + events2[i].start);
		 var newEnd = dayjs('2022-01-01 - ' + events2[i].end);
		 var hours = parseInt(newStart.format('H'));
		 var minutes = parseInt(newStart.format('m'));
		 var total = (hours * 60) + (minutes);
		 events2[i].start = total - total3;
		 var hours2 = parseInt(newEnd.format('H'));
		 var minutes2 = parseInt(newEnd.format('m'));
		 var total2 = (hours2 * 60) + (minutes2);
		 events2[i].end = total2 - total3;
	   }
		 console.log(events2);
	   layOutDay(events2);

	 }
	 loadNames();
});

