import React, { useState } from 'react';
import { useEffect } from 'react';

export const ScrollUp = () => {

    const [scroll__status,setScrollStatus] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll',() => {
            window.scrollY > 700 ? 
            setScrollStatus(true) : setScrollStatus(false);
        })
    },[scroll__status]);

  return (
        <div className= {scroll__status ? 'sm-toggler-icon scroll-up-controller' : 'sm-toggler-icon'}  onClick = {() => {window.scrollTo({behavior:"smooth",top:0})}}>
            <img src="./page-1-assets/icons/arrow-right.svg" alt="" />
            <img src="./page-1-assets/icons/arrow-right.svg" alt="" />
            <img src="./page-1-assets/icons/arrow-right.svg" alt="" />
        </div>
  )
}
