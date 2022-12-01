import React from 'react'
import "../css/app.css";

export const ProductCard = ({src,head,price__1,price__2,text}) => {
  return (
    <div className='product-card' style={{textAlign:"center"}}>
        <div className='product-card-image'><img src={src} alt="" /></div>
        <div className='product-card-title'><h2>{head}</h2></div>
        <div className='product-card-sub text-gray-1 font-700 size-20'>{text}</div>;
        <div className='product-card-price'>
            <span className='text-gray-1 font-500 size-19' style={{textDecoration:"line-through"}}>${price__1}</span>
            <span className='font-500 size-19' style={{color:"green",margin:"0 5px"}}>${price__2}</span>
        </div>
    </div>
  )
}
