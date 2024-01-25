import React from 'react'
import HumidityIcon from '../assets/humidity.png'

const Humidity = () => {
  return (
    <div className='flex text-center space-x-3 ml-3'>
        <img src={HumidityIcon} alt="" className='h-7 mt-1' />
        <div className="flex flex-col ml-7">
          <h3 className='text-3xl font-medium mr-6 text-white'>87° F</h3>
          <h4 className='text-xs mr-9 text-white'>Humidity</h4>
        </div>
    </div>
  )
}

export default Humidity