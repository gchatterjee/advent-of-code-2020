import React from 'react'
import PropTypes from 'prop-types'

import days from '../../days/days'

export default class Navbar extends React.Component {
  render() {
    const prevDay = this.props.day - 1
    const nextDay = this.props.day + 1

    const existsPrevDay = this.props.day > 1
    const existsNextDay = this.props.day < 31

    const isEnabled = (day) => days[`${day}`] && days[`${day}`].isEnabled
    const getDescription = (day) => days[`${day}`] && days[`${day}`].description
    const getClasses = (day) =>
      `nav-link ${isEnabled(day) ? '' : 'disabled'} ${
        day === this.props.day ? 'active' : ''
      }`

    const navItem = (day) => {
      const description = getDescription(day)
      return (
        <li className='nav-item'>
          <a className={getClasses(day)} href={`/${day}`}>
            Day {day}
            {description && `: ${description}`}
          </a>
        </li>
      )
    }

    return (
      <ul className='nav nav-pills nav-fill'>
        {existsPrevDay && navItem(prevDay)}
        {navItem(this.props.day)}
        {existsNextDay && navItem(nextDay)}
      </ul>
    )
  }
}

Navbar.propTypes = {
  day: PropTypes.number.isRequired,
}
