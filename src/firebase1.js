import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";

function StartFirebase() {
const firebaseConfig = {
  apiKey: "AIzaSyC_nSrv3jbJziOEG_-KjS8ZA7-ZUfsTN0g",
  authDomain: "autowash-a308b.firebaseapp.com",
  databaseURL: "https://autowash-a308b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "autowash-a308b",
  storageBucket: "autowash-a308b.appspot.com",
  messagingSenderId: "795057888819",
  appId: "1:795057888819:web:559510b59638ed75074d46"
  };

  const app1=initializeApp(firebaseConfig);
  return getDatabase(app1);
}

export default StartFirebase;

