(function() {

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
  
  var promise = auth.signInWithEmailAndPassword(email,pass); 
  // log the errors to the consol
  
  promise.catch(e => console.log(e.message));
  
  }
  
  );
  
  // signUp
  btnSignUp.addEventListener('click', e => {
  
    var email = txtEmail.value;
    var pass = txtPassword.value;
    var auth = firebase.auth();
  
  // Sign Up
  
  var promise = auth.createUserWithEmailAndPassword(email,pass); 
  // log the errors to the consol
  
  promise.catch(e => console.log(e.message));
  
  });
  
  // adding a listener
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
  
    if(firebaseUser) {
      (console.log(firebaseUser));
    } else {
      console.log('not logged in');
  }
  
  });
  
  }());
  
  
  
  