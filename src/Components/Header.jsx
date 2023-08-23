import React from 'react'
import Nav from './Nav'


function Header({section}) {
  return (
    <header>
        <Nav section={section}/>

    </header>
  )
}

export default Header