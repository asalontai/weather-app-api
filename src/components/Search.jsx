import React from 'react'
import { useState } from 'react'
import SearchIcon from '../assets/search.png'

const Search = (props) => {
  const [city, setCity] = useState('');
  
  const handleInput = (event) => {
    setCity(event.target.value);
  }

  const handleSearch = () => {
    props.onButtonClick(city);
    setCity("")
  }

  return (
    <div className='flex text-center mx-auto space-x-5 justify-center items-center mb-7'>
        <input 
          type="text" 
          placeholder='City' 
          className='rounded-lg cursor-pointer border border-black h-8 focus:outline-none pl-2'
          onChange={handleInput}  
          value={city}
        />
        <button className='rounded-full bg-white p-2 border-black border' onClick={handleSearch}>
            <img src={SearchIcon} alt="" />
        </button>
    </div>
  )
}

export default Search