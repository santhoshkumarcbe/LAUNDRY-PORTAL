import React, { useEffect, useState } from "react";
import './main.css'
import Logout from "../loginpage/logout";
import 'firebase/compat/auth';
import Popup from "./popup";

function Main1() {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    return(
        <div>
          <div class="sk">
            <form>
            <div class="form-group">
                {/*pop-up window  */}
         
    <p>Test</p>
    {isOpen && <Popup
      content={<>
      <form id='popup'>
        <b>Enter your details</b> <br></br>
       
      <h3>Name: <input type='text' placeholder='Enter your full name ' autoFocus required /> </h3>
       <br></br>
       <br></br>
      <h3>Roll Number: <input type='text'  pattern="[1-2]{1}[0-9]{1}[A-Z]{2}[0-9]{3}" autocapitalize placeholder='Enter your Roll Number' required/> </h3>
       <br></br>
      <h3>E-mail: <input type='email' placeholder='Enter your E-mail' required/> </h3>
      <br></br>
      <h3>Mobile Number: <input type='tel'  pattern="[0-9]{10}" placeholder='Enter your mobile Number' required/> </h3>
       <br></br>
        <button class='button1'>Test button</button>
        </form>
      </>}
      handleClose={togglePopup}
    />}
           <h1>Hi,<span id="name1"></span> </h1>  <br></br> 
<h2>Wallet balance  </h2>
<h3>Select your hostel: 
<select>
<option>--select--</option>
<option>Cheran</option>
<option>Cholan</option>
<option>Pandiyan</option>
<option>Bharathi</option>
</select></h3>
<br></br>
<p>Select your washing machine</p>
<input type="radio" id="wash1" name="fav_language" value="wash1"/>
<label for="wash1">Wash 1</label><br></br>
<input type="radio" id="wash2" name="fav_language" value="wash2"/>
<label for="wash2">Wash 2</label><br></br>
<input type="radio" id="wash3" name="fav_language" value="wash3"/>
<label for="wash3">Wash 3</label>
<br></br>  
<br></br>
  <button class="dropdown">Top-up Wallet
  <p class="dropdown-content">Load your wallet here</p>
  </button>
  <br></br>
  <button class='button'>Wash now</button>
  </div>
  <Logout/>
  </form>
</div>
</div>
    )
    }
export default Main1
