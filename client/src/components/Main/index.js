import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { About } from '../index'

const Main = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route component={About} />
      </Switch>
    </div>
  )
}

export default Main
