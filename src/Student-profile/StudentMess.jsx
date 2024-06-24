import React, { useEffect, useState } from 'react'
import Studentheader from './component/Studentheader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { url } from '../Url';

export default function StudentMess() {
    let {email}=useParams();
    let [info,sinfo]=useState({});
    let [book,sbook]=useState(false);
    let [refress,srefress]=useState(0);
  let navigate=useNavigate();
    useEffect(()=>{
       let token=localStorage.getItem('token');
       axios.post(`${url}/mess/status`,{
        authorization:token,
        email
       })
       .then((res)=>{
          console.log(res.data);
          if(res.data.verify){
            sinfo(res.data.info);
            sbook(res.data.booked)
          }
         else{
            navigate('/login');
         }
       })
    },[refress]);
  return (
  <>
  {
    book? <div>
    <Studentheader/>
    <div>
       <div>
        <img src={info.mess_info.mess_seat_image} alt="" />
       </div>
       <h3>Mess Name: {info.mess_info.mess_name}</h3>
       <p>Mess Owner Name: {info.mess_info.mess_owner}</p>
       <p>Mess Owner Phone: {info.mess_info.mess_owner_phone}</p>
       <p>Mess rent: {info.rent}</p>
       <p>Your Room Number: {info.mess_info.mess_room_number}</p>
       <p>Your Seat Type: {info.mess_info.mess_seat_type}</p>
       <p>Mess Location: {info.mess_info.mess_location}</p>
       <p>{}</p>
       <div>
        <div dangerouslySetInnerHTML={{__html:info.mess_info.mess_map}}/>
       </div>
       <p>Last Payment Done {info.payment_duration} Days Ago</p>
      <button onClick={()=>{
        let token=localStorage.getItem('token');
        axios.post(`${url}/delete/studentmess`,{
            tran_id:info.tran_id,
            _id:info.mess_info._id,
            authorization:token
        })
        .then((res)=>{
         if(res.data.verify){
            srefress(pr=>(pr+1)%9);
            alert('successfully deleted');
         }
        
        })
      }}>Delete</button>
    </div>
</div>
:<div>
    <Studentheader/>
    <h3>Not seat</h3>
</div>
  }
  </>
  )
}
