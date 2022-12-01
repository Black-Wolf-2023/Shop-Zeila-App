import React, { useEffect } from 'react';
import { useState } from 'react';
import { Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';
 
export const Nav = ({act}) => {
    const [contact__nav__toggle,setNavToggle] = useState(false);
    const [scroll__nav__status,setSctrollNav] = useState(false);

    function nav__toggle(){
        contact__nav__toggle ? setNavToggle(false) : setNavToggle(true);
    }

    function activity(index) {
       return act == index ? "active-contact-nav-list" : ' ';
    }

    useEffect(() => {
        window.addEventListener('scroll',() => {
           window.scrollY > 30 ? setSctrollNav(true) : setSctrollNav(false);
        })
    });
  return (
    <div className= {scroll__nav__status ? 'contact-nav active-nav' : 'contact-nav'} >
        <div className='container'>
            <div className='contact-nav-logo-1'>
                <img src="./Logo.svg" width="100px" height="100px" alt="Logo" />
            </div>
            <div className='contact-nav-list'>
                <div className={!contact__nav__toggle ? 'contact-logo-list' : 'contact-logo-list contact-logo-list-toggler'}>
                <div className='contact-nav-logo-2'>
                    <img src="./Logo.svg" width="80px" height="80px" alt="Logo" />
                </div>
                <ul>
                    <Bounce left><li><Link className={activity(0)} to="/">Home</Link></li></Bounce>
                    <Bounce right><li><Link className={activity(1)}>Shope</Link></li></Bounce>
                    <Bounce left><li><Link className={activity(2)}>About</Link></li></Bounce>
                    <Bounce right><li><Link  className={activity(3)}to='/team'>Team</Link></li></Bounce>
                    <Bounce left><li><Link className={activity(4)}>Pages</Link></li></Bounce>
                    <Bounce right><li><Link className={activity(5)} to='/contact'>Contact </Link></li></Bounce>
                </ul>
                <div className='contact-links-info'>
                    <Link>Login</Link>
                    <button>Become a member</button>
                </div>
                </div>
            </div>
            <div className='contact-nav-toggler' onClick={nav__toggle}>
               {
                !contact__nav__toggle ?  
                <img src="./page-1-assets/icons/List.svg" alt="" /> :  
                <img src="./page-1-assets/icons/close.svg" alt="" />
               }
            </div>
        </div>
    </div>
  )
}
