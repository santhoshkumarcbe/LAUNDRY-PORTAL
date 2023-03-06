import React from "react";
import { set,get,remove,child,ref as dref } from "firebase/database";
import StartFirebase from "../firebase1";
import './admin.css';
import Logout from "../loginpage/logout";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




 class Admin extends React.Component{
//     console.log("admin page");
//  const [Wname,setWname]=useState("");

      constructor(props){
        super(props);
        this.state={
            rdb:'',
            wid:'',
            wash:'',
            data:[],
            udata:[]
           // count:''
        }
        this.interface=this.interface.bind(this);
      }
     
      
      componentDidMount(){
        this.setState({
            rdb:StartFirebase
        })
        let dbref =dref(StartFirebase());
       
        // get data in table
        get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
            const data = [];
            querySnapshot.forEach((doc) => {
                console.log(doc.val())
              data.push(doc.val());
            });
            this.setState({ data: data });
          })
        .catch((error)=>{alert("there was an error, details: "+error)})


    //     // Update data in table
  
        const intervalId = setInterval(() => {
         // Update data in table
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

  .catch((error)=>{alert("there was an error in table refresh, details: "+error)})

        }, 1); 
    
        this.setState({ intervalId });
      }

      componentWillUnmount() {
        clearInterval(this.state.intervalId);
      }



getAllInputs(){

    return{
    wid:this.state.wid,
    wash : this.state.wash
}
}

showToast() {
//  toast('Hello world!');
  toast('Notification message', {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
}

insertData(){
//add data 

    const rdb=StartFirebase();
    const data=this.getAllInputs();
    console.log(data);
    set(dref(rdb,"Washing Machines/" + data.wash),{
       wid:data.wid,
       wash:data.wash,
        start:0

    })
  //  .then(()=>{alert("data added successfully")})
    .catch((error)=>{alert("there was an error ,details:"+error)});
    console.log("success");


// Update data in table
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
  
    .catch((error)=>{alert("there was an error in table refresh, details: "+error)})

}

// updateData(){
//   // Update data in table
//   const dbref =dref(StartFirebase());
//   get(child(dbref,"Washing Machines/")).then((querySnapshot) => {
//       const data = [];
//       querySnapshot.forEach((doc) => {
//           console.log(doc.val())
//         data.push(doc.val());
//       });
//       this.setState({ data: data });
//     //  alert("table updated")
//     })

//   .catch((error)=>{alert("there was an error in table refresh, details: "+error)})
// }

deleteData(){
    const rdb=StartFirebase();
    const wash=this.getAllInputs().wid;
   // console.log(data);
    remove(dref(rdb,"Washing Machines/" + wash))
   // .then(()=>{alert("data deleted successfully")})
    .catch((error)=>{alert("there was an error ,details:"+error)});
    console.log("success");

    // Update data in table
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
  
    .catch((error)=>{alert("there was an error in table refresh, details: "+error)})

}


interface(event){
    const id=event.target.id;
    console.log(id);
    event.preventDefault();
    if(id==='addBtn'){
        this.insertData();
    }

    else if(id==='updateBtn'){
        this.updateData();
    }

    else if(id==='deleteBtn'){
       this.deleteData();
    }

    else if(id==='selectBtn'){
        this.updateData();
    }

}


render(){
return(
    <div className="admin">
      
        <br></br>
    <h2>Welcome Admin</h2>
     <br></br>
     <br></br>


     <table className="animated-table">
    <thead>
    <th>WASHNAME</th>
    
    <th>STATUS</th>
    </thead>
   
    {this.state.data.map((item, index) => (
            <tbody key={index}>
            <tr>
                <td><h3 id="wash">{item.wash}</h3></td>
                <td>{item.start===0?<font color="green"><b>Available</b></font>:<font color="red"><b>In progress</b></font>}</td>
            </tr>
    
    </tbody>
          ))}

</table >

<br></br>
<br></br>
 <form className="admin">
    <br></br>
    <h2>Update your Washing Machines</h2>
    <br></br>
   {/* <label for='wash'>Wash name:</label> */}
     <h3> Wash name : <input type='text'  id='wash' value={this.state.wash}
     onChange={e=>{this.setState({wash:e.target.value})}} placeholder=' Wash name' required/></h3>
     <br></br>
     {/* <label for='washid'>Wash id :</label> */}
     <h3>   Wash id : <input type='text' id='wash' value={this.state.wid}
     onChange={e=>{this.setState({wid:e.target.value})}} placeholder=' Wash ID' required /></h3>

     <button id="addBtn" className="admin" value='submit' onClick={this.interface}>Add Wash</button>
     {/* <button id="updateBtn" value='submit' onClick={this.interface}>update Wash</button> */}
     <button id="deleteBtn"  className="admin"  value='submit' onClick={this.interface}>Delete Wash</button>
     {/* <button id="selectBtn"  value='submit' onClick={this.interface}>Refresh</button> */}
     
     
    
     <button className="admin" onClick={() => toast(' message', {
  position: toast.POSITION.TOP_RIGHT,
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
})}>Show notification</button>


{/* <button onClick={this.showToast}>Show toast</button> */}




     </form>
     <Logout className="admin"/>
  
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
<br></br>
<br></br>
<br></br>


    </div>
)
}


}
export default Admin