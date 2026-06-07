import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDJGuA-OndO7kZbTdyoqLm73y5fQ3TLsME",
    authDomain: "noob-pc-57adc.firebaseapp.com",
    projectId: "noob-pc-57adc",
    storageBucket: "noob-pc-57adc.firebasestorage.app",
    messagingSenderId: "818096565884",
    appId: "1:818096565884:web:4782299539d314ea5d63f9",
    measurementId: "G-K60DHNGBS3"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
