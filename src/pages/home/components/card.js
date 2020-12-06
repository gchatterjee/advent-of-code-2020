import React from 'react'
import PropTypes from 'prop-types'

import days from '../../../days/days'

export default class Card extends React.Component {
  render() {
    const isDay = !!this.props.day
    const isEnabled = isDay && Object.keys(days).includes(`${this.props.day}`)
    const disabled = isEnabled ? {} : { disabled: '' }
    const color = isDay && isEnabled ? 'is-primary' : ''
    const visibility = isDay ? '' : 'd-none d-lg-block'

    return (
      <div className={`col-lg col-md-12 card calendar-box ${visibility}`}>
        <div className='card-body'>
        <h5 className='card-title'>
        {isDay && <p>{`Day ${this.props.day}`}</p>}
        </h5>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  day: PropTypes.number.isRequired,
}
