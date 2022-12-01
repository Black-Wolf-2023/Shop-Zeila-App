import React from 'react'
import { Fade } from 'react-reveal';

export const Talk = ({title,text,btn__text}) => {
  return (
    <div className='contact-talk'>
        <div className='container' style={{textAlign:"center"}}>
            <Fade left><div className='contact-talk-img'><img src="./page-2-assets/icons/arrow-2.png" alt="" /></div></Fade>
            <Fade bottom><div className='contact-talk-title size-50 font-900'>{title}</div></Fade>
            <Fade bottom><div className='contact-talk-text size-20 font-900'>{text}</div></Fade>
            <Fade bottom><div className='contact-talk-btn'><button>{btn__text}</button></div></Fade>
        </div>
    </div>
  )
}
