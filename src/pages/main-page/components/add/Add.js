import React from 'react'
import data from "../../../../data/data.json";
import "./Add.scss";
export const Add = () => {
  return (
    <div className='add'>
        <div className='container'>
            <div className='add-container'>
                <div className='add-container-img'>
                    <img src={data.data.images__src.girl__banner__1} alt="" />
                    <img src={data.data.images__src.girl__banner__2} alt="" />
                </div>
                <div className='add-container-text'>
                    <span className='text-light-blue-2 font-700 size-18'>Featured Products</span>
                    <h1 className='size-50'>We love what we do</h1>
                    <p className='text-gray-1 size-17 font-500' style={{margin:"30px 0"}}>
                        Problem trying to resolve the confilct between<br/>
                        the two major reaims of calssical physicla  <br/>
                        newtork machine
                    </p>
                    <p className='text-gray-1 size-17 font-500'>
                        Problem trying to resolve the confilct between<br/>
                        the two major reaims of calssical physicla  <br/>
                        newtork machine
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
