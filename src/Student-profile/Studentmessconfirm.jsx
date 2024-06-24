import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Messcard from './component/Messcard';
import { url } from '../Url';
import Studentheader from './component/Studentheader';

export default function Studentmessconfirm() {
    let {_id,email,stat}=useParams();
    let navigate=useNavigate();
    let id=_id;
   let [butval,sbutval]=useState(``)
   let [color,scolor]=useState("blue");
   let [info,sinfo]=useState({});
   let payment=(e)=>{
    let token=localStorage.getItem('token');
    axios.post(`${url}/paymentdone`,{
      authorization:token,
      tk:info.mess_seat_price,
      _id:_id,
      email:email
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data.exist==false){
        window.location.replace(res.data.url);
      }
     else{
      alert("You Already Have booked a Room");
     }
    
    })
   }
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
     if(stat!="Not_paid"){
      alert('Payment Success');
      sbutval("Paid");
      scolor("green");
    }
    else if(stat=="paid"){
      alert('You Have Already Booked a Seat');
      sbutval("Paid");
      scolor("green");
    }
    else{
      sbutval(`Pay Tk ${res.data.info.mess_seat_price}`);
    }
     sinfo(res.data.info);
    })
   
   },[])
  return (
    <div>
        <Studentheader/>
        <div>
        <Messcard info={info}/>
        <button onClick={payment} style={{backgroundColor:`${color}`}}>{butval}</button>
        </div>
    
    </div>
  )
}
