import React, { useEffect, useState } from 'react'
import { Nav } from '../../components/nav/Nav'
import { Loader } from '../main-page/components/loader/Loader'
import {Hero} from "../../components/hero/Hero"
import { Counter } from '../../small-components/Counter'
import {Title} from "../../small-components/Title";
import {Team__card} from "../../small-components/Team__card";
import { Bounce } from 'react-reveal'
import {Brannd} from "../main-page/components/brannd/Brannd";
import { Contact } from '../main-page/components/contact/Contact'
import {Footer} from "../../components/footer/Footer"
import {ScrollUp} from "../../small-components/ScrollUp";
import { useContext } from 'react'
import { Context } from '../../context/Wallper'


export const About = () => {
    const [loader__status] = useContext(Context);




    {
        return loader__status ? <>
        
        <Nav act={2}/>
        <Hero status={false} btn__text ="Get Quote Now" src="page-4-assets/main/Hero.svg" text__1="ABOUT COMPANY" head__text="ABOUT US"/>
        <div className='counters'>
            <div className='container'>
                <Bounce left><Counter head="15k" text="Happy Customer"/></Bounce>
                <Bounce left><Counter head="150k" text="Monthly Visitors"/></Bounce>
                <Bounce right><Counter head="15" text="Countries Wide"/></Bounce>
                <Bounce right><Counter head="100+" text="Top Partners"/></Bounce>
            </div>
        </div>
        <div className='team-cont'>
            <Title size="50px" title="Meet Our Team" text="Problem to try solving cofition articler potayer"/>
            <div className='team-cards'>
                <Bounce left><Team__card name="Dina Mohammed" title="Disgn Maker" src="./page-3-assets/main/team-1-user-1.jpg"/></Bounce>
                <Bounce right> <Team__card name="Nada Tark" title="Front End Designer" src="./page-3-assets/main/team-1-user-2.jpg"/></Bounce>
                <Bounce left> <Team__card name="Mena Amad" title="Back End Developer" src="./page-3-assets/main/team-1-user-3.jpg"/></Bounce>
            </div>
        </div>
        <div style={{marginTop:"300px"}}></div>
        <Title size="50px" title="Big Companies Are Here" text="Problem to try solving cofition articler potayer"/>
        <Brannd/>
        <Hero sty = "s" status={false} btn__text ="Contact US" src="page-4-assets/main/Hero-2.png" text__1="WORK WITH US" head__text="Now Let's Grow With You"/>
        <Contact/>
        <Footer/> 
        <ScrollUp/>
        </> : <Loader/>
    }
}
