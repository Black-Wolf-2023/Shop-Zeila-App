import React, { useEffect, useState } from 'react'
import { Nav } from '../../components/nav/Nav'
import { Loader } from '../main-page/components/loader/Loader'
import {Hero} from "../../components/hero/Hero"

export const About = () => {
    const [loader__status,setLoader] = useState(false)

    useEffect(() =>{
      setTimeout(() => {
        setLoader(true)
      },2000)
    },[])

    {
        return loader__status ? <>
        
        <Nav act={2}/>
        <Hero status={false} btn__text ="Get Quote Now" src="page-4-assets/main/Hero.svg" text__1="ABOUT COMPANY" head__text="ABOUT US"/>
        
        </> : <Loader/>
    }
}
