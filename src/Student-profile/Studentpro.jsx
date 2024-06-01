import React, { useEffect, useState } from 'react'
import "./css/profile.css"
import Studentheader from './Studentheader';
import axios from 'axios';
export default function Studentpro(props) {
  let [email,semail]=useState(props.email);
  let [info,sinfo]=useState({});
  let [img,simg]=useState(null);
  let [st,sst]=useState(0);
  let picup=(e)=>{
     simg(e.target.files[0]);
}
let upload=()=>{
  if(img){
    let formdata=new FormData();
  formdata.append('bul',img);
  formdata.append('email',email);
  axios.post("https://mess-management-backend-1.onrender.com/uploadpic",formdata)
  .then((res)=>{
    if(res.data.ok){
      alert("successfull");
      sst(prev=>prev+1);
    }
    else{
      alert("error");
    }
  });
  }
  
}
useEffect(()=>{
  axios.post("https://mess-management-backend-1.onrender.com/studentprofile",{
    email:email
  })
  .then((res)=>{
    console.log(res.data);
    sinfo(res.data);
  })
},[st]);
  return (
    <div>
       <div className="container">
    
    <header>
       <Studentheader/>
        
          <img className="profile-image" src={"https://mess-management-backend-1.onrender.com/"+info.image}></img>
         <div className="poo">
         <div className="header-bio"><h2>{info.fname+" "+info.lname}</h2>
        <h3>Student of Rajshahi University</h3>
    </div>
         
        
       
  
    <div className="Header-contact">
        <p>Email:{email}</p>
        <p>Phone:{info.phone}</p>
    </div>
         </div>
    </header>
    <div className="imgs">
    <input type="file" className='but-6' onChange={picup} />
          <button className='but' onClick={upload} >Upload</button>
    </div>
    <div className="clear-div"></div>
    <hr></hr>
     
     <main>
       <section className="academic_info">
             <h1>Academic Information</h1>
       </section>
       <section className="academic_info">
             <h1>Present Address</h1>
       </section>
       <section className="academic_info">
             <h1>Parmanent address</h1>
       </section>
        <section className="academic_info">
            <h1>Immargency Contact of </h1>
        </section>
    </main>
     <footer>

     </footer>
    </div>
    </div>
  )
}
