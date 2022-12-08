import React from 'react'

export const ShopBanner = () => {
  return (
    <div className='shop-banner'>
        <div className='shop-banner-imgs'>
            <h1><span className='text-light-blue-1'>SHOPING</span> - NEW </h1>
            <div className="shop-content">
                <div className="shop-box">
                    <img src="./page-6-assets/main/card-cover-1.jpg" alt="" />
                    <div className="text">
                        <p>TOP RATED</p>
                        <p>5 ITEMS</p>
                    </div>
                </div>
                <div className="shop-box">
                    <img src="./page-6-assets/main/card-cover-2.jpg" alt="" />
                    <div className="text">
                        <p>TOP OFFERS</p>
                        <p>5 ITEMS</p>
                    </div>
                </div>
                <div className="shop-box">
                    <img src="./page-6-assets/main/card-cover-3.jpg" alt="" />
                    <div className="text">
                        <p>AMAZING CONTENT</p>
                        <p>5 ITEMS</p>
                    </div>
                </div>
                <div className="shop-box">
                    <img src="./page-6-assets/main/card-cover-4.jpg" alt="" />
                    <div className="text">
                        <p>SPECIAL CLOTHES</p>
                        <p>5 ITEMS</p>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}
