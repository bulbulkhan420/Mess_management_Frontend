import React, { useState } from 'react'
import styles from "./CSS/Otp.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
export default function Changepasswordmess() {
  let [password,spassword]=useState("");
  let [cpassword,scpassword]=useState("");
  let {email}=useParams();
  let nagivate=useNavigate();
  let setv=(e)=>{
    e.preventDefault();
    if(e.target.name=="pass"){
      spassword(e.target.value);
    }
    else if(e.target.name=="cpass"){
      scpassword(e.target.value);
    }
  }
  let changepass=(e)=>{
   e.preventDefault();
   if(password==cpassword){
    axios.patch(`${url}/updatepassmess`,{
      email:email,
      password:password
    })
    .then((res)=>{
      if(res.data.check){
      nagivate("/loginmess");
      toast.success("Password was changed",{
        position:'top-center'
      })
      
      }
      else{
        toast.info("There is an error",{
          position:'top-center'
        })
       
      }
    })
   }
   else{
    toast.info("Password doesn't match",{
      position:'top-center'
    })
    
   }
  }
  
  return (
    <div>
      <div className={styles.dismain}>
       <form className={styles.dis} onSubmit={changepass}>
            <p style={{textAlign:'center'}}>Change Password</p>
            <input type="password" name='pass' value={password} onChange={setv} required placeholder='Enter New Password'/>
            <input type="password" name='cpass' value={cpassword} onChange={setv} required placeholder='Confirm New Password'/>
            <button type='submit'>Submit</button>
        </form>
       </div>
       <ToastContainer position='top-center'/>
    </div>
  )
}
