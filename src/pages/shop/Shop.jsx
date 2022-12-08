import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Header } from '../../components/header/Header'
import { Nav } from '../../components/nav/Nav'
import { Loader } from '../main-page/components/loader/Loader'
import { ShopBanner } from './banner/ShopBanner'
import { Filter } from './filter/Filter'
import {Products} from "../main-page/components/products/Products";
import {Brannd} from "../main-page/components/brannd/Brannd";
import {Footer} from "../../components/footer/Footer";
import {ScrollUp} from "../../small-components/ScrollUp"

export const Shop = () => {
    const [loader__status,setLoader] = useState(false)

    useEffect(() =>{
      setTimeout(() => {
        setLoader(true)
      },2000)
    },[])

 {
    return loader__status ? 
    <>
      <Header/>
      <Nav act={1}/>
      <ShopBanner/>
      <Filter/>
      <Products/>
      <Brannd/>
      <Footer/>
      <ScrollUp/>
    </> : <Loader/>
  }
}
