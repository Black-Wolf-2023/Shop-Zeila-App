import React from 'react'
import {Fade } from 'react-reveal';

export const Banner = () => {
    const date = new Date();
  return (
    <div className='banner'>
        <div className='container'>
            <div className='banner-container'>
                <div className='banner-content'>
                    <span>SUMMER {date.getFullYear()}</span>
                    <div className='banner-container-head'>
                        <Fade left><h1>Vita Classic Product</h1></Fade>
                    </div>
                    <div className='banner-container-text'>
                        <Fade right><p>we know large objects will act. we know</p></Fade>
                        <Fade left><p>how are objects will act.we know</p></Fade>
                    </div>
                    <div className='banner-container-btns'>
                        <Fade right><button>$16.48</button></Fade>
                        <Fade right><button>ADD TO CART</button></Fade>
                    </div>
                </div>
                <Fade right><div className='banner-container-img'><img src="./page-1-assets/main/shop-hero-2-png-picture-1.png" alt="" /></div></Fade>
            </div>
        </div>
    </div>
  )
}
