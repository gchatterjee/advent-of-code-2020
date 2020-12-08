import React from 'react'
import PropTypes from 'prop-types'

export default class Text extends React.Component {
  render() {
    return <div className='card-text'>{this.props.children}</div>
  }
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
}
