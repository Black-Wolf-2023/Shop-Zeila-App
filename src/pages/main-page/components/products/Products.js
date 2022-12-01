import React from 'react'
import { ProductCard } from '../../../../small-components/ProductCard'
import {Fade} from 'react-reveal';

export const Products = () => {
  return (
    <div className='products'>
        <div className='container'>
            <div className='product-container'>
               <Fade right><ProductCard src="./page-1-assets/main/product-1.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade left><ProductCard src="./page-1-assets/main/product-2.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade right><ProductCard src="./page-1-assets/main/product-3.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade left><ProductCard src="./page-1-assets/main/product-4.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade right><ProductCard src="./page-1-assets/main/product-5.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade left><ProductCard src="./page-1-assets/main/product-6.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade right><ProductCard src="./page-1-assets/main/product-7.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade left><ProductCard src="./page-1-assets/main/product-8.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade right><ProductCard src="./page-1-assets/main/product-9.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
               <Fade left><ProductCard src="./page-1-assets/main/product-1.png" head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/></Fade>
            </div>
        </div>
        <Fade bottom><button>SEE MORE PRODUCTS</button></Fade>
    </div>
  )
}
