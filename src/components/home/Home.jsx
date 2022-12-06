import React, { useEffect, useState } from 'react'
import { Add } from '../../pages/main-page/components/add/Add'
import { Banner } from '../../pages/main-page/components/banner/Banner'
import { Brannd } from '../../pages/main-page/components/brannd/Brannd'
import { Contact } from '../../pages/main-page/components/contact/Contact'
import { Footer } from '../footer/Footer'
import { Hero } from '../../pages/main-page/components/hero/Hero'
import { Products } from '../../pages/main-page/components/products/Products'
import { Services } from '../../pages/main-page/components/services/Services'
import { ScrollUp } from '../../small-components/ScrollUp'
import { Title } from '../../small-components/Title'
import { Types } from '../../pages/main-page/components/types/Types'
import {Fade } from 'react-reveal';
import { Loader } from '../../pages/main-page/components/loader/Loader'
import {Header} from '../header/Header';
import {Nav} from '../nav-bar/Nav';


export const Home = () => {
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
      <Nav activer={true}/>
      <Hero/>
      <Brannd/>
      <Fade bottom><Title title="EDITOR'S PICK" text="problem trying to resolve the confilct between"/></Fade>
      <Types/>
      <Fade><Title title="THE BEST SERVICES" text="problem trying to resolve the confilct between"/></Fade>
      <Services/>
      <Fade bottom><Title title="BESTSELLER PRODUCTS" text="problem trying to resolve the confilct between"/></Fade>
      <Products/>
      <Banner/>
      <Add/>
      <Contact/>
      <Footer/>
      <ScrollUp/>
    </> : <Loader/>
  }
}
