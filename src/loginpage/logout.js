import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import './login.css'

function Logout() {
  const auth = getAuth();
  const navigate=useNavigate();
  const handleLogout=()=> {
    signOut(auth);
    try {
      navigate("/");
   //   alert("Logout successfull");
    } catch (err) {
      console.error(err);
      console.log("log in only");
      
    }
  }
  return <button class='admin' onClick={handleLogout}>Logout</button>;
}
export default Logout;
