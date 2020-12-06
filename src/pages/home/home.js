import React from 'react'

import Jumbotron from './components/jumbotron'
import Calendar from './components/calendar'

import content from './home.content.json'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Jumbotron {...content.jumbotronText} />
        <Calendar />
      </>
    )
  }
}
