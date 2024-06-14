console.log('events_calendar_');
(function ($) {
	
	var today = new Date();
  today.setHours(0,0,0,0);


  $(document).ready(function () {
  	
    moveEventsToCalendar();
    $(document).ajaxComplete(function () {
      moveEventsToCalendar();
    });
  });

  function moveEventsToCalendar() {
    const eventDivs = document.querySelectorAll('.event-cal');
    eventDivs.forEach((eventDiv) => {
      const dateClass = Array.from(eventDiv.classList).find((cls) => cls.startsWith('d-'));
      if (dateClass) {
        const calendarCell = document.getElementById(dateClass);
        if (calendarCell) {
          calendarCell.appendChild(eventDiv);
        }
      }
    });
  }

  function calendar(params) {
    var days_labels = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
        months_labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var days_in_month = getDaysInMonth(params.month, params.year),
        first_day_date = new Date(params.year, params.month, 1),
        first_day_weekday = first_day_date.getDay();

    var prev_month = params.month == 0 ? 11 : params.month - 1,
        prev_year = prev_month == 11 ? params.year - 1 : params.year,
        prev_days = getDaysInMonth(prev_month, prev_year);

    var prevMo = params.month;
    var thisYear = params.year;
    var lastYear = thisYear;

    if (prevMo == 0) {
      prevMo = 12;
      lastYear = parseInt(thisYear) - 1;
    }
    if (parseInt(prevMo) < 10) {
      prevMo = "0" + prevMo;
    }

    function getNextMonth(params) {
      var nextMo = params.month + 2;
      var thisYear = params.year;
      var nextYear = thisYear;
      if (nextMo > 12) {
        nextMo = 1;
        nextYear = parseInt(thisYear) + 1;
      }
      if (nextMo < 10) {
        nextMo = "0" + nextMo;
      }
      var nextMonth = nextYear + '-' + nextMo;
      return nextMonth;
    }
    var nextMonthh = getNextMonth(params);

    function retainUrlParams(baseUrl) {
      var currentUrl = new URL(window.location.href);
      var url = new URL(baseUrl, currentUrl.origin + currentUrl.pathname);
      var originalParams = new URLSearchParams(window.location.search);
      for (var key of originalParams.keys()) {
        if (key !== 'month') {
          url.searchParams.set(key, originalParams.get(key));
        }
      }
      return url.toString();
    }

    var nextMonthLink = retainUrlParams('?month=' + nextMonthh);
    var prevMonthLink = retainUrlParams('?month=' + lastYear + '-' + prevMo);

    var html = '<div class="calendar-month-label calendar__month-label"><h2><a href="' + prevMonthLink + '" class="calendar__month-nav calendar__month-nav--prev">&lt; Previous</a> <span class="calendar__month-name"> ' + months_labels[params.month] + ' ' + thisYear + '</span> <a href="' + nextMonthLink + '" class="calendar__month-nav calendar__month-nav--next">Next &gt;</a></h2></div>';

    html += '<table class="calendar-table calendar__table">';
    html += '<tr class="week-days calendar__week-days">';
    for (var i = 0; i <= 6; i++) {
      html += '<td class="day calendar__day">';
      html += days_labels[i];
      html += '</td>';
    }
    html += '</tr>';

    var w = 0; 
    var n = 1; 
    var c = 1; 

    for (var i = 0; i < 6 * days_labels.length; i++) {
      if (w == 0) {
        html += '<tr class="week calendar__week">';
      }

      if (i < first_day_weekday) {
        html += '<td class="day other-month calendar__day calendar__day--other-month">' + (prev_days - first_day_weekday + i + 1) + '</td>';
      } else if (c > days_in_month) {
        html += '<td class="day other-month calendar__day calendar__day--other-month">' + n + '</td>';
        n++;
      } else {
        var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
        var display_date = new Date(params.year, params.month, c);
        display_date.setHours(0,0,0,0);  // Ensure the time is set to 00:00:00 for a fair comparison

        var myDate = c;
        if (c < 10) {
          myDate = "0" + c;
        }
        var myMonth = params.month + 1;
        if (myMonth < 10) {
          myMonth = "0" + myMonth;
        }
        var myId = 'd-' + params.year + '-' + myMonth + '-' + myDate;

        var additionalClass = display_date < today ? ' past-date' : '';

        html += '<td id="' + myId + '" class="day calendar__day' + additionalClass + '" title="' + display_date.toLocaleDateString('en-GB', options) + '">' + c + '</td>';
        c++;
      }

      if (w == days_labels.length - 1) {
        html += '</tr>';
        w = 0;
      } else {
        w++;
      }
    }
    html += '</tr>';
    return html;
  }

  function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
  }

  var url = window.location.href;
  var queryString = url.split("?")[1];
  var urlParams = new URLSearchParams(queryString);
  var parameterMonth = urlParams.get("month");

  if (parameterMonth) {
    var params = {
      month: (parseInt(parameterMonth.substring(5, 7)) - 1),
      year: parameterMonth.substring(0, 4)
    };
  } else {
    var now = new Date();
    var params = {
      month: now.getMonth(),
      year: now.getFullYear()
    };
  }

  document.getElementById('calendar').innerHTML = calendar(params);
  moveEventsToCalendar();

})(jQuery);
