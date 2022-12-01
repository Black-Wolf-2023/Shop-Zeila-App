import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Loader } from '../main-page/components/loader/Loader';
import {Hero} from '../../components/hero/Hero';
import { Info } from './info/Info';
import { Nav } from '../../components/nav/Nav';
import { Talk } from './talk/Talk';
import {Contact} from "../main-page/components/contact/Contact";
import {Footer} from '../../components/footer/Footer';
import {ScrollUp} from "../../small-components/ScrollUp";

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
      <Nav act={5}/>
      <Hero src={"./page-2-assets/main/Hero.svg"} status = {true} text__1 ="CONTACT US" head__text="Get in touch today!"/>
      <Info/>
      <Talk btn__text="Try free now" text="WE CAN'T WAIT TO MEET YOU" title="Let 's Talk"/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
      </> : <Loader/>
    }
}
