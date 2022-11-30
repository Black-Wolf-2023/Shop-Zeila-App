import React from 'react'
import {Bounce } from 'react-reveal';

export const Hero = () => {
  return (
    <div className='contact-hero'>
      <div className='container'>
         <div className='contact-hero-container'>
             <div className='contact-hero-text'>
                <Bounce left><span className='size-20 font-700 text-dark-blue'>CONTACT US</span></Bounce>
                <div className='contact-hero-heads'>
                   <Bounce left><h1 className='size-50  text-dark-blue font-700'>Get in touch today!</h1></Bounce>
                </div>
                <Bounce Left><p className='size-18 font-500 text-gray-1'>We know what object will and helpfull <br/> act but we do the best</p></Bounce>
                <div className='contact-hero-phone'>
                  <Bounce left><h3 className='size-25 font-700 text-dark-blue'>Phone: 01022570632</h3></Bounce>
                  <Bounce left><h3 className='size-25 font-700 text-dark-blue'>Fax: 2450392</h3></Bounce>
                </div>
                <div className='contact-hero-social'>
                   <Bounce left><img src="./page-1-assets/icons/facebook.svg" alt="" /></Bounce>
                   <Bounce left><img src="./page-1-assets/icons/twitter.svg" alt="" /></Bounce>
                   <Bounce left><img src="./page-1-assets/icons/instagram.svg" alt="" /></Bounce>
                </div>
             </div>
             <Bounce right><div className='contact-hero-img'><img src="./page-2-assets/main/Hero.svg" alt="" /></div></Bounce>
         </div>
      </div>
    </div>
  )
}
