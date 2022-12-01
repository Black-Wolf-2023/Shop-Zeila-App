import React from 'react'
import { Fade } from 'react-reveal'

export const Title = ({title,text,size,dir}) => {
  return (
    <div style={{width:"100%",margin:"100px auto",textAlign:"center",padding:"0 50px",display:"flex",flexDirection:dir || "column"}}>
       <Fade bottom><h1 id='main-header-text' style={{fontSize:size}}>{title}</h1></Fade>
        <Fade bottom><p id='' className='text-gray-1 size-20 font-500'>{text}</p></Fade>
    </div>
  )
}
