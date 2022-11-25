import React from 'react'

export const Footer__links = ({head,links}) => {
  return (
    <div className='footer-links'>
        <h3>{head}</h3>
        {links?.map((e,index) => {
            return <p style = {{margin:"10px 0"}}><a href="" className='text-gray-1  font-700' key={index}>{e}</a></p>;
        })}
    </div>
  )
}
