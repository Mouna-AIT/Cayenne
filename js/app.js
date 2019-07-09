// Program waits until everything is loaded before executing any code
$(document).ready(function () {

    console.log("doc ready")

// FullCalendar (should) load
    var calendarEl = document.getElementById('calendar');

    console.log("running")

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'dayGrid' ]
    });

    calendar.render();

});