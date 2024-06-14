(function ($, jQuery) {
	$(document).ready(function () {
		console.log('slr js feb6d');
		if (performance.navigation.type == 2) {
			alert('reloading page..');
			location.reload(true);
		}

		let all_rooms3 = document.createElement('div');
		all_rooms3.className = 'all-room-options view-content';

		fetch('https://library.austintexas.gov/html_slrs.json')
			.then(response => response.json())
			.then(data => {
				data.forEach(item => {
					const tempDiv = document.createElement('div');
					tempDiv.innerHTML = item.rooms_markup; 
					const roomOptionElement = tempDiv.firstChild;
					all_rooms3.appendChild(roomOptionElement);
				});
				document.body.appendChild(all_rooms3); 
			})
			.catch(error => console.error('Error loading room options:', error));

		$(document).keyup(function (e) {
			if (e.keyCode === 27) $('.modalClose').click(); // esc
		});

		var which_date = $('#edit-reservation-date');

		var queryString = window.location.search;
		var pathArray = window.location.pathname.split('/');
		var urlParams = new URLSearchParams(queryString);
		if (urlParams.get('date')) {
			which_date.val(urlParams.get('date'))
		}
		if (!which_date.val()) {
			which_date.val(dayjs().format('YYYY-MM-DD'));
		}
		var is_admin = 0;
		$.getJSON("/roles.json?t=" + Date.now(), function (json9) {
			var my_roles = [];
			var k;
			for (k = 0; k < json9.length; k++) {
				j_roles = json9[k].roles;
				my_roles.push(j_roles);
				if (j_roles.includes('slr_admin') || j_roles.includes('administrator') || j_roles.includes('internal_group_representative')) {
					var is_admin = 1;
					console.log('is admin');
				} else {
					console.log('not admin');
				}
			}
			var max_date = dayjs().add(2, 'weeks');
			var min_date = dayjs().add(2, 'hours');


			which_date.attr('min', min_date.format('YYYY-MM-DD'));
			$('#edit-meeting-topic').after('<div class="form-item__description">Topic will appear in calendar</div>');
			if (is_admin != "1") {
				which_date.attr('max', max_date.format('YYYY-MM-DD'));
				$("#edit-duration option[value='180']").remove();
				$("#edit-duration option[value='240']").remove();
				$("#edit-duration option[value='300']").remove();
				$("#edit-duration option[value='360']").remove();
				$("#edit-duration option[value='420']").remove();
				$("#edit-duration option[value='480']").remove();
				$("#edit-duration option[value='540']").remove();
				$("#edit-duration option[value='600']").remove();
				$("#edit-duration option[value='660']").remove();
				$("#edit-duration option[value='720']").remove();
				$("#edit-duration option[value='780']").remove();
				$("#edit-duration option[value='840']").remove();
				$("#edit-duration option[value='900']").remove();
			} else {
				$("#edit-duration option").css('display', 'block');
			}
			var how_many = $('#edit-how-many-people-').val();
			var opening_hour = 9;
			var closing_hour = 20;
			var u = dayjs(which_date.val());
			var round_interval = 15;
			var intervals = Math.floor(min_date.minute() / round_interval);
			var minutesToRound = min_date.minute() % round_interval;
			var minutesRounded = minutesToRound > round_interval / 2 ? round_interval : 0;
			var minutes = intervals * round_interval + minutesRounded;
			var max_sim = 1;
			var f_time = 'h:mm A';
			var f_date = 'dddd, YYYY-MM-DD';
			var f_date2 = 'dddd, MMMM D';
			var pp_format = 'YYYY-MM-DD H:mm';
			var existingStarts_room = [];
			var existingStarts_start = [];
			var existingStarts_end = [];
			var busy = [];

			async function update_avail(text) {
				var myy_datess = "/slr_dates2.json?date=" + dayjs($('#edit-reservation-date').val()).format('YYYY-MM-DD') + "&t=" + Date.now();
				await $.getJSON(myy_datess, function (json) {
					var k;
					for (k = 0; k < json.length; k++) {
						j_room = json[k].room;
						j_start = json[k].start;
						j_end = json[k].end;
						j_name = json[k].name;
						existingStarts_room.push(j_room);
						existingStarts_start.push(j_start);
						existingStarts_end.push(j_end);
					}
				});
			}
			update_avail(dayjs($('#edit-reservation-date').val()).format('YYYY-MM-DD'));
			var max_busy = 1;
			var disabledDays = [];

			function get_special_dates() {
				disabledDays = [];
				existingStarts_start = [];
				$.getJSON("/library/json/holidays.json", function (json) {
					var k;
					for (k = 0; k < json.length; k++) {
						j_date = json[k].field_special_date;
						j_early = json[k].field_early_closing;
						if (j_early) {
							var early_date = dayjs(j_date + ' ' + j_early);
							existingStarts_start.push(early_date.format(pp_format));
							var add_1 = dayjs(early_date).add(30, 'minutes').format(pp_format);
							existingStarts_start.push(add_1);
							var add_2 = dayjs(early_date).add(60, 'minutes').format(pp_format);
							existingStarts_start.push(add_2);
							var add_3 = dayjs(early_date).add(90, 'minutes').format(pp_format);
							existingStarts_start.push(add_3);
							var add_4 = dayjs(early_date).add(120, 'minutes').format(pp_format);
							existingStarts_start.push(add_4);
							var add_5 = dayjs(early_date).add(150, 'minutes').format(pp_format);
							existingStarts_start.push(add_5);
						} else {
							disabledDays.push(j_date);
						}
					}
				});
			}
			var submit_button = $('#edit-submit');
			submit_button.val('Submit Request');
			submit_button.prop('disabled', true);
			var date_wrapper = $('.form-item-reservation-date');
			var button_wrapper = $('#edit-actions');
			var date1 = $('#edit-time-start-date');
			var date2 = $('#edit-time-end-date');
			var time1 = $('#edit-time-start-time');
			var time2 = $('#edit-time-end-time');
			date_wrapper.append('<label id="avail_label" for="pp_avail_wrapper" class="form-item__label js-form-required form-required">Available rooms and times:</label><div id="avail_slots"><div id="rez_date"><a class="new_check" href="#">Check availability...</a></div></div>');

			var slrAlert = document.querySelector('#block-views-block-slr-alert-block-1');
			if (slrAlert) {


				var slrAlertClone = slrAlert.cloneNode(true);
				var slrTitle = document.querySelector('#avail_label');
				if (slrTitle) {
					slrTitle.after(slrAlertClone);
				}
			}


			var avail_slots = $('#avail_slots');

			async function get_room(how_many) {

				$('.pp_avail').removeClass('active');
				$('.room_wrapper').removeClass('inactive');
				$('.room-option').removeClass('inactive');

				var h_date = dayjs($('#edit-reservation-date').val());
				await update_avail('4abb');
				avail_slots.html('<div id="rez_date"></div>');
				avail_slots.prepend(all_rooms3);

				$('.modalOpen').click(function (event) {
					event.preventDefault();
					$('.modal-overlay').css('display', 'block');
					$('.modal').css('display', 'none');
					var myTid = $(this).attr('data-tid');
					$('#mod' + myTid).css('display', 'block');
					$('.slr_available').css('opacity', '1');
				});

				$('.modalClose').click(function (event) {
					event.preventDefault();
					$('.modal-overlay').css('display', 'none');
					$('.modal').css('display', 'none');
					$('body').removeClass('modally');
				});


				$('.modally, .modal-overlay').click(function (event) {
					if (!$(event.target).closest('.modal').length) {
						event.preventDefault();
						$('body').removeClass('modally');
						$('.modal-overlay').css('display', 'none');
						$('.modal').css('display', 'none');
					}
				});



				var rooms_array = [3788, 3789, 3790, 3792, 3793, 3794, 3796, 3798, 3799, 3800, 3801];
				var rooms_names = ['Shared Learning - 408 (Capacity: 4)', 'Shared Learning - 409 (Capacity: 4)', 'Shared Learning - 471 (Capacity: 10)', 'Shared Learning - 508 (Capacity: 4)', 'Shared Learning - 509 (Capacity: 4)', 'Shared Learning - 522 (Capacity: 10)', 'Shared Learning - 531 (Capacity: 10)', 'Shared Learning - 613 (Capacity: 8)', 'Shared Learning - 614 (Capacity: 8)', 'Shared Learning - 615 (Capacity: 8)', 'Shared Learning - 621 (Capacity: 10)'];
				var rooms_capac = [4, 4, 10, 4, 4, 10, 10, 8, 8, 8, 10];
				if (how_many > 8) {
					// just 10s

					var rooms_array = [3790, 3794, 3796, 3801];
					var rooms_names = ['Shared Learning - 471 (Capacity: 10)', 'Shared Learning - 522 (Capacity: 10)', 'Shared Learning - 531 (Capacity: 10)', 'Shared Learning - 621 (Capacity: 10)'];
					var rooms_capac = [10, 10, 10, 10];
				} else if (how_many > 4) {
					// just 8s and 10s
					var rooms_array = [3790, 3794, 3796, 3798, 3799, 3800, 3801];
					var rooms_names = ['Shared Learning - 471 (Capacity: 10)', 'Shared Learning - 522 (Capacity: 10)', 'Shared Learning - 531 (Capacity: 10)', 'Shared Learning - 613 (Capacity: 8)', 'Shared Learning - 614 (Capacity: 8)', 'Shared Learning - 615 (Capacity: 8)', 'Shared Learning - 621 (Capacity: 10)'];
					var rooms_capac = [10, 10, 10, 8, 8, 8, 10];
				}
				$('.room-option').css('display', 'none');
				for (k = 0; k < rooms_array.length; k++) {

					var elementId = 'avail_slot_wrapper_' + rooms_array[k];
					var element = document.getElementById(elementId);

					if (element && element.parentNode) {
						element.parentNode.removeChild(element);
					}

					$('.option-' + rooms_array[k]).append('<div class="room_wrapper" id="avail_slot_wrapper_' + rooms_array[k] + '"><div class="room_date">' + h_date.format(f_date2) + '</div><div id="avail_slot_' + rooms_array[k] + '"></div><a data-room="' + rooms_array[k] + '" class="check_date material-icons">schedule</a><a data-room="' + rooms_array[k] + '" class="check_date check">Check for available reservation times...</a></div>');
					$('.option-' + rooms_array[k]).css('display', 'inline-block');
				}
				$('.check_date.check').click(function (e) {
					var which_date = $('#edit-reservation-date');
					var this_date = dayjs(which_date.val());
					var room_id = $(this).attr('data-room');
					e.preventDefault();
					availStarts = [];
					submit_button.prop('disabled', true);
					check_dates(this_date, room_id);
					date1.val($(this).attr('data-date'));
					time1.val($(this).attr('data-time'));
					date2.val($(this).attr('data-date'));
					time2.val($(this).attr('data-time2'));
					$('.pp_avail').css('opacity', '1');
				});

				$('.check_date.check').click();
			}
			var avail_wrapper = $('#pp_avail_wrapper');
			var availStarts = [];
			var e_date = $('#edit-time-start-date');
			var e_time = $('#edit-time-start-time');
			var e_time2 = $('#edit-time-end-time');
			if (e_date.val() && e_time.val()) {
				var ee_date = dayjs(e_date.val() + ' ' + e_time.val());
				var duration = $('#edit-duration').val();
				var ee_date2 = dayjs(ee_date).add(duration, 'minutes').format(f_time);
				avail_wrapper.prepend('<a class="e_date pp_avail active" data-time="' + e_time.val() + '" data-time2="' + e_time2.val() + '" data-date="' + e_date.val() + '">' + ee_date.format(f_time) + ' to ' + ee_date2 + '</a><br>');
				submit_button.prop('disabled', false);
			}
			var room_id = $('#edit-room').val();

			async function check_dates(input_date, room_id) {
				if (!duration) {
					var duration = $('#edit-duration').val();
				}
				var ch_date = input_date;
				var messages = [];

				if ((disabledDays.indexOf(ch_date.format('YYYY-MM-DD'))) >= 0) { // appears in disabledDays array
					// console.log('is holiday');
				} else { //not a holiday date
					if (ch_date.isAfter(max_date, 'day') && (is_admin < 1)) {
						//    console.log('is_admin? ' + is_admin);
					} else {
						if (ch_date.isBefore(min_date)) {
							//    console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before minimum date');
							var ch_date2 = ch_date.add(15, 'minutes');
							check_dates(ch_date2, room_id);
						} else {

							if (ch_date.format('d') == '0' || ch_date.format('d') == '5' || ch_date.format('d') == '6') {
								closing_hour = 17;
							} else {
								closing_hour = 20;
							}

							if (ch_date.format('d') == '6') {
								opening_hour = 10;
								//     console.log('line 308 oh: ' + opening_hour);
							} else if (ch_date.format('d') == '0') { // open at noon on Sunday
								opening_hour = 12;
								//      console.log('line 312 oh: ' + opening_hour);
							} else {
								opening_hour = 9;
								//     console.log('line 315 oh: ' + opening_hour);
							}


							if (ch_date.format('H') < opening_hour) { // before opening hour
								var ch_date2 = ch_date.hour(opening_hour).minute(0);
								check_dates(ch_date2, room_id);
							} else { //after opening hour
								var ch_date3 = ch_date.add(duration, 'minutes');

								var ch_date4 = ch_date.hour(closing_hour).minute(1);
								if (ch_date3.isAfter(ch_date4)) {
									//      suggest_available(availStarts, room_id);
								} else {
									my_start_test = ch_date;
									my_end_test = my_start_test.add(duration, 'minutes');
									var my_overlap = 0;
									for (var p = 0; p < existingStarts_start.length; p++) {
										//bool overlap = m.start < e.end && e.start < m.end;
										if (my_start_test.isBefore(existingStarts_end[p]) && my_end_test.isAfter(existingStarts_start[p])) { // overlaps an existing rez
											if (existingStarts_room[p] == room_id) {
												my_overlap = 1;
											}
										}
									}
									if (my_overlap == 1) { // appears in existingStarts array
										var ch_date2 = ch_date.add(15, 'minutes');
										check_dates(ch_date2, room_id);
									} else {
										availStarts.push(ch_date.format(pp_format));
										if (ch_date3.isBefore(ch_date4)) {
											var ch_date2 = ch_date.add(15, 'minutes');
											check_dates(ch_date2, room_id);
										}
									}
								}
							}
						}
					}
				}

				if (availStarts) {
					suggest_available(availStarts, room_id);
				}
			}
			$('.check_date').click(function (e) {
				var which_date = $('#edit-reservation-date');
				var this_date = dayjs(which_date.val());
				var room_id = $(this).attr('data-room');
				e.preventDefault();
				availStarts = [];
				submit_button.prop('disabled', true);
				check_dates(this_date, room_id);
				date1.val($(this).attr('data-date'));
				time1.val($(this).attr('data-time'));
				date2.val($(this).attr('data-date'));
				time2.val($(this).attr('data-time2'));
				$('.pp_avail').css('opacity', '1');
			});
			var how_many1 = $('#edit-how-many-people-');
			which_date.change(function (e) {
				
				if (dayjs(which_date.val()).isValid()) {
					var the_date1 = dayjs(which_date.val());
					var ppwf_format = 'YYYY-MM-DD';
					var the_date = the_date1.format(ppwf_format);
					if (the_date == '2023-12-24' || the_date == '2023-12-25' || the_date == '2023-12-26' || the_date == '2023-12-31' || the_date == '2024-01-01' || the_date == '2024-01-14' || the_date == '2024-01-15' || the_date == '2024-02-18' || the_date == '2024-02-19' || the_date == '2024-03-22' || the_date == '2024-03-31' || the_date == '2024-05-26' || the_date == '2024-05-27' || the_date == '2024-06-19' || the_date == '2024-07-04' || the_date == '2024-08-16' || the_date == '2024-09-01' || the_date == '2024-09-02' || the_date == '2024-11-10' || the_date == '2024-11-11' || the_date == '2024-11-28' || the_date == '2024-11-29' || the_date == '2024-12-13' || the_date == '2024-12-24' || the_date == '2024-12-25') {
						alert("The Library is closed on that day. Please select another date.");
						which_date.val('');
					} else {
						var wt_date = dayjs(which_date.val());
						if (wt_date.isAfter(max_date) && (is_admin != 1)) {
							alert('Please select a date within the next 2 weeks');
							which_date.val('');
						} else {
							get_room(how_many1.val());
							availStarts = [];
							submit_button.prop('disabled', true);
							date1.val($(this).attr('data-date'));
							time1.val($(this).attr('data-time'));
							date2.val($(this).attr('data-date'));
							time2.val($(this).attr('data-time2'));
						}
					}
				}
			});
			$('.new_check').click(function (e) {
				e.preventDefault();

				get_room(how_many1.val());
				availStarts = [];
				submit_button.prop('disabled', true);
				date1.val($(this).attr('data-date'));
				time1.val($(this).attr('data-time'));
				date2.val($(this).attr('data-date'));
				time2.val($(this).attr('data-time2'));
			});
			how_many1.change(function (e) {
				var my_people = how_many1.val();
				if (my_people > 10) {
					alert('The maximum capacity is 10.');
				} else {
					if ($.isNumeric(my_people)) {
						get_room(how_many1.val());
						availStarts = [];
						submit_button.prop('disabled', true);
						date1.val($(this).attr('data-date'));
						time1.val($(this).attr('data-time'));
						date2.val($(this).attr('data-date'));
						time2.val($(this).attr('data-time2'));
					} else {
						alert('Please indicate a number between 1 and 10.');
					}
				}
			});

			async function suggest_available(pp_date, room_id) {
				var duration = $('#edit-duration').val();
				var avail_wrapper = $('#avail_slot_' + room_id);
				avail_wrapper.empty();

				for (var p = 0; p < pp_date.length; p++) {
					var s_date = dayjs(pp_date[p]);
					var s_date2 = dayjs(s_date).add(duration, 'minutes');
					avail_wrapper.append('<a class="pp_avail" data-room="' + room_id + '" data-time="' + s_date.format('HH:mm:ss') + '" data-time2="' + s_date2.format('HH:mm:ss') + '" data-date="' + s_date.format('YYYY-MM-DD') + '">' + s_date.format(f_time) + ' to ' + s_date2.format(f_time) + '</a>');
				}
				if (!pp_date.length) {
					$('.option-' + room_id).addClass('inactive');
					avail_wrapper.append('<div class="no_luck">No time slots available.</div>');
				}
				$('.pp_avail').click(function () {
					$('.pp_avail').removeClass('active');
					$('.pp_avail').addClass('inactive');
					$('.room_wrapper').addClass('inactive');
					$('.room-option').addClass('inactive');

					$(this).removeClass('inactive');
					$(this).parent().parent().parent().removeClass('inactive');
					$(this).parent().parent().removeClass('inactive');

					$(this).addClass('active');
					$(this).parent().parent().addClass('active');
					$(this).parent().parent().parent().addClass('active');

					submit_button.prop('disabled', false);
					$('#edit-room').val($(this).attr('data-room'));
					$('#rez_date').html('<a class="new_check" href="#">Select a different room and time...</a>');
					$('#edit-reservation-date').val($(this).attr('data-date'));
					date1.val($(this).attr('data-date'));
					date2.val($(this).attr('data-date'));
					time1.val($(this).attr('data-time'));
					time2.val($(this).attr('data-time2'));
					$('.new_check').click(function (e) {
						e.preventDefault();

						$('.pp_avail').removeClass('active');
						$('.room_wrapper').removeClass('inactive');
						$('.room-option').removeClass('inactive');

						get_room(how_many1.val());
						availStarts = [];
						submit_button.prop('disabled', true);
						date1.val($(this).attr('data-date'));
						time1.val($(this).attr('data-time'));
						date2.val($(this).attr('data-date'));
						time2.val($(this).attr('data-time2'));
					});
				});
				$('.pp_more').css('opacity', '1');
				$('#edit-room').change(function () {
					availStarts = [];
					submit_button.prop('disabled', true);
					date1.val($(this).attr('data-date'));
					time1.val($(this).attr('data-time'));
					date2.val($(this).attr('data-date'));
					time2.val($(this).attr('data-time2'));
				});
				$('#edit-duration').change(function (e) {
					if (e.handled !== true) {
						e.handled = true;
						get_room(how_many1.val());
						availStarts = [];
						submit_button.prop('disabled', true);
						return;
					}
				});
				$('.pp_less2').click(function (e) {
					e.preventDefault();
					availStarts = [];
					submit_button.prop('disabled', true);
					check_dates(this_date, room_id);
					date1.val($(this).attr('data-date'));
					time1.val($(this).attr('data-time'));
					date2.val($(this).attr('data-date'));
					time2.val($(this).attr('data-time2'));
					$('.pp_avail').css('opacity', '1');
				});
				$('.pp_more').click(function (e) {
					e.preventDefault();
					var room_id = $(this).attr('data-room');
					var last_av = availStarts.length - 1;
					ch_date5 = dayjs(availStarts[last_av]).add(15, 'minutes');
					availStarts = [];
					check_dates(ch_date5, room_id);
					date1.val($(this).attr('data-date'));
					time1.val($(this).attr('data-time'));
				});
			}
			$('.pp_less').click(function (e) {
				e.preventDefault();
				availStarts = [];
				submit_button.prop('disabled', true);
				check_dates(this_date, room_id);
				date1.val($(this).attr('data-date'));
				time1.val($(this).attr('data-time'));
				date2.val($(this).attr('data-date'));
				time2.val($(this).attr('data-time2'));
				$('.pp_avail').css('opacity', '1');
			});
			$('#edit-submit').click(function (e) {
				e.preventDefault();
				var mini = dayjs(date1.val()).format('YYYY-MM-DD');
				var maxi = dayjs(date1.val()).add(1, 'day').format('YYYY-MM-DD');
				var mini2 = dayjs(date1.val()).date(1).format('YYYY-MM-DD');
				var maxi2 = dayjs(date1.val()).add(1, 'month').date(1).format('YYYY-MM-DD');
				var my_email = $('#edit-email').val().trim();
				var snag = 0;
				var existingStarts_room = [];
				var existingStarts_start = [];
				var existingStarts_end = [];

				function update_avail2(text) {
					var mmm_date = dayjs($('#edit-reservation-date').val()).format('YYYY-MM-DD');
					console.log('inside update_avail2 ' + text);
					console.log("/slr_dates2.json?date=" + mmm_date + "&t=" + Date.now());
					$.getJSON("/slr_dates2.json?date=" + mmm_date + "&t=" + Date.now(), function (json) {

						var k;
						for (k = 0; k < json.length; k++) {
							j_room = json[k].room;
							j_start = json[k].start;
							j_end = json[k].end;
							j_name = json[k].name;
							existingStarts_room.push(j_room);
							existingStarts_start.push(j_start);
							existingStarts_end.push(j_end);
						}

						var date1a = $('#edit-time-start-date').val();
						var date2a = $('#edit-time-end-date').val();
						var time1a = $('#edit-time-start-time').val();
						var time2a = $('#edit-time-end-time').val();
						my_start_test = dayjs(date1a + ' ' + time1a);
						my_end_test = dayjs(date2a + ' ' + time2a);
						var my_overlap = 0;
						for (var p = 0; p < existingStarts_start.length; p++) {
							var d_Ends = dayjs(existingStarts_end[p]);
							var d_Starts = dayjs(existingStarts_start[p]);
							var room_id2 = $('#edit-room').val();
							if (
								(my_start_test.isBefore(d_Ends) && my_end_test.isAfter(d_Starts)) || my_start_test == d_Starts || my_end_test == d_Ends) { // overlaps an existing rez
								if (existingStarts_room[p] == room_id2) {
									my_overlap = 1;
									snag = 1;
								}
							}
							if (my_overlap == 1) {
								alert('This room and reservation time are no longer available. Please choose another time or another room.');
							}
						}
						if (my_overlap != 1) {
							console.log('/slr/confirmed.json?t=' + Date.now() + '&email=' + my_email);
							$.getJSON(encodeURI('/slr/confirmed.json?t=' + Date.now() + '&email=' + my_email), function (json2) {
								var k_dates = [];
								for (k = 0; k < json2.length; k++) {
									k_dates.push(json2[k].date);
								}
								console.log(json2);
								console.log(k_dates);

								if (k_dates.includes(mini)) { 
									alert('Individuals/groups can make 1 reservation per day.');
									snag = 1;
								} else if (snag < 1) {
										if (json2.length >= 5) {
											alert('Individuals/groups can make up to 5 reservations per month.');
											snag = 1;
										} else if (snag < 1) {
												$('.webform-submission-form').submit();
											}
									}
							});
						}
					});
				}
				if (is_admin == '1') {
					$('.webform-submission-form').submit();
				} else {
					update_avail2('3a');
				}
			});
		});
	});
})(jQuery);