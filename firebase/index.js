import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAuwXr2ftt_9ZYDxhVme7Xz5RCn5dHeidw",
	authDomain: "to-do-bdf23.firebaseapp.com",
	projectId: "to-do-bdf23",
	storageBucket: "to-do-bdf23.firebasestorage.app",
	messagingSenderId: "557481246639",
	appId: "1:557481246639:web:7f8c752b82cf2bf44eb95a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
