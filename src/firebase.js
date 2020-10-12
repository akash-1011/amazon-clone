import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDd13_VAy2AnPSUi4OZ18h84M2Wikrtivs",
    authDomain: "clone-3e82f.firebaseapp.com",
    databaseURL: "https://clone-3e82f.firebaseio.com",
    projectId: "clone-3e82f",
    storageBucket: "clone-3e82f.appspot.com",
    messagingSenderId: "600102321282",
    appId: "1:600102321282:web:0379dd1d1f3bedb6be089b"
  });

  const auth = firebase.auth()

  export { auth}