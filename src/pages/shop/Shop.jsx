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
import { Context } from '../../context/Wallper'
import { useContext } from 'react'

export const Shop = () => {
    const [loader__status] = useContext(Context);

    useEffect(() =>{
      window.scrollTo({
        top:0
      })
    })


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
