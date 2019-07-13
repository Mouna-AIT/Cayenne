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

});

