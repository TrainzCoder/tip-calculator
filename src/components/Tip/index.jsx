import React from 'react'
import clsx from 'clsx'

const Tip = ({ tip, idTip, tipValue,handleClickTip }) => {
  return(
    <div className={clsx('relative bg-[color:var(--vdc)] text-[color:var(--white)] text-center py-1 font-bold', {
      ['bg-[color:var(--sc)] text-[color:var(--dgc)]']: tipValue === tip
    })}>
      <input 
        type="radio" 
        className="hidden"
        value={tipValue}
        id={idTip}
        onClick={handleClickTip}
      />
      <label htmlFor={idTip} className="block cursor-pointer">
        {idTip}
      </label>
    </div>
  )
}

export default Tip;