(function($, jQuery) {
  $(document).ready(function() {
    var opening_hour = 10;
    var closing_hour = 21;
    var this_date = dayjs().add(2, 'hours').minute(0);
    var max_date = dayjs().add(4, 'weeks');
    var min_date = dayjs().add(2, 'hours');
    var max_sim = 1;
    var f_time = 'h:mm A';
    var f_date = 'dddd, YYYY-MM-DD';
    var pp_format = 'YYYY-MM-DD H:mm';
    var existingStarts = [];
    var busy = [];
    $.getJSON("/pp_dates.json", function(json) {
      var k;
      for (k = 0; k < json.length; k++) {
        j_date = json[k].date.trim();
        j_people = json[k].people;
        existingStarts.push(j_date);
        i_busy(j_date);
        var next1 = dayjs(j_date).add(15, 'minutes').format(pp_format);
        i_busy(next1);
        if (j_people > 1) {
          var next2 = dayjs(j_date).add(30, 'minutes').format(pp_format);
          i_busy(next2);
          var next3 = dayjs(j_date).add(45, 'minutes').format(pp_format);
          i_busy(next3);
        }
        if (j_people > 2) {
          var next4 = dayjs(j_date).add(60, 'minutes').format(pp_format);
          i_busy(next4);
          var next5 = dayjs(j_date).add(75, 'minutes').format(pp_format);
          i_busy(next5);
        }
        if (j_people > 3) {
          var next6 = dayjs(j_date).add(90, 'minutes').format(pp_format);
          i_busy(next6);
          var next7 = dayjs(j_date).add(105, 'minutes').format(pp_format);
          i_busy(next7);
        }
      }
      console.log('existingStarts:');
      console.log(existingStarts);
      console.log('busy:');
      console.log(busy);
    });
    var max_busy = 1;
    var disabledDays = [];
    $.getJSON("/special_dates.json", function(json) {
      console.log('special_dates.json loaded');
      var k;
      for (k = 0; k < json.length; k++) {
        j_date = json[k].field_special_date.trim();
        j_early = json[k].field_early_closing;
        if (j_early.length) {
          console.log('early closing day, so adding blocking start times beginning at 18:00');
          var early_date = dayjs(j_date + ' ' + j_early);
          existingStarts.push(early_date.format(pp_format));
          var add_1 = dayjs(early_date).add(30, 'minutes').format(pp_format);
          existingStarts.push(add_1);
          var add_2 = dayjs(early_date).add(60, 'minutes').format(pp_format);
          existingStarts.push(add_2);
          var add_3 = dayjs(early_date).add(90, 'minutes').format(pp_format);
          existingStarts.push(add_3);
          var add_4 = dayjs(early_date).add(120, 'minutes').format(pp_format);
          existingStarts.push(add_4);
          var add_5 = dayjs(early_date).add(150, 'minutes').format(pp_format);
          existingStarts.push(add_5);
        } else {
          console.log('not an early closing day');
          disabledDays.push(j_date);
        }
      }
    });
    console.log('disabledDays:');
    console.log(disabledDays);

    function i_busy(p_time) {
      console.log('i_busy called');
      var next1a = p_time;
      if (busy[next1a] >= 0) {
        busy[next1a]++;
      } else {
        busy[next1a] = 1;
      }
    }
    var date_wrapper = $('#edit-field-pp-date-wrapper');
    var button_wrapper = $('#edit-actions');
    var people_field = $('#edit-field-pp-expected-attendance');
    var p_v = $('input[name=field_pp_expected_attendance]:checked').val();
    if (!p_v) {
      p_v = 4;
    }
    var date1 = $('#edit-field-pp-date-0-value-date');
    var time1 = $('#edit-field-pp-date-0-value-time');
    date_wrapper.prepend('<div id="pp_avail_wrapper"><a href="#" class="pp_less"><span class="material-icons">schedule</span>Check for soonest available times...</a></div>');
    date_wrapper.prepend('<label for="pp_avail_wrapper" class="form-item__label js-form-required form-required">Date</label>');
    var avail_wrapper = $('#pp_avail_wrapper');
    var availStarts = [];
    var e_date = $('#edit-field-pp-date-0-value-date');
    var e_time = $('#edit-field-pp-date-0-value-time');
var submit_button = $('#edit-submit');

submit_button.prop('disabled',true);
//submit_button.val('Select an available time and then Save);	

if (e_date.val() && e_time.val()) {
      var ee_date = dayjs(e_date.val() + ' ' + e_time.val());
      avail_wrapper.prepend('<a class="e_date pp_avail active" data-time="' + e_time.val() + '" data-date="' + e_date.val() + '">' + ee_date.format('dddd, MMMM D') + ' <br> ' + ee_date.format(f_time) + '</a><br>');
    submit_button.prop('disabled',false);

	}
	

	

    function check_dates(input_date, people) {
      var ch_date = input_date;
      if (!people) {
        people = 4;
      }
      //console.log('checking: ' + ch_date.format('YYYY-MM-DD ' + f_time));
      if (ch_date.format('d') == 5 || ch_date.format('d') == 6) {
        console.log(ch_date.format(f_date) + ': not available on Friday or Saturday');
        var ch_date2 = ch_date.add(1, 'day').hour(opening_hour);
        check_dates(ch_date2, people);
      } else { // not a Friday or Saturday
        if ((disabledDays.indexOf(ch_date.format('YYYY-MM-DD'))) >= 0) { // appears in disabledDays array
          console.log(ch_date.format(f_date) + ': not available on holiday');
          var ch_date2 = ch_date.add(1, 'day').hour(opening_hour);
          check_dates(ch_date2, people);
        } else { //not a holiday date
          if (ch_date.isAfter(max_date, 'day')) {
            console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': after maximum date');
          } else {
            if (ch_date.isBefore(min_date)) {
              console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before minimum date');
              var ch_date2 = ch_date.add(15, 'minutes');
              check_dates(ch_date2, people);
            } else {
              if (ch_date.format('H') < opening_hour) { // before opening hour
                console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': before opening hour');
                var ch_date2 = ch_date.hour(opening_hour);
                check_dates(ch_date2, people);
              } else { //after opening hour
                var ch_date3 = ch_date.add(parseInt(people * 30), 'minutes');
                var ch_date4 = ch_date.hour(closing_hour).minute(0);
                if (ch_date3.isAfter(ch_date4)) { //after closing hour -- add minutes for # of people
                  console.log(ch_date.format('dddd, YYYY-MM-DD ' + f_time) + ': extends after closing hour');
                  var ch_date2 = ch_date.add(1, 'day').hour(opening_hour);
                  check_dates(ch_date2, people);
                } else {
                  if (existingStarts.indexOf(ch_date.format(pp_format)) >= 0 || availStarts.indexOf(ch_date.format(pp_format)) >= 0) { // appears in existingStarts array
                    console.log(ch_date.format('dddd, ' + pp_format) + ': existing start');
                    var ch_date2 = ch_date.add(15, 'minutes');
                    check_dates(ch_date2, people);
                  } else {
                    switch (people) { // next few slots are less than 2, based on # of people
                      case '1':
                        console.log('1 selected');
                        console.log('max_sim: ' + max_sim);
                        var test1 = ch_date.format(pp_format);
                        var test2 = ch_date.add(15, 'minutes').format(pp_format);
                        if (busy[test1] >= max_sim || busy[test2] >= max_sim) {
                          console.log(ch_date.format('dddd, ' + pp_format) + ': slot or next slot is busy');
                          var ch_date2 = ch_date.add(15, 'minutes');
                          check_dates(ch_date2, people);
                        } else {
                          console.log(ch_date.format('dddd, ' + pp_format) + ': not too busy');
                          availStarts.push(ch_date.format(pp_format));
                          console.log(availStarts);
                          if (availStarts.length < 4) {
                            var ch_date2 = ch_date.add(15, 'minutes');
                            check_dates(ch_date2, people);
                          }
                        }
                        break;
                      case '2':
                        console.log('2 selected');
                        var test1 = ch_date.format(pp_format);
                        var test2 = ch_date.add(15, 'minutes').format(pp_format);
                        var test3 = ch_date.add(30, 'minutes').format(pp_format);
                        var test4 = ch_date.add(45, 'minutes').format(pp_format);
                        if (busy[test1] >= max_sim || busy[test2] >= max_sim || busy[test3] >= max_sim || busy[test4] >= max_sim) {
                          console.log('slot or next slots are busy');
                          var ch_date2 = ch_date.add(15, 'minutes');
                          check_dates(ch_date2, people);
                        } else {
                          console.log('not too busy');
                          availStarts.push(ch_date.format(pp_format));
                          console.log('new availStarts: ');
                          console.log(availStarts);
                          if (availStarts.length < 4) {
                            var ch_date2 = ch_date.add(15, 'minutes');
                            check_dates(ch_date2, people);
                          }
                        }
                        break;
                      case '3':
                        console.log('3 selected');
                        var test1 = ch_date.format(pp_format);
                        var test2 = ch_date.add(15, 'minutes').format(pp_format);
                        var test3 = ch_date.add(30, 'minutes').format(pp_format);
                        var test4 = ch_date.add(45, 'minutes').format(pp_format);
                        var test5 = ch_date.add(60, 'minutes').format(pp_format);
                        var test6 = ch_date.add(75, 'minutes').format(pp_format);
                        if (busy[test1] >= max_sim || busy[test2] >= max_sim || busy[test3] >= max_sim || busy[test4] >= max_sim || busy[test5] >= max_sim || busy[test6] >= max_sim) {
                          console.log('slot or next slots are busy');
                          var ch_date2 = ch_date.add(15, 'minutes');
                          check_dates(ch_date2, people);
                        } else {
                          console.log('not too busy');
                          availStarts.push(ch_date.format(pp_format));
                          console.log('new availStarts: ');
                          console.log(availStarts);
                          if (availStarts.length < 4) {
                            var ch_date2 = ch_date.add(15, 'minutes');
                            check_dates(ch_date2, people);
                          }
                        }
                        break;
                      case '4':
                      default:
                        console.log('4 selected');
                        var test1 = ch_date.format(pp_format);
                        var test2 = ch_date.add(15, 'minutes').format(pp_format);
                        var test3 = ch_date.add(30, 'minutes').format(pp_format);
                        var test4 = ch_date.add(45, 'minutes').format(pp_format);
                        var test5 = ch_date.add(60, 'minutes').format(pp_format);
                        var test6 = ch_date.add(75, 'minutes').format(pp_format);
                        var test7 = ch_date.add(60, 'minutes').format(pp_format);
                        var test8 = ch_date.add(75, 'minutes').format(pp_format);
                        if (busy[test1] >= max_sim || busy[test2] >= max_sim || busy[test3] >= max_sim || busy[test4] >= max_sim || busy[test5] >= max_sim || busy[test6] >= max_sim || busy[test7] >= max_sim || busy[test8] >= max_sim) {
                          console.log('slot or next slots are busy');
                          var ch_date2 = ch_date.add(15, 'minutes');
                          check_dates(ch_date2, people);
                        } else {
                          console.log('not too busy');
                          availStarts.push(ch_date.format(pp_format));
                          console.log('new availStarts: ');
                          console.log(availStarts);
                          if (availStarts.length < 4) {
                            var ch_date2 = ch_date.add(15, 'minutes');
                            check_dates(ch_date2, people);
                          }
                        }
                        break;
                    }
                  }
                }
              }
            }
          }
        }
      }
      suggest_available(availStarts);
    }
    people_field.change(function() {
      availStarts = [];
      avail_wrapper.empty();
      var t_v = $('input[name=field_pp_expected_attendance]:checked').val();
      console.log('tV:' + t_v);
      if (t_v == '1' || t_v == '2' || t_v == '3' || t_v == '4') {
        check_dates(this_date, t_v);
      } else {
        console.log('please select a number of people');
      }
    });

    function suggest_available(pp_date) {
      avail_wrapper.empty();
      for (var p = 0; p < pp_date.length; p++) {
        var s_date = dayjs(pp_date[p]);
        avail_wrapper.append('<a class="pp_avail" data-time="' + s_date.format('HH:mm:ss') + '" data-date="' + s_date.format('YYYY-MM-DD') + '">' + s_date.format('dddd, MMMM D') + ' <br> ' + s_date.format(f_time) + '</a>');
      }
      $('.pp_avail').click(function() {
        $('.pp_avail').removeClass('active');
        $('.pp_avail').addClass('inactive');
        $(this).removeClass('inactive');
        $(this).addClass('active');
		    submit_button.prop('disabled',false);

        date1.val($(this).attr('data-date'));
        time1.val($(this).attr('data-time'));
      });
      avail_wrapper.append('<br><a href="#" class="pp_less2"><span class="material-icons">schedule</span>Check for soonest available times...</a> ');
      avail_wrapper.append('<br><a href="#" class="pp_more"><span class="material-icons">update</span>Show more available times...</a> ');
      $('.pp_less2').click(function(e) {
        e.preventDefault();
        availStarts = [];
		submit_button.prop('disabled',true);

        console.log('less button');
        check_dates(this_date, p_v);
        date1.val($(this).attr('data-date'));
        time1.val($(this).attr('data-time'));
      });
      $('.pp_more').click(function(e) {
        e.preventDefault();
        var last_av = availStarts.length - 1;
        ch_date5 = dayjs(availStarts[last_av]).add(2, 'hours').minute(0);
        availStarts = [];
        console.log('more button');
        console.log('people_field:' + p_v);
        check_dates(ch_date5, p_v);
        date1.val($(this).attr('data-date'));
        time1.val($(this).attr('data-time'));
      });
    }
    $('.pp_less').click(function(e) {
      e.preventDefault();
      availStarts = [];
	  submit_button.prop('disabled',true);

      if (!p_v) {
        p_v = 4;
      }
      console.log('less button');
      check_dates(this_date, p_v);
      date1.val($(this).attr('data-date'));
      time1.val($(this).attr('data-time'));
    });
  });
})(jQuery);