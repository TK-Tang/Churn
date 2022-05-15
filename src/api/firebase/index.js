import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCMPUtUxpNgfQ0CqGtEA-KCvV_3ZQ0B6J8",
    authDomain: "the-churn.firebaseapp.com",
    projectId: "the-churn",
    storageBucket: "the-churn.appspot.com",
    messagingSenderId: "208028802776",
    appId: "1:208028802776:web:39da4b332081acf9ec01ad",
    measurementId: "G-TKXSDLE1S6",
}

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);