import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { url } from '../Url';
import { useNavigate, useParams } from 'react-router-dom';
import Ownerheader from './component/Ownerheader';
import Seatstatus from './component/Seatstatus';
export default function Ownerprofile() {
  let {email}=useParams();
  let [mess_seat_image,simage]=useState("");
  
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
        alert("successfull");
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
    <div>
      <Ownerheader/>
       {/*profile section*/}
     <div>
      <img src={info.image} alt="" />
     <h4>Mess Name: {info.messname}</h4>
      <div>
      <h6>Name: {info.fname+" "+info.lname}</h6>
        <h6>Location: {info.location}</h6>
        <h6>Phone: {info.phone}</h6>
        <h6>Email: {info.email}</h6>
       
      </div>
     </div>
    {/* profile section */}
   {/*seat and map add section */}
    <div>
    <div>
      <Seatstatus email={{email,refress}}/>
    </div>
    <div>
        <div dangerouslySetInnerHTML={{__html:info.mess_map}}/>
        <div  onClick={()=>{
          supshow("none");
          suphide("block");
        }} style={{display:`${upshow}`}}>
          Update Map
        </div>
       <div style={{display:`${uphide}`}}>
       <p>enter embaded map string</p>
        <input type="text" name='mess_map' onChange={setval}/>
        <button onClick={()=>{
          let token=localStorage.getItem('tokenowner');
          axios.post(`${url}/addmap`,{
            authorization:token,
            mess_map,
            email
          })
          .then((res)=>{
            console.log(res);
            if(res.data.verify){
              
              srefress(prev=>(prev+1)%9);
            }
          })
        }}>Add new map</button>
        <button onClick={()=>{
          suphide("none");
          supshow("block");
        }}>Cancel</button>
       </div>
        </div>
       
    </div>
    {/* seat adding section */}
    <div>
    <form onSubmit={addnew}>
      <p>select image</p>
      <input type="file" accept='image/*' name='image' required onChange={setval} />
      <p>select price</p>
      <input type="number" name='price'  required onChange={setval}/>
      <p>Room Number</p>
      <input type="text" name='roomnumber'  required onChange={setval}/>
      <p>Description about room</p>
      <input type="text" name='description' required onChange={setval} />
     <p>select room type</p>
      <select name="type"  required onChange={setval}>
        <option value="">Choose seat type</option>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Triple">Triple</option>
        <option value="Quadruple">Quadruple</option>
      </select>
      <button type='submit'>Add new Seat</button>
    </form>
    </div>
    </div>
  )
}
