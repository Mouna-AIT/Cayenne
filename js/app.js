// Program waits until everything is loaded before executing any code
$(document).ready(function () {

// FullCalendar loads
    var calendarEl = document.getElementById("calendar");

    console.log("build calendar")

    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: "local",
      plugins: [ "dayGrid" ],
      displayEventEnd: true,
      
        // Event Tooltips, courtesy of Popper.js and Tooltip.js
        eventRender: function(info) {
          var tooltip = new Tooltip(info.el, {
            title: info.event.extendedProps.description,
            placement: "top",
            trigger: "hover",
            container: "body",
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

        if (evEndsD === ""){
          evEndsD = evStarD;
        }
        else {};

        var dynamicTest = calendar.addEvent({
          title: evName,
          start: evStarT ? evStarD + "T" + evStarT : evStarD,
          end: evEndsT ? evEndsD + "T" + evEndsT : evEndsD,
          description: evDesc
        });

        console.log(dynamicTest);
        console.log(dynamicTest.start);
        console.log(evStarD + evStarT)

          if (dynamicTest === null){
            alert("Bad date/time format (NULL). Please enter date as follows: YYYY-MM-DD.")
          }
          else if (dynamicTest === undefined){
            alert("Bad date/time format (UNDEFINED). Please enter date as YYYY-MM-DD.")
          }
          else {};
      });
});