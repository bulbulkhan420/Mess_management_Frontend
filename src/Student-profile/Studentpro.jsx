import React, { useEffect, useState } from 'react'
import "./css/profile.css"
import Studentheader from './Studentheader';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../Url';
export default function Studentpro() {
  let {email}=useParams();
  let navigate=useNavigate();
  let token=localStorage.getItem("token");
  
 
  let [info,sinfo]=useState({});
  useEffect(()=>{
    axios.post(`${url}/verify/student`,{
      authorization:token
     
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.verify){
        sinfo(res.data.info);
       
      }
      else{
        navigate('/login');
      }
    })
  },[])
 
  return (
    <div>
       <Studentheader/>
      <div>
        {info.name+" "+info.email}
      </div>
    </div>
  )
}
