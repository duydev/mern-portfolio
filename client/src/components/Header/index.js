import React from 'react'

import TopBar from './topbar'
import About from './about'

const Header = props => {
  return (
    <header>
      <TopBar />
      <About />
    </header>
  )
}

export default Header
