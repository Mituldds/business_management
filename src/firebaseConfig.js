import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBn7BxVKpls2avHUk5uHfl-4krLCK9KvKQ",
  authDomain: "business--management.firebaseapp.com",
  projectId: "business--management",
  storageBucket: "business--management.appspot.com",
  messagingSenderId: "559808464762",
  appId: "1:559808464762:web:936cbe0d9f705f6f1878c3",
  measurementId: "G-6W2HKWPM6X",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const fireStore = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, fireStore, provider, storage };
