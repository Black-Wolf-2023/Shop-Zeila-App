import React from 'react'
import data from '../../../../data/data.json';
import {Fade } from 'react-reveal';

export const Contact = () => {
  return (
    <div className='contact'>
       <div className='container'>
           <div className='contact-container'>
              <Fade left><div className='contact-text'><h1>Bandage</h1></div></Fade>
              <div className='contact-icons' style={{cursor:"pointer"}}>
                <Fade right><img src={data.data.images__src.dark__facebook} alt="" /></Fade>
                <Fade left><img src={data.data.images__src.dark__instagram} alt="" /></Fade>
                <Fade right><img src={data.data.images__src.dark__twitter} alt="" /></Fade>
              </div>  
           </div>
       </div>
    </div>
  )
}
