// (function () {

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

// var database = firebase.database(); 

// Get element 

var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogout = document.getElementById('btnLogout');
// login 
btnLogin.addEventListener('click', e => {

  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();

  // Sign in

  //   var promise = auth.signInWithEmailAndPassword(email,pass)
  //     .then(res => console.log(res)); 
  //   // log the errors to the consol

  //   promise.catch(e => console.log(e.message));

  //   } 

  //   );

  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
      // Existing and future Auth states are now persisted in the current
      // session only. Closing the window would clear any existing state even
      // if a user forgets to sign out.
      // ...
      // New sign-in will be persisted with session persistence.
      firebase.auth().signInWithEmailAndPassword(email, pass);
      window.location.href = "../index.html";
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      // if (signInWithEmailAndPassword() == true) {

      // }
    });
})
// signUp
btnSignUp.addEventListener('click', e => {

  var email = txtEmail.value;
  var pass = txtPassword.value;
  var auth = firebase.auth();

  // Sign Up

  var promise = auth.createUserWithEmailAndPassword(email, pass);
  // log the errors to the consol
  promise.catch(e => console.log(e.message));

});
// Logout

btnLogout.addEventListener("click", e => {
  firebase.auth().signOut();
})
// adding a listener

firebase.auth().onAuthStateChanged(firebaseUser => {

  if (firebaseUser) {
    (console.log(firebaseUser));
    btnLogout.classList.remove("hide");
  } else {
    console.log('not logged in');
    btnLogout.classList.add("hide");
  }

});


// });