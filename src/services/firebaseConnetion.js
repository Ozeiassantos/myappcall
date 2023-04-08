import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyA_Hq1yiK_Evsolnj1AHvuPYUtkatUOkrI",
    authDomain: "tickets-6412a.firebaseapp.com",
    projectId: "tickets-6412a",
    storageBucket: "tickets-6412a.appspot.com",
    messagingSenderId: "1050304451274",
    appId: "1:1050304451274:web:40c0e2d95ad3b3ba211a33",
    measurementId: "G-2DDPBBE7ZJ"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage}