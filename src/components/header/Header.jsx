import React from 'react'
import data  from "../../data/data.json"
import { Bounce } from 'react-reveal';

export const Header = () => {
  return (
    <header className='bg-light-blue-1 text-white-1 font-500'>
       <div className='header-contact-info'>
         <Bounce left><div className='header-phone'><img src="/page-1-assets/icons/phone-outline.svg" alt="" /> <p>{data.data.phone}</p></div></Bounce>
         <Bounce right><div className='header-email'><img src="/page-1-assets/icons/email-outline.svg" alt="" /> <p>{data.data.email}</p></div></Bounce>
       </div>
       <Bounce top><div className='header-offers-mess'>Follow Us and get a chance to win 80% off</div></Bounce>
       <div className='header-social-icons'>
          <Bounce left><p>Follow Us : </p></Bounce>
          <div className='header-social-links'>
            <Bounce right><a href="#"><img src="/page-1-assets/icons/instagram-outline.svg" alt="" /></a></Bounce>
            <Bounce left><a href="#"><img src="/page-1-assets/icons/youtube-full.svg" alt="" /></a></Bounce>
            <Bounce right><a href="#"><img src="/page-1-assets/icons/twitter-full.svg" alt="" /></a></Bounce>
            <Bounce left><a href="#"><img src="/page-1-assets/icons/facebook-full.svg" alt="" /></a></Bounce>
          </div>
       </div>
    </header>
  )
}
