import React, { useEffect, useMemo, useState } from 'react'
import Messcard from './component/Messcard';
import Studentheader from './component/Studentheader';
import axios from 'axios';
import { url } from '../Url';
import { Link, useNavigate, useParams } from 'react-router-dom';

const StudentSearch = () => {
    let {email}=useParams();
    let [sr,ssr]=useState(0);
   let search=(e)=>{
    e.preventDefault();
     ssr(sr=>sr+1);
   }

    let navigate=useNavigate();
    let [location,slocation]=useState("");
    let [minimum,sminimum]=useState("");
    let [maximum,smaximum]=useState("");
    let [seat_type,sseat_type]=useState("");
    let setval=(e)=>{
        if(e.target.name=="location"){
            slocation(e.target.value);
        }
        else if(e.target.name=="minimum"){
            sminimum(e.target.value);
        }
        else if(e.target.name=="maximum"){
            smaximum(e.target.value);
        }
        else if(e.target.name=="seat_type"){
            sseat_type(e.target.value);
        }
    }
    let [seatcard,sseatcard]=useState([{}]);
    useEffect(()=>{
        let authorization=localStorage.getItem('token');
     axios.post(`${url}/mess/seatinfo`,{
        authorization,
        location,
        maximum,
        minimum,
        seat_type
     })
     .then((res)=>{
        console.log(res.data)
        if(res.data.verify==false){
          navigate('/login');
          return ;
        }
        if(res.data.ok){
            sseatcard(res.data.info);
        }
       else{
        alert("error");
       }
     })
    },[sr])
  return (
    <div>
      <Studentheader />
      <form onSubmit={search}>
        <label htmlFor="location">Location:</label>
        <select name='location' required value={location} onChange={setval}>
            <option value="">Select Location</option>
            <option value="Binodpur">Binodpur</option>
            <option value="Kajla">Kajla</option>
            <option value="Talaimari">Talaimari</option>
            <option value="Zero Point">Zero Point</option>
            <option value="KadirGonj">KadirGonj</option>
        </select>
        <br />
        <label htmlFor="minimum">Minimum:</label>
        <input type="number" required min={0} name='minimum' value={minimum} onChange={setval} />
        <br />
        <label htmlFor="maximum">Maximum:</label>
        <input type="number" required max={5000}  name='maximum' value={maximum} onChange={setval} />
        <br />
        <label htmlFor="seat_type">Seat Type</label>
        <select  name='seat_type' required value={seat_type} onChange={setval}>
            <option value="">Select seat type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
            <option value="Quadruple">Quadruple</option>
        </select>
        <button type='submit'>Search</button>
      </form>
      {
        seatcard.map((item,i)=>{
            return <div key={i}>
                <Link to={`/studentprofile/search/messconfirm/${item._id}/${email}`}> <Messcard info={item}  /></Link>
             
            </div>
        })
      }
      
    </div>
  )
}

export default StudentSearch;
