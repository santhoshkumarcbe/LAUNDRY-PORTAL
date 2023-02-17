import Register from "./register";
import './login.css'
import React, {  useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { getAuth,  signInWithEmailAndPassword} from "firebase/auth";
import app from "../firebase";
import 'firebase/auth';

export const isAuthenticated=false;

function Login(){
        const auth = getAuth(app);
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        
        const navigate=useNavigate();
      
        const signIn=()=>{
            signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            
            
            window.sharedData = {email:email}
            // if(email===admin@gmail.com)
            
            if(email==="admin@kpriet.ac.in"){
               console.log("Welcome admin");
               
               navigate("/admin")
                      }
            else {
            navigate("/main");
          //  alert("sign in successfull") 
            console.log(email);
            }
          
          })
          .catch((error) => {
            console.log("error occured");
            const errorCode = error.code;
            alert(errorCode)
          });
        }

    return(
      <div>
            <div class="container">
              
                <form  class='login'>
                  <div class="form-group">
                 <h1 >Laundry portal login</h1>
      <label for="user"> </label>
      <h3 id="login">Email: <input class="form-control" type='email' onChange={e=>setEmail(e.target.value)} placeholder='Enter your E-mail id' autoFocus required></input></h3>
      </div>
      <div class="form-group">
      <label for="password"></label>
      <h3 id="login">Password:<input class="form-control" type='password'  onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' required></input></h3>
      
      
         <h4>Don't have an account? <Link to='/register' element={<Register/>}>Sign Up </Link>  </h4>     
         </div>
       
      </form>
      <button value='submit'  class="button" onClick={signIn} >Login</button>
            </div>
           </div>
        )
    }
    
export default Login