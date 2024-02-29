import React from 'react'
import { useState } from 'react'

const Background = (props) => {
    const [background, setBackground] = useState(null);

    const weather = props.weather;

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
        } else if (weather === 'Haze' || weather === 'Mist') {
          setWeatherIcon(HazeIcon)
          console.log('Haze')
        }
      }, [weather])

    return (
        <div className='fixed -z-10 right-0 bottom-0 min-h-full min-w-full'>
            <video autoPlay muted loop className='absolute top-0 left-0 w-full h-full object-cover'>
                <source />
            </video>
        </div>
    )
}

export default Background