import React from 'react'
import { Helmet } from 'react-helmet'

import { Header, Footer, Main } from '../'

const App = () => {
  return (
    <div className="App">
      <Helmet titleTemplate="%s | Trần Nhật Duy - Website Developer" />
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
