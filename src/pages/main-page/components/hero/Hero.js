import React from 'react'
import { useState } from 'react';
import { Bounce } from 'react-reveal';

export const Hero = () => {
    const [date,setDate] = useState(new Date())
  return (
    <main>
        <div className='main-container container'>
            <div className='main-text'>
                <Bounce right><span>SUMMER {date.getFullYear()}</span></Bounce>
                <Bounce left><h1>NEW COLLECTION</h1></Bounce>
                <Bounce right><p className='font-700'>We know how large objects will act,but things on a small scale.</p></Bounce>
                <Bounce left><button>SHOP NOW</button></Bounce>
            </div>
            <Bounce right><div className='main-img'><img src="./page-1-assets/main/hero-cover-1.svg" alt="" /></div></Bounce>
      </div>
    </main>
  )
}
