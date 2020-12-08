import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import days from '../../days/days'

import Navbar from './navbar'

class Day extends React.Component {
  render() {
    const { day } = this.props.match.params
    const dayInt = parseInt(day, 10)

    const DayX = days[day].component

    return (
      <div className='container-fluid'>
        <h1>Advent of Code 2020</h1>
        <h2>Day {day}</h2>
        <Navbar day={dayInt} />
        <DayX />
      </div>
    )
  }
}

Day.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
}

export default withRouter(Day)
