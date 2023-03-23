import React from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'

function Icons() {
  return (
    <div className='icons'>
      <Link to="https://github.com/aide-abdel" target="_blank">
       <Icon classIcon={"fa fa-github"}/>
       </Link>
      <Link to="https://www.linkedin.com/in/abdelhalim-kamrani-08a085214/" target="_blank">
        <Icon classIcon={"fa fa-linkedin"}/>
      </Link>
      <Icon classIcon={"fa fa-instagram"}/>
    </div>
  )
}
export default Icons