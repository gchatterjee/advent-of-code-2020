import React from 'react'

import Jumbotron from './components/jumbotron'
import Calendar from './components/calendar'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Jumbotron title='Advent of Code 2020' subtitle={'Gaurav Chatterjee'} />
        <Calendar />
      </>
    )
  }
}
