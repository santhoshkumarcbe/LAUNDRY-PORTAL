import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';



const firebaseConfig = {
  apiKey: "AIzaSyC_nSrv3jbJziOEG_-KjS8ZA7-ZUfsTN0g",
  authDomain: "autowash-a308b.firebaseapp.com",
  databaseURL: "https://autowash-a308b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "autowash-a308b",
  storageBucket: "autowash-a308b.appspot.com",
  messagingSenderId: "795057888819",
  appId: "1:795057888819:web:559510b59638ed75074d46"
};
const app = firebase.initializeApp(firebaseConfig);

var db=app.firestore();
export const db1=getFirestore(app);
export const auth = getAuth(app);
export default app;
export {db};
