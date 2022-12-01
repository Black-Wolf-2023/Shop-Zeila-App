import React from 'react'
import {Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';

export const Hero = ({src,status,btn__text,text__1,head__text,sty}) => {
  return (
    <div className='contact-hero' style={{backgroundColor:sty ? "#2C5592" : "" , padding : sty ? "100px 0" : ""}}>
      <div className='container'>
         <div className='contact-hero-container'>
             <div className='contact-hero-text'>
                <Bounce left><span className='size-20 font-700 text-dark-blue'>{text__1}</span></Bounce>
                <div className='contact-hero-heads'>
                   <Bounce left><h1 className='size-50  text-dark-blue font-700'>{head__text}</h1></Bounce>
                </div>
                <Bounce Left><p className='size-22 font-500 text-gray-1' style={{color:sty ? "#fff" : "rgb(75, 121, 133)"}}>We know what object will and helpfull <br/> act but we do the best</p></Bounce>
                 {status ? 
                 <>
                  <div className='contact-hero-phone'>
                    <Bounce left><h3 className='size-25 font-700 text-dark-blue'>Phone: 01022570632</h3></Bounce>
                    <Bounce left><h3 className='size-25 font-700 text-dark-blue'>Fax: 2450392</h3></Bounce>
                  </div>
                  <div className='contact-hero-social'>
                    <Bounce left><img src="./page-1-assets/icons/facebook.svg" alt="" /></Bounce>
                    <Bounce left><img src="./page-1-assets/icons/twitter.svg" alt="" /></Bounce>
                    <Bounce left><img src="./page-1-assets/icons/instagram.svg" alt="" /></Bounce>
                  </div> 
                </> : <Bounce left><button style={{backgroundColor : sty ? "#252B42" : "#2C5592"}}><Link to={sty ? "/contact" : "/about"}>{btn__text}</Link></button></Bounce>
                }
             </div>
             <Bounce right><div className='contact-hero-img'><img src={src} alt="" /></div></Bounce>
         </div>
      </div>
    </div>
  )
}
