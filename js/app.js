// Program waits until everything is loaded before executing any code
$(document).ready(function () {

    console.log("doc ready")

// FullCalendar (should) load
    var calendarEl = document.getElementById('calendar');

    console.log("build calendar")

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: "local",
      plugins: [ "dayGrid" ],
      events: [
        {
          id: "a",
          title: "Event Title",
          start: "2019-07-14T14:00:00",
          end: "2019-07-14T16:00:00"
        }
      ]
    });

    calendar.render();

    var event = calendar.getEventById("a")
    var start = event.start
    console.log(start.toISOString())

});