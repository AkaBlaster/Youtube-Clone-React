
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAKAXaPKUWhAue38az4zIbMHRNS0WHB4LQ",
    authDomain: "clone-2d68b.firebaseapp.com",
    projectId: "clone-2d68b",
    storageBucket: "clone-2d68b.appspot.com",
    messagingSenderId: "796611467275",
    appId: "1:796611467275:web:5d2d507e93c1ee9399cf0e",
}

firebase.initializeApp(firebaseConfig)

export default firebase.auth()