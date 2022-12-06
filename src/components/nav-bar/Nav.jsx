import React from 'react'
import {Link} from  "react-router-dom";
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bounce } from 'react-reveal';

export const Nav = ({activer}) => {
  const small__nav = useRef();
  const [toggle__icon ,setToggleIcon] = useState("./page-1-assets/icons/List.svg");
  const [active__nav,setActiveNav] = useState(false);
  function small__nav__controller(){
    if(small__nav.current.classList.contains('sm-nav-show')) {
      small__nav.current.classList.remove('sm-nav-show');
      setToggleIcon("./page-1-assets/icons/List.svg")
    }else{
      small__nav.current.classList.add('sm-nav-show');
      setToggleIcon("./page-1-assets/icons/close.svg")
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',() =>{
      window.scrollY > 30 ? setActiveNav(true) : setActiveNav(false);
    })
  }, []);
  return (
    <>
    <nav className={active__nav ? 'active-nav' : null }>
       <div className='nav-links'>
          <Bounce right><Link to='/'><div className='nav-logo'><img src="./Logo.svg" alt="" width='80px' height='80px'/></div></Link></Bounce>
           <ul className='font-700 size-18'>
            <Bounce left><li><Link to='/' className= {activer ? 'active-link' : ""}>Home</Link></li></Bounce>
            <Bounce right><li><Link>Shope</Link></li></Bounce>
            <Bounce left><li><Link to="/about">About</Link></li></Bounce>
            <Bounce right><li><Link to='/team'>Team</Link></li></Bounce>
            <Bounce left><li><Link>Pages</Link></li></Bounce>
            <Bounce right><li><Link to='/contact'>Contact </Link></li></Bounce>
           </ul>
       </div>
       <div className='nav-info'>
          <Bounce bottom><div className='nav-register font-700 size-18'><img src="./page-1-assets/icons/user-outline.svg" alt="" /><Link>Login</Link> / <Link>Register</Link></div></Bounce>
           <div className='nav-controller'>
              <Bounce left><div className='search-input'><button><img src="./page-1-assets/icons/search-outline.svg" alt="" /></button></div></Bounce>
              <Bounce right><div className='shopping-input'><button box-data='1'><img src="./page-1-assets/icons/shop-outline.svg" alt="" /></button></div></Bounce>
              <Bounce left><div className='like-input'><button box-data='2'><img src="./page-1-assets/icons/heart-outline.svg" alt="" /></button></div></Bounce>
              <Bounce right> <div className='toggle-input' style={{marginLeft:"20px"}} onClick = {small__nav__controller}><button box-data='2'><img width="35px" height="35px" src={toggle__icon} alt="" /></button></div></Bounce>
           </div>
       </div>
    </nav>
    <div className='sm-nav' ref={small__nav}>
         <ul className='font-700 size-18'>
             <li><Link to='/' className={activer ? 'active-sm-link' : ""}>Home</Link></li>
             <li><Link>Shope</Link></li>
             <li><Link to ="/about">About</Link></li>
             <li><Link to='/team'>Team</Link></li>
             <li><Link>Pages</Link></li>
             <li><Link to='./contact'>Contact</Link></li>
           </ul>
           <div className='sm-nav-info'>
             <div className='nav-register font-700 size-18'><img src="./page-1-assets/icons/user-outline.svg" alt="" /><Link>Login</Link> / <Link>Register</Link></div>
             <div className='nav-logo'><img src="./Logo.svg" alt="" width='100px' height='100px'/></div>
           </div>
     </div>
  </>
  )
}

