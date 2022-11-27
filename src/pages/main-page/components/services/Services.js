import React from 'react'
import { Card } from '../small-components/Card'
import data from "../../../../data/data.json";
import { Bounce } from 'react-reveal';


export const Services = () => {
  return (
    <div className='services-warbber'>
        <div className='services container'>
            <div className='cards-warbber'>
                <Bounce left><Card src={data.data.images__src.book__1} head={"Easy Wins"} text={"Get your looking smile now !"}/></Bounce>
                <Bounce bottom><Card src={data.data.images__src.book__2} head={"Concrete"} text={"Defaicale is most focused in helping you discover your most beauty smile"}/></Bounce>
                <Bounce right><Card src={data.data.images__src.growth__arrow} head={"Hack Growth"} text={"Overcame any hundle or any other problem"}/></Bounce>
            </div>
        </div>
    </div>
  )
}
