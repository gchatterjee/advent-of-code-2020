import React from 'react'
import PropTypes from 'prop-types'

import days from '../../../days/days'

export default class Card extends React.Component {
  render() {
    const dayString = `${this.props.day}`
    const isDay = !!this.props.day
    const isEnabled = !!(isDay && days[dayString] && days[dayString].isEnabled)
    const description = (days[dayString] && days[dayString].description) || '⠀'

    const classes = []

    if (isDay) {
      classes.push('text-white')
      classes.push('bg-primary')
      if (!isEnabled) {
        classes.push('disabled')
      }
    } else {
      classes.push('disabled')
      classes.push('bg-light')
      classes.push('d-none')
      classes.push('d-lg-block')
    }

    return (
      <button
        type='button'
        className={`col-lg btn col-md-12 calendar-box ${classes.join(' ')}`}
      >
        <h5 className='card-title'>{isDay && <p>{description}</p>}</h5>
        {isDay && <p>{`December ${dayString}`}</p>}
      </button>
    )
  }
}

Card.propTypes = {
  day: PropTypes.number.isRequired,
}
