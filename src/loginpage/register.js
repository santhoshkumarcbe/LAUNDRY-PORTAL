import './login.css'
import React, {  useState } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../firebase";
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';


function Register(){
        const ref=firebase.firestore().collection("wallet");
        const auth = getAuth(app);
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const [name,setName]=useState("");
        const navigate=useNavigate();
        const balance=0;
        const handleSubmit = async(e)=>{
          e.preventDefault();
          }
        const signUp=()=>{
           createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            alert("Account created successfully")
            navigate("/")
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
           // const errorMessage = error.message;
            // ..
          });
        }  

        function createDoc(newDataObj) {
          console.log("data created");
          ref
          .doc()
          .set(newDataObj)
          .catch((err)=>{
            alert(err)
            console.log(err);
          })
        }
    return(
            <div>
               <div class="container">
                <form onSubmit={handleSubmit}>
                <div class="form-group">
                <h1>Laundry portal Register </h1>
                <div class="form-group">
                <label for='name'></label>
                <h3 id="login">Name:</h3><input class="form-control" type='text' id='name' onChange={e=>setName(e.target.value)} placeholder='Enter your Name' autoFocus required></input>
                </div>
      
                <label for='email'></label>
                <h3 id="login">Email:</h3><input class="form-control" type='email' id="email"   onChange={e=>setEmail(e.target.value)} placeholder='Enter your E-mail id'  required></input>
                </div>
                <div class="form-group">
                <label for='pass'></label>
                <h3 id="login">Password:</h3><input class="form-control" type='password' id='pass' onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' required></input>
                <h4>Already have an account? <Link to='/'> Log In</Link></h4>
                </div>
      </form>
      <input type='submit' class='button' value='Register'
       onClick={()=>{createDoc({name,email,balance})
       document.getElementById("email").value="";
       document.getElementById("name").value="";
      //  document.getElementById("wallet").value="0";
       document.getElementsByName(balance).value="";
       signUp()
    }} ></input>
      
      </div>  
            </div>
        )
    }
export default Register