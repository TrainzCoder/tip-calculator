import React from 'react'

import { countTipAmount } from '../../utils/getCount';

const Result = ({ bill, tip, customTip, people, handleClickReset }) => {
  let tipHolder = (tip !== "") ? tip : (customTip !== "") ? customTip : "0";

  let tipAmount = countTipAmount(bill, people , tipHolder)
  let total = (tipAmount * people).toFixed(2)
    
  return (
    <section className="w-full h-full px-8 py-10 bg-[color:var(--vdc)] rounded-2xl">
      <div className="flex items-center justify-between">
        <span className="max-w-[150px] font-bold">
          <h4 className="text-[color:var(--white)] text-base">Tip Amount</h4>
          <p className="text-[color:var(--dgc2)] text-xs">/ person</p>
        </span>
        <h2 className="text-4xl text-[color:var(--sc)] font-bold">
          $
          {bill !== '' && people !== '' ?
           tipAmount : '0.00' }
        </h2>
      </div>
      <div className="flex items-center justify-between mt-11">
        <span className="max-w-[150px] font-bold">
          <h4 className="text-[color:var(--white)] text-base">Total</h4>
          <p className="text-[color:var(--dgc2)] text-xs">/ person</p>
        </span>
        <h2 className="text-4xl text-[color:var(--sc)] font-bold">
          $
          {bill !== '' && people !== '' ?
           total : '0.00' }
        </h2>
      </div>

      <button 
        onClick={handleClickReset}
        className="w-full bg-[color:var(--sc)] text-[color:var(--vdc)] mt-16 py-2 text-base font-bold rounded-sm disabled:cursor-not-allowed disabled:opacity-40"
        disabled={
          bill !== "" || tip !== "" || customTip !== "" || people !== ""
              ? false
              : true
        }
      >
        RESET
      </button>
    </section>
  )
}

export default Result;