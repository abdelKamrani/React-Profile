import React from 'react'

function Icon({classIcon}) {
  return (
    <div className='icon' >
      <i className={classIcon} style= {{fontSize:'24px'}}></i>
    </div>
  )
}

export default Icon