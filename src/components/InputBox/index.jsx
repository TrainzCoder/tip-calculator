import React from 'react'

import Tips from '../Tips'
import InputPerson from '../InputPerson'
import InputBill from '../InputBill'

const InputBox = ({ 
  billValue, 
  billChange, 
  personChange, 
  personValue, 
  tip, 
  customTip, 
  handleClickTip, 
  handleCustomTip }) => {
    
  return(
    <section className="">
      <div>
        <h4 className="text-sm text-[color:var(--dgc)] mb-2 font-bold">Bill</h4>
        <InputBill billValue={billValue} billChange={billChange} />
      </div>

      <div className="mt-9">
        <h4 className="text-sm text-[color:var(--dgc)] mb-2 font-bold">Select Tip %</h4>
        <Tips tip={tip} customTip={customTip} handleClickTip={handleClickTip} handleCustomTip={handleCustomTip} />
      </div>

      <div className="mt-9">
        <h4 className="text-sm text-[color:var(--dgc)] mb-2 font-bold">Number of People</h4>
        <InputPerson personValue={personValue} personChange={personChange} />
      </div>
    </section>
  )
}

export default InputBox;