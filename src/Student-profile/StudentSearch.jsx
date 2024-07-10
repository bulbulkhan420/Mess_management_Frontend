import React, { useEffect, useMemo, useState } from 'react'
import Messcard from './component/Messcard';
import Studentheader from './component/Studentheader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../Url';
import { Link, useNavigate, useParams } from 'react-router-dom';
import css from './css/profile.module.css'
import Footer from '../Component/Footer';
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
        toast.warn("There is an error",{
          position:'top-center'
        })
       
       }
     })
    },[sr])
  return (
    <div>
      <Studentheader />
      {/* Search bar*/}
      <form onSubmit={search} className='container'>
      
          <div className={`row ${css.resize}`}>


            <div className={`${css.sr} `}>
           
        <select className={css.forsearchcmp} name='location' required value={location} onChange={setval}>
            <option value="">Location</option>
            <option value="Binodpur">Binodpur</option>
            <option value="Kajla">Kajla</option>
            <option value="Talaimari">Talaimari</option>
            <option value="Zero Point">Zero Point</option>
            <option value="KadirGonj">KadirGonj</option>
        </select>
            </div>
          


          <div className={`${css.sr}`}>
         
          <input className={css.forsearchcmp} type="number" style={{textAlign:'center'}} placeholder='Min Price' required min={0} name='minimum' value={minimum} onChange={setval} />
          </div>


          <div className={`${css.sr} `} >
          
          <input className={css.forsearchcmp} type="number" style={{textAlign:'center'}} required max={5000} placeholder='Max Price'  name='maximum' value={maximum} onChange={setval} />
          </div>



          <div className={`${css.sr} `}>
          
        <select className={css.forsearchcmp} name='seat_type' required value={seat_type} onChange={setval}>
            <option value="">Seat Type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Triple">Triple</option>
            <option value="Quadruple">Quadruple</option>
        </select>
          </div>


          <div className={`${css.sr} `}>
       <button style={{margin:'0px',width:'80px',height:'35px',borderRadius:'20px',backgroundColor:'#010ca7'}} type='submit'>Search</button>
       </div>

          </div>
        
       
        {/* Search bar*/}
       
        
        
       
      </form>
      <div className="container" style={{backgroundColor:'rgb(192,192,213)'}}>
        <div className="row">
        {seatcard.length>0?seatcard.map((item,i)=>{
            return <div key={i} className='col-lg-4 col-md-6 col-sm-12' data-aos="fade-up">
                 <div><Messcard info={item} text={"Show More"} navigator={`/studentprofile/search/messconfirm/${item._id}/${email}/${"Not_paid"}`} /></div>
             
            </div>
        }):<div style={{height:'90dvh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h3>No Match Found</h3>
        </div>
      }
        </div>
      </div>
     
      <Footer/>
      <ToastContainer position='top-center'/>
    </div>
  )
}

export default StudentSearch;
