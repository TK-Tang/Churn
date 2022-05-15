import firebaseApp from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getFirestore } from "firebase/firestore";


const config = {
    apiKey: "AIzaSyCMPUtUxpNgfQ0CqGtEA-KCvV_3ZQ0B6J8",
    authDomain: "the-churn.firebaseapp.com",
    projectId: "the-churn",
    storageBucket: "the-churn.appspot.com",
    messagingSenderId: "208028802776",
    appId: "1:208028802776:web:39da4b332081acf9ec01ad",
    measurementId: "G-TKXSDLE1S6",
}

export const firebase = firebaseApp.initializeApp(config);
export const firestore = getFirestore(firebase);