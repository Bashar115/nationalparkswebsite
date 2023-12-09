const firebaseConfig = {
  apiKey: "AIzaSyA5xhEizIIQe_nlzE5V2zEMwxhelsf0x9U",
  authDomain: "login-43ac1.firebaseapp.com",
  databaseURL: "https://login-43ac1-default-rtdb.firebaseio.com/",
  projectId: "login-43ac1",
  storageBucket: "login-43ac1.appspot.com",
  messagingSenderId: "740992002096",
  appId: "1:740992002096:web:fded57ec634cf1905c65f5"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function send() {
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email1').value;
  const campsiteType = document.getElementById('campsiteType').value;
  const checkInDate = document.getElementById('checkInDate').value;
  const checkOutDate = document.getElementById('checkOutDate').value;

  const reservationData = {
    fullName,
    email,
    campsiteType,
    checkInDate,
    checkOutDate
  };

  const database = firebase.database().ref('reservations');
  database.push(reservationData)
    .then(() => {
      document.getElementById('reservationStatus').innerText = 'Reservation successful!';
    })
    .catch(error => {
      document.getElementById('reservationStatus').innerText = 'Error occurred: ' + error.message;
    });
}

document.getElementById('reservationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  sendDataToFirebase(); // Call function to send data to Firebase
});
