import React from 'react'
import data from "../../data/data.json";
import {Link} from  "react-router-dom";
import "./Nav.scss";

export const Nav = () => {
  return (
    <>
    <nav>
       <div className='nav-links'>
           <div className='nav-logo'><img src={data.data.images__src.logo} alt="" width='60px' height='60px'/></div>
           <ul className='font-700 size-18'>
             <li><Link className='active-link'>Home</Link></li>
             <li><Link>Shope</Link></li>
             <li><Link>About</Link></li>
             <li><Link>Blog</Link></li>
             <li><Link>Pages</Link></li>
             <li><Link>Contact</Link></li>
           </ul>
       </div>
       <div className='nav-info'>
           <div className='nav-register font-700 size-18'><img src={data.data.images__src.user} alt="" /><Link>Login</Link> / <Link>Register</Link></div>
           <div className='nav-controller'>
               <div className='search-input'><button><img src={data.data.images__src.search} alt="" /></button></div>
               <div className='shopping-input'><button box-data='1'><img src={data.data.images__src.shopping} alt="" /></button></div>
               <div className='like-input'><button box-data='2'><img src={data.data.images__src.heart} alt="" /></button></div>
           </div>
       </div>
    </nav>
    <div className='sm-nav'>
         <ul className='font-700 size-18'>
             <li><Link className='active-link'>Home</Link></li>
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
