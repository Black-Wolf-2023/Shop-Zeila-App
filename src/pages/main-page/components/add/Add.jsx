import React from 'react'
import {Fade } from 'react-reveal';

export const Add = () => {
  return (
    <div className='add'>
        <div className='container'>
            <div className='add-container'>
                <div className='add-container-img'>
                    <Fade left><img src="./page-1-assets/main/girl-banner-1.png" alt="" /></Fade>
                    <Fade right><img src="./page-1-assets/main/girl-banner-2.png" alt="" /></Fade>
                </div>
                <div className='add-container-text'>
                    <Fade bottom><span className='text-light-blue-2 font-700 size-18'>Featured Products</span></Fade>
                    <Fade bottom><h1 className='size-50'>We love what we do</h1></Fade>
                    <Fade bottom>
                        <p className='text-gray-1 size-17 font-500' style={{margin:"30px 0"}}>
                            Problem trying to resolve the confilct between<br/>
                            the two major reaims of calssical physicla  <br/>
                            newtork machine
                        </p>
                    </Fade>
                    <Fade bottom>
                        <p className='text-gray-1 size-17 font-500'>
                            Problem trying to resolve the confilct between<br/>
                            the two major reaims of calssical physicla  <br/>
                            newtork machine
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  )
}
