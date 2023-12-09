const firebaseConfig = {
  apiKey: "AIzaSyA5xhEizIIQe_nlzE5V2zEMwxhelsf0x9U",
  authDomain: "login-43ac1.firebaseapp.com",
  databaseURL: "https://login-43ac1-default-rtdb.firebaseio.com/",
  projectId: "login-43ac1",
  storageBucket: "login-43ac1.appspot.com",
  messagingSenderId: "740992002096",
  appId: "1:740992002096:web:fded57ec634cf1905c65f5"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const dbRef = firebase.database().ref();

  const detailsRef = dbRef.child('userdetails');
  detailsRef.on("child_added", function(snapshot, prevChildKey) {
    var newPost = snapshot.val();
    });
    function send() {
      var email = document.getElementById("email").value;
      var name = document.getElementById("name").value;
      var feedback = document.getElementById("feedback").value;
  
      // Your existing code to push data to Firebase
      detailsRef.push().set({
          name: name,
          email: email,
          feedback: feedback,
      });
  
      // Alert message after form submission
      alert("Thank you for reaching out, we will get back to you as soon as possible.");
  }
    