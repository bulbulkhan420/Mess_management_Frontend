import React, { useState } from 'react'
import "./CSS/otp.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Otp() {
  let [otp,sotp]=useState("");
  let navigate=useNavigate();
  let setotp=(e)=>{
   sotp(e.target.value);
  }
  let {email}=useParams();
  let verifyemail=(e)=>{
    e.preventDefault();
    axios.post(`${url}/otpverify`,{
      email:email,
      otp:otp
    })
    .then((res)=>{
     if(res.data.check){
      toast.success("Your account was successfully created",{
        position:'top-center'
      })
      navigate("/login");
     
      
     }
     else{
      toast.info("Otp doesn't matched",{
        position:'top-center'
      })
    
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
       
      <ToastContainer position='top-center'/>
    </div>
  )
}
