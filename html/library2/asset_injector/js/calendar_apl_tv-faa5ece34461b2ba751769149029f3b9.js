  // Get the URL
  var url = window.location.href;


  // Extract the query string
  var queryString = url.split("?")[1];

  // Parse the query string
  var urlParams = new URLSearchParams(queryString);

  // Get the parameter values
  var parameterMonth = urlParams.get("month");

  async function getJSON(params) {
  // Get the JSON
    const my_lovely_url = '/tv_month.json?date='+parameterMonth+'&date2='+nextMonthhh;
    console.log(my_lovely_url);
    const response = await fetch(my_lovely_url);
    const names = await response.text();
    events2 = JSON.parse(names);
    var ddays = document.getElementsByClassName('dday');
    var len = events2.length;
        for (var j = 0; j < ddays.length; j += 1) {
          this_date = ddays[j].getAttribute('data-date');
         // console.log(this_date);
    for (var i = 0; i < len; i += 1)
    {
      if(
        (dayjs(this_date).isAfter(dayjs(events2[i].start).subtract(1,'day'))) 
        && 
        (dayjs(this_date).isBefore(dayjs(events2[i].end))) ) { 

      let calDate = document.querySelector('#d-'+this_date);

  let topic = document.createElement('div');
  topic.classList.add("tv-day");

  topic.textContent = events2[i].mtopic;
  let startTime = document.createElement('div');
  let rezEdit = document.createElement('a');
  let rezImg = document.createElement('img');

  let rezEditLink = '/node/'+events2[i].sch_seq_id+'/edit';
  var newStart = dayjs(events2[i].start);
  var newEnd = dayjs(events2[i].end);

  startTimeRaw = newStart.format("YYYY-MM-DD h:mm A") +'-'+ newEnd.format("YYYY-MM-DD h:mm A");
  startTime.textContent = startTimeRaw;
  rezEdit.title = 'edit schedule';
  rezEdit.href = rezEditLink;
  rezImg.src = events2[i].image;
  rezImg.classList.add("thumbnail");

rezEdit.append(rezImg);
  
    topic.append(rezEdit);
  calDate.append(topic);
}
    }
  }

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
   
    if(prevMo == 0) {
      prevMo = 12;
      lastYear = parseInt(thisYear) - 1;
    } 
      if(parseInt(prevMo) < 10) {
      prevMo = "0" + prevMo;
    }

    var nextMonthh = getNextMonth(params);
    var html = '<div class="calendar-month-label"><h2><a href="?month='+lastYear+'-'+prevMo+'">Previous</a> <span> ' + months_labels[params.month] + ' ' + thisYear + '</span> <a href="?month='+nextMonthh+'">Next</a></h2></div>';
    
    function getDaysInMonth(month, year) {
      // 0 = last day of the previous month
      return new Date(year, month + 1, 0).getDate();
    }
    
    // calendar content
    html += '<table class="calendar-table">';
    
    // week days labels
    html += '<tr class="week-days">';
    for (var i = 0; i <= 6; i++) {
      html += '<td class="day">';
      html += days_labels[i];
      html += '</td>';
    }
    html += '</tr>';
    
    var w = 0; // week day
    var n = 1; // next days date
    var c = 1; // current date
    
    // dates loop
    for (var i = 0; i < 6*days_labels.length; i++) {
      if (w == 0) {
        // first week's day
        html += '<tr class="week">';
      }    
      
      if (i < new Date(params.year, params.month, 1).getDay()) {
        // previous month's day
        html += '<td class="day other-month">' + (prev_days - first_day_weekday + i + 1) + '</td>';
      } else if (c > days_in_month) {
        // next month's day
        html += '<td class="day other-month">' + n + '</td>';
        n++;
      } else {
        // current month's day
        var options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
        var display_date = new Date(params.year, params.month, c);
        var myDate = c;
        if(c < 10) {
          myDate = "0" + c;
        }
        var myMonth = params.month + 1;
        if(myMonth < 10) {
          myMonth = "0" + myMonth;
        }
        var myDdate = params.year + '-' + myMonth + '-' + myDate;
        var myId = 'd-' + myDdate;

        html += '<td id="' + myId + '" class="day dday" data-date="'+myDdate+'" title="' + display_date.toLocaleDateString('en-GB', options) + '">' + c + '</td>';
        c++;
      }
      
      if (w == days_labels.length - 1) {
        // last week's day
        html += '</tr>';
        w = 0;
      } else {
        w++;
      }
    }  

    html += '</tr>'; 
    return html;
  }


  if(parameterMonth) {
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
    var miMonth = parseInt(params.month)+1;
    if(miMonth<10) {
      miMonth = "0" + miMonth;
    }
    var parameterMonth = params.year+'-'+miMonth;
  }
  function getNextMonth(params) {
    var nextMo = params.month + 2;
    var thisYear = params.year;
    var nextYear = thisYear;
    if(nextMo > 12) {
      nextMo = 1;
      nextYear = parseInt(thisYear) + 1;
    }
    if(nextMo < 10) {
      nextMo = "0" + nextMo;
    }
    var nextMonth = nextYear+'-'+nextMo;
    return nextMonth;
  }
  var nextMonthhh = getNextMonth(params);
  const entries = getJSON(params);

  document.getElementById('calendar').innerHTML = calendar(params);
