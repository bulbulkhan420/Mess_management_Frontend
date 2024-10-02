import React, { useState } from 'react'
import csm from "./CSS/Signupmess.module.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { url } from '../Url';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Singupmess() {
  let [location,slocation]=useState("");
  let sel=(e)=>{
     slocation(e.target.value);
  }
  let [messname,smessname]=useState("");
  let [fname,sfname]=useState("");
  let [lname,slname]=useState("");
  let [email,semail]=useState("");
  let [phone,sphone]=useState("");
  let [password,spassword]=useState("");
  let [cpassword,scpassword]=useState("");
  let navigate=useNavigate();
  
  let setval=(e)=>{
     e.preventDefault();
     if(e.target.name=="fname"){
      sfname(e.target.value);
     }
    else if(e.target.name=="lname"){
      slname(e.target.value);
     }
     else if(e.target.name=='messname'){
      smessname(e.target.value);
     }
     if(e.target.name=="email"){
      semail(e.target.value);
     }
     if(e.target.name=="phone"){
      sphone(e.target.value);
     }
     if(e.target.name=="password"){
      spassword(e.target.value);
     }
     if(e.target.name=="cpassword"){
      scpassword(e.target.value);
     }
  }
  let subfrm=(e)=>{
    e.preventDefault();
    if(password==cpassword){
       axios.post(`${url}/ownersignup`,{
        location,fname,lname,email,phone,password,messname
       })
       .then((res)=>{
        if(res.data.check){
          toast.info('Email exist',{
            position:'top-center'
          })
          
        }
        else{
          navigate("/otpmess/"+email);
        }
       })
    }
    else{
      toast.info('Password does not matched',{
        position:'top-center'
      })
     
    }
  }
  return (
    <div>
      <div className={csm.dismain}>
        <form className={csm.dis} onSubmit={subfrm}>
            <p style={{color:'rgb(7,7,159)',fontWeight:'bolder'}}>Create Account</p>
        <select name="" id="" required onChange={sel} value={location}>
            <option value="">Choose Location</option>
            <option value="Binodpur">Binodpur</option>
            <option value="Kajla">Kajla</option>
            <option value="Monnafer Mor">Monnafer Mor</option>
            <option value="Zero Point">Zero Point</option>
            <option value="Alu Potti">Alu Potti</option>
            <option value="Station Bazar">Station Bazar</option>
            <option value="Vodra">Vodra</option>
            <option value="Kata Khali">Kata Khali</option>
            <option value="Kadir Gong">Kadir Gong</option>
        </select>
        <input type="text" name='messname' onChange={setval} required placeholder='Mess Name' />
        <input type="text" name='fname' onChange={setval} value={fname}required placeholder='First Name' />
        <input type="text" name='lname' onChange={setval} value={lname} required placeholder='Last Name'/>
        <input type="email" name='email' onChange={setval} value={email} required placeholder='Enter Your Email'/>
        <input type="number" name='phone' onChange={setval} value={phone} required placeholder='Enter Your Contract Number'/>
        <input type="password" name='password' onChange={setval} value={password} required placeholder='Enter Your Password' />
        <input type="password" name='cpassword' onChange={setval} value={cpassword} required placeholder='Confirm Your Password' />
        <button type='submit'>Create Account</button>
        
      </form>
      <ToastContainer position='top-center'/>
        </div>
    </div>
  )
}

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { url } from '../Url';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export default function SignupMess() {
//   let [location, slocation] = useState("");
//   let [messname, smessname] = useState("");
//   let [fname, sfname] = useState("");
//   let [lname, slname] = useState("");
//   let [email, semail] = useState("");
//   let [phone, sphone] = useState("");
//   let [password, spassword] = useState("");
//   let [cpassword, scpassword] = useState("");
//   let navigate = useNavigate();

//   let sel = (e) => {
//     slocation(e.target.value);
//   };

//   let setval = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     if (name === 'fname') sfname(value);
//     if (name === 'lname') slname(value);
//     if (name === 'messname') smessname(value);
//     if (name === 'email') semail(value);
//     if (name === 'phone') sphone(value);
//     if (name === 'password') spassword(value);
//     if (name === 'cpassword') scpassword(value);
//   };

//   let subfrm = (e) => {
//     e.preventDefault();
//     if (password === cpassword) {
//       axios.post(`${url}/ownersignup`, {
//         location, fname, lname, email, phone, password, messname
//       })
//       .then((res) => {
//         if (res.data.check) {
//           toast.info('Email exists', {
//             position: 'top-center'
//           });
//         } else {
//           navigate("/otpmess/" + email);
//         }
//       });
//     } else {
//       toast.info('Password does not match', {
//         position: 'top-center'
//       });
//     }
//   };

//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f4f8' }}>
//       <div style={{
//         backgroundColor: 'white', 
//         padding: '2rem', 
//         borderRadius: '8px', 
//         boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//         width: '100%', 
//         maxWidth: '500px'
//       }}>
//         <form onSubmit={subfrm} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
//           <p style={{ color: '#07079f', fontWeight: 'bolder', textAlign: 'center', fontSize: '1.5rem' }}>Create Account</p>
          
//           <select name="" required onChange={sel} value={location} style={{
//             padding: '0.5rem',
//             borderRadius: '5px',
//             border: '1px solid #ccc'
//           }}>
//             <option value="">Choose Location</option>
//             <option value="Binodpur">Binodpur</option>
//             <option value="Kajla">Kajla</option>
//             <option value="Monnafer Mor">Monnafer Mor</option>
//             <option value="Zero Point">Zero Point</option>
//             <option value="Alu Potti">Alu Potti</option>
//             <option value="Station Bazar">Station Bazar</option>
//             <option value="Vodra">Vodra</option>
//             <option value="Kata Khali">Kata Khali</option>
//             <option value="Kadir Gong">Kadir Gong</option>
//           </select>

//           <input type="text" name='messname' onChange={setval} required placeholder='Mess Name' style={inputStyle} />
//           <input type="text" name='fname' onChange={setval} value={fname} required placeholder='First Name' style={inputStyle} />
//           <input type="text" name='lname' onChange={setval} value={lname} required placeholder='Last Name' style={inputStyle} />
//           <input type="email" name='email' onChange={setval} value={email} required placeholder='Enter Your Email' style={inputStyle} />
//           <input type="number" name='phone' onChange={setval} value={phone} required placeholder='Enter Your Contract Number' style={inputStyle} />
//           <input type="password" name='password' onChange={setval} value={password} required placeholder='Enter Your Password' style={inputStyle} />
//           <input type="password" name='cpassword' onChange={setval} value={cpassword} required placeholder='Confirm Your Password' style={inputStyle} />
          
//           <button type="submit" style={{
//             backgroundColor: '#07079f', 
//             color: 'white', 
//             padding: '0.75rem', 
//             borderRadius: '5px', 
//             border: 'none', 
//             cursor: 'pointer', 
//             fontWeight: 'bold', 
//             fontSize: '1rem',
//             transition: 'background-color 0.3s ease'
//           }} 
//           onMouseOver={(e) => e.target.style.backgroundColor = '#060669'}
//           onMouseOut={(e) => e.target.style.backgroundColor = '#07079f'}>
//             Create Account
//           </button>
//         </form>
//         <ToastContainer position='top-center' />
//       </div>
//     </div>
//   );
// }

// const inputStyle = {
//   padding: '0.75rem',
//   borderRadius: '5px',
//   border: '1px solid #ccc',
//   width: '100%',
//   boxSizing: 'border-box'
// };
