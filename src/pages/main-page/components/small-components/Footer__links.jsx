import React from 'react'
import {Fade } from 'react-reveal';

export const Footer__links = ({head,links}) => {
  return (
    <div className='footer-links'>
        <Fade top><h3>{head}</h3></Fade>
        {links?.map((e,index) => {
            return <Fade key={index} bottom><p key={index} style = {{margin:"10px 0"}}><a href="" className='text-gray-1  font-700' key={index}>{e}</a></p></Fade>;
        })}
    </div>
  )
}
