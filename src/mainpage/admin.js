import React from "react";
import { set,get,update,remove,child,ref as dref } from "firebase/database";
import StartFirebase from "../firebase1";
import './admin.css';
import Logout from "../loginpage/logout";



 class Admin extends React.Component{
//     console.log("admin page");
//  const [Wname,setWname]=useState("");

      constructor(props){
        super(props);
        this.state={
            rdb:'',
            wid:'',
            wash:'',
            data:[]
           // count:''
        }
        this.interface=this.interface.bind(this);
      }
     
      
      componentDidMount(){
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

    //   componentDidMount() {
    //     const washRef = database.dref('wash');
    
    //     washRef.on('value', (snapshot) => {
    //       const snapshotData = snapshot.val();
    //       const washArray = [];
    
    //       for (let key in snapshotData) {
    //         washArray.push({ id: key, ...snapshotData[key] });
    //       }
    
    //       this.setState({ wash: washArray });
    //     });
    //   }
    
    //   componentWillUnmount() {
    //     const washRef = database.ref('wash');
    
    //     washRef.off();
    //   }

addWash() {
 //   const db1=this.state.db1;
  //  set(ref(db,'Wash/'+Wname),{
   // })
}

getAllInputs(){

    return{
    wid:this.state.wid,
    wash : this.state.wash
}
}

insertData(){

    const rdb=StartFirebase();
    const data=this.getAllInputs();
    console.log(data);
    set(dref(rdb,"Washing Machines/" + data.wash),{
       wid:data.wid,
       wash:data.wash,
        start:0

    })
    .then(()=>{alert("data added successfully")})
    .catch((error)=>{alert("there was an error ,details:"+error)});
    console.log("success");

}

updateData(){
    const rdb=StartFirebase();
    const data=this.getAllInputs();
    console.log(data);
    update(dref(rdb,"Washing Machines/" +  this.wash),{
        wid:data.wid,
         start:0
    })

    .then(()=>{alert("data updated successfully")})
    .catch((error)=>{alert("there was an error ,details:"+error)});
    console.log("success");

}

deleteData(){
    const rdb=StartFirebase();
    const wash=this.getAllInputs().wid;
   // console.log(data);
    remove(dref(rdb,"Washing Machines/" + wash))
    .then(()=>{alert("data deleted successfully")})
    .catch((error)=>{alert("there was an error ,details:"+error)});
    console.log("success");

}

fetchData(){
    
    const dbref =dref(StartFirebase());
    const wash=this.getAllInputs().wash;
   
    get(child(dbref,"Washing Machines/" + wash)).then((snapshot)=>{
        if(snapshot.exists()){
            this.setState({
                wid:snapshot.val().wid,
                wash:snapshot.val().wash
            })
           alert("Data fetch successfull")
        }

        else{
            alert("no data found");
        }
    })
    .catch((error)=>{alert("there was an error, details: "+error)})

}

selectData(){
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
    //.then((snapshot)=>{
       
    //     let dd=[snapshot.val()];
    //     console.log(dd)
    //         this.setState({
    //             data:snapshot.val(),  
    //         })
            
    // })
    .catch((error)=>{alert("there was an error, details: "+error)})
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
        this.selectData();
    }

}


render(){
return(
    <div className="admin">
        <br></br>
    <h2>Welcome Admin</h2>
     <br></br>
     <br></br>


     <table className="admin">
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

</table>

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
     onChange={e=>{this.setState({wid:e.target.value})}} placeholder=' Wash ID'/></h3>

     <button id="addBtn" value='submit' onClick={this.interface}>Add Wash</button>
     {/* <button id="updateBtn" value='submit' onClick={this.interface}>update Wash</button> */}
     <button id="deleteBtn"  value='submit' onClick={this.interface}>Delete Wash</button>
     <button id="selectBtn"  value='submit' onClick={this.interface}>Refresh</button>
     <Logout/>
     
     </form>
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