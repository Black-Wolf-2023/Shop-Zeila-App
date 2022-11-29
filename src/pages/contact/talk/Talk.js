import React from 'react'
import { Fade } from 'react-reveal';
import data from "../../../data/data.json";

export const Talk = () => {
  return (
    <div className='contact-talk'>
        <div className='container'>
            <Fade left><div className='contact-talk-img'><img src={data.data.images__src.contact__arrow} alt="" /></div></Fade>
            <Fade bottom><div className='contact-talk-text size-20 font-900'>WE CAN'T WAIT TO MEET YOU</div></Fade>
            <Fade bottom><div className='contact-talk-title size-50 font-900'>Let 's Talk</div></Fade>
            <Fade bottom><div className='contact-talk-btn'><button>Try free now</button></div></Fade>
        </div>
    </div>
  )
}
