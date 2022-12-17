import React from 'react'
import { ProductCard } from '../../../../small-components/ProductCard'
import {Fade} from 'react-reveal';
import { useContext } from 'react';
import { Context } from '../../../../context/Wallper';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link} from 'react-router-dom';

export const Products = () => {
  const [,data] = useContext(Context);
  const [currentData,setCurrent] = useState(data.filter((e,i) => i < 12));
  const [catogrey,setCatogrey] = useState();
  return (
    <div className='products'>
        <div className='container'>
            <div className='product-container'>
              {currentData.map((e,i) => 
               <Link to={`/details/${i+1}`} key={i}>
                  <Fade right><ProductCard src={e.image} head={Array.from(e.title).filter((e,i) => i < 19)} text="English Department" price__1={Math.round(e.price/.3)} price__2={e.price}/></Fade>
               </Link>
              )}
            </div>
        </div>
        <Fade bottom><Link to="/shop"><button>SEE MORE PRODUCTS</button></Link></Fade>
    </div>
  )
}
