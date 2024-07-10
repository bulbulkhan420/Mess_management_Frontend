import React, { useEffect, useState } from 'react'
import Ownerheader from './component/Ownerheader'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
import Noticecard from '../Component/Noticecard';
import Footer from '../Component/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Buttin from '../Component/Buttin';
export default function Ownernotice() {
  let [post,spost]=useState("");
  let {email}=useParams();
  let [refress,srefress]=useState(0);
  let token=localStorage.getItem('tokenowner');
  let [postinfo,spostinfo]=useState([]);
  let submit=(e)=>{
   
    axios.post(`${url}/submit/post`,{
      authorization:token,
      email,
      post
    })
    .then((res)=>{
      console.log(res.data)
      if(res.data.verify){
        toast.success("Successfully submited",{
          position:'top-center'
        })
       
        srefress(pr=>(pr+1)%9);
      }
    })
  }
    useEffect(()=>{
      axios.post(`${url}/postinfo`,{
        authorization:token,
        email
      })
      .then((res)=>{
        if(res.data.verify){
          spostinfo(res.data.info);
        }
      }) 
    },[refress]);
  
  return (
    <div  style={{backgroundColor:'#399'}}>
        <Ownerheader/>
      <div className='container'>
        <div className="row">
        <div className='col-lg-2 col-md-1 col-sm-0'></div>
        <textarea  className='col-lg-8 col-md-10 col-sm-12' onChange={(e)=>{
           spost(e.target.value);
        }} placeholder="Please Write your notice" id="" style={{border:'1px solid black',boxSizing:'border-box',height:'20vh',textAlign:'center',padding:'2rem',marginTop:'1rem',borderRadius:'5px',resize:'none'}} ></textarea>
          <div className='col-lg-2 col-md-1 col-sm-0'></div>
       
        </div>
      <div className="row">
      <div className='col-lg-2 col-md-1 col-sm-0'></div>
      <div >
        <span onClick={submit}>
          <Buttin text={`Submit`}/>
        </span>
     
      </div>
      <div className='col-lg-2 col-md-1 col-sm-0'></div>
      </div>
       
      </div>

      <div>
        {
          postinfo.map((item,i)=>{
            return <div key={i} data-aos="fade-up">
               <div className="container" >
                <div className="row">
                    <div className='col-lg-3 col-md-1 col-sm-0'></div>
                    <div className='col-lg-6 col-md-10 col-sm-12' style={{backgroundColor:'aliceblue'}}>
                    <Noticecard info={{item,i}}/>
                    </div>
                    <div className='col-lg-3 col-md-1 col-sm-0'></div>
                </div>
            </div>
            </div>
          })
        }
      </div>
      <Footer/>
      <ToastContainer position='top-center'/>
    </div>
  )
}
