import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Home from '../Home/Home'
import DashBoard from '../DashBoard/DashBoard'

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Route exact path="/" component={Home} />
        <Route
          path="/dashBoard"
          render={() => {
            return window.localStorage.getItem('secret') ? (
              <DashBoard />
            ) : (
              <Redirect to="/" />
            )
          }}
        />
      </div>
    )
  }
}

export default Main
