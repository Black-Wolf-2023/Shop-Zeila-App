import React from 'react'
import { useState } from 'react';
import "./Hero.scss";
import data from '../../../../data/data.json';
export const Hero = () => {
    const [date,setDate] = useState(new Date())
  return (
    <main>
        <div className='main-container'>
            <div className='main-text'>
                <span>SUMMER {date.getFullYear()}</span>
                <h1>NEW COLLECTION</h1>
                <p>We know how large objects will act, 
                    but things on a small scale.</p>
                <button>SHOP NOW</button>
            </div>
            <div className='main-img'><img src={data.data.images__src.hero} alt="" /></div>
      </div>
    </main>
  )
}
