import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {getStorage} from 'firebase/storage'
// const firebaseConfig = {
//   apiKey: "AIzaSyAdztj6o2J_v9tDleP1fNAJPWgUhM471GE",
//   authDomain: "masjid-project-ae5f9.firebaseapp.com",
//   projectId: "masjid-project-ae5f9",
//   storageBucket: "masjid-project-ae5f9.firebasestorage.app",
//   messagingSenderId: "353727689786",
//   appId: "1:353727689786:web:45d6cbfbe847005402b103"
// };

// ❗️ ضع بياناتك الحقيقية من Firebase Console في الأعلى
// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth(app);

// 1. firebase.js (الاتصال بـ Firebase) import { initializeApp } from 'firebase/app'; import { getAuth } from 'firebase/auth'; import { getFirestore } from 'firebase/firestore'; import { getStorage } from 'firebase/storage';

const firebaseConfig = { apiKey: "AIzaSyAdztj6o2J_v9tDleP1fNAJPWgUhM471GE", authDomain: "masjid-project-ae5f9.firebaseapp.com", projectId: "masjid-project-ae5f9", storageBucket: "masjid-project-ae5f9.firebasestorage.app", messagingSenderId: "353727689786", appId: "1:353727689786:web:45d6cbfbe847005402b103" };

const app = initializeApp(firebaseConfig); export const auth = getAuth(app); export const db = getFirestore(app); export const storage = getStorage(app);