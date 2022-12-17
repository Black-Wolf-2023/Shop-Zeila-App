import React from 'react'
import {Fade } from 'react-reveal';

export const Contact = () => {
  return (
    <div className='contact'>
       <div className='container'>
           <div className='contact-container'>
              <Fade left><div className='contact-text'><h1>Bandage</h1></div></Fade>
              <div className='contact-icons' style={{cursor:"pointer"}}>
                <Fade right><img src="/page-1-assets/icons/facebook.svg" alt="" /></Fade>
                <Fade left><img src="/page-1-assets/icons/twitter.svg" alt="" /></Fade>
                <Fade right><img src="/page-1-assets/icons/instagram.svg" alt="" /></Fade>
              </div>  
           </div>
       </div>
    </div>
  )
}
