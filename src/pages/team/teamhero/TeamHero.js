import React from 'react'
import {Title} from "../../../small-components/Title";


export const TeamHero = () => {
  return (
    <div div className='team'>
      <Title dir="column-reverse" size="60px" title="Innovation tailored for you" text="WHAT WE DO"/>
        <div className='img-row-1'>
            <img src="./page-3-assets/main/hero-1.png" alt="" />
        </div>
        <div className='img-row-2'>
            <img src="./page-3-assets/main/hero-2.png" alt="" />
            <img src="./page-3-assets/main/hero-3.png" alt="" />
            <img src="./page-3-assets/main/hero-4.png" alt="" />
            <img src="./page-3-assets/main/hero-5.png" alt="" />
        </div>
    </div>
  )
}
