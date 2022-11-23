import React from 'react';
import data from "../../../../data/data.json";
import './Types.scss';

export const Types = () => {
  return (
    <div className='types container'>
        <div className='types-card'><button>WOMEN</button><img src={data.data.images__src['card-1']} alt="" /></div>
        <div className='types-card'><button>MEN</button><img src={data.data.images__src['card-2']} alt="" /></div>
        <div className='types-warbber'>
            <div className='types-card'><button>ACCESSORIES</button><img src={data.data.images__src['card-3']} alt="" /></div>
            <div className='types-card'><button>KIDS</button><img src={data.data.images__src['card-4']} alt="" /></div>
        </div>
    </div>
  )
}
