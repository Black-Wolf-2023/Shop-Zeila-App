import React from 'react'
import data from "../../../../data/data.json";
import "./Banner.scss";
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
                        <Fade left><h1>Vita Classic</h1></Fade>
                        <Fade right><h1>Product</h1></Fade>
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
                <Fade right><div className='banner-container-img'><img src={data.data.images__src.hero__2} alt="" /></div></Fade>
            </div>
        </div>
    </div>
  )
}
