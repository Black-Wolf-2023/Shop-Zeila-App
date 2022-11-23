import React from 'react'

export const Card = ({src,head,text}) => {
  return (
    <div className='card' style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div className='card-img'><img src={src} alt="" /></div>
        <div className='card-text' style={{margin:"30px 0"}}><h1>{head}</h1></div>
        <div className='card-ex-text text-gray-1 font-700 size-18' style={{width:"230px",textAlign:"center"}}>{text}</div>
    </div>
  )
}
