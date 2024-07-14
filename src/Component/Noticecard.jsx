import React from 'react'

export default function Noticecard(props) {
    let info=props.info.item;
  return (
    <div>
      <div className="container"  style={{height:'50dvh',border:'1px solid black',borderRadius:'5px',position:'relative',overflow:'scroll',marginTop:'1rem',backgroundColor:'aliceblue'}}>
        <div className="row">
            <b className='col-4' style={{padding:'10px 0px 10px 0px'}}>{props.info.i+1}.</b>
            <p className='col-8' style={{padding:'10px 0px 10px 0px',fontWeight:'bolder',color:'blue'}}>{info.mess_name}</p>

        </div>
       
        <div className="row">
        <b className='col-12' style={{textAlign:'left'}}>Post:</b>
        <p className='col-12' style={{textAlign:'left',fontFamily:'inherit'}}>{info.mess_post}</p>
        </div>
       
      </div>
      <div className="container" style={{padding:'0px',margin:'0px'}}>
      <div className="row" >
       <p className='col-12' style={{fontSize:'8px',color:'green',textAlign:'left',margin:'0px'}}>{info.postdate}</p>
       </div>
      </div>
    </div>
  )
}
