import React from 'react'
import Cloud from '../assets/cloud.png'

const Weather = () => {
  return (
    <div className='flex flex-col items-center'>
        <img src={Cloud} alt="" className='h-36 w-36'/>
        <h1 className='text-6xl text-white font-medium mt-8'>20°C</h1>
        <h4 className='text-3xl text-white mt-1'>London</h4>
    </div>
  )
}

export default Weather