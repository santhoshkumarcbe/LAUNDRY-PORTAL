import {getAuth} from 'firebase/auth';

import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';



const firebaseConfig = {
  apiKey: "AIzaSyDNxOWWLBazvuJ12vFgQYsAMjjK7gZq6rs",
  authDomain: "autowash-c4fcb.firebaseapp.com",
  databaseURL: "https://autowash-c4fcb-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "autowash-c4fcb",
  storageBucket: "autowash-c4fcb.appspot.com",
  messagingSenderId: "4187779544",
  appId: "1:4187779544:web:ba688f0bf48bfe708742ad"
};
const app = firebase.initializeApp(firebaseConfig);

var db=app.firestore();
//export const db=getFirestore(app);
export const auth = getAuth(app);
export default app;
export {db};
