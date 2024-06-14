  // Get the URL
  var url = window.location.href;


  // Extract the query string
  var queryString = url.split("?")[1];

  // Parse the query string
  var urlParams = new URLSearchParams(queryString);

  // Get the parameter values
  var parameterMonth = urlParams.get("month");
  var parameterLoc = urlParams.get("loc");

  document.querySelector('#loc').addEventListener("change", (event) => {
    window.location.href = `?month=${parameterMonth}&loc=${event.target.value}`;
  });
  const selectList = document.getElementById('loc');

  for (let option of selectList.options) {
    let chosen = option.value;
    if(chosen === parameterLoc) {
      selectList.value = parameterLoc;
    }
  }



  async function getJSON(params) {
  // Get the JSON
    const my_lovely_url = '/mr_month.json?date='+parameterMonth+'&date2='+nextMonthhh+'&loc='+parameterLoc;
    const response = await fetch(my_lovely_url);
    const names = await response.text();
    events2 = JSON.parse(names);
    var len = events2.length;
    for (var i = 0; i < len; i += 1)
    {
      let calDate = document.querySelector('#d-'+events2[i].date);

  let topic = document.createElement('div');
  topic.classList.add("mr-rez");
  topic.classList.add("room" + events2[i].mlocation);
  if(events2[i].mlocation == '783' || events2[i].mlocation == '808' || events2[i].mlocation == '791' || events2[i].mlocation == '793' || events2[i].mlocation == '796' || events2[i].mlocation == '839' || events2[i].mlocation == '801' || events2[i].mlocation == '804') {
  	  topic.classList.add("primary");
  } else if(events2[i].mlocation == '850' || events2[i].mlocation == '809' || events2[i].mlocation == '794' || events2[i].mlocation == '797' || events2[i].mlocation == '800' || events2[i].mlocation == '802') {
  	  topic.classList.add("primary-darker");
  } else {
  	  topic.classList.add("primary-vivid");
  }
  topic.textContent = events2[i].mtopic;
  let startTime = document.createElement('div');
  let rezRoom = document.createElement('div');
  let rezEdit = document.createElement('a');

  let rezEditLink = '/admin/structure/webform/manage/meeting_room_reservation_request/submission/'+events2[i].sid+'/edit';
  var newStart = dayjs('2022-01-01 - ' + events2[i].start);
  var newEnd = dayjs('2022-01-01 - ' + events2[i].end);

  startTimeRaw = newStart.format("h:mm A") +'-'+ newEnd.format("h:mm A");
  startTime.textContent = startTimeRaw;
  rezRoom.textContent = events2[i].room;
  rezEdit.textContent = 'edit';
  rezEdit.href = rezEditLink;
  rezEdit.classList.add("anon");

topic.append(startTime);
  topic.append(rezRoom);
  
 // if() {
    topic.append(rezEdit);
 // }
  calDate.append(topic);

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
    var html = '<div class="calendar-month-label"><h2><a href="?month='+lastYear+'-'+prevMo+'&loc='+parameterLoc+'">Previous</a> <span> ' + months_labels[params.month] + ' ' + thisYear + '</span> <a href="?month='+nextMonthh+'&loc='+parameterLoc+'">Next</a></h2></div>';
    
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
        var myId = 'd-' + params.year + '-' + myMonth + '-' + myDate;

        html += '<td id="' + myId + '" class="day" title="' + display_date.toLocaleDateString('en-GB', options) + '">' + c + '</td>';
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
