import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ClearIcon from '../assets/clear.png'
import CloudIcon from '../assets/cloud.png'
import DrizzleIcon from '../assets/drizzle.png'
import RainIcon from '../assets/rain.png'
import SnowIcon from '../assets/snow.png'
import ThunderIcon from '../assets/thunderstorm.png'


const Weather = (props) => {
  const temperature = props.unit === 'F' ? Math.round((props.temperature - 273.15) * (9/5) + 32) : Math.round(props.temperature - 273.15);

  const weather = props.weather;

  const [weatherIcon, setWeatherIcon] = useState(null)

  useEffect(() => {
    if (weather === 'Clear') {
      setWeatherIcon(ClearIcon);
      console.log('Clear')
    } else if (weather === 'Clouds') {
      setWeatherIcon(CloudIcon)
      console.log('Cloudy')
    } else if (weather === 'Drizzle') {
      setWeatherIcon(DrizzleIcon)
      console.log('Drizzle')
    } else if (weather === 'Rain') {
      setWeatherIcon(RainIcon)
      console.log('Rain')
    } else if (weather === 'Snow') {
      setWeatherIcon(SnowIcon)
      console.log('Snow')
    } else if (weather === 'Thunderstorm') {
      setWeatherIcon(ThunderIcon)
      console.log('Thunder')
    }
  }, [weather])

  console.log('Weather:', weather);
  console.log('Weather Icon:', weatherIcon);


  return (
      <div className='flex flex-col items-center mb-8'>
          <img src={weatherIcon} alt="" className='h-28 w-28'/>
          <h1 className='text-6xl text-white font-medium mt-2'>{temperature}°{props.unit}</h1>
          <h4 className='text-3xl text-white mt-1'>{props.city}</h4>
      </div>
  )
}

export default Weather