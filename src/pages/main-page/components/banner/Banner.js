import React from 'react'
import data from "../../../../data/data.json";
import "./Banner.scss";
export const Banner = () => {
    const date = new Date();
  return (
    <div className='banner'>
        <div className='container'>
            <div className='banner-container'>
                <div className='banner-content'>
                    <span>SUMMER {date.getFullYear()}</span>
                    <div className='banner-container-head'>
                        <h1>Vita Classic</h1>
                        <h1>Product</h1>
                    </div>
                    <div className='banner-container-text'>
                        <p>we know large objects will act. we know</p>
                        <p>how are objects will act.we know</p>
                    </div>
                    <div className='banner-container-btns'>
                        <button>$16.48</button>
                        <button>ADD TO CART</button>
                    </div>
                </div>
                <div className='banner-container-img'><img src={data.data.images__src.hero__2} alt="" /></div>
            </div>
        </div>
    </div>
  )
}
