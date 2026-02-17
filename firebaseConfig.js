import { initializeApp } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

import { getFirestore } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { getAuth } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

/* ========= CONFIG ========= */

const firebaseConfig = {
  apiKey: "AIzaSyDh4XkMr6kNXq6rPMlpHAZhenUQgBsl0uo",
  authDomain: "logar-games.firebaseapp.com",
  projectId: "logar-games",
  storageBucket: "logar-games.firebasestorage.app",
  messagingSenderId: "943691798770",
  appId: "1:943691798770:web:15dca92cb1aa69d411d86b",
  measurementId: "G-N46PWQFJZF"
};

/* ========= INITIALISATION ========= */

const app = initializeApp(firebaseConfig);

/* ========= EXPORTS ========= */

export const db = getFirestore(app);
export const auth = getAuth(app);
