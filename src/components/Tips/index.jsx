import React from 'react'
import Tip from '../Tip/index'
import CustomTip from '../CustomTip'

const Tips = ({ tip, handleClickTip, customTip, handleCustomTip}) => {
  return(
    <div className="grid grid-cols-3 gap-3">
      <Tip idTip="5%" tipValue="5" tip={tip} handleClickTip={handleClickTip} />
      <Tip idTip="10%" tipValue="10" tip={tip} handleClickTip={handleClickTip}/>
      <Tip idTip="15%" tipValue="15" tip={tip} handleClickTip={handleClickTip}/>
      <Tip idTip="25%" tipValue="25" tip={tip} handleClickTip={handleClickTip}/>
      <Tip idTip="50%" tipValue="50" tip={tip} handleClickTip={handleClickTip}/>
      <CustomTip customTip={customTip} handleCustomTip={handleCustomTip} />
    </div>
  )
}

export default Tips;