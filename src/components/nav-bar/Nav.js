import React from 'react'
import data from "../../data/data.json";
import {Link} from  "react-router-dom";
import "./Nav.scss";
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Bounce } from 'react-reveal';

export const Nav = () => {
  const small__nav = useRef();
  const [toggle__icon ,setToggleIcon] = useState(data.data.images__src.List);
  const [active__nav,setActiveNav] = useState(false);
  function small__nav__controller(){
    if(small__nav.current.classList.contains('sm-nav-show')) {
      small__nav.current.classList.remove('sm-nav-show');
      setToggleIcon(data.data.images__src.List)
    }else{
      small__nav.current.classList.add('sm-nav-show');
      setToggleIcon(data.data.images__src.Close)
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
          <Bounce right><div className='nav-logo'><img src={data.data.images__src.logo} alt="" width='60px' height='60px'/></div></Bounce>
           <ul className='font-700 size-18'>
            <Bounce left><li><Link className='active-link'>Home</Link></li></Bounce>
            <Bounce right><li><Link>Shope</Link></li></Bounce>
            <Bounce left><li><Link>About</Link></li></Bounce>
            <Bounce right><li><Link>Blog</Link></li></Bounce>
            <Bounce left><li><Link>Pages</Link></li></Bounce>
            <Bounce right><li><Link>Contact </Link></li></Bounce>
           </ul>
       </div>
       <div className='nav-info'>
          <Bounce bottom><div className='nav-register font-700 size-18'><img src={data.data.images__src.user} alt="" /><Link>Login</Link> / <Link>Register</Link></div></Bounce>
           <div className='nav-controller'>
              <Bounce left><div className='search-input'><button><img src={data.data.images__src.search} alt="" /></button></div></Bounce>
              <Bounce right><div className='shopping-input'><button box-data='1'><img src={data.data.images__src.shopping} alt="" /></button></div></Bounce>
              <Bounce left><div className='like-input'><button box-data='2'><img src={data.data.images__src.heart} alt="" /></button></div></Bounce>
              <Bounce right> <div className='toggle-input' style={{marginLeft:"20px"}} onClick = {small__nav__controller}><button box-data='2'><img width="35px" height="35px" src={toggle__icon} alt="" /></button></div></Bounce>
           </div>
       </div>
    </nav>
    <div className='sm-nav' ref={small__nav}>
         <ul className='font-700 size-18'>
             <li><Link className='active-sm-link'>Home</Link></li>
             <li><Link>Shope</Link></li>
             <li><Link>About</Link></li>
             <li><Link>Blog</Link></li>
             <li><Link>Pages</Link></li>
             <li><Link>Contact</Link></li>
           </ul>
           <div className='sm-nav-info'>
             <div className='nav-register font-700 size-18'><img src={data.data.images__src.user} alt="" /><Link>Login</Link> / <Link>Register</Link></div>
             <div className='nav-logo'><img src={data.data.images__src.logo} alt="" width='60px' height='60px'/></div>
           </div>
     </div>
  </>
  )
}

