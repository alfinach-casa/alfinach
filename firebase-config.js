// Configuración Firebase — Alfinach
// No compartas este archivo públicamente (contiene tus claves de acceso)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore, doc, getDoc, setDoc, onSnapshot,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCAGRjpfaWyqCKXdGfUXOr1NBI9r6uqziQ",
  authDomain: "alfinach-e5dc1.firebaseapp.com",
  projectId: "alfinach-e5dc1",
  storageBucket: "alfinach-e5dc1.firebasestorage.app",
  messagingSenderId: "1055566960939",
  appId: "1:1055566960939:web:7e510c38f30691f23d8d6e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.__alfinachDb = db;
window.__firestoreFns = { doc, getDoc, setDoc, onSnapshot };

window.dispatchEvent(new Event('alfinach-firebase-ready'));
