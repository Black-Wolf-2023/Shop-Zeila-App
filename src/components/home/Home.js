import React from 'react'
import { Add } from '../../pages/main-page/components/add/Add'
import { Banner } from '../../pages/main-page/components/banner/Banner'
import { Brannd } from '../../pages/main-page/components/brannd/Brannd'
import { Contact } from '../../pages/main-page/components/contact/Contact'
import { Footer } from '../../pages/main-page/components/footer/Footer'
import { Hero } from '../../pages/main-page/components/hero/Hero'
import { Products } from '../../pages/main-page/components/products/Products'
import { Services } from '../../pages/main-page/components/services/Services'
import { Title } from '../../pages/main-page/components/small-components/Title'
import { Types } from '../../pages/main-page/components/types/Types'



export const Home = () => {
  return (
    <>
     <Hero/>
     <Brannd/>
     <Title title="EDITOR'S PICK" text="problem trying to resolve the confilct between"/>
     <Types/>
     <Title title="THE BEST SERVICES" text="problem trying to resolve the confilct between"/>
     <Services/>
     <Title title="BESTSELLER PRODUCTS" text="problem trying to resolve the confilct between"/>
     <Products/>
     <Banner/>
     <Add/>
     <Contact/>
     <Footer/>
    </>
  )
}
