import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";
// 1. Добавляем импорт самой авторизации
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "ТВОЙ_API_KEY",
    authDomain: "ТВОЙ_PROJECT.firebaseapp.com",
    projectId: "ТВОЙ_PROJECT_ID",
    storageBucket: "ТВОЙ_PROJECT.appspot.com",
    messagingSenderId: "...",
    appId: "..."
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// 2. Обязательно экспортируем настроенный auth наружу!
export const auth = getAuth(app);
