// Program waits until everything is loaded before executing any code
$(document).ready(function() {

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
            id: "test",
            title: "Sub-event Title",
            start: "2019-07-16T14:00:00",
            description: "another also cool event"
          }
        ],
        eventColor: "#3f0e40"
    });

    calendar.render();

    var firebaseConfig = {
        apiKey: "AIzaSyCSlUrEzG6UyqNwOY1rT4gac5D_LXfRq34",
        authDomain: "gift-app-3a099.firebaseapp.com",
        databaseURL: "https://gift-app-3a099.firebaseio.com",
        projectId: "gift-app-3a099",
        storageBucket: "",
        messagingSenderId: "549853130134",
        appId: "1:549853130134:web:22ccb0856801f2a2"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user) {
        console.log(user.email);
    })

    var event = calendar.getEventById("a")
    var start = event.start
    var end = event.end
    console.log(start.toISOString())

      // Event Submission
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
          id: "test",
          title: evName,
          start: evStarT ? evStarD + "T" + evStarT : evStarD,
          end: evEndsT ? evEndsD + "T" + evEndsT : evEndsD,
          description: evDesc
        });

        console.log(dynamicTest);
        console.log(dynamicTest.start);
        console.log(evStarD + evStarT);
        
          // Form handling (not functioning as intended)
           if (dynamicTest.start === null){
             alert("Bad date format: (NULL). Please enter date as follows: YYYY-MM-DD.")
           }
           else if (dynamicTest.start === undefined){
            alert("Bad date format: (UNDEFINED). Please enter date as YYYY-MM-DD.")
           }
           else {};

      });

      $(".fc-event-container").click(function(event){
        console.log("working");
        var TargetEV = calendar.getEventById("test");
        var delPro = prompt("Would you like to delete this event?(y or n)");
        console.log(TargetEV);
        console.log(event);
        if (delPro === "y"){
          alert("So shall it be")
          TargetEV.remove();
        }
        else if (delPro === "n"){
          alert("It shall remain")
        }
        else {
          alert("FOLLOW MY INSTRUCTIONS")
        }
        console.log(calendar.GetEvents);
      });
});