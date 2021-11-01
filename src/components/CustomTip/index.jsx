import React from 'react'

const CustomTip = ({ customTip, handleCustomTip }) => {
  return(
    <input 
      type="number" 
      value={customTip}
      onChange={handleCustomTip}
      placeholder="Custom"
      className="bg-[color:var(--lgc2)] text-base placeholder-[color:var(--dgc)] py-1 font-bold text-[color:var(--vdc)] text-center"
    />
  )
}

export default CustomTip;