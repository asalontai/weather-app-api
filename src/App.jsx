import { useEffect, useState } from 'react'
import axios from 'axios'
import { weather_api_current, WEATHER_API_KEY } from './api'
import Converter from './components/Converter'
import Humidity from './components/Humidity'
import Search from './components/Search'
import Weather from './components/Weather'
import Wind from './components/Wind'
import Forcast from './components/Forcast'

function App() {
  const [latitude, setLatitude] = useState(40.730610);
  const [longitude, setLongitude] = useState(-73.935242);
  const [location, setLocation] = useState("New York City, US");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState('F');

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchWeatherData();
    }
  }, [latitude, longitude]);

  const handleOnSearchChange = (selectedCity) => {
    if (selectedCity) {
      console.log("Selected city:", selectedCity);
      console.log(selectedCity.value)
      const [lat, long] = selectedCity.value.split(' ');
      const location = selectedCity.label;
      console.log(lat);
      console.log(long);
      setLatitude(lat);
      setLongitude(long);
      setLocation(location);
    } else {
      setLatitude(null);
      setLongitude(null);
      setLocation(null);
    }
  } 

  const fetchWeatherData = async () => {
    try {
      const url = `${weather_api_current}?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
      const response = await axios.get(url);

      if (response.status === 200) {
        setWeatherData(response.data);
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
    <div className="bg-blue-500 p-10 height width mx-auto rounded-2xl	text-center mt-24 shadow-md"> 
      <div className="flex">
        <Converter unit={unit} setUnit={setUnit}/>
        <Search onSearchChange={handleOnSearchChange}/>
      </div>
      {
        (weatherData) ? 
        <div>
          
          <Weather unit={unit} temperature={weatherData.main.temp} location={location} weather={weatherData.weather[0].main}/>
          <Forcast unit={unit} latitude={latitude} longitude={longitude}/>
            <div className="flex space-x-40 mt-12 ml-10">
              <Humidity humidity={weatherData.main.humidity}/>
              <Wind windspeed={weatherData.wind.speed}/>
            </div>
        </div> 
      : 

      <div>

      </div>


      }
    </div>
  )
}

export default App
