import React, { useState } from 'react'
import "./CSS/otp.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function Otpmess() {
  let [otp,sotp]=useState("");
  let navigate=useNavigate();
  let setotp=(e)=>{
   sotp(e.target.value);
  }
  let {email}=useParams();
  let verifyemail=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/otpmessverify",{
      email:email,
      otp:otp
    })
    .then((res)=>{
     if(res.data.check){
      navigate("/ownerprofile/"+email);
     }
     else{
      alert("Otp doesnot matched");
     }
    })
  }
  return (
    <div>
       <div className="dismain">
       <form className='dis' onSubmit={verifyemail}>
            <p style={{textAlign:'center'}}>Enter Your OTP Sended in Your Email</p>
            <input type="text" value={otp} onChange={setotp} required minLength={5} placeholder='Enter Your OTP'/>
            <button type='submit'>Submit</button>
        </form>
       </div>
       
      
    </div>
  )
}
