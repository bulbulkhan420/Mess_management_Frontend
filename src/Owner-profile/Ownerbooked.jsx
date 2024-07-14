import React, { useEffect, useState } from 'react'
import Ownerheader from './component/Ownerheader'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { url } from '../Url';
import Messcard from '../Student-profile/component/Messcard';
import Footer from '../Component/Footer';

export default function Ownerbooked() {
  let {email}=useParams();
  let [tm,stm]=useState(9);
  let [unav,sunav]=useState([]);
  let navigate=useNavigate();
  useEffect(()=>{
    let token=localStorage.getItem('tokenowner');
    axios.post(`${url}/unavailablelist`,{
      authorization:token,
      mess_email:email
    })
    .then((res)=>{
      if(res.status==200){
        sunav(res.data.info);
        
      }
      else{
       
        navigate('/');
       
       
      }
    })
    
    
  },[]);
  return (
    <div>
        <Ownerheader/>
        <div className="container" style={{backgroundColor:'rgb(192,192,213)',height:'100dvh'}}>
         
          <div className="row" >
          <table  border={'1px solid black'} style={{width:'100%',lineHeight:'35px',borderCollapse:'collapse',marginTop:'1rem',backgroundColor:'rgb(225, 224, 235)'}} >
            <thead>
              <tr>
               <th className='fs' style={{textAlign:'center'}}>Name</th>
               <th className='fs' style={{textAlign:'center'}}>Phone</th>
               <th className='fs' style={{textAlign:'center'}}>Room</th>
               <th className='fs' style={{textAlign:'center'}}>Rent</th>
               <th className='fs' style={{textAlign:'center'}}>Last Pay</th>
              </tr>
            </thead>
            
            <tbody>
             {
              unav.map((item,i)=>{
               
                return <tr key={i}>
                  
                   <td className='fs' style={{textAlign:'center'}}>
                {item.student_booked}
                   </td>
                    
                   <td className='fs' style={{textAlign:'center'}}>
                {item.student_number}
                   </td>
                   
                   <td className='fs' style={{textAlign:'center'}}>
                {item.mess_room_number}
                   </td>
                   <td className='fs' style={{textAlign:'center'}}>
                {item.mess_seat_price}
                   </td>
                   <td className='fs' style={{textAlign:'center',color:item.time > 31 ?'red':'green' }}>
                {item.time} Days Ago
                   </td>
                   
                </tr>
              })
             }
            </tbody>
          </table>
          {/* {
          unav.map((item,i)=>{
            return <div key={i} className='col-lg-4 col-md-6 col-sm-12'>
              <Messcard info={item} />
            </div>
          })
         } */}
          </div>
        </div>
        
         <Footer/>
    </div>
  )
}
