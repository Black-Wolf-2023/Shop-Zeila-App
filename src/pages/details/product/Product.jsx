import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Context } from '../../../context/Wallper';


export const Product = ({ele}) => {

 const [,,catogrey] = useContext(Context);
 const [mainImage,setMainImage] = useState(ele[0].image);
  useEffect(() => {
    window.scrollTo({
      top:0,
    })
  }, []);
  return (
    <>
    <div className='details-product container'>
        <div className='details-product-img'>
           <img src={mainImage} alt="" />
           <div className="sm-img-details">
            {catogrey.map((e,i) => {
              if(i < 3){
                return(
                  <div key={i}>
                    <img src={e.category.image} alt="" />
                  </div>
                )
              }else{
                return;
              }
            })}
           </div>
        </div>
        <div className='details-product-content'>
          <div className='details-product-container'>
            <div className='details-header'>
              <h2 className='text-dark-blue'>{Array.from(ele[0].title).filter((e,i) => i < 19)}</h2>
              <h1 className='text-dark-blue'>{ele[0].price}$</h1>
            </div>
              <div className='details-cont'>
                <p className='text-gray-1 font-500 size-18'>
                  {ele[0].description}
                </p>
                <div className='like-dislike'>
                  <span className='like'>
                    <img src="/page-5-assets/icons/like.svg" alt="" />
                    <p className='font-700 text-light-blue-1'>{ele[0].rating.rate}k</p>
                  </span>
                  <span className='dislike'>
                    <img src="/page-5-assets/icons/dislike.svg" alt="" />
                    <p className='font-700 text-dark-blue'>0.8k</p>
                  </span>
                </div>
              </div>
              <div className='details-product-btns'>
                  <button className='datails-product-main-btn'>Select</button>
                  <button><img src="/page-5-assets/icons/favorite-1.svg" alt="" /></button>
                  <button><img src="/page-5-assets/icons/favorite.svg" alt="" /></button>
                  <button><img src="/page-5-assets/icons/favorite-2.svg" alt="" /></button>
              </div>
           </div>
        </div>
    </div>
    </>
  )
}
