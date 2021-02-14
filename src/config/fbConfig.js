import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-storage'

const firebaseConfig = {
    apiKey: "AIzaSyBjIW1boRYG5g5zCwjwHF-CsfbqB8Spuso",
    authDomain: "newappkafarzada.firebaseapp.com",
    databaseURL: "https://newappkafarzada-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "newappkafarzada",
    storageBucket: "newappkafarzada.appspot.com",
    messagingSenderId: "305379363855",
    appId: "1:305379363855:web:708da3b341106f9d6a277a",
    measurementId: "G-MJK9J97BX6"
};

firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({
    timestampsInSnapshots: true
})

export default firebase