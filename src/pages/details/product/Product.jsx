import React from 'react'

export const Product = () => {
  return (
    <div className='details-product container'>
        <div className='details-product-img'>
           <img src="./page-5-assets/main/product-cover.jpg" alt="" />
           <div className="sm-img-details">
              <img src="./page-5-assets/main/product-cover-sm-1.jpg" alt="" />
              <img src="./page-5-assets/main/product-cover-sm-2.png" alt="" />
           </div>
        </div>
        <div className='details-product-content'>
          <div className='details-product-container'>
            <div className='details-header'>
              <h2 className='text-dark-blue'>Floating Phone</h2>
              <h1 className='text-dark-blue'>1,323.43$</h1>
            </div>
              <div className='details-cont'>
                <p className='text-gray-1 font-500 size-18'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.Vel quae, deserunt, dicta modi magni aperiam ea quam eveniet omnis necessitatibus commodi optio ad unde nihil autem libero recusandae. Aperiam, laboriosam?
                </p>
                <div className='like-dislike'>
                  <span className='like'>
                    <img src="./page-5-assets/icons/like.svg" alt="" />
                    <p className='font-700 text-light-blue-1'>1.2k</p>
                  </span>
                  <span className='dislike'>
                    <img src="./page-5-assets/icons/dislike.svg" alt="" />
                    <p className='font-700 text-dark-blue'>0.8k</p>
                  </span>
                </div>
              </div>
              <div className='details-product-btns'>
                  <button className='datails-product-main-btn'>Select</button>
                  <button><img src="./page-5-assets/icons/favorite-1.svg" alt="" /></button>
                  <button><img src="./page-5-assets/icons/favorite.svg" alt="" /></button>
                  <button><img src="./page-5-assets/icons/favorite-2.svg" alt="" /></button>
              </div>
           </div>
        </div>
    </div>
  )
}
