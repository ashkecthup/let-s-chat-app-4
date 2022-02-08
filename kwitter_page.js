//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBpOfcTjL086LHONAH6BH6JzLygCbodVkg",
      authDomain: "kwitter-c6201.firebaseapp.com",
      databaseURL: "https://kwitter-c6201-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6201",
      storageBucket: "kwitter-c6201.appspot.com",
      messagingSenderId: "132892883558",
      appId: "1:132892883558:web:48ea9a186bfeb37808cba7"
    };
    
    // Initialize Firebase
    //const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    //ADD YOUR FIREBASE LINKS HERE
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
     
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
          });
          document.getElementById("msg").value="";
    }
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
