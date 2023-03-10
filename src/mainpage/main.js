import React from "react";
import './main.css'
import Logout from "../loginpage/logout";
import 'firebase/compat/auth';
import { db } from "../firebase";
import { get,update,child,ref as dref } from "firebase/database";
import StartFirebase from "../firebase1";
 import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { doc, setDoc, updateDoc, where } from "firebase/firestore"; 


let name1;
let balance1;

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      rdb:'',
      data:[],
      start:0,
      wash:'',
      balance:'0'
    }
  }

    topup(e)
    {
      e.preventDefault();
      toast("Payment options are added soon")
    }

selectData(e)
{
  e.preventDefault();
     const dbref =dref(StartFirebase());
    get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.val())
          data.push(doc.val());
        });
        this.setState({ data: data });
      //  alert("table updated")
      })
    .catch((error)=>{toast("there was an error in table refresh, details: "+error)})
}


OnWashing(e){
  e.preventDefault();
  const rdb=StartFirebase();
  // const data=this.getAllInputs();
 // console.log(data);

  update(dref(rdb,"Washing Machines/wash 1" ),{
       start:1
  })
  
  .then(()=>{
    console.log("wash 1 turned ON");
    //toast("Washing Machine turned ON",1000)
})
  .catch((error)=>{toast("there was an error ,details:"+error)});
   console.log("washing started");

   balance1-=40;
   console.log(balance1);
  //  const docRef =doc(db,'wallet',where("email","==",window.sharedData.email));
  //  updateDoc(docRef,balance1)
  //  .then(docRef=>{
  //   console.log("balance updated");
  //  })
  //  .catch(error=>{
  //   console.log("balance update error" + error);
  //  })
  //  this.db.collection("wallet").update({
   
  //     balance:balance1
    
    
  //   })
}


 componentDidMount(){
  console.log(window.sharedData.email);
db.collection("wallet").where("email","==",window.sharedData.email).get()
.then(snapshot =>{
  snapshot.forEach(doc => {
    name1=doc.data().name;
     balance1=doc.data().balance;
    console.log(name1);
    document.getElementById("name").innerHTML=name1;
    document.getElementById("balance").innerHTML=balance1;
    console.log(balance1);
    window.sharedData = {name:name1}
    window.sharedData = {balance:balance1}
    return;
  });
})
.catch(
  console.log('ERROR email in')
)

this.setState({
  rdb:StartFirebase
})
const dbref =dref(StartFirebase());

get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
  const data = [];
  querySnapshot.forEach((doc) => {
      console.log(doc.val())
    data.push(doc.val());
  });
  this.setState({ data: data });
})
.catch((error)=>{alert("there was an error, details: "+error)})
// get data in table
// const dbref =dref(StartFirebase());
get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((doc) => {
        console.log(doc.val())
      data.push(doc.val());
    });
    this.setState({ data: data });
  //  alert("table updated")
  })

.catch((error)=>{alert("there was an error in table refresh, details: "+error)})
 
  //     // Update data in table
        const intervalId = setInterval(() => {
         // Update data in table
  const dbref =dref(StartFirebase());
  get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
       //   console.log(doc.val())
        data.push(doc.val());
      });
      this.setState({ data: data });
    //  alert("table updated")
    })
  .catch((error)=>{alert("there was an error in table refresh, details: "+error)})
        }, 1); 
        this.setState({ intervalId });
        const intervalId1 = setInterval(() => {
          db.collection("wallet").where("email","==",window.sharedData.email).doc('balance').onSnapshot((doc)=>{
          const updateBalance=doc.balance();
          //    balance1=doc.balance()-40;
             this.setState({
              balance1:updateBalance
              // doc.data().balance:balance1 
             })
             })
        },1); 
}



componentWillUnmount() {
        clearInterval(this.state.intervalId);
      }
     

render(){
    return(
        <div className="admin">  
  

            <form class="admin">
             
            <br></br>      
           <h1 id="main">Welcome <span id="name"></span> </h1>  <br></br> 
<h2 id='main'> Wallet balance  <span id="balance"></span></h2>
<br></br>

<table className="animated-table">
    {/* <thead> */}
    <tr>
    <th>WASHING MACHINE</th>
    
    <th>STATUS</th>

    <th>ACCESS</th>
    </tr>


    {/* </thead> */}
   
    {this.state.data.map((item, index) => (
            <tbody key={index}>
            <tr>
                <td>{item.wash}</td>
                <td>{item.start===0?<font color="green">Available</font>:<font color="red">Washing</font>}</td>
                <td><button class='button' onClick={this.OnWashing}>{item.start===0?"Wash now":"Book slot"}</button></td>
            </tr>
    
    </tbody>
          ))}

</table >
<br></br>
  <button className="admin" onClick={this.topup}>Top-up
  <p class="dropdown-content">Load your wallet here</p>
  </button>/
  
 
  <Logout  />

 
  
  
  </form>
 

  <div class="bubble bubble1"></div>
  <div class="bubble bubble2"></div>
  <div class="bubble bubble3"></div>
  <div class="bubble bubble4"></div>
  <div class="bubble bubble5"></div>
  <div class="bubble bubble6"></div>
  <div class="bubble bubble7"></div>
  <div class="bubble bubble8"></div>
  <div class="bubble bubble9"></div>
  <div class="bubble bubble10"></div>

       
</div>
    )
}
 
}

export default Main
