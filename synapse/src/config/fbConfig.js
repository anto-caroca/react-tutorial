import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDoy14h28zbWfHeujPO2MlhZwHzpuUA8a4",
    authDomain: "synapse-b5ef0.firebaseapp.com",
    databaseURL: "https://synapse-b5ef0.firebaseio.com",
    projectId: "synapse-b5ef0",
    storageBucket: "synapse-b5ef0.appspot.com",
    messagingSenderId: "724127986967"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase 