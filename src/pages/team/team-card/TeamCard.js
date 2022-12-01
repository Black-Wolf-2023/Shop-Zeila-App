import React from 'react'
import { Bounce, Fade } from 'react-reveal';
import {Team__card} from "../../../small-components/Team__card";
export const TeamCard = () => {
  return (
    <div className='team'>
        <Fade bottom><h2>Meet Our Team</h2></Fade>
        <div className='container'>
           <div>
              <Bounce left><Team__card name="Dina Mohammed" title="Disgn Maker" src="./page-3-assets/main/team-1-user-1.jpg"/></Bounce>
              <Bounce right> <Team__card name="Nada Tark" title="Front End Designer" src="./page-3-assets/main/team-1-user-2.jpg"/></Bounce>
              <Bounce left> <Team__card name="Mena Amad" title="Back End Developer" src="./page-3-assets/main/team-1-user-3.jpg"/></Bounce>
           </div>
           <div>  
              <Bounce right><Team__card name="Abdalrhman Eldip" title="Product Manager" src="./page-3-assets/main/team-1-user-4.jpg"/></Bounce>
              <Bounce left><Team__card name="Aya Mousa" title="Social Atricler" src="./page-3-assets/main/team-1-user-5.jpg"/></Bounce>
              <Bounce right><Team__card name="Maya Ali" title="Disforce" src="./page-3-assets/main/team-1-user-6.jpg"/></Bounce>
            </div>
           <div>
              <Bounce left><Team__card name="Jomanna Mansour" title="HR" src="./page-3-assets/main/team-1-user-7.jpg"/></Bounce>
              <Bounce right> <Team__card name="Miko Sato" title="PR" src="./page-3-assets/main/team-1-user-8.jpg"/></Bounce>
              <Bounce left> <Team__card name="Enge Nado" title="Markter" src="./page-3-assets/main/team-1-user-9.jpg"/></Bounce>
           </div>
        </div>
    </div>
  )
}
