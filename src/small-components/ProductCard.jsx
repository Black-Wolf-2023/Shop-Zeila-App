import React from 'react'
import { useEffect } from 'react';
import "../css/app.css";

export const ProductCard = ({src,head,price__1,price__2,text}) => {
  return (
    <div className='product-card'>
        <div className='product-card-image'><img src={src} alt="" /></div>
        <div className='product-card-price'>
          <div className='product-card-title'><h3>{head}</h3></div>
          <div className='product-card-sub text-gray-1 font-700 size-20'>{text}</div>;
          <div className="wallper">
            <span className='text-gray-1 font-500 size-19' style={{textDecoration:"line-through"}}>${price__1}</span>
            <span className='font-500 size-19' style={{color:"green"}}>${price__2}</span>
          </div>
        </div>
    </div>
  )
}
