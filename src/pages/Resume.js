import React from 'react'
import Menu from '../components/Menu'


function Resume() {
  return (
    <div className='resume' >
      <Menu/>
      <object data="/images/Resume.PDF" type="application/pdf" width="80%" height="100%">
      <p>Link to <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
  </object>
    </div>
  )
}

export default Resume