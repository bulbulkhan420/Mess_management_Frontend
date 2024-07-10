import React, { useEffect, useState } from 'react';
import { FaPhoneAlt, FaEnvelope,FaExternalLinkAlt} from 'react-icons/fa';
import { IoMdSend } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './MessInfo.module.css';
import { RiProfileLine } from "react-icons/ri";
import axios from 'axios';
import { url } from '../../Url';
import { useParams } from 'react-router-dom';
import im from './../../Logo.png'
const Ownerabout = ({ image, messName, name, phone, email }) => {
    
    let [pnumber,spnumber]=useState("");
    let [clickr,sclickr]=useState(false);
    let changenumber=(e)=>{
          sclickr(pre=>!pre);
    }
    let updnumber=()=>{
        sclickr(false);
        let token=localStorage.getItem('tokenowner');
       axios.post(`${url}/owner/changenumber`,{
        authorization:token,
        email,
        phone:pnumber
       })
       .then((res)=>{
        if(res.data.verify && res.data.ok){
           
           toast.success("Successfully Updated",{
            position:'top-center'
           }) 
          
        }
        else{
            toast.info("Something Wrong",{
                position:'top-center'
               })  
        }
       
       })
    }
    let setval=(e)=>{
        spnumber(e.target.value);
    }
    useEffect(()=>{
        
        spnumber(phone);
    },[phone]);
  return (
    <div className={styles.container}>
      <img src={im} alt="Mess" className={styles.image} />
      <div className={styles.info}>
        <h2>{messName}</h2>
        <p><RiProfileLine className={styles.icon}  />
            <strong>Name:</strong> {name}</p>
        <p>
          <FaPhoneAlt className={styles.icon} />
          <strong>Phone:</strong> {pnumber}
          <span style={{marginLeft:'1rem'}} onClick={changenumber}> <FaExternalLinkAlt  className={styles.icon+' '+styles.upd}/>  </span>
         
        </p>
       <div style={{margin:'0px',display:clickr?'block':'none'}}>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'30px'}}>
       <input type="text" value={pnumber} onChange={setval}  />
       <span onClick={updnumber} style={{marginBottom:'0px',padding:'0px'}}>
       <IoMdSend className={styles.icon} style={{marginLeft:'0.5rem',marginBottom:'0px'}}/>
       </span>
       
       </div>
       </div>
        <p>
          <FaEnvelope className={styles.icon} />
          <strong>Email:</strong> {email}
          
        </p>
      </div>
      <ToastContainer position='top-center'/>
    </div>
  );
};

export default Ownerabout;
