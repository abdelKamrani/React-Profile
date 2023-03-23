import React from 'react'
import { Link } from 'react-router-dom'
import ButtonMenu from './ButtonMenu'
import Icons from './Icons'
import Name from './Name'
import Picture from './Picture'

function Menu() {

  return (
    <div className='menu' id='menu'>
      <Picture/>
      <Name/>
      <div className='menu-buttons-container'>
        <Link to="/">
          <ButtonMenu value={"Home"}/>
        </Link>
        <Link to="/resume">
          <ButtonMenu value={"Resume"}/>
        </Link>
        <Link to="/portfolio">
          <ButtonMenu value={"Portfolio"}/>
        </Link>
        <Link to="/hobbies">
          <ButtonMenu value={"Hobbies"}/>
        </Link>
      </div>
      <Icons/>
    </div>
  )
}

export default Menu