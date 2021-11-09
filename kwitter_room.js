
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDEwPuC0mGcevSjdK0hAGsdDSv_Tj8R_3Y",
      authDomain: "tic-tac-toe-game-cc3b2.firebaseapp.com",
      databaseURL: "https://tic-tac-toe-game-cc3b2-default-rtdb.firebaseio.com",
      projectId: "tic-tac-toe-game-cc3b2",
      storageBucket: "tic-tac-toe-game-cc3b2.appspot.com",
      messagingSenderId: "912549463751",
      appId: "1:912549463751:web:4a4b4df83df60da2dd20e2"
    };
    
  // Initialize Firebase 
  firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
