import React from 'react'

export const Contact__card = ({bg,src,email,title,btn__text,text__color}) => {
  return (
    <div className='contact-card' style={{background:bg,color:text__color}}>
        <div className='contact-card-warpper'>
            <div className='contact-card-img'><img src={src} alt="" /></div>
            <div className='contact-text font-700 size-19'>{email}</div>
        </div>
        <div className='contact-title font-700 size-20'>{title}</div>
        <div className='contact-btn'><button>{btn__text}</button></div>
    </div>
  )
}
