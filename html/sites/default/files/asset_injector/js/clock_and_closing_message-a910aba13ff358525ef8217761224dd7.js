// Create clock div
var clockDiv = document.createElement('div');
clockDiv.setAttribute('id', 'digitalClock');
clockDiv.style.position = 'fixed';
clockDiv.style.bottom = '0px';
clockDiv.style.right = '0px';
clockDiv.style.padding = '10px';
clockDiv.style.background = 'rgba(0, 0, 0, 0.5)';
clockDiv.style.color = '#fff';
clockDiv.style.fontFamily = 'Arial, sans-serif';
clockDiv.style.zIndex = '9999';

document.body.appendChild(clockDiv);

var libraryHours = {
    0: {close: 17},  // Sunday
    1: {close: 20},  // Monday
    2: {close: 20},  // Tuesday
    3: {close: 20},  // Wednesday
    4: {close: 20},  // Thursday
    5: {close: 17},  // Friday
    6: {close: 17},  // Saturday
};

function updateClock() {
    var now = new Date();
    var day = now.getDay();
    var hours = now.getHours();
    var minutes = now.getMinutes();

    // Check if the library closes within 30 minutes
    var closingHour = libraryHours[day].close;
    var closingDisplayHour = closingHour % 12 || 12; // This will convert closingHour into 12 hour format.
    var closingAmPm = closingHour >= 12 ? 'pm' : 'am';
    var currentTimeInMinutes = hours * 60 + minutes;
    var closingTimeInMinutes = closingHour * 60;

    // Convert from 24h to 12h format
    var displayHours = hours % 12;
    displayHours = displayHours ? displayHours : 12; // the hour '0' should be '12'
    
    // Add a zero in front of numbers<10
    var displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    
    var amPm = hours >= 12 ? 'pm' : 'am';
    var timeStr = displayHours + ':' + displayMinutes + amPm;

    // Check if the library is closing within the next 30 minutes
    if (currentTimeInMinutes >= (closingTimeInMinutes - 30) && currentTimeInMinutes < closingTimeInMinutes){
        var closingStr = 'The Library closes at ' + closingDisplayHour + ':00' + closingAmPm + '. ';
        timeStr = closingStr + 'The current time is: ' + timeStr;
    }

    clockDiv.innerText = timeStr;
}

setInterval(updateClock, 1000);
