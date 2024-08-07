import React, { useState } from 'react'
import "./CSS/otp.css"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { url } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Forgetemail() {
  let [email,semail]=useState("");
  let navigate=useNavigate();
  let {id}=useParams();
  let setvalue=(e)=>{
  e.preventDefault();
  semail(e.target.value);
  }
  let findmail=(e)=>{
    e.preventDefault();
    if(id=="student"){
      axios.post(`${url}/forgetmail`,{
        email:email
      })
      .then((res)=>{
         if(res.data.check){
          navigate("/otppasswordchange/"+email);
         }
         else{
          alert("Email does not exist");
         }
      })
    }
    
    else{
      axios.post(`${url}/forgetmailmess`,{
        email:email
      })
      .then((res)=>{
         if(res.data.check){
          navigate("/otppasswordchangemess/"+email);
         }
         else{
          toast.info("Email does not exist")
        
         }
      })
    }
    
  }
  return (
    <div>
       <div className="dismain">
       <form className='dis' onSubmit={findmail}>
            <p style={{textAlign:'center'}}>Enter Your Email</p>
            <input type="email" value={email} onChange={setvalue} required placeholder='Enter Your Email'/>
            <button type='submit'>Submit</button>
        </form>
       </div>
       <ToastContainer position='top-center'/>
    </div>
  )
}
