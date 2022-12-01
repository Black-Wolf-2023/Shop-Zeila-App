import React from 'react'
import { Fade } from 'react-reveal';
import {Title} from "../../../small-components/Title";


export const TeamHero = () => {
  return (
    <div div className='team'>
      <Title dir="column-reverse" size="60px" title="Innovation tailored for you" text="WHAT WE DO"/>
      <Fade left>
          <div className='img-row-1'>
              <img src="./page-3-assets/main/hero-1.png" alt="" />
          </div>
        </Fade>
        <div className='img-row-2'>
           <Fade top> <img src="./page-3-assets/main/hero-2.png" alt="" /></Fade>
           <Fade bottom><img src="./page-3-assets/main/hero-3.png" alt="" /></Fade>
           <Fade bottom><img src="./page-3-assets/main/hero-4.png" alt="" /></Fade>
           <Fade bottom><img src="./page-3-assets/main/hero-5.png" alt="" /></Fade>
        </div>
    </div>
  )
}
