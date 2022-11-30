import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Nav } from '../../components/nav/Nav'
import { Loader } from '../main-page/components/loader/Loader'
import { TeamHero } from './teamhero/TeamHero'

export const Team = () => {
    const [loader__status,setLoader] = useState(false)

    useEffect(() =>{
      setTimeout(() => {
        setLoader(true)
      },2000)
    },[])


    
    { return loader__status ? <>
    
     <Nav act={3}/>
     <TeamHero/>
    </> : <Loader/>}
}
