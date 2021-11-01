import React from 'react';

import dollarIcon from '../../assets/image/icon-dollar.svg'

const InputBill = ({ billValue, billChange }) => {
  return(
    <span className="relative">
      <img src={dollarIcon} className="absolute top-0 left-4" alt="dollarIcon" />
      <input 
        type="number" 
        className="bg-[color:var(--lgc2)] text-[24px] placeholder-gray-300 focus:outline-none text-right text-[color:var(--vdc)] font-bold px-4 py-1" 
        value={billValue}
        onChange={billChange}
        placeholder="0"
      />
    </span>
  )
}

export default InputBill;