import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Day from './pages/day/day'
import Home from './pages/home/home'
import Http404 from './pages/http404/http404'

export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path='/:day([1-2][0-9]|3[0-1]|[1-9])' component={Day} />
            <Route path='/' exact={true} component={Home} />
            <Route path='*' component={Http404} />
          </Switch>
        </Router>
      </>
    )
  }
}
