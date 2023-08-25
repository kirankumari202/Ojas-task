import firebase from "./firebase"
const firebaseConfig = {
	apiKey: "AIzaSyDU25GSWiru3TGL63TrqVnBEdKdoZ0EzMY",
	authDomain: "tweeter-ojas.firebaseapp.com",
	projectId: "tweeter-ojas",
	storageBucket: "tweeter-ojas.appspot.com",
	messagingSenderId: "1040610153566",
	appId: "1:1040610153566:web:c759befa6d6fe2805110cf"
      };

      const firebaseApp = firebase.initializeApp(firebaseConfig);

      //gets the database 
      const db = firebaseApp.firestore();
      export{db}