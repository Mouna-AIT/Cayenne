// Program waits until everything is loaded before executing any code
$(document).ready(function () {

// FullCalendar loads
    var calendarEl = document.getElementById("calendar");

    console.log("build calendar")

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: "local",
      plugins: [ "dayGrid" ],
      
      // Event Tooltips, courtesy of Popper.js and Tooltip.js
      eventRender: function(info) {
        var tooltip = new Tooltip(info.el, {
          title: info.event.extendedProps.description,
          placement: "top",
          trigger: "hover",
          container: "body"
        });
      },
      // Events
      events: [
        {
          id: "a",
          title: "Event Title",
          start: "2019-07-14T14:00:00",
          end: "2019-07-16T16:00:00",
          description: "a really cool event"
        },
        {
          id: "b",
          title: "Sub-event Title",
          start: "2019-07-16T14:00:00",
          description: "another also cool event"
        }
      ],
    });

    calendar.render();

    var event = calendar.getEventById("a")
    var start = event.start
    var end = event.end
    console.log(start.toISOString())

    $("#event-submit").click(function(event){

      event.preventDefault();

      var evName = $("#event-name").val().trim();
      var evStarD = $("#event-start-date").val().trim();
      var evEndsD = $("#event-end-date").val().trim();
      var evStarT = $("#event-start-time").val().trim();
      var evEndsT = $("#event-end-time").val().trim();
      var evDesc = $("#event-description").val().trim();
      console.log(evName);
      console.log(evStarD);
      console.log(evEndsD);
      console.log(evStarT);
      console.log(evEndsT);
      console.log(evDesc);

      // var test = calendar.addEvent({
      //   title: evName,
      //   start: new Date(),
      //   end: "2019-07-17",
      //   description: "Hello World!"
      // });
      // console.log(test);
      // console.log(calendar.getEvents());

      var dynamicTest = calendar.addEvent({
        title: evName,
        start: evStarD + "T" + evStarT,
        end: evEndsD + "T" + evEndsT,
        description: evDesc
      });
      console.log(dynamicTest.start);
      console.log(dynamicTest.end);

      console.log(evStarD + "T" + evStarT)

        if (dynamicTest === null){
          alert("Bad date/time format. Please enter date as follows: YYYY-MM-DD")
        }
        else if (dynamicTest === "undefined"){
          alert("Bad date/time format. Please enter date as follows: YYYY-MM-DD")
        }
        else {};
    });
});