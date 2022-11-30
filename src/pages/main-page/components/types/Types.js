import React from 'react';
import { LightSpeed ,Fade } from 'react-reveal';

export const Types = () => {
  return (
    <div className='types container'>
        <LightSpeed left><div className='types-card'><button>WOMEN</button><img src="./page-1-assets/main/card-cover-1.jpg" alt="" /></div></LightSpeed>
        <Fade bottom><div className='types-card'><button>MEN</button><img src="./page-1-assets/main/card-cover-2.jpg" alt="" /></div></Fade>
        <div className='types-warbber'>
            <LightSpeed right><div className='types-card'><button>ACCESSORIES</button><img src="./page-1-assets/main/card-cover-3.jpg" alt="" /></div></LightSpeed>
            <LightSpeed right><div className='types-card'><button>KIDS</button><img src="./page-1-assets/main/card-cover-4.jpg" alt="" /></div></LightSpeed>            
        </div>
    </div>
  )
}
