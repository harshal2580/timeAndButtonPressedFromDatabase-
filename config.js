import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD4aYIGzAmtOCPQx2ETuT_tLZl7QROc2g8",
  authDomain: "wirelessbuzzer-eb1f8.firebaseapp.com",
  projectId: "wirelessbuzzer-eb1f8",
  storageBucket: "wirelessbuzzer-eb1f8.appspot.com",
  messagingSenderId: "57508484403",
  appId: "1:57508484403:web:8c37cc740bab51de691a46"
};

let app=firebase.initializeApp(firebaseConfig);
export default app.database();