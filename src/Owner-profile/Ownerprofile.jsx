import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { url } from '../Url';
import { useNavigate, useParams } from 'react-router-dom';
import Ownerheader from './component/Ownerheader';
import Seatstatus from './component/Seatstatus';
import Footer from '../Component/Footer';
import Ownerabout from './component/Ownerabout';

import styles from './css/Addseat.module.css'
export default function Ownerprofile() {
  
  let {email}=useParams();
  let [mess_seat_image,simage]=useState("");
  let [pmap,spmap]=useState("");
  let [mess_seat_price,sprice]=useState("");
  let [mess_seat_type,sseat]=useState("");
  let [mess_name,sname]=useState("");
  let [mess_owner,sowner]=useState("");
  let [mess_owner_phone,sphone]=useState("");
  let [mess_map,smap]=useState("");
  let [mess_location,slocation]=useState("");
  let [mess_room_number,sroomnumber]=useState("");
  let [mess_room_description,sdescription]=useState("");
   let navigate=useNavigate();
   let [info,sinfo]=useState({});
  let [refress,srefress]=useState(0);
  useEffect(()=>{
    let token=localStorage.getItem("tokenowner");
     axios.post(`${url}/verify/owner`,{
      authorization:token
     })
     .then((res)=>{
      console.log(res.data)
      if(res.data.verify){
        
        sinfo(res.data.info);
        slocation(res.data.info.location);
        sname(res.data.info.messname);
        sphone(res.data.info.phone);
        sowner(res.data.info.fname+" "+res.data.info.lname);
      }
      else{
        navigate('/loginmess');
      }
        
     })
    
  },[refress])
 
  let setval=(e)=>{
    
    e.preventDefault();
   if(e.target.name=="image"){
    simage(e.target.files[0]);
   }
   else if(e.target.name=='price'){
   sprice(e.target.value);
   }
   else if(e.target.name=='name'){
    sname(e.target.value);
   }
   else if(e.target.name=='roomnumber'){
    sroomnumber(e.target.value);
   }
   else if(e.target.name=='description'){
    
    sdescription(e.target.value);
   }
   else if(e.target.name=='location'){
    slocation(e.target.value);
   }
   else if(e.target.name=='type'){
   
    sseat(e.target.value);
   }
   else if(e.target.name=='mess_map'){
   
   smap(e.target.value);
   
   
   
   }
   else if(e.target.name=='owner'){
    sowner(e.target.value);
   }
   else if(e.target.name=='phone'){
    sphone(e.target.value);
   }
  }
  let addnew=(e)=>{
    let token=localStorage.getItem("tokenowner");
    e.preventDefault();
    let formdata=new FormData();
    formdata.append(`mess_seat_image`,mess_seat_image);
    formdata.append(`mess_location`,mess_location);
    formdata.append(`mess_room_number`,mess_room_number);
    formdata.append(`mess_room_description`,mess_room_description);
    formdata.append(`mess_map`,info.mess_map);
    formdata.append(`mess_name`,mess_name);
    formdata.append(`mess_email`,email);
    formdata.append(`mess_owner_phone`,mess_owner_phone);
    formdata.append(`mess_owner`,mess_owner);
    formdata.append(`mess_seat_price`,mess_seat_price);
    formdata.append(`mess_seat_type`,mess_seat_type);
    formdata.append('authorization',token);
    
    axios.post(`${url}/addnewroom`,formdata)
    .then((res)=>{
      console.log(res.data)
      if(res.data.verify){
        toast.success("Successfully added",{
          position:'top-center'
        })
       
        srefress(pre=>(pre+1)%9);
      }
      else{
        navigate('/loginmess');
      }
    })
  }
  let [upshow,supshow]=useState("block");
  let [uphide,suphide]=useState("none");
  return (
    <div style={{backgroundColor:'#041525'}}>
      <Ownerheader/>
      
    <div style={{backgroundColor:'#234667'}}>
    <Ownerabout image={info.image} messName={info.messname} name={info.fname+" "+info.lname} phone={info.phone} email={info.email}/> 
    <div>
       {/*profile section*/}
       
    
    {/* profile section */}
   {/*seat and map add section */}
      <Seatstatus email={{email,refress}}/>
    </div>
   
       
    </div>
    {/* seat adding section */}
    <div className={styles.formContainer} data-aos="fade-up">
    <form onSubmit={addnew}>
      <h3 style={{textAlign:'center',padding:'1rem'}}>Add New Room Information</h3>
      <div  className={styles.inputGroup}>
     
      <label htmlFor="image">Select Image*</label>
      <input type="file" accept='image/*' name='image' required onChange={setval} />
      </div>
      <div  className={styles.inputGroup}>
     <label htmlFor="price">Enter Price*</label>
     <input type="number" name='price'  required onChange={setval}/>
     </div>
     
     <div  className={styles.inputGroup}>
     <label htmlFor="roomnumber">Enter Available Room Number*</label>
     <input type="text" name='roomnumber'  required onChange={setval}/>
     </div>
     
     <div  className={styles.inputGroup}>
     <label htmlFor="description">Give some description*</label>
     <input type="text" name='description' required onChange={setval} />
     </div>
     <div  className={styles.inputGroup}>
     <label htmlFor="type">Choose Room Type*</label>
     <select style={{paddingBottom:'5px',fontSize:'12px'}} name="type"  required onChange={setval}>
        <option value=""></option>
        <option  value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Triple">Triple</option>
        <option value="Quadruple">Quadruple</option>
      </select>
     </div>
     <div  className={styles.inputGroup}>
     <button type='submit'>Add new Seat</button>
     </div>
     
    
    
      
    </form>
    </div>
    <div data-aos="fade-up">
        <div style={{width:'100%'}} dangerouslySetInnerHTML={{__html:info.mess_map}}/>
        <div  onClick={()=>{
          supshow("none");
          suphide("block");
        }} style={{display:`${upshow}`,color:'blue',textDecoration:'underline',cursor:'pointer'}}>
          Update Map
        </div>
       
        <div style={{display:`${uphide}`}} >
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#7f8c8d'}}>
          <div style={{maxWidth:'400px',width:'90%',padding:'1rem 0px 1rem 0px'}}>
      <p style={{textAlign:'center',color:'aliceblue',lineHeight:'30px'}}>Enter embaded map string</p>
        <input style={{width:'100%',maxWidth:'400px',height:'30px'}} type="text" name='mess_map' onChange={setval}/>
       <div style={{display:'flex',justifyContent:'space-between'}}>
       <button style={{width:'80px'}} onClick={()=>{
          let token=localStorage.getItem('tokenowner');
         
         let yy=mess_map.replace('width="600"','width="100%"');
         yy=yy.replace('height="450"','height="300"');
          console.log(yy);
          axios.post(`${url}/addmap`,{
            authorization:token,
            mess_map:yy,
            email
          })
          .then((res)=>{
            console.log(res);
            if(res.data.verify){
              
              srefress(prev=>(prev+1)%9);
            }
          })
        }}>Add Map</button>
        <button style={{width:'80px'}} onClick={()=>{
          suphide("none");
          supshow("block");
        }}>Cancel</button>
       </div>
      </div>
          </div>
    
       </div>
        </div>
    <Footer/>
    <ToastContainer position='top-center'/>
    </div>
  )
}
