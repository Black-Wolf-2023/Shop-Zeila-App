import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Nav } from '../../components/nav/Nav'
import { Loader } from '../main-page/components/loader/Loader'
import { TeamCard } from './team-card/TeamCard'
import { TeamHero } from './teamhero/TeamHero'
import {Talk} from "../contact/talk/Talk";
import {Contact} from '../main-page/components/contact/Contact';
import {ScrollUp} from "../../small-components/ScrollUp";
import {Footer} from "../../components/footer/Footer";
import { useContext } from 'react'
import { Context } from '../../context/Wallper'


export const Team = () => {

    const [loader__status] = useContext(Context);
    
    useEffect(() =>{
      window.scrollTo({
        top:0
      })
    })


    { return loader__status ? <>
    
     <Nav act={3}/>
     <TeamHero/>
     <TeamCard/>
     <Talk btn__text="Try free now" text="Met minim Mollie non . RELIT official consequent." title="Start your 14 days free trial"/>
     <div className='team-icons'>
       <span><img src="./page-3-assets/icons/logos_facebook.svg" alt="" /></span>
       <span><img src="./page-3-assets/icons/logos_linkedin-icon.svg" alt="" /></span>
       <span><img src="./page-3-assets/icons/logos_twitter.svg" alt="" /></span>
       <span><img src="./page-3-assets/icons/ant-design_instagram-outlined.svg" alt="" /></span>
     </div>
     <Contact/>
     <Footer/>
    <ScrollUp/>
    </> : <Loader/>}
}
