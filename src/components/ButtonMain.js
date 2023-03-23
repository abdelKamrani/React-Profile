import React from 'react'

function ButtonMain({value,buttonClicked,index}) {
  const menu = document.getElementById("menu")
  return (
    <div className='button-main' onClick={()=>{
      menu?.classList.add("toggle");
      return buttonClicked(index);
    }}>{value}</div>
  )
}

export default ButtonMain