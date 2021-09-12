import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBgCNcmbe9aOCedY65kTdL76Sjk-mkkKe4",
    authDomain: "team-voting-app-b57e4.firebaseapp.com",
    databaseURL: "https://team-voting-app-b57e4-default-rtdb.firebaseio.com",
    projectId: "team-voting-app-b57e4",
    storageBucket: "team-voting-app-b57e4.appspot.com",
    messagingSenderId: "350695847153",
    appId: "1:350695847153:web:ebc6d17331cc09e8c56550"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();