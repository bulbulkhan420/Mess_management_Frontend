import React, { useEffect, useState } from 'react'
import "./css/css.css"
import axios from 'axios';
export default function Ownerprofile(props) {
   let [email,semail]=useState(props.email);
   let [img,simg]=useState(null);
   let [infos,sinfos]=useState({});
   let [state,sstate]=useState(0);
   useEffect(()=>{
    axios.post("https://mess-management-backend-1.onrender.com/ownerprofile",{
      email:email
    })
    .then((res)=>{
      sinfos(res.data);
      console.log(res.data);
    })
   },[state])
   
  
  let setimg=(e)=>{
   simg(e.target.files[0]);
  }
  let upload=()=>{
    let formdata=new FormData();
    formdata.append('bul',img);
    formdata.append('email',email);
    axios.post("https://mess-management-backend-1.onrender.com/uploadpicowner",formdata)
    .then((res)=>{
      if(res.data.ok){
        alert("succesfull");
        sstate(prev=>prev+1);
      }
      else{
        alert("unsuccesfull");
      }
    })
  }
   
  
  return (
    <div>
      <div className="rooti">
      <img src={"https://mess-management-backend-1.onrender.com/"+infos.image} alt="" className='img' />
      <p>Upload Profile picture</p>
      <input type="file" onChange={setimg}/>
      <button onClick={upload}>Upload</button>
      <p><span style={{fontWeight:"bolder"}}>Name :</span> {infos.fname+" "+infos.lname}</p>
      <p><span style={{fontWeight:"bolder"}}>Mess Location :</span> {infos.location}</p>
      <p><span style={{fontWeight:"bolder"}}>Email :</span>{infos.email}</p>
      <p><span style={{fontWeight:"bolder"}}>Phone Number :</span>{infos.phone}</p>
      </div>
    
    </div>
  )
}
