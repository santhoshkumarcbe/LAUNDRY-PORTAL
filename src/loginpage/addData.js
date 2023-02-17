import { collection,addDoc } from "firebase/firestore";
import { db } from "../firebase";
import React, {  useState } from "react";
import './login.css'

export default function AddData() {
    const [name,setName]= useState('')
    const [mobile,setMobile]= useState('')

    function handleSubmit(e){
        e.preventDefault();
        if(name===''){
          return
        }
        const balanceCollectionRef=collection(db,'wallet')
        addDoc(balanceCollectionRef,{name})
        addDoc(balanceCollectionRef,{mobile})
        .then(response=>{
          console.log(response.id);
        })
        .catch(error=>{
          console.log(error.message);
        })
        }
return(
    <div>
        <h4>Add name</h4>
        <form onSubmit={handleSubmit}>
            <label for='name'>Name</label>
            <input id="name"
             type='text'
             value={name}
             onChange={e=>setName(e.target.value)}
            />
<br></br>
            <label for='mobile'>Mobile number</label>
            <input id="mobile"
             type='text'
             value={mobile}
             onChange={e=>setMobile(e.target.value)}
            />
      <br></br>
        <button type="submit">Update</button>
        </form>
    </div>
)

}