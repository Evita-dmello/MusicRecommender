// firebase/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBo1YEQgkeS00iWAeaQO3NwFYD2nloFAJk", // insert the real key
  authDomain: "moodtunes-7b8c5.firebaseapp.com",
  projectId: "moodtunes-7b8c5",
  storageBucket: "moodtunes-7b8c5.appspot.com", // fixed `.app` to `.appspot.com`
  messagingSenderId: "261670551160",
  appId: "1:261670551160:web:aeb0fa0da40edb8a94b78d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
