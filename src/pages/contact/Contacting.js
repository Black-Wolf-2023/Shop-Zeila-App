import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Loader } from '../main-page/components/loader/Loader';
import {Hero} from './hero/Hero';
import { Info } from './info/Info';
import { Nav } from './nav/Nav';
import { Talk } from './talk/Talk';
import {Contact} from "../main-page/components/contact/Contact";
import {Footer} from '../../components/footer/Footer';

export const Contacting  = () => {
  const [loader__status,setLoader] = useState(false)

  useEffect(() =>{
    setTimeout(() => {
      setLoader(true)
    },2000)
  },[])


    {
      return loader__status ? 
      <>
      <Nav/>
      <Hero/>
      <Info/>
      <Talk/>
      <Contact/>
      <Footer/>
      </> : <Loader/>
    }
}
