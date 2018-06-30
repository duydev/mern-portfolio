import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { About, NotFound } from '../index'

const Main = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/" component={About} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Main
