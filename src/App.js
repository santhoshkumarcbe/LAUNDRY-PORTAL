import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from './loginpage/login';
import Main1 from './mainpage/main1';
import Register from './loginpage/register';
import { UserAuthContextProvider } from './context/UserAuthContext';
import AddData from './loginpage/addData';
import Admin from './mainpage/admin';
import Main from './mainpage/main';

// import Payment from './mainpage/payment';
// import ProtectedRoute from './mainpage/protectedroute';
// import Login1 from './loginpage/login1';

// import ToggleDark from './context/ToggleDark';
// import { ThemeContext, themes } from './context/themecontext'

function App() {
  return (
    <div className="App">
    <Router>
      <UserAuthContextProvider>
      <Routes>
          <Route exact path='/' element={<Login/>}/>  
          <Route exact path='/main' element={<Main/>}/>
          <Route exact path='/main1' element={<Main1/>}/>
          <Route exact path='/add-data' element={<AddData/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/admin' element={<Admin/>}/> 
          </Routes>
          </UserAuthContextProvider>
          
    </Router>
    {/* <ProtectedRoute  path='/admin' element={<Admin/>}/>  */}
   
    </div>
  );
}
export default App;
