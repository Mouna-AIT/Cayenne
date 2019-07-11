// Program waits until everything is loaded before executing any code
$(document).ready(function () {

// FullCalendar loads
    var calendarEl = document.getElementById("calendar");

    console.log("build calendar")

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: "local",
      plugins: [ "dayGrid" ],
      
      eventRender: function(info) {
        var tooltip = new Tooltip(info.el, {
          title: info.event.extendedProps.description,
          placement: "top",
          trigger: "hover",
          container: "body"
        });
      },
      events: [
        {
          id: "a",
          title: "Event Title",
          start: "2019-07-14T14:00:00",
          end: "2019-07-14T16:00:00",
          description: "a really cool event"
        }
      ],
    });

    calendar.render();

    var event = calendar.getEventById("a")
    var start = event.start
    var end = event.end
    console.log(start.toISOString())

});