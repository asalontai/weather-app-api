import React from 'react'
import axios from 'axios'
import { FORCAST_API_KEY, forcast_api } from '../api'
import { useEffect } from 'react'
import { useState } from 'react'


const Forcast = (props) => {
    const [forcastData, setForecastData] = useState(null);
    
    useEffect(() => {
        const fetchForcastData = async () => {
            try {
                const url = `${forcast_api}?q=${props.latitude},${props.longitude}&days=7&key=${FORCAST_API_KEY}`;
                const response = await axios.get(url);
                setForecastData(response.data.forecast.forecastday);
                console.log('Response:', response.data);
            } catch(error) {
                console.error('Error fetching forecast:', error);
                setForecastData(null);
            }
        };
        fetchForcastData();
    }, [props.latitude, props.longitude]);

    const convertDay = (day) => {
        const dateObject = new Date(day);
        const dayOfWeek = dateObject.getDay();
        const dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
        const rename = dayNames[dayOfWeek];
        console.log(rename)
        return rename
    }

    return (
        <div className='flex text-white items-start text-xs p-0 space-x-28 ml-0 mt-16 mr-3'>
            {forcastData && forcastData.map((day, index) => (
                <div className='w-24' key={index}>
                    <p className='mr-11 mb-2'>{convertDay(day.date)}</p>
                    <div className="flex items-center pt-0 mt-0">
                        <img src={day.day.condition.icon} alt="" className='w-12 -mt-3'/>
                        <div className="flex flex-col">
                            <p>H: {props.unit === 'F' ? Math.round(day.day.maxtemp_f) : Math.round(day.day.maxtemp_c)}°{props.unit}</p>
                            <p>L: {props.unit === 'F' ? Math.round(day.day.mintemp_f) : Math.round(day.day.mintemp_c)}°{props.unit}</p>
                        </div>
                    </div>
                </div>
            ))

            }
        </div>
    )
}

export default Forcast