import React from 'react'
import { Brannd } from '../../pages/main-page/components/brannd/Brannd'
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
    </>
  )
}
