import React from 'react'

import personIcon from '../../assets/image/icon-person.svg'

const InputPerson = ({ personValue, personChange }) => {
  return(
    <span className="relative">
      <img src={personIcon} className="absolute top-0 left-4" alt="personIcon" />
      <input 
        type="number" 
        className="bg-[color:var(--lgc2)] text-[24px] placeholder-gray-300 focus:outline-none text-right text-[color:var(--vdc)] font-bold px-4 py-1" 
        value={personValue}
        onChange={personChange}
        placeholder="0"
      />
    </span>
  )
}

export default InputPerson;