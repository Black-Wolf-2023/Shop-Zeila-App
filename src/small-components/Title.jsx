import React from 'react'

export const Title = ({title,text,size,dir}) => {
  return (
    <div style={{width:"100%",margin:"100px auto",textAlign:"center",padding:"0 50px",display:"flex",flexDirection:dir || "column"}}>
        <h1 style={{fontSize:size}}>{title}</h1>
        <p className='text-gray-1 size-20 font-500'>{text}</p>
    </div>
  )
}
