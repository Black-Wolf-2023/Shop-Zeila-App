import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import {Fade } from 'react-reveal';

export const Brannd = () => {
  const [animater,setAnimater] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      animater ? setAnimater(false) : setAnimater(true);
    },3000)
  }, [animater]);
  return (
    <div id='brannd-warbber'>
      <div className='brannd container'>
        <div className= {animater ? "brannds-imgs  banner-animater" : "brannds-imgs"}>
            <Fade bottom><div className='brannd-img'><img src="/page-1-assets/icons/fa-brands-1.png" alt="" /></div></Fade>
            <Fade top><div className='brannd-img'><img src="/page-1-assets/icons/fa-brands-2.png" alt="" /></div></Fade>
            <Fade bottom><div className='brannd-img'><img src="/page-1-assets/icons/fa-brands-3.png" alt="" /></div></Fade>
            <Fade top><div className='brannd-img'><img src="/page-1-assets/icons/fa-brands-4.png" alt="" /></div></Fade>
            <Fade bottom><div className='brannd-img'><img src="/page-1-assets/icons/fa-brands-5.png" alt="" /></div></Fade>
            <Fade top><div className='brannd-img'><img src="/page-1-assets/icons/fa-brands-6.png" alt="" /></div></Fade>
        </div>
      </div>
    </div>
  )
}
