// Initialize Firebase
var config = {
    apiKey: "AIzaSyC96r2iz0ZMjvVq525vIcrjbJakyIpfxuc",
    authDomain: "dbms-da-3-21mis1033.firebaseapp.com",
    databaseURL: "https://dbms-da-3-21mis1033-default-rtdb.firebaseio.com",
    projectId: "dbms-da-3-21mis1033",
    storageBucket: "dbms-da-3-21mis1033.appspot.com",
    messagingSenderId: "72981045411",
    appId: "1:72981045411:web:b96531ff991a815881df16",
    measurementId: "G-CH4RM1BFSD"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    phone: phone,
    message: message
  });
}
