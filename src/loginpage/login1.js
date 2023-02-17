// import Register from "./register";
// import './login.css'
// import React, {  useState } from "react";
// import { Link, useNavigate} from "react-router-dom";
// import { useUserAuth } from "../context/UserAuthContext";

// const Login1=()=>{
//     const [email,setEmail]=useState("");
//     const [password,setPassword]=useState("");
//     const [setError] = useState("");
//     const {logIn} = useUserAuth();
//     const navigate=useNavigate();
//     const handleSubmit = async(e)=>{
//     e.preventDefault();
//     setError("");
//     try{
//         if(email==="admin@kpriet.ac.in"){
//             console.log("Welcome admin");
//             navigate("/admin");
//         }
//         else {
//             await logIn(email,password);
//             alert("login success")
//             navigate("/main");
//         }
//     }
//     catch (err){
//         setError(err.message);
//     }
// };
// return(
//     <div>
//         <form>
//          <h1>Welcome to Autowash login portal</h1>
// <label for="user"> </label>
// <h3>Email:<input type='email' onChange={e=>setEmail(e.target.value)} placeholder='Enter your E-mail id' autoFocus required></input></h3>
// <br></br>
// <br></br>
// <label for="password"></label>
// <h3>Password :<input type='password'  onChange={e=>setPassword(e.target.value)} placeholder='Enter your password' required></input></h3>
// <br></br>
// <br></br>
// {/* <input type='submit' value='Log In' onClick={signIn} ></input> */}
// <button value='submit' onClick={logIn}>Login</button>
// <br></br>
// <br></br>
// <br></br>
//  <h3>Don't have an account? <Link to='/register' element={<Register/>}>Sign up </Link>  </h3>  

// </form>
//     </div>

// )
// }
// export default Login1