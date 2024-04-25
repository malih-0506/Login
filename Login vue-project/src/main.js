import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoQBJmZP1HixBEMf0Lk8GTNu50QE-qKDc",
  authDomain: "login-6c4a6.firebaseapp.com",
  projectId: "login-6c4a6",
  storageBucket: "login-6c4a6.appspot.com",
  messagingSenderId: "337232132398",
  appId: "1:337232132398:web:6394022926f1c09875a2bf"
};

 initializeApp(firebaseConfig);
 
const app = createApp(App)

app.use(router)

app.mount('#app')
