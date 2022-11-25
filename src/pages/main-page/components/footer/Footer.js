import React from 'react'
import { Footer__links } from '../small-components/Footer__links'
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className='bg-white-1'>
        <div className='container'>
            <div className='footer-container'>
                <Footer__links head='Company Info' links={['About Us','Carrier','We are hiring','Blog']}/>
                <Footer__links head='Legal' links={['About Us','Carrier','We are hiring','Blog']}/>
                <Footer__links head='Features' links={['About Us','Carrier','We are hiring','Blog']}/>
                <Footer__links head='Resources' links={['About Us','Carrier','We are hiring','Blog']}/>
                <div className='footer-sub'>
                    <div className='footer-btn'>
                    <h3>Get in Touch</h3>
                      <div className='btn'>
                        <input type="text" placeholder='Your Email ?'/>
                        <button>Subscribe</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='copy-right font-700' style={{textAlign:"center",marginTop:"30px"}}>
            Copyright © All rights reserved | This template is made with Abdalrhman Eldip 
        </div>
    </footer>
  )
}
