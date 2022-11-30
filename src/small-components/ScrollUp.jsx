import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export const ScrollUp = () => {
    const toggle__element = useRef();

    useEffect(() => {
        window.addEventListener('scroll',() => {
            window.scrollY > 700 ? 
            toggle__element.current.style.left = "20px" :
            toggle__element.current.style.left = "-100%";
        })
    }, []);

  return (
        <div className='sm-toggler-icon' style={{left:"-100%"}} ref={toggle__element} onClick = {() => {window.scrollTo({behavior:"smooth",top:0})}}>
            <img src="./page-1-assets/icons/arrow-right.svg" alt="" />
            <img src="./page-1-assets/icons/arrow-right.svg" alt="" />
            <img src="./page-1-assets/icons/arrow-right.svg" alt="" />
        </div>
  )
}
