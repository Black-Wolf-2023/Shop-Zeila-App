import React from 'react'
import data from '../../../../data/data.json';
import "./Contact.scss";

export const Contact = () => {
  return (
    <div className='contact'>
       <div className='container'>
           <div className='contact-container'>
              <div className='contact-text'><h1>Bandage</h1></div>
              <div className='contact-icons'>
                <img src={data.data.images__src.dark__facebook} alt="" />
                <img src={data.data.images__src.dark__instagram} alt="" />
                <img src={data.data.images__src.dark__twitter} alt="" />
              </div>  
           </div>
       </div>
    </div>
  )
}
