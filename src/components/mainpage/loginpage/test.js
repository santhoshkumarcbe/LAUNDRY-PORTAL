import firebase from "../firebase";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../../../context/UserAuthContext";

const Signup =()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const {signUp}= useUserAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await signUp(email,password);
        } catch(err) {
            setError(err.message);
        }
};
return(
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Register here to Login</h1>
            <label for='fname'>First Name: </label>
            <input type='text' id="fname" name="title" ref={this.inputref} onKeyDown={this.mov} placeholder='Enter your First name' required></input>
            <br></br>
            <br></br>
            <label for='lname'>Last Name: </label>
            <input type='text' id="lname" onKeyDown={this.mov} placeholder='Enter your Last name' required></input>
            <br></br>
            <br></br>
            <label for='email'>E-mail: </label>
            <input type='email' id="email" onChange={(e)=> setEmail(e.target.value)} onKeyDown={this.mov} placeholder='Enter your E-mail id' required></input>
            <br></br>
            <br></br>
            <label for='mobile'>Mobile number :</label>
            <input type='text' id='mobile' onKeyDown={this.mov} placeholder='Enter your Mobile number' required></input>
            <br></br>
            <br></br>
            <label for='pass'>Password :</label>
            <input type='password' id='pass' onChange={(e)=> setPassword(e.target.value)} onKeyDown={this.mov} placeholder='Enter your password' required></input>
            <br></br>
            <br></br>
            <label for='cpass'>Confirm Password :</label>
            <input type='password' id='cpass' onKeyDown={this.mov} placeholder='Confirm your password' required></input>
            <br></br>
            <br></br>
            <input type='submit' onClick={this.handleSubmit} value='Register' ></input>
      
            <input type='submit' onClick={this.remove} value='Remove' ></input>

            <input type='submit' onClick={this.handleChange} value='Update' ></input>
            <br></br>
            <br></br>
            <h3>Click here to <Link to='/login'> Login</Link></h3>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </form>
        </div>
    )
}
export default Signup;