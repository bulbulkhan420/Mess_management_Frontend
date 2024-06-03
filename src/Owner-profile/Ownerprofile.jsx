import React, { useEffect, useState } from 'react'
import "./css/css.css"
import axios from 'axios';
import { url } from '../Url';
import { useNavigate, useParams } from 'react-router-dom';
export default function Ownerprofile() {
  let {email}=useParams();
   let navigate=useNavigate();
   let [info,sinfo]=useState({});
   let token=localStorage.getItem("tokenowner");
  useEffect(()=>{
     axios.post(`${url}/verify/owner`,{
      authorization:token
     })
     .then((res)=>{
      console.log(res.data)
      if(res.data.verify){
        sinfo(res.data.info);
      }
      else{
        navigate('/loginmess');
      }
        
     })
  },[])
  
  return (
    <div>
     <div>
      {info.name}
     </div>
    
    </div>
  )
}
