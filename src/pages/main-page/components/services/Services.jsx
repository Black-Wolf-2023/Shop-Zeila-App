import React from 'react'
import { Card } from "../../../../small-components/Card"
import { Bounce } from 'react-reveal';


export const Services = () => {
  return (
    <div className='services-warbber'>
        <div className='services container'>
            <div className='cards-warbber'>
                <Bounce left><Card src="./page-1-assets/icons/bx_bxs-book-reader.png" head={"Easy Wins"} text={"Get your looking smile now !"}/></Bounce>
                <Bounce bottom><Card src="./page-1-assets/icons/carbon_book.png" head={"Concrete"} text={"Defaicale is most focused in helping you discover your most beauty smile"}/></Bounce>
                <Bounce right><Card src="./page-1-assets/icons/arrow-growth.png" head={"Hack Growth"} text={"Overcame any hundle or any other problem"}/></Bounce>
            </div>
        </div>
    </div>
  )
}
