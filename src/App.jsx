import { useState } from 'react'
import Converter from './components/Converter'
import Humidity from './components/Humidity'
import Search from './components/Search'
import Weather from './components/Weather'
import Wind from './components/Wind'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('F')

  const apikey = '';

  const getWeather = async (city) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`)
      const data = await response.json();
      if (response.ok) {
        setWeatherData(data);
        setError(null);
      } else {
        setError('Error fetching weather data');
        setWeatherData(null);
      }
    } catch (error) {
      setError('Error fetching weather data');
      setWeatherData(null);
    }
  } 

  return (
    <div className="bg-blue-500 p-10 height w-560 mx-auto rounded-2xl	text-center mt-32">
      <div className="flex">  
        <Converter unit={unit} setUnit={setUnit}/>
        <Search onButtonClick={getWeather}/>
      </div>
      {error ? (
        <div className='p-0 mr-auto ml-auto bg-white mt-36 w-96 pt-2 pb-2 rounded-2xl border border-black'>
          <h2 className='text-2xl font-bold text-red-600'>{error}</h2>
        </div>
      ) : (
        weatherData && (
        <div>
            <Weather unit={unit} temperature={weatherData.main.temp} city={weatherData.name} weather={weatherData.weather[0].main}/>
            <div className="flex space-x-40 mx-auto mt-24">
              <Humidity humidity={weatherData.main.humidity}/>
              <Wind windspeed={weatherData.wind.speed}/>
            </div>
        </div>
        ))
      }
    </div>
  )
}

export default App
