import React from 'react'
import { useState } from 'react'

const Converter = (props) => {
    const handleClick = () => {
        props.setUnit(props.unit === 'F' ? 'C' : 'F');
    }
    

    return (
        <div>
            <button 
                className='text-black bg-white w-7 p-1 pl-1 pr-1 rounded-xl border-gray border ml-1'
                onClick={handleClick}    
            >
                {props.unit}
            </button>
        </div>
    )
}

export default Converter