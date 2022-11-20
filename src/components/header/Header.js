import React from 'react'
import './Header.scss';
import data  from "../../data/data.json"

export const Header = () => {
  return (
    <header className='bg-light-blue-1 text-white-1 font-500'>
       <div className='header-contact-info'>
          <div className='header-phone'><img src={data.data.images__src.phone} alt="" /> <p>{data.data.phone}</p></div>
          <div className='header-email'><img src={data.data.images__src.email} alt="" /> <p>{data.data.email}</p></div>
       </div>
       <div className='header-offers-mess'>Follow Us and get a chance to win 80% off</div>
       <div className='header-social-icons'>
          <p>Follow Us : </p>
          <div className='header-social-links'>
              <a href="#"><img src={data.data.images__src.instagram} alt="" /></a>
              <a href="#"><img src={data.data.images__src.youtube} alt="" /></a>
              <a href="#"><img src={data.data.images__src.facebook} alt="" /></a>
              <a href="#"><img src={data.data.images__src.twitter} alt="" /></a>
          </div>
       </div>
    </header>
  )
}
