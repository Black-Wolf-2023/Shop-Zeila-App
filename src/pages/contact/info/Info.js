import React from 'react'
import { Contact__card } from '../../main-page/components/small-components/Contact__card';
import {Title} from "../../main-page/components/small-components/Title";
import data from '../../../data/data.json';
import { Fade } from 'react-reveal';

export const Info = () => {
  return (
    <div className='contact-info'>
        <div className='container'>
          <Fade bottom> <Title title="We help small busniesses with big ideas" text="VISIT OUR OFFICE" /></Fade>
            <div className='contact-info-container'>
                <Fade left><Contact__card bg="transparent" src={data.data.images__src.contact__phone} email = {data.data.email} title ="Call us now" btn__text="Submit Request"/></Fade>
                <Fade bottom><Contact__card text__color = "#FFF" bg="#131726" src={data.data.images__src.contact__location} email = {data.data.email} title ="Come Office" btn__text="Submit Request"/></Fade>
                <Fade right><Contact__card bg="transparent" src={data.data.images__src.contact__email} email = {data.data.email} title ="Get Support" btn__text="Submit Request"/></Fade>
            </div>
        </div>
    </div>
  )
}
