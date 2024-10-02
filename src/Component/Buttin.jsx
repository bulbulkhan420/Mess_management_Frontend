import React from 'react'
import css from './css/styles.module.css'
export default function Buttin({text,width}) {
    let wid=width;
    let wv;
    if(wid){
        wv=wid;
    }
    else{
        wv="80px";
    }
  return (
    <div>
      <button className={css.forbutton} style={{width:`${wv}`,margin:'5px 0px 5px 0px',fontSize:'10px'}}>{text}</button>
    </div>
  )
}
