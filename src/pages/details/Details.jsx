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
import { useContext } from 'react'
import { Context } from '../../context/Wallper'
import { Link, useParams } from 'react-router-dom'


export const Details = () => {

  const [loader__status,data] = useContext(Context);
  const {id} = useParams();
  const [ele,setEle] = useState();

  useEffect(() =>{
    window.scrollTo({
      top:0
    })
  })
    {return loader__status ? <>
    <Header/>
    <Nav/>
    <Product ele ={data.filter((e) => e.id == id)}/>
    <div className='details-product-cards-container container' style={{marginBottom:"100px"}}>
      <h1 className='text-dark-blue-2' style={{marginTop:"100px",marginBottom:"50px"}}>BESTSALLER PRODUCTS</h1>
      <div className='product-grid-cards'>
      {data.filter((e,i) => i > 12).map((e,i) =>
        <Link key={i} to={`/details/1${i+1}`}>
          <Fade left ><ProductCard src={e.image} head={Array.from(e.title).filter((e,i) => i < 19)} text="English Department" price__1={19.2} price__2={15.4}/></Fade>
        </Link>
      )}
      </div>
    </div>
    <Brannd/>
    <Contact/>
    <Footer/>
    </> : <Loader/>}
}
