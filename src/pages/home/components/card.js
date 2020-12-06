import React from 'react'
import PropTypes from 'prop-types'

import days from '../../../days/days'

export default class Card extends React.Component {
  render() {
    const isDay = !!this.props.day
    const isEnabled = isDay && Object.keys(days).includes(`${this.props.day}`)
    const disabled = isEnabled ? {} : { disabled: '' }
    const color = isDay && isEnabled ? 'is-primary' : ''

    return (
      <div className={`tile is-child notification ${color}`} {...disabled}>
        {isDay && <p className='title'>{this.props.day}</p>}
      </div>
    )
  }
}

Card.propTypes = {
  day: PropTypes.number.isRequired,
}
