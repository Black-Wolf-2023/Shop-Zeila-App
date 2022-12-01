import React from 'react'
import "../css/app.css";

export const Team__card = ({src,name,title}) => {
  return (
    <div className='team-card-details'>
        <div className='team-card-img'><img src={src} alt="" /></div>
        <div className ="team-card-name">
           <p> {name} </p>
           <p> {title} </p>
        </div>
        <div className='team-card-social'>
            <span><img src="./page-1-assets/icons/facebook.svg" alt="" /></span>
            <span><img src="./page-1-assets/icons/twitter.svg" alt="" /></span>
            <span><img src="./page-1-assets/icons/instagram.svg" alt="" /></span>
        </div>
    </div>
  )
}
