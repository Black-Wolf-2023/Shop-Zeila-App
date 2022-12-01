import React from 'react'
import { Footer__links } from '../../small-components/Footer__links';
import {Fade } from 'react-reveal';


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
                      <Fade bottom><h3>Get in Touch</h3></Fade>
                      <div className='btn'>
                        <Fade left><input type="text" placeholder='Your Email ?'/></Fade>
                        <Fade right><button>Subscribe</button></Fade>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        <Fade left>
          <div className='copy-right font-700' style={{textAlign:"center",marginTop:"60px"}}>
            Copyright © All rights reserved | This template is made with Abdalrhman Eldip 
          </div>
        </Fade>
    </footer>
  )
}
