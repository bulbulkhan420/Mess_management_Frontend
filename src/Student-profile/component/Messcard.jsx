import React from 'react'
import css from './scom.module.css'
import Buttin from '../../Component/Buttin';
import { useNavigate } from 'react-router-dom';
export default function Messcard({info,text,navigator,width}) {
   let a=info;
   let navigate=useNavigate();
  return (
    <div style={{marginTop:'1rem'}}>
      <div className={`container-fluid ${css.card}`} >
      <div className='row'>
       <div className="container-fluid">
        <div className="row">
         
        <img src={info.mess_seat_image} style={{borderRadius:'5px',border:'5px solid black',width:'100%',height:'200px'}} alt="" />
        
        </div>
       </div>
       
        <h3 style={{width:'100%',color:'#333',marginTop:'10px'}}>Mess Name: {a.mess_name}</h3>
        <div  style={{width:'100%'}}>
          <h3 style={{textAlign:'left',fontSize:'15px'}}>Description</h3>
          <div style={{fontSize:'12px',textAlign:'center',padding:'5px',textDecoration:'none',border:'1px solid black',marginBottom:'10px',height:'100px',overflowY:'scroll'}}>
          {a.mess_room_description}
          </div>
           </div>
           <div className={`${css.about} container-fluid col-lg-12 col-md-12`} >
           
            <h5 style={{textAlign:'center'}}>About</h5>
           
            <hr />
           <div className='container-fluid'>
            <div className='row'>
              <h5 className={`col-6 ${css.tac}`}>Location:</h5>
              
              <p className={`col-6 ${css.taci} `} style={{fontSize:'12px'}}>{a.mess_location}</p>
              
            </div>
           </div>
           <hr />
           
          
           <div className='container-fluid'>
            <div className='row'>
              <h5 className={`col-6 ${css.tac}`}>Contract:</h5>
              
              <p className={`col-6 ${css.taci} `} style={{fontSize:'12px'}}>{a.mess_owner_phone}</p>
              
            </div>
           </div>
           <hr />




           <div className='container-fluid'>
            <div className='row'>
              <h5 className={`col-6 ${css.tac}`}>Seat Type:</h5>
             
              <p className={`col-6 ${css.taci} `} style={{fontSize:'12px'}}>{a.mess_seat_type}</p>
             
            </div>
           </div>
           <hr />
           <div className='container-fluid'>
            <div className='row'>
              <h5 className={`col-6 ${css.tac}`}>Room number:</h5>
             
              <p className={`col-6 ${css.taci} `} style={{fontSize:'12px'}}>{a.mess_room_number}</p>
             
            </div>
           </div>
           <hr />
           <div className='container-fluid'>
            <div className='row'>
              <h5 className={`col-6 ${css.tac}`}>Seat price:</h5>
             
              <p className={`col-6 ${css.taci} `} style={{fontSize:'12px'}}>{a.mess_seat_price}</p>
              
            </div>
           </div>
        
          
         
          
           </div>
           {
            text && navigator && <span onClick={()=>{
              navigate(navigator);
             }}>
             <Buttin text={text} width={width}/>
             </span>
           }
           
        
           <div style={{width:'100%'}}></div>
         
          
       
       
        
    
      
         
        
      </div>
      </div>
    </div>
  )
}
