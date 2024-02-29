import React from 'react'
import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import axios from 'axios';
import { geo_api } from '../api';

const Search = (props) => {
  const [search, setSearch] = useState(null);
  
  const loadOptions = async (searchInputValue) => {
     try {
      const response = await axios.request({
        method: geo_api.method,
        url: `${geo_api.url}/cities`,
        params: {
          minPopulation: 300000,
          namePrefix: searchInputValue
        },
        headers: geo_api.headers
      });

      console.log(response.data);

      return {
        options: response.data.data.map((city) => {
          return {
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          }
        }),
        hasMore: false,
      };
    } catch (error) {
      console.error(error);
      return {
        options: [],
        hasMore: false,
      };
    }
  };

  const handleChange = (searchData) => {
    setSearch(searchData);
    props.onSearchChange(searchData)
  }

  return (
    <div className='flex mx-auto space-x-5 justify-center items-center mb-5 rounded-lg'>
        <AsyncPaginate 
          placeholder="Search for city"
          debounceTimeout={1000}
          value={search}
          onChange={handleChange}
          loadOptions={loadOptions}
          className='w-64 b-black focus:outline-none bg-yellow-300'
        />
    </div>
  )
}

export default Search