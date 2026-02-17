import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getStorage } from 
"https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

export const storage = getStorage(app);

const firebaseConfig = {
  apiKey: "AIzaSyDh4XkMr6kNXq6rPMlpHAZhenUQgBsl0uo",
  authDomain: "logar-games.firebaseapp.com",
  projectId: "logar-games",
  storageBucket: "logar-games.firebasestorage.app",
  messagingSenderId: "943691798770",
  appId: "1:943691798770:web:15dca92cb1aa69d411d86b"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
