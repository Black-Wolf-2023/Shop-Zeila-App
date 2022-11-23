import React from 'react'
import { Card } from '../small-components/Card'
import data from "../../../../data/data.json";
import "./Services.scss";

export const Services = () => {
  return (
    <div className='services-warbber'>
        <div className='services container'>
            <div className='cards-warbber'>
                <Card src={data.data.images__src.book__1} head={"Easy Wins"} text={"Get your looking smile now !"}/>
                <Card src={data.data.images__src.book__2} head={"Concrete"} text={"Defaicale is most focused in helping you discover your most beauty smile"}/>
                <Card src={data.data.images__src.growth__arrow} head={"Hack Growth"} text={"Overcame any hundle or any other problem"}/>
            </div>
        </div>
    </div>
  )
}
