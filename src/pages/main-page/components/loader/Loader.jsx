import React from 'react'
import { MutatingDots } from 'react-loader-spinner'

export const Loader = () => {

  return (
    <div  className='loader'>
      <MutatingDots 
        heght="100"
        width="100"
        color="#11c5dd"
        secondaryColor= '#fff'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
      />
    </div>
  )
}
