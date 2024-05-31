import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Studentpro from './Studentpro';

export default function Studentmain() {
  let {email}=useParams("");
  
  /*let [info,sinfo]=useState({});
  let [st,sst]=useState(false);
  
  let [url,surl]=useState("");
  useEffect(()=>{
    axios.post("http://localhost:3001/studentprofile",{
      email:email
    })
    .then((res)=>{
     sinfo(res.data);
     sst(true);
     console.log(res.data.image);
     surl("http://localhost:3001/"+res.data.image);
    })
  },[]);*/
  
  
  return (
    <div>
      <Studentpro email={email}/>
     
      
    </div>
  )
}
