//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAM090ezQ-2Zscv4XVXDwT77DTjYDiYVEE",
      authDomain: "letschat-app-7341e.firebaseapp.com",
      databaseURL: "https://letschat-app-7341e-default-rtdb.firebaseio.com",
      projectId: "letschat-app-7341e",
      storageBucket: "letschat-app-7341e.appspot.com",
      messagingSenderId: "211479852799",
      appId: "1:211479852799:web:6ae439d28d1208f6ce3eca"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");
    
    function send()
     {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push ({
      name:user_name,
      message:msg,
      like:0 
});
document.getElementById("msg").value= "";
    } 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send() {}

//End code
      } });  }); }
getData();
