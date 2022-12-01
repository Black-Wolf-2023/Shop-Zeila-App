import React from 'react'
import "../css/app.css";

export const Counter = ({head,text}) => {
  return (
    <div style={{textAlign:"center"}}>
       <h1 className='size-60 font-900'>{head}</h1>
       <p className='text-gray-1'>{text}</p>
    </div>
  )
}
