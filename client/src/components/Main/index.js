import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home } from '../index'

const Main = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route component={Home} />
      </Switch>
    </div>
  )
}

export default Main
