import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import { Header } from '../../components/header/Header'
import { Nav } from '../../components/nav-bar/Nav'
import { ProductCard } from '../../small-components/ProductCard'
import { Loader } from '../main-page/components/loader/Loader'
import { Product } from './product/Product'
import {Brannd} from "../main-page/components/brannd/Brannd"
import {Contact} from "../main-page/components/contact/Contact"
import {Footer} from "../../components/footer/Footer"

export const Details = () => {

   const [loader__status,setLoader] = useState(false)

   useEffect(() =>{
      setTimeout(() => {
        setLoader(true)
      },2000)
    },[])

    {return loader__status ? <>

    <Header/>
    <Nav/>
    <Product/>
    <div className='details-product-cards-container container' style={{marginBottom:"100px"}}>
      <h1 className='text-dark-blue-2' style={{marginTop:"100px",marginBottom:"50px"}}>BESTSALLER PRODUCTS</h1>
      <div className='product-grid-cards'>
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
    <Brannd/>
    <Contact/>
    <Footer/>
    </> : <Loader/>}
}
