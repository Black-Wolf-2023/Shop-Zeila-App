import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Loader } from '../main-page/components/loader/Loader';
import {Hero} from './hero/Hero';
import { Nav } from './nav/Nav';

export const Contact = () => {
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
      </> : <Loader/>
    }
}
