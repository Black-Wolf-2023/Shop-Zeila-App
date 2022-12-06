import React from 'react'
import { Contact__card } from '../../../small-components/Contact__card';
import {Title} from "../../../small-components/Title";
import data from '../../../data/data.json';
import { Bounce, Fade } from 'react-reveal';

export const Info = () => {
  return (
    <div className='contact-info'>
        <div className='container'>
          <Fade bottom> <Title title="We help small busniesses with big ideas" text="VISIT OUR OFFICE" /></Fade>
            <div className='contact-info-container'>
                <Bounce left><Contact__card bg="transparent" src="./page-2-assets/icons/phone.png" email = {data.data.email} title ="Call us now" btn__text="Submit Request"/></Bounce>
                <Bounce right><Contact__card text__color = "#FFF" bg="#131726" src="./page-2-assets/icons/location.png" email = {data.data.email} title ="Come Office" btn__text="Submit Request"/></Bounce>
                <Bounce left><Contact__card bg="transparent" src="./page-2-assets/icons/email.png" email = {data.data.email} title ="Get Support" btn__text="Submit Request"/></Bounce>
            </div>
        </div>
    </div>
  )
}
