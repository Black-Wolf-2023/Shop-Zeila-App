import React from 'react'
import './Brannd.scss';
import data from "../../../../data/data.json"
import { useState } from 'react';
import { useEffect } from 'react';
export const Brannd = () => {
  const [animater,setAnimater] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      animater ? setAnimater(false) : setAnimater(true);
    },3000)
  }, [animater]);
  return (
    <div id='brannd-warbber'>
      <div className='brannd container'>
        <div className= {animater ? "brannds-imgs  banner-animater" : "brannds-imgs"}>
            <div className='brannd-img'><img src={data.data.images__src.brannd__1} alt="" /></div>
            <div className='brannd-img'><img src={data.data.images__src.brannd__2} alt="" /></div>
            <div className='brannd-img'><img src={data.data.images__src.brannd__3} alt="" /></div>
            <div className='brannd-img'><img src={data.data.images__src.brannd__4} alt="" /></div>
            <div className='brannd-img'><img src={data.data.images__src.brannd__5} alt="" /></div>
            <div className='brannd-img'><img src={data.data.images__src.brannd__6} alt="" /></div>
        </div>
      </div>
    </div>
  )
}
