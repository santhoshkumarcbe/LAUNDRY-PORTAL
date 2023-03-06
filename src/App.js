import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './loginpage/login';
import Main1 from './mainpage/main1';
import Register from './loginpage/register';
import { UserAuthContextProvider } from './context/UserAuthContext';
import Admin from './mainpage/admin';
import Main from './mainpage/main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
       <ToastContainer />
    <Router>
      <UserAuthContextProvider>
      <Routes>
          <Route exact path='/' element={<Login/>}/>  
          <Route exact path='/main' element={<Main/>}/>
          <Route exact path='/main1' element={<Main1/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/admin' element={<Admin/>}/> 
          </Routes>
          </UserAuthContextProvider>
          
    </Router>
  
   
    </div>
  );
}
export default App;
