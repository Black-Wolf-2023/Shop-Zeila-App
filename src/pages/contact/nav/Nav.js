import React from 'react';
import { useState } from 'react';
import { Bounce } from 'react-reveal';
import { Link } from 'react-router-dom';
import data from '../../../data/data.json';
 
export const Nav = () => {
    const [contact__nav__toggle,setNavToggle] = useState(false);

    function nav__toggle(){
        contact__nav__toggle ? setNavToggle(false) : setNavToggle(true);
    }
  return (
    <div className='contact-nav'>
        <div className='container'>
            <div className='contact-nav-logo-1'>
                <img src={data.data.images__src.logo} width="100px" height="100px" alt="Logo" />
            </div>
            <div className='contact-nav-list'>
                <div className={!contact__nav__toggle ? 'contact-logo-list' : 'contact-logo-list contact-logo-list-toggler'}>
                <div className='contact-nav-logo-2'>
                    <img src={data.data.images__src.logo} width="80px" height="80px" alt="Logo" />
                </div>
                <ul>
                    <Bounce left><li><Link to="/">Home</Link></li></Bounce>
                    <Bounce right><li><Link>Shope</Link></li></Bounce>
                    <Bounce left><li><Link>About</Link></li></Bounce>
                    <Bounce right><li><Link>Blog</Link></li></Bounce>
                    <Bounce left><li><Link>Pages</Link></li></Bounce>
                    <Bounce right><li><Link className='active-contact-nav-list' to='/contact'>Contact </Link></li></Bounce>
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
                <img src={data.data.images__src.List} alt="" /> :  
                <img src={data.data.images__src.Close} alt="" />
               }
            </div>
        </div>
    </div>
  )
}
