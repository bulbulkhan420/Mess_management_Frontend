import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Messcard from './component/Messcard';
import { url } from '../Url';
import Studentheader from './component/Studentheader';

export default function Studentmessconfirm() {
    let i=useParams();
    let navigate=useNavigate();
    let id=i.info;
    let {email}=useParams();
   let [info,sinfo]=useState({});
   useEffect(()=>{
    let authorization=localStorage.getItem('token');
    axios.post(`${url}/student/payment`,{
        id,
        authorization
    })
    .then((res)=>{
        console.log(res)
     if(res.data.verify==false){
        navigate('/login');
        return ;
     }
     sinfo(res.data.info);
    })
   },[])
  return (
    <div>
        <Studentheader/>
        <div>
        <Messcard info={info}/>
        <button>Pay TK {info.mess_seat_price}</button>
        </div>
    
    </div>
  )
}
