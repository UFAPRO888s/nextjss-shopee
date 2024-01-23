import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import {
    getDatabase,
    ref
} from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyDybQDtZ4457d4jqKNxFWAN5q7EfRzhG_Q",
    authDomain: "liveinfinite-57d93.firebaseapp.com",
    databaseURL: "https://liveinfinite-57d93-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "liveinfinite-57d93",
    storageBucket: "liveinfinite-57d93.appspot.com",
    messagingSenderId: "300492131280",
    appId: "1:300492131280:web:d96c828f969c77a63747d5",
    measurementId: "G-8YN4WE1M60"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = async (email, password) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('UID:', user.uid);
    return userCredential;
}
export const signIn = async (email, password) => await signInWithEmailAndPassword(auth, email, password)
export const logOut = async () => await signOut(auth)

// export const firebaseUser = (user) => onAuthStateChanged(auth, user)

// export const user = auth.currentUser;

//data base
export const db = getDatabase(app)

export const userRef = ref(db, 'user')
export const chatsRef = ref(db, 'chats')

export const getChatById = (chatId) => ref(db, `chats/${chatId}`)
export const getMessagesById = (chatId) => ref(db, `chats/${chatId}/messages/`);
export const removeMessageFromChat = (chatId, messageId) => ref(db, `chats/${chatId}/messages/${messageId}`);


export const getUserById = (userId) => ref(db, `user/${userId}`)