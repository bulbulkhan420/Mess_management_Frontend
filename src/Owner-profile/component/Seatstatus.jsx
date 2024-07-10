import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../Url';
import Countup from 'react-countup';
import css from './MessInfo.module.css'
export default function Seatstatus(props) {
    let [available,savailable]=useState(0);
    let [booked,sbooked]=useState(0);
    useEffect(()=>{
        let token=localStorage.getItem('tokenowner');
      axios.post(`${url}/seatstatus`,{
        mess_email:props.email.email,
        authorization:token
      })
      .then((res)=>{
        if(res.data.verify){
            savailable(res.data.av);
            sbooked(res.data.bo);
        }
      })
    },[props.email.refress])
  return (
    <div>
      <div className='container'>
        <div className="row">
        <h5 className={`col-lg-6 col-md-6 col-sm-12 ${css.stat}`} style={{textAlign:'center'}}>Available seat:  <Countup start={0} end={available} duration={5} delay={0} /></h5>
        <h5  className={`col-lg-6 col-md-6 col-sm-12 ${css.stat}`} style={{textAlign:'center'}}>Booked Seat:  <Countup start={0} end={booked} duration={10} delay={0} /></h5>
        </div>
       
      </div>
    </div>
  )
}
