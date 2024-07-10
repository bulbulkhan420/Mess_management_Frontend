import React, { useState } from 'react'
import "./CSS/otp.css"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Otpchangepasswordmess() {
  let [otp,sotp]=useState("");
  let {email}=useParams();
  let navigate=useNavigate();
  let setvalue=(e)=>{
     e.preventDefault();
     sotp(e.target.value);
  }
  let sendform=(e)=>{
      e.preventDefault();
      axios.post(`${url}/otppasswordchangemess`,{
        email:email,
        otp:otp
      })
      .then((res)=>{
          if(res.data.check){
            navigate("/changepasswordmess/"+email);
          }
          else{
            toast.info("Otp does not match",{
              position:'top-center'
            })
           
          }
      })
  }
  return (
    <div>
      <div className="dismain">
       <form className='dis' onSubmit={sendform}>
            <p style={{textAlign:'center'}}>Enter Your OTP Sended in Your Email</p>
            <input type="text" value={otp} onChange={setvalue} required minLength={5} placeholder='Enter Your OTP'/>
            <button type='submit'>Submit</button>
        </form>
       </div>
       <ToastContainer position='top-center'/>
    </div>
  )
}
