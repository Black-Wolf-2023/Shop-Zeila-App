import React from 'react';
import { LightSpeed ,Fade } from 'react-reveal';
import data from "../../../../data/data.json";
import './Types.scss';

export const Types = () => {
  return (
    <div className='types container'>
        <LightSpeed left><div className='types-card'><button>WOMEN</button><img src={data.data.images__src['card-1']} alt="" /></div></LightSpeed>
        <Fade bottom><div className='types-card'><button>MEN</button><img src={data.data.images__src['card-2']} alt="" /></div></Fade>
        <div className='types-warbber'>
            <LightSpeed right><div className='types-card'><button>ACCESSORIES</button><img src={data.data.images__src['card-3']} alt="" /></div></LightSpeed>
            <LightSpeed right><div className='types-card'><button>KIDS</button><img src={data.data.images__src['card-4']} alt="" /></div></LightSpeed>            
        </div>
    </div>
  )
}
