import React from 'react'
import WindIcon from '../assets/wind.png'

const Wind = (props) => {
  

  return (
    <div className='flex text-center space-x-1'>
        <img src={WindIcon} alt="" className='h-8 mr-2'/>
        <div className='flex flex-col'>
          <h3 className='text-xl font-medium mr-9 text-white'>{props.windspeed} m/s</h3>
          <h4 className='text-xs mr-10 text-white'>Wind Speed</h4>
        </div>
    </div>
  )
}

export default Wind