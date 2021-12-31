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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey; 
  console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
   document.getElementById("output").innerHTML += row;
   }); }); }
    getData();
function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
}
 
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
