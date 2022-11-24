import React from 'react'
import { ProductCard } from '../small-components/ProductCard'
import data from '../../../../data/data.json';
import "./Products.scss";

export const Products = () => {
  return (
    <div className='products'>
        <div className='container'>
            <div className='product-container'>
                <ProductCard src={data.data.images__src.product__1} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__2} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__3} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__4} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__5} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__6} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__7} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__8} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__9} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
                <ProductCard src={data.data.images__src.product__1} head="Graphic Design" text="English Department" price__1={19.2} price__2={15.4}/>
            </div>
        </div>
        <button>SEE MORE PRODUCTS</button>
    </div>
  )
}
