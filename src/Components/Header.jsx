import React from 'react'
import Nav from './Nav'


function Header({section, onSectionChange }) {
  return (
    <header>
        <Nav section={section} onSectionChange={onSectionChange}/>

    </header>
  )
}

export default Header