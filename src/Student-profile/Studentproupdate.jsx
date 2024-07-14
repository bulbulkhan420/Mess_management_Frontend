import React, { useEffect, useRef, useState } from 'react'
import css from './css/profileupdate.module.css'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../Url';
import { useNavigate } from 'react-router-dom';
import Footer from '../Component/Footer';
export default function Studentproupdate(props) {
  let authorization=localStorage.getItem("token");
  let navigate=useNavigate();
  
  let [loadpage,sloadpage]=useState(0);
  let [loadim,sloadim]=useState(null);
  let [image,simage]=useState(null);
  let [name,sname]=useState("");
  let [email,semail]=useState("");
  let [phone,sphone]=useState("");
 let status=props.val.status;
 let [imagename,simagename]=useState('Not Selected Any Image');
  let [currentaddress,scurrentaddress]=useState("");
  let [permanentaddress,spermanentaddress]=useState("");
  let [institution,sinstitution]=useState("");
  let rec=props.val.rec;
  
  
  let hide=()=>{
    status("none");
    
  }
  let update=(e)=>{
  e.preventDefault();
  if(e.target.name=="image"){
    simage(e.target.files[0]);
    simagename("inbound"+`${Date.now()}`);
  }
  else if(e.target.name=="email"){
    semail(e.target.value);
  }
  else if(e.target.name=="phone"){
    sphone(e.target.value);
  }
  else if(e.target.name=="name"){
    sname(e.target.value);
  }
  else if(e.target.name=="institution"){
    sinstitution(e.target.value);
  }
  else if(e.target.name=="currentaddress"){
    scurrentaddress(e.target.value);
  }
  else if(e.target.name=="permanentaddress"){
    spermanentaddress(e.target.value);
  }
  }
  let subpic=(e)=>{
    e.preventDefault();
    let formdata=new FormData();
    formdata.append('image',image);
    formdata.append('email',email);
    axios.post(`${url}/student/picupload`,formdata)
    .then((res)=>{
      console.log(res.data);
      toast.info(`${res.data.status}`,{
        position:'top-center'
      })
     
    })
  }
  let save=(e)=>{
    e.preventDefault();
    
   
    axios.post(`${url}/student/updateinfo`,{
      name,
      email,
      phone,
      currentaddress,
      permanentaddress,
      institution,
      authorization
    })
    .then((res)=>{
      console.log(res.data);
      if(res.data.verify==false){
        navigate('/');
        retunr ;
      }
      if(res.data.ok){
        toast.success('Successfully Updated information',{
          position:'top-center'
        })
        
       sloadpage(prev=>prev+1);
       rec(loadpage+1);
       status("none");
        
      
      }
      else{
        toast.success(`${res.data.ok}`,{
          position:'top-center'
        })
       
      }
    })

  }
  useEffect(()=>{
   
     axios.post(`${url}/info/studentupdate`,{
      email,
      authorization
     })
     .then((res)=>{
      console.log(res.data);
      if(res.data.verify){
       let info=res.data.info;
        simage(info.image);
        sloadim(info.image);
        sname(info.name);
        semail(info.email);
        sphone(info.phone);
        scurrentaddress(info.currentaddress);
        spermanentaddress(info.permanentaddress);
        sinstitution(info.institution);
      }
     else{
      navigate("/");
     }
     
     
     })
    .catch((err)=>{
      toast.warn(`You have an ${err}`,{
        position:'top-center'
      })
      
    })
  },[]);
  return (
    <div  style={{position:'fixed',zIndex:'2',backgroundColor:'#333',width:'100%'}}>
      <div className={css.updateMenu}>
       <form onSubmit={subpic} className={css.imagepart}>
       
      <div style={{textAlign:'center',opacity:'0.3'}}> <p>Select Picture</p>
      <input type="file" accept='image/*' required onChange={update} name='image'/>
      </div>
      <p>{imagename}</p>
       <button type='submit'>Upload pic</button>
       </form>
       <div className={css.infopart}>
        <h5>Your Name</h5>
       <input type="text" value={name}  onChange={update} name='name'/>
      
        <h5>Your Phone</h5>
        <input type="text" value={phone} onChange={update} name='phone'/>
        <h5>Your Current Address</h5>
        <input type="text" value={currentaddress} onChange={update} name='currentaddress'/>
        <h5>Your Permanent Address</h5>
        <input type="text" value={permanentaddress} onChange={update} name='permanentaddress'/>
        <h5>Your Institution</h5>
        <input type="text" value={institution} onChange={update} name='institution'/>
        <div className={css.buttonpart}>
        <button onClick={hide} style={{backgroundColor:'aliceblue',color:'black',width:'80px',height:'30px'}}>Cancle</button>
        <button onClick={save} style={{backgroundColor:'#333',color:'aliceblue',width:'80px',height:'30px'}}>Save</button>
        </div>
       </div>
      </div>
      <Footer/>
      <ToastContainer position='top-center'/>
      
    </div>
  )
}
