import React from "react";
import './main.css'
import Logout from "../loginpage/logout";
import 'firebase/compat/auth';
import { db } from "../firebase";
import { get,update,child,ref as dref } from "firebase/database";
import StartFirebase from "../firebase1";



let name1;
let balance1;

class Main extends React.Component {

  constructor(props){
    super(props);
    this.state={
      rdb:'',
      data:[],
      start:0,
      wash:''
    }
  }

     OnWashing(e)
    {
      e.preventDefault();
    const rdb=StartFirebase();
    
   // const update=this.state.start;
       
       update(dref(rdb,"Washing Machines/" + this.wash),{
        
       //  start:update.start,
         start:1
        
    })

      .then(()=>{alert("washing machine is turned ON")})
      .catch((error)=>{alert("there was an error ,details:"+error)});
      console.log("washing machine turned on successfully");
    }

    topup(e)
    {
       e.preventDefault();
      alert("Payment options are added soon")
    }


// Get the button
// let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

selectData(e){
  e.preventDefault();
  const dbref =dref(StartFirebase());
  
 
  get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
          console.log(doc.val())
        data.push(doc.val());
      });
     // this.state.data=data;
      //this.setState({ data: data });
    })
  
  .catch((error)=>{alert("there was an error, details: "+error)})
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


 }


render(){
    return(
        <div class='main'>    
          {/* <button onclick={topFunction()} id="myBtn" title="Go to top">Top</button> */}
          <div class="main">
            <form class="main">
            <div class="main">  
            <br></br>      
           <h1 id="main">Welcome <span id="name"></span> </h1>  <br></br> 
<h2 id='main'> Wallet balance  <span id="balance"></span></h2>
<br></br>

<table id='main'>
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
  <button class="dropdown" onClick={this.topup}>Top-up
  <p class="dropdown-content">Load your wallet here</p>
  </button>
  <button class='button' onClick={this.selectData}>Refresh</button>
  
  <Logout/>

  {/* <button class='button' onClick={this.OnWashing}>Wash now</button> */}
  </div>
  
  </form>

 
</div>
</div>
    )
}
 
}

export default Main
